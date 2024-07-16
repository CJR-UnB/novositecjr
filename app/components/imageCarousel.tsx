"use client";

import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  // AS IMAGENS PRECISAM SER 800X450 PARA CABER CORRETAMENTE NO CARROSSEL

  const [currentImage, setCurrentImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = useCallback(() => {
    setCurrentImage((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [setCurrentImage, images]);

  const handleDotClick = (index: number) => {
    setCurrentImage(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        handleNext();
      }
    }, 5000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  const startDragging = (e: React.TouchEvent | React.MouseEvent) => {
    const startX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const onMove = (event: TouchEvent | MouseEvent) => {
      const moveX =
        "touches" in event ? event.touches[0].clientX : event.clientX;
      const diffX = startX - moveX;

      if (diffX > 50) {
        handleNext();
        cleanup();
      } else if (diffX < -50) {
        handlePrev();
        cleanup();
      }
    };

    const cleanup = () => {
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchend", cleanup);
      window.removeEventListener("mouseup", cleanup);
    };

    window.addEventListener("touchmove", onMove);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchend", cleanup);
    window.addEventListener("mouseup", cleanup);
  };

  return (
    <>
      <main className="p-0 lg:p-10">
        <section className="relative">
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-2 transform -translate-y-1/2"
          >
            <Image
              src="/left.svg"
              width={100}
              height={100}
              alt="left"
              className="relative right-20 hidden lg:block"
              style={{ scale: 0.35 }}
            />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-2 transform -translate-y-1/2"
          >
            <Image
              src="/right.svg"
              width={100}
              height={100}
              alt="left"
              className="relative left-20 hidden lg:block"
              style={{ scale: 0.35 }}
            />
          </button>
          <section
            className="relative max-w-[800px] max-h-[450px] overflow-hidden rounded-lg border shadow-md"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={startDragging}
            onMouseDown={startDragging}
            ref={carouselRef}
            style={{ aspectRatio: "800/450" }}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentImage * 100}%)` }}
            >
              {images.map((src, index) => (
                <div key={index} className="min-w-full h-full">
                  <img
                    src={src}
                    alt={`Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  currentImage === index ? "bg-white" : "bg-gray-300/50"
                }`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default ImageCarousel;
