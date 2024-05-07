import { useState } from "react";
import { useInView } from "react-intersection-observer";

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
  const [isDropdown, setIsDropdown] = useState(false);

  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.5, // Trigger when 50% of the component is visible
    onChange: setIsVisible, // Update isVisible state when component is in view
  });

  return (
    <div
      className="flex flex-col items-center justify-center border-solid border-2 border-navyblue 
    rounded-lg w-full  min-h-32 lg:h-auto lg:w-auto overflow-hidden"
    >
      <div className="w-[350px] h-72 bg-transparent cursor-pointer group rounded-lg perspective-1000">
        <div className="relative w-full h-full preserve-3d group-hover:rotate-y-180 duration-500">
          <div className="flex flex-col flex-wrap items-center pt-4 w-full h-full absolute overflow-hidden">
            <i className="flex items-center justify-center size-10 md:size-16">
              {icone}
            </i>

            <p className="text-center p-2 text-spaceblue text-2xl">{tipo}</p>

            <p
              className="text-center align-bottom text-pretty text-navyblue text-base font-normal px-12 md:px-18
            h-20 mb-8 md:text-base lg:text-lg "
            >
              {descricao}
            </p>
          </div>

          {/* This is the back face of the card */}
          <div className="absolute rotate-y-180 w-full h-full max-w-96 min-w-16 bg-navyblue rounded-md leading-4 overflow-hidden p-6 text-white backface-hidden">
            {/* <div>
              <span className="font-bold text-2xl text-green">{tipo}</span>
            </div> */}

            <span className="self-center flex text-sm text-justify font-normal text-pretty text-white">
              {descricao_back}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
