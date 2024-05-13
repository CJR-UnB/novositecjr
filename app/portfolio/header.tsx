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
  const [isScrolled, setIsScrolled] = useState(false);

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
        className={`sticky top-0 justify-between flex px-2 z-50 transition-colors duration-250 items-center ${
          isScrolled
            ? "bg-white bg-opacity-70 text-spaceblue shadow-lg opacity-90 backdrop-blur-md"
            : "bg-spaceblue text-gray-300"
        }`}
        style={{ minHeight: "fit-content", maxHeight: "5rem" }}
      >
        <button
          onClick={() => scrollTop("homepage")}
          className="scale-125 py-5 ml-10"
        >
          {isScrolled ? <DarkCJR /> : <CJR />}
        </button>

        <Link href="/" className="group transition duration-300 mr-10">
          <img
            src={isScrolled ? "/arrow-left-dark.svg" : "/arrow-left-white.svg"}
            alt=""
          />
          <span
            className={`max-w-0 block group-hover:max-w-full transition-all duration-500 h-0.5 bg-aquagreen`}
          ></span>
        </Link>
      </header>
      <Whatsapp />
    </>
  );
};

export default Header;
