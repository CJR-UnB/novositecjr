import {
  faCartShopping,
  faCode,
  faLaptopCode,
  faMobileScreenButton,
  faMugSaucer,
  faUsersBetweenLines,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { PageBreak } from "../../SVGicons";

const sistemasWebIcon = <FontAwesomeIcon icon={faCode} />;
const consultoriaIcon = <FontAwesomeIcon icon={faMugSaucer} />;
const PWAIcon = <FontAwesomeIcon icon={faLaptopCode} />;
const ecommerceIcon = <FontAwesomeIcon icon={faCartShopping} />;
const appIcon = <FontAwesomeIcon icon={faMobileScreenButton} />;
const siteInstitucionalIcon = <FontAwesomeIcon icon={faUsersBetweenLines} />;

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

const Servicos: React.FC = () => {
  return (
    <>
      <section className="text-center font-bold text-4xl mt-20" id="servicos">
        <h1>NOSSOS SERVIÇOS</h1>
        <PageBreak />
        <p className="text-lg sm:text-xl mb-5 px-5 text-mutedSpaceblue font-normal">
          Conheça os nossos serviços e como podemos impulsionar seus resultados!
        </p>
        <div className="flex justify-center items-center mt-10">
          <div className="grid md:grid-cols-3 gap-6 px-10 w-fit">
            <CardServico
              icone={sistemasWebIcon}
              tipo="Sistemas Web"
              subtitulo="Desenvolvimentos de sistemas web personalizados para atender as necessidades do cliente"
              sub2="aqui vem mais explicações sobre o serviço"
            />
            <CardServico
              icone={consultoriaIcon}
              tipo="Consultoria"
              subtitulo="Prestação de consultas profissionais visando atender as necessidades do cliente"
              sub2="aqui vem mais explicações sobre o serviço"
            />
            <CardServico
              icone={PWAIcon}
              tipo="PWA"
              subtitulo="Desenvolvimento de Progressive Web Apps para melhorar a experiência do usuário"
              sub2="aqui vem mais explicações sobre o serviço"
            />
            <CardServico
              icone={ecommerceIcon}
              tipo="E-Commerce"
              subtitulo="Desenvolvimento de lojas virtuais para venda de produtos e serviços"
              sub2="aqui vem mais explicações sobre o serviço"
            />
            <CardServico
              icone={appIcon}
              tipo="Aplicativo Móvel"
              subtitulo="Desenvolvimento de aplicativos móveis para Android e iOS"
              sub2="aqui vem mais explicações sobre o serviço"
            />
            <CardServico
              icone={siteInstitucionalIcon}
              tipo="Site Institucional"
              subtitulo="Desenvolvimento de sites institucionais para apresentação de empresas e serviços"
              sub2="aqui vem mais explicações sobre o serviço"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Servicos;
