"use client";

import { useState } from "react";

export default function ServiceBox({
  icone,
  tipo,
  descricao,
  descricao_back,
}: {
  icone: React.ReactNode;
  tipo: string;
  descricao: string;
  descricao_back: string;
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="flex flex-col items-center justify-center border-solid border-2 border-navyblue 
    rounded-lg w-full  min-h-32 lg:h-auto lg:w-auto overflow-hidden"
    >
      <div className="w-[350px] h-72 bg-white cursor-pointer group rounded-lg perspective-1000">
        <div
          className={`relative w-full h-full preserve-3d duration-500 ${
            isFlipped ? "rotate-y-180" : ""
          }`}
          onClick={handleCardClick}
        >
          <div className="flex flex-col flex-wrap items-center pt-4 w-full h-full absolute overflow-hidden">
            <i className="flex items-center justify-center size-10 md:size-16">
              {icone}
            </i>

            <p className="text-center p-2 text-spaceblue text-2xl">{tipo}</p>

            <p
              className="text-center align-bottom text-pretty text-navyblue text-base font-normal px-12 md:px-12
            h-fit md:text-base lg:text-[17px]  md:max-lg:mx-8 flex-grow"
            >
              {descricao}
            </p>

            <span className="text-sm text-mutedSpaceblue font-normal mb-3">
              clique para saber mais
            </span>
          </div>

          {/* This is the back face of the card */}
          <div className="absolute rotate-y-180 w-full h-full max-w-96 min-w-16 bg-navyblue rounded-md leading-4 overflow-hidden p-6 text-white backface-hidden">
            <div>
              <span className="font-bold text-2xl text-green">{tipo}</span>
            </div>

            <span
              className="self-center flex text-sm text-center font-normal text-pretty text-white pt-1 
            md:max-lg:px-14 min-[1024px]:px-8 min-[320px]:max-[400px]:px-6 xl:px-4"
            >
              {descricao_back}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
