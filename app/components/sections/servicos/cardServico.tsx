import { useState } from "react";
import { useInView } from "react-intersection-observer";

interface cardServicoProps {
  icone: React.ReactNode;
  tipo: string;
  sub2: string;
  subtitulo: string;
}

const CardServico: React.FC<cardServicoProps> = ({
  icone,
  tipo,
  subtitulo,
  sub2,
}) => {
  const [isDropdown, setIsDropdown] = useState(false);

  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.5, // Trigger when 50% of the component is visible
    onChange: setIsVisible, // Update isVisible state when component is in view
  });

  return (
    <div
      className="flex flex-col py-2 px-2 items-center justify-center border-solid border-2 border-navyblue 
    rounded-lg w-full md:max-w-96 min-h-32 md:h-auto md:w-auto overflow-hidden"
    >
      <div className="w-[350px] h-72 bg-transparent cursor-pointer group rounded-3xl perspective-1000">
        <div className="relative w-full h-full preserve-3d group-hover:rotate-y-180 duration-500">
          <div className="flex flex-col items-center pt-4 w-full h-full absolute rounded-3xl overflow-hidden">
            <i className="flex items-center justify-center size-10 md:size-16">
              {icone}
            </i>

            <p className="text-center p-2 text-spaceblue text-2xl md:text-2xl">
              {tipo}
            </p>

            <p
              className="text-center w-3/4 align-bottom text-wrap text-navyblue text-lg font-normal
            h-20 mb-8 md:block md:text-lg md:9/12"
            >
              {subtitulo}
            </p>
          </div>

          {/* This is the back face of the card */}
          <div className="absolute rotate-y-180 w-full h-full bg-navyblue rounded-lg overflow-hidden p-10 text-white backface-hidden">
            <div>
              <span className="font-bold text-2xl text-green">{tipo}</span>
            </div>

            <span className="text-sm text-justify font-normal text-wrap text-white">
              {sub2}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardServico;
