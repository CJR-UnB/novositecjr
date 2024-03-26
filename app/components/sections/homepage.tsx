import { motion } from "framer-motion";
import React from "react";
import Typewriter from "typewriter-effect";
import HomePageIcon, { ArrowSquare } from "../SVGicons";

const HomePage: React.FC = () => {
  return (
    <>
      <section
        className="bg-spaceblue text-white p-1 flex relative
        flex-col xs:flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row"
        id="homepage"
        style={{ overflow: "hidden", height: "92vh" }}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="px-5 mx-2
         m-auto lg:ml-32 xl:ml-40 2xl:ml-40
         mt-16 sm:mt-16 md:mt-20 lg:mt-auto xl:mt-auto 2xl:mt-auto"
        >
          <h1
            className=" w-full max-w-3xl mb-3 leading-snug text-left
          text-3xl xs:text-4xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-5xl"
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
          text-xl xs:text-xl sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl"
          >
            A CJR tem a solução certa para digitalizar sua empresa e escalar
            seus serviços
          </p>
          <a href="https://tally.so/r/3jeXOJ" target="_blank">
            <motion.button
              className="bg-aquagreen rounded-xl mt-5 py-3 px-10 text-black transition-colors duration-300 hover:bg-green ease-linear
           hidden xs:hidden sm:hidden md:hidden lg:flex xl:flex 2xl:flex
           lg:text-xl xl:text-2xl 2xl:text-2xl"
              whileHover={{ scale: 1.15 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              whileTap={{ scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              <h1 className="mr-2">Faça um orçamento grátis</h1>
              <ArrowSquare />
            </motion.button>
          </a>
        </motion.div>
        <div
          className="
        flex xs:flex sm:flex md:flex lg:block xl:block 2xl:block
        scale-90 xs:scale-90 sm:scale-100 md:scale-100 lg:scale-100 xl:scale-125 2xl:scale-125
        mt-0 xs:mt-0 sm:mt-0 md:mt-0 lg:mt-32 xl:mt-44 2xl:mt-44
        xs:ml-auto sm:ml-auto md:ml-auto lg: xl: 2xl:
        mr-44 xs: sm: md: lg:mr-10 xl:mr-44 2xl:mr-44
        justify-center items-center"
        >
          <HomePageIcon />
        </div>
      </section>
    </>
  );
};

export default HomePage;
