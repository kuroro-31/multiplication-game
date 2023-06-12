import React, { useState } from "react";

interface ImageSliderProps {
  images: string[]; // 画像のURLのリスト
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // 現在の画像のインデックス

  // 左のボタンがクリックされたときのハンドラ
  const handlePrevClick = () => {
    setCurrentIndex((oldIndex) => {
      return oldIndex === 0 ? images.length - 1 : oldIndex - 1;
    });
  };

  // 右のボタンがクリックされたときのハンドラ
  const handleNextClick = () => {
    setCurrentIndex((oldIndex) => {
      return oldIndex === images.length - 1 ? 0 : oldIndex + 1;
    });
  };

  return (
    <div>
      <button onClick={handlePrevClick}>Prev</button>
      <div className="lg:h-[668px]">
        <img
          src={images[currentIndex]}
          alt=""
          className="max-w-full max-h-full object-contain"
        />
      </div>
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
};

export default ImageSlider;
