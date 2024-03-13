import React from "react";
import { Facebook, Instagram, Linkedin } from "../SVGicons";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-spaceblue text-white py-8">
        <div className="justify-around flex flex-col md:flex-row">
          <div
            className="ml-5 mr-32 flex flex-col md:flex-row self-center"
            id="target"
          >
            <div className="mr-10 mb-5 md:mb-0">
              <h1 className="text-gray-300">ENDEREÇO</h1>
              <h2>UnB, Brasília, Distrito Federal</h2>
              <h2>70910-900, BR</h2>
            </div>
            <div className="mb-4 md:mb-0">
              <h1 className="text-gray-300">CONTATO</h1>
              <h2>contato@cjr.org</h2>
            </div>
          </div>
          <div className="self-center mb-5 md:mb-0">
            <button className="hover:scale-110 transition-all duration-300">
              <a href="https://www.instagram.com/cjr.unb/" target="_blank">
                <Instagram />
              </a>
            </button>
            <button className="ml-6 hover:scale-110 transition-all duration-300">
              <a
                href="https://www.linkedin.com/company/cjr-unb/mycompany/"
                target="_blank"
              >
                <Linkedin />
              </a>
            </button>
            <button className="ml-6 hover:scale-110 transition-all duration-300">
              <a href="https://www.facebook.com/unb.cjr/" target="_blank">
                <Facebook />
              </a>
            </button>
          </div>
        </div>
      </footer>
      <div className="text-center text-gray-200 bg-spaceblue p-1">
        © 2024 | Desenvolvido pela CJR.
      </div>
    </>
  );
};

export default Footer;
