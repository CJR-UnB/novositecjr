"use client";

import React from "react";
import Typewriter from "typewriter-effect";
import Orcamento from "../components/botaoOrcamento";
import HomePageIcon from "../components/SVGicons";

const HomePage: React.FC = () => {
  return (
    <>
      <section
        className="bg-spaceblue text-white p-1 flex lg:flex-row"
        id="homepage"
        style={{ height: "92vh" }}
      >
        <div
          className="px-5 mx-2
         m-auto lg:ml-32 xl:ml-40
         mt-16 md:mt-20 lg:mt-auto"
        >
          <h1
            className=" w-full max-w-3xl mb-3 leading-snug text-left
          text-3xl xs:text-4xl 2xl:text-5xl"
          >
            Desenvolvendo ideias e impulsionando resultados
            <div className="my-0 md:my-3 text-aquagreen">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(1000)
                    .typeString("Sites?")
                    .pauseFor(2000)
                    .deleteAll()
                    .pauseFor(500)
                    .typeString("Aplicativos?")
                    .pauseFor(2000)
                    .deleteAll()
                    .pauseFor(500)
                    .typeString("Sistemas?")
                    .pauseFor(2000)
                    .deleteAll()
                    .pauseFor(500)
                    .typeString("Consultorias?")
                    .pauseFor(2000)
                    .deleteAll()
                    .pauseFor(500)
                    .typeString("A CJR te acompanha!")
                    .pauseFor(2000)
                    .start();
                }}
                options={{
                  delay: 50,
                  deleteSpeed: 30,
                  loop: true,
                }}
              />
            </div>
          </h1>
          <p
            className="text-gray-200 w-full max-w-xl text-left
          text-xl lg:text-2xl"
          >
            A CJR tem a solução certa para digitalizar sua empresa e escalar
            seus serviços
          </p>
          <Orcamento
            className="bg-aquagreen rounded-xl mt-3 mb-5 py-3 px-7 text-black transition-colors duration-300 hover:bg-green ease-linear
           flex items-center text-lg"
          />
        </div>
        <div>
          <HomePageIcon />
        </div>
      </section>
    </>
  );
};

export default HomePage;
