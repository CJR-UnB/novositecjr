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
              descricao="Desenvolvimento personalizado de sistemas web para atender às necessidades específicas da sua empresa"
              descricao_back="Desenvolvemos sistemas web sob medida, garantindo que atendam perfeitamente às necessidades do seu negócio. Nossa abordagem centrada no usuário e nossa expertise técnica garantem que seu sistema seja eficiente, seguro e altamente funcional."
            />
            <ServiceBox
              icone={consultoriaIcon}
              tipo="Consultoria"
              descricao="Soluções estratégicas e consultoria especializada para impulsionar o crescimento do seu negócio"
              descricao_back="Nossas consultorias especializadas abrangem otimização e aprimoramento de sites, aplicativos móveis, E-commerce e PWA. Identificamos oportunidades de melhoria e implementamos soluções personalizadas para maximizar o impacto de sua presença online."
            />
            <ServiceBox
              icone={PWAIcon}
              tipo="PWA"
              descricao="Desenvolvimento de Progressive Web Apps para melhorar a experiência do usuário"
              descricao_back="Desenvolvemos Progressive Web Apps que combinam a acessibilidade da web com a funcionalidade de um aplicativo móvel. Isso significa uma experiência fluida e envolvente para os usuários, independentemente do dispositivo ou conexão de internet, aumentando o engajamento e a retenção."
            />
            <ServiceBox
              icone={ecommerceIcon}
              tipo="E-Commerce"
              descricao="Desenvolvimento de lojas virtuais para impulsionar as vendas online do seu negócio"
              descricao_back="Nossas soluções de E-commerce oferecem uma plataforma completa para impulsionar suas vendas online. Desde a criação de catálogos de produtos atrativos até a implementação de um checkout seguro e fácil de usar, garantimos uma experiência de compra perfeita para seus clientes."
            />
            <ServiceBox
              icone={appIcon}
              tipo="Aplicativo Móvel"
              descricao="Desenvolvimento de aplicativos móveis personalizados para iOS e Android, oferecendo uma experiência única aos usuários"
              descricao_back="Desenvolvemos aplicativos móveis sob medida para atender às necessidades específicas do seu negócio. Com um design intuitivo, garantimos uma experiência de usuário excepcional em todas as plataformas."
            />
            <ServiceBox
              icone={siteInstitucionalIcon}
              tipo="Site Institucional"
              descricao="Criação de websites profissionais e responsivos para promover a sua marca e serviços online"
              descricao_back="Desenvolvemos sites institucionais que refletem a identidade da sua marca com um design elegante e atrativo. Nosso objetivo é garantir que seu site se destaque na multidão, atraindo e envolvendo os visitantes de forma eficaz."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Servicos;
