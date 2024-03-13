import { useEffect, useRef, useState } from "react";
import { CJR, DarkCJR, DarkMenu, Menu } from "../SVGicons";
import NavigationItem from "../navigationItems";

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

  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      // Scroll to the section with an offset to account for the header height
      const headerHeight = window.innerHeight * 0.1; // 10vh
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

  const scrollTop = (id: string) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <>
      <header
        className={`sticky top-0 justify-between flex px-2 z-50 transition-colors duration-250 ${
          isScrolled ? "bg-white text-spaceblue" : "bg-spaceblue text-gray-300"
        }`}
        style={{ minHeight: "fit-content", maxHeight: "5rem" }}
      >
        <NavigationItem
          key={"homepage"}
          id={"homepage"}
          onClick={scrollTop}
          text={false}
        >
          {isScrolled ? <DarkCJR /> : <CJR />}
        </NavigationItem>
        <div className="self-center text-2xl mr-24 space-x-16 hidden xs:hidden sm:hidden md:hidden lg:hidden xl:flex">
          {navigationItems.map((item) => (
            <>
              <NavigationItem
                key={"quem-somos"}
                label={"Quem Somos"}
                id={"quem-somos"}
                onClick={scrollToSection}
                normal={true}
                text={true}
              />
              <NavigationItem
                key={"nossos-cases"}
                label={"Nossos Cases"}
                id={"nossos-cases"}
                onClick={scrollToSection}
                normal={true}
                text={true}
              />
              <NavigationItem
                key={"servicos"}
                label={"Serviços e Produtos"}
                id={"servicos"}
                onClick={scrollToSection}
                normal={true}
                text={true}
              />
              <NavigationItem
                key={"nosso-time"}
                label={"Nosso Time"}
                id={"nosso-time"}
                onClick={scrollToSection}
                normal={true}
                text={true}
              />

              <div
                className="bg-aquagreen max-h-full flex"
                style={{ height: "5rem" }}
              >
                <NavigationItem
                  key={"contato"}
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
            </>
          ))}
        </div>
        <button
          className="flex xs:flex sm:flex md:flex lg:flex xl:hidden items-center mr-10"
          onClick={toggleMenu}
        >
          {isScrolled ? <DarkMenu /> : <Menu />}
        </button>
        <div
          ref={menuRef}
          className={`absolute right-0 mr-10 top-24 z-50 transition-all duration-300 transform origin-top ${
            isMenuOpen ? "scale-y-100" : "scale-y-0"
          }`}
        >
          <div
            id="dropdown"
            className="bg-offwhite text-black p-8 rounded-lg w-full max-w-xs"
            style={{ alignItems: "center" }}
          >
            <NavigationItem
              label="Quem somos"
              id="quem-somos"
              onClick={scrollToSection}
              normal={false}
              text={true}
              style={"block mb-4"}
            />
            <NavigationItem
              label="Nossos Cases"
              id="nossos-cases"
              onClick={scrollToSection}
              normal={false}
              text={true}
              style={"block mb-4"}
            />
            <NavigationItem
              label="Serviços e Produtos"
              id="servicos"
              onClick={scrollToSection}
              normal={false}
              text={true}
              style={"block mb-4"}
            />
            <NavigationItem
              label="Contato"
              id="contato"
              onClick={scrollToSection}
              normal={false}
              text={true}
              style={"block mb-4"}
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
