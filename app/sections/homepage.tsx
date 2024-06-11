"use client";

import React, { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";
import Orcamento from "../components/botaoOrcamento";

const HomePage: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (svgRef.current) {
      svgRef.current.classList.add("draw");
    }
  }, []);

  return (
    <>
      <section
        className="bg-spaceblue text-white p-1 flex flex-col xl:flex-row xl:justify-around items-center relative overflow-hidden"
        id="homepage"
        style={{ height: "92vh" }}
      >
        <div className="px-5 mx-2 xl:ml-24">
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
          <Orcamento className="bg-aquagreen rounded-xl mt-3 py-3 px-7 text-black flex items-center text-lg" />
        </div>
        <div
          className="
        px-5
        scale-75 md:scale-90 xl:scale-100
        mt-0 xl:mt-32 mr-36 md:mr-10
        -translate-y-20 md:-translate-y-0"
        >
          <svg
            ref={svgRef}
            width="740"
            height="797"
            viewBox="0 0 594 651"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="none"
              d="M496.208 297.975L496.208 492.785L592.499 396.735L592.499 201.925L496.208 297.975Z"
              stroke="#27BD80"
              stroke-width="3"
            />
            <path
              d="M493.5 693.5L493.5 497.5L297.5 497.5L297.5 693.5L493.5 693.5Z"
              stroke="#27BD80"
              stroke-width="3"
            />
            <path
              d="M396.5 197.5L592.5 197.5L592.5 1.5L397.677 1.5L396.5 2.83171L396.5 197.5Z"
              stroke="#27BD80"
              stroke-width="3"
            />
            <path
              d="M97.7921 694.025L97.7921 499.215L1.50127 595.265L1.50125 790.076L97.7921 694.025Z"
              stroke="#27BD80"
              stroke-width="3"
            />
            <path
              d="M395.791 3.61505L299.5 99.6654L299.5 294.476L395.791 198.425Z"
              stroke="#27BD80"
              stroke-width="3"
            />
            <path
              d="M101.5 300.5L101.5 496.5L297.5 496.5L297.5 300.5L101.5 300.5Z"
              stroke="#27BD80"
              stroke-width="3"
            />
          </svg>
        </div>
      </section>
    </>
  );
};

export default HomePage;
