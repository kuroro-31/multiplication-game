import React, { useCallback, useRef, useState } from "react";

interface ImageSliderProps {
  images: string[]; // 画像のURLのリスト
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // 現在の画像のインデックス
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 }); // マウスの位置
  const [showZoom, setShowZoom] = useState(false); // ズーム表示を管理
  const imageRef = useRef<HTMLImageElement>(null);

  // サムネイルがクリックされたときのハンドラ
  const handleThumbnailClick = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // マウスの位置を更新する
  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      setZoomPosition({
        x: (event.clientX - rect.left) / rect.width,
        y: (event.clientY - rect.top) / rect.height,
      });
      setShowZoom(true);
    }
  };

  // マウスが画像外に出たらズームを隠す
  const handleMouseLeave = () => {
    setShowZoom(false);
  };

  return (
    <div className="flex m-8">
      <div className="flex flex-col">
        {images.map((imageUrl, index) => (
          <div
            key={index}
            className="cursor-pointer border-2 border-transparent hover:border-primary"
            onMouseOver={() => handleThumbnailClick(index)}
          >
            <img
              src={imageUrl}
              alt=""
              className="w-[50px] h-[50px] object-contain"
            />
          </div>
        ))}
      </div>
      <div
        className="relative lg:h-[668px] lg:w-[668px] ml-4 flex items-center justify-center"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <img
          ref={imageRef}
          src={images[currentIndex]}
          alt=""
          className="max-w-full max-h-full object-contain"
        />
        {showZoom && (
          <div
            style={{
              backgroundImage: `url(${images[currentIndex]})`,
              backgroundPosition: `${zoomPosition.x * 100}% ${
                zoomPosition.y * 100
              }%`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "200%",
            }}
            className="absolute top-0 left-[100%] h-[200px] w-[200px] grid bg-primary bg-opacity-20"
          />
        )}
      </div>
    </div>
  );
};

export default ImageSlider;
