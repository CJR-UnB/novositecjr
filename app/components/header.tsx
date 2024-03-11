import { useState, useRef, useEffect } from "react";
import { CJR, Menu } from "./SVGicons";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
        className="sticky top-0 justify-between bg-spaceblue text-gray-300 flex px-2 z-50"
        style={{ height: "10vh" }}
      >
        <div
          className="scale-125 ml-40 mr-10 self-center py-5 
  xs:ml-10 sm:ml-20 md:ml-20 lg:ml-32 xl:ml-40 2xl:ml-40"
        >
          <CJR />
        </div>
        <div className="self-center text-2xl mr-24 space-x-16 hidden xs:hidden sm:hidden md:hidden lg:hidden xl:flex">
          <button className="group transition duration-300">
            Quem Somos
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-aquagreen"></span>
          </button>
          <button className="group transition duration-300">
            Nossos Cases
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-aquagreen"></span>
          </button>
          <button className="group transition duration-300">
            Serviços e Produtos
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-aquagreen"></span>
          </button>
          <button className="group transition duration-300">
            Nosso Time
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-aquagreen"></span>
          </button>
          <div className="bg-aquagreen max-h-full flex">
            <button className="py-7 px-20 text-black transition-colors duration-300 hover:bg-green ease-in">
              Contato
            </button>
          </div>
        </div>
        <button
          className="flex xs:flex sm:flex md:flex lg:flex xl:hidden items-center mr-10"
          onClick={toggleMenu}
        >
          <Menu />
        </button>
        <div
          ref={menuRef}
          className={`absolute right-0 mr-10 top-24 z-50 transition-all duration-300 transform origin-top ${
            isMenuOpen ? "scale-y-100" : "scale-y-0"
          }`}
        >
          <div
            className="bg-white text-black p-8 rounded-lg w-full max-w-xs"
            style={{ alignItems: "center" }}
          >
            <button className="block mb-4" onClick={toggleMenu}>
              Quem somos
            </button>
            <button className="block mb-4" onClick={toggleMenu}>
              Nossos Cases
            </button>
            <button className="block mb-4" onClick={toggleMenu}>
              Serviços e Produtos
            </button>
            <button className="block mb-4" onClick={toggleMenu}>
              Contato
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
