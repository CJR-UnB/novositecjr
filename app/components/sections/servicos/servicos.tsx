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
      <section
        className="text-center font-bold text-4xl mt-20 mb-20"
        id="servicos"
      >
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
              descricao="Desenvolvimentos de sistemas web personalizados para atender as necessidades do cliente"
            />
            <ServiceBox
              icone={consultoriaIcon}
              tipo="Consultoria"
              descricao="Prestação de consultas profissionais visando atender as necessidades do cliente"
            />
            <ServiceBox
              icone={PWAIcon}
              tipo="PWA"
              descricao="Desenvolvimento de Progressive Web Apps para melhorar a experiência do usuário"
            />
            <ServiceBox
              icone={ecommerceIcon}
              tipo="E-Commerce"
              descricao="Desenvolvimento de lojas virtuais para venda de produtos e serviços"
            />
            <ServiceBox
              icone={appIcon}
              tipo="Aplicativo Móvel"
              descricao="Desenvolvimento de aplicativos móveis para Android e iOS"
            />
            <ServiceBox
              icone={siteInstitucionalIcon}
              tipo="Site Institucional"
              descricao="Desenvolvimento de sites institucionais para apresentação de empresas e serviços"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Servicos;
