import Link from "next/link";
import { useEffect, useState } from "react";
import { CJR, DarkCJR } from "../components/SVGicons";
import Whatsapp from "../components/whatsappButton";

export interface NavigationItem {
  label: string;
  id: string;
}

interface HeaderProps {
  navigationItems: NavigationItem[];
}

const Header: React.FC<HeaderProps> = ({ navigationItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
        className={`sticky top-0 justify-between flex px-2 z-50 transition-colors duration-250 ${
          isScrolled
            ? "bg-white bg-opacity-70 text-spaceblue shadow-lg opacity-90 backdrop-blur-md"
            : "bg-spaceblue text-gray-300"
        }`}
        style={{ minHeight: "fit-content", maxHeight: "5rem" }}
      >
        <button
          onClick={() => scrollTop("homepage")}
          className="scale-125 self-center py-5 ml-10"
        >
          {isScrolled ? <DarkCJR /> : <CJR />}
        </button>

        <div className="self-center text-2xl mr-10 space-x-16 flex">
          <Link href="/" className="group transition duration-300">
            Voltar para o início
            <span
              className={`max-w-0 block group-hover:max-w-full transition-all duration-500 h-0.5 bg-aquagreen`}
            ></span>
          </Link>
        </div>
      </header>
      <Whatsapp />
    </>
  );
};

export default Header;
