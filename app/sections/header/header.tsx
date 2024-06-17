"use client";

import { CJR, DarkCJR, DarkMenu, Menu } from "@/app/components/SVGicons";
import Whatsapp from "@/app/components/whatsappButton";
import { useEffect, useState } from "react";
import NavigationItem from "./navigationItems";

export interface NavigationItem {
  label: string;
  id: string;
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  const [activeSection, setActiveSection] = useState("");
  const navigationItems = [{ label: "", id: "" }];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  {
    /* função para scrollar até certa sessão dependendo do id dela */
  }
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const headerHeight = window.innerHeight * 0.12; // 10vh
      const sectionPosition =
        section.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = sectionPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setIsMenuOpen(false);
    }
  };

  {
    /* função para fazer a página voltar para o topo */
  }
  const scrollTop = (id: string) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  {
    /* useEffect para detectar em que sessão a página está */
  }
  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = [
        "quem-somos",
        "nossos-cases",
        "servicos",
        "nosso-time",
        "depoimentos",
        "contato",
      ];

      let currentActiveSection = "";
      let currentScrollPosition = window.scrollY + window.innerHeight / 2; // Adjust this value based on where you consider the section to be "active"

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const sectionPosition =
            section.getBoundingClientRect().top + window.scrollY;
          const sectionHeight = section.offsetHeight;
          // Check if the section is in the viewport and more than half of it is visible
          if (
            sectionPosition <= currentScrollPosition &&
            sectionPosition + sectionHeight >= currentScrollPosition
          ) {
            currentActiveSection = id;
          }
        }
      });

      setActiveSection(currentActiveSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  {
    /* useEffect para detectar se a página está no topo para mudar a cor do header*/
  }
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 md:justify-between flex px-2 z-30 transition-colors duration-250 ${
          isScrolled
            ? "bg-white bg-opacity-70 text-spaceblue shadow-lg opacity-90 backdrop-blur-md"
            : "bg-spaceblue text-gray-300"
        }`}
        style={{ minHeight: "fit-content", maxHeight: "5rem" }}
      >
        <NavigationItem
          id={"homepage"}
          onClick={scrollTop}
          normal={false}
          text={false}
          style=""
        >
          {isScrolled ? <DarkCJR /> : <CJR />}
        </NavigationItem>
        <div className="self-center text-2xl mr-24 space-x-16 hidden xs:hidden sm:hidden md:hidden lg:hidden xl:flex">
          <NavigationItem
            label={"Quem Somos"}
            id={"quem-somos"}
            onClick={scrollToSection}
            normal={true}
            text={true}
            active={activeSection === "quem-somos"}
          />
          <NavigationItem
            label={"Serviços"}
            id={"servicos"}
            onClick={scrollToSection}
            normal={true}
            text={true}
            active={activeSection === "servicos"}
          />
          {/*
              <NavigationItem
                key={"nossos-cases"}
                label={"Cases"}
                id={"nossos-cases"}
                onClick={scrollToSection}
                normal={true}
                text={true}
                active={activeSection === "nossos-cases"}
              /> essa seção ainda precisa ser finalizada*/}
          <NavigationItem
            label={"Nosso Time"}
            id={"nosso-time"}
            onClick={scrollToSection}
            normal={true}
            text={true}
            active={activeSection === "nosso-time"}
          />

          <div
            className="bg-aquagreen max-h-full flex"
            style={{ height: "5rem" }}
          >
            <NavigationItem
              label={"Contato"}
              id={"contato"}
              onClick={scrollToSection}
              normal={false}
              text={true}
              style={
                "py-7 px-20 text-black transition-colors duration-300 hover:bg-green ease-in flex-grow"
              }
            />
          </div>
        </div>
        <button
          id="hamburguer"
          className="absolute right-8 top-6 xl:hidden items-center"
          onClick={toggleMenu}
        >
          {isScrolled ? <DarkMenu /> : <Menu />}
        </button>
        <div
          className={`absolute top-20 left-0 transition-all duration-300 transform origin-top bg-white bg-opacity-70 text-spaceblue shadow-lg opacity-90 backdrop-blur-md ${
            isMenuOpen ? "scale-y-100" : "scale-y-0"
          }`}
          style={{ width: "100vw", height: "100vh" }}
          onClick={toggleMenu}
        >
          <div
            id="dropdown"
            className={`px-8 items-center flex-col flex justify-center text-2xl font-semibold ${
              isScrolled
                ? "bg-white text-spaceblue"
                : "bg-spaceblue text-white "
            }`}
            style={{ alignItems: "center", height: "95vh" }}
          >
            <NavigationItem
              label="Quem somos"
              id="quem-somos"
              onClick={scrollToSection}
              normal={false}
              text={true}
              style={"block mb-6"}
            />
            <NavigationItem
              label="Serviços e Produtos"
              id="servicos"
              onClick={scrollToSection}
              normal={false}
              text={true}
              style={"block mb-6"}
            />
            {/*
            <NavigationItem
              label="Nossos Cases"
              id="nossos-cases"
              onClick={scrollToSection}
              normal={false}
              text={true}
              style={"block mb-6"}
            /> essa seção ainda precisa ser finalizada*/}
            <NavigationItem
              label="Nosso Time"
              id="nosso-time"
              onClick={scrollToSection}
              normal={false}
              text={true}
              style={"block mb-6"}
            />
            <NavigationItem
              label="Contato"
              id="contato"
              onClick={scrollToSection}
              normal={false}
              text={true}
              style={"block mb-6"}
            />
          </div>
        </div>
      </header>
      <Whatsapp />
    </>
  );
};

export default Header;
