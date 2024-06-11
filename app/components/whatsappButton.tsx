"use client";

import { useState } from "react";
import { WhatsappImage } from "./SVGicons";

const Whatsapp: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className="fixed flex bottom-4 right-4 z-30 items-center">
        <div
          className={`text-black bg-offwhite h-fit p-3 mr-4 rounded-3xl shadow-xl text-lg transition-all duration-200 transform ${
            isHovered ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          Precisa de ajuda?
        </div>
        <a
          href="https://wa.me/5561920034064?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20tecnol%C3%B3gicas%20da%20CJR%20e%20gostaria%20de%20solicitar%20um%20diagn%C3%B3stico%20gratuito%21"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <WhatsappImage className="h-14 w-14 md:h-20 md:w-20  lg:h-24 lg:w-24 z-50" />
        </a>
      </div>
    </>
  );
};

export default Whatsapp;
