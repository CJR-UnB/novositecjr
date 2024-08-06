"use client";

import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";

interface CarouselProps {
  cases: {
    title: string;
    description: string;
    image: string;
    link: string;
    style?: {};
  }[];
}

const ImageCarousel: React.FC<CarouselProps> = ({ cases }) => {
  // AS IMAGENS PRECISAM SER 800X450 PARA CABER CORRETAMENTE NO CARROSSEL

  const [currentImage, setCurrentImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === 0 ? cases.length - 1 : prevIndex - 1
    );
  };

  const handleNext = useCallback(() => {
    setCurrentImage((prevIndex) =>
      prevIndex === cases.length - 1 ? 0 : prevIndex + 1
    );
  }, [setCurrentImage, cases.length]);

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
            className="relative overflow-hidden bg-white border rounded-lg shadow-md"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={startDragging}
            onMouseDown={startDragging}
            ref={carouselRef}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentImage * 100}%)` }}
            >
              {cases.map((singleCase, index) => (
                <div
                  id="container"
                  key={index}
                  className="min-w-full items-center flex p-10 flex-col lg:flex-row"
                >
                  <div className="w-3/4 lg:w-1/2 justify-center flex">
                    <img
                      src={singleCase.image}
                      alt={`Image ${index + 1}`}
                      className=""
                      style={singleCase.style || {}}
                    />
                  </div>
                  <div className="w-3/4 lg:w-1/2 lg:ml-20">
                    <h1 className="text-5xl font-bold mb-6 text-spaceblue">
                      {singleCase.title}
                    </h1>
                    <h2 className="text-lg text-spaceblue/80 max-w-2xl w-full mb-10">
                      {singleCase.description}
                    </h2>
                    <a
                      href={singleCase.link}
                      target="_blank"
                      className="group transition duration-300 inline-block"
                    >
                      <p className="flex gap-3 items-center font-medium text-2xl text-black">
                        Ler mais {`>`}
                      </p>
                      <span
                        className={`block group-hover:max-w-full transition-all duration-500 h-0.5 bg-aquagreen max-w-0`}
                      ></span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {cases.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  currentImage === index ? "bg-gray-500" : "bg-gray-300/70"
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
