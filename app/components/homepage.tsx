import React from "react";
import Typewriter from "typewriter-effect";
import CustomIcon from "./SVGicons";

const HomePage: React.FC = () => {
  return (
    <>
      <section
        className="bg-spaceblue text-white p-1 flex relative
        flex-col xs:flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row"
        id="Início"
        style={{ overflow: "hidden", height: "90vh" }}
      >
        <div
          className="px-5 mx-2
         m-auto lg:ml-32 xl:ml-40 2xl:ml-40
         mt-16 sm:mt-16 md:mt-20 lg:mt-auto xl:mt-auto 2xl:mt-auto"
        >
          <h1
            className=" w-full max-w-3xl mb-3 leading-snug text-left
          text-3xl xs:text-4xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-5xl"
          >
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Desenvolvendo ideias e impulsionando resultados")
                  .pauseFor(5000)
                  .deleteAll()
                  .pauseFor(1000)
                  .typeString("Desenvolvendo ideias e impulsionando resultados")
                  .pauseFor(5000)
                  .start();
              }}
              options={{
                delay: 50,
                deleteSpeed: 30,
                loop: true,
              }}
            />
          </h1>
          <p
            className="text-gray-200 w-full max-w-xl text-left
          text-xl xs:text-xl sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl"
          >
            A CJR tem a solução certa para digitalizar sua empresa e escalar
            seus serviços
          </p>
          <button
            className="bg-aquagreen rounded-xl mt-5 py-3 px-10 text-black transition-colors duration-300 hover:bg-green ease-linear
           hidden xs:hidden sm:hidden md:hidden lg:block xl:block 2xl:block 
           lg:text-xl xl:text-2xl 2xl:text-2xl"
          >
            Faça um orçamento grátis
          </button>
        </div>
        <div
          className="
        flex xs:flex sm:flex md:flex lg:block xl:block 2xl:block
        scale-90 xs:scale-90 sm:scale-100 md:scale-100 lg:scale-100 xl:scale-125 2xl:scale-125
        mt-0 xs:mt-0 sm:mt-0 md:mt-0 lg:mt-32 xl:mt-44 2xl:mt-44
        xs:ml-auto sm:ml-auto md:ml-auto lg: xl: 2xl:
        mr-44 xs: sm: md: lg:mr-10 xl:mr-44 2xl:mr-44
        justify-center items-center"
        >
          <CustomIcon className="shrink-0" />
        </div>
      </section>
    </>
  );
};

export default HomePage;
