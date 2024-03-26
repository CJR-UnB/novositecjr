import {
  faCartShopping,
  faCode,
  faLaptopCode,
  faMobileScreenButton,
  faMugSaucer,
  faUsersBetweenLines,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { PageBreak } from "../../SVGicons";
import ServiceBox from "./containerServico";

const sistemasWebIcon = <FontAwesomeIcon icon={faCode} />;
const consultoriaIcon = <FontAwesomeIcon icon={faMugSaucer} />;
const PWAIcon = <FontAwesomeIcon icon={faLaptopCode} />;
const ecommerceIcon = <FontAwesomeIcon icon={faCartShopping} />;
const appIcon = <FontAwesomeIcon icon={faMobileScreenButton} />;
const siteInstitucionalIcon = <FontAwesomeIcon icon={faUsersBetweenLines} />;

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
            <ServiceBox
              icone={sistemasWebIcon}
              tipo="Sistemas Web"
              subtitulo="Desenvolvimentos de sistemas web personalizados para atender as necessidades do cliente"
              temDetalhes={true}
              detalhes="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus, purus at aliquam placerat, elit risus faucibus ante, id vehicula magna quam elementum orci. Phasellus facilisis eu dolor ut ultrices. Maecenas vitae tempor tortor. Etiam mattis justo eget pellentesque scelerisque. Integer placerat dignissim odio quis sagittis. Pellentesque sit amet lacinia erat. In hac habitasse platea dictumst."
            />
            <ServiceBox
              icone={PWAIcon}
              tipo="PWA"
              subtitulo="Desenvolvimento de Progressive Web Apps para melhorar a experiência do usuário"
              temDetalhes={true}
            />
            <ServiceBox
              icone={ecommerceIcon}
              tipo="E-Commerce"
              subtitulo="Desenvolvimento de lojas virtuais para venda de produtos e serviços"
            />
            <ServiceBox
              icone={appIcon}
              tipo="Aplicativo Móvel"
              subtitulo="Desenvolvimento de aplicativos móveis para Android e iOS"
              temDetalhes={true}
            />
            <ServiceBox
              icone={siteInstitucionalIcon}
              tipo="Site Institucional"
              subtitulo="Desenvolvimento de sites institucionais para apresentação de empresas e serviços"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Servicos;
