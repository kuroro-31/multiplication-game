import React, { useCallback, useState } from "react";

interface ImageSliderProps {
  images: string[]; // 画像のURLのリスト
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // 現在の画像のインデックス

  // サムネイルがクリックされたときのハンドラ
  const handleThumbnailClick = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

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
      <div className="lg:h-[668px] lg:w-[668px] ml-4">
        <img
          src={images[currentIndex]}
          alt=""
          className="max-w-full max-h-full object-contain"
        />
      </div>
    </div>
  );
};

export default ImageSlider;
