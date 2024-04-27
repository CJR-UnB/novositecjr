import { motion } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Focatia, Instagram, MessageApp } from "../../SVGicons";
import Orcamento from "../../botaoOrcamento";

const Contato: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.8, // Trigger when 50% of the component is visible
    onChange: setIsVisible, // Update isVisible state when component is in view
  });

  return (
    <>
      {" "}
      <motion.section ref={ref} className="px-5 mt-24" id="contato">
        <h1 className="text-center text-spaceblue font-bold text-4xl sm:text-5xl mb-14 px-5 mx-3">
          Como podemos te ajudar?
        </h1>
        <div className="flex justify-center text-spaceblue">
          <div className="hidden lg:block mr-10">
            <h1 className="text-2xl sm:text-3xl font-medium mb-2">
              Ainda tem alguma dúvida?
            </h1>
            <h2 className="text-lg sm:text-xl mb-5">
              Entre em contato com a nossa equipe
            </h2>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.2 }}
              className="hover:scale-110 transition-all duration-300 my-6"
            >
              <a href="" target="_blank" className="flex items-center">
                <MessageApp />
                <h1 className="ml-2 text-xl">Via WhatsApp</h1>
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.2 }}
              className="hover:scale-110 transition-all duration-300 my-6"
            >
              <a
                href="https://www.instagram.com/cjr.unb/"
                target="_blank"
                className="flex items-center"
              >
                <Instagram />
                <h1 className="ml-2 text-xl">Via Instagram</h1>
              </a>
            </motion.div>
          </div>
          <div className="bg-offwhite w-1 rounded-xl hidden lg:block"></div>{" "}
          {/* divisoria */}
          <div id="small screen" className="flex flex-col">
            <h1 className="text-2xl sm:text-3xl font-medium px-5 mb-2">
              Já tem uma ideia de projeto?
            </h1>
            <h2 className="text-lg sm:text-xl mb-5 px-5">
              Faça um orçamento e tire seu projeto do papel
            </h2>
            <div className="self-center lg:self-start px-5">
              <Orcamento />
            </div>
            <div className="mt-14 block lg:hidden">
              <h1 className="text-2xl sm:text-3xl font-medium px-5 mb-2">
                Ainda tem alguma dúvida?
              </h1>
              <h2 className="text-lg sm:text-xl mb-5 w-full px-5 max-w-lg">
                Envie sua dúvida para{" "}
                <a
                  href="mailto:contato@cjr.org.br"
                  target="_blank"
                  className="font-semibold"
                >
                  contato@cjr.org.br
                </a>{" "}
                e nossa equipe entrará em contato o mais rápido possível
              </h2>
            </div>
            <Focatia className="ml-0 sm:ml-20 mt-20" />
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Contato;
