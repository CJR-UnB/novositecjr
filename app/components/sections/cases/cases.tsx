import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { ArrowSquare, PageBreak } from "../../SVGicons";
import CasesCarousel from "./casesCarousel";

const Cases: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.5, // Trigger when 50% of the component is visible
    onChange: setIsVisible, // Update isVisible state when component is in view
  });

  return (
    <motion.section className="px-14 mt-20" id="nossos-cases">
      <h1 className="text-center text-spaceblue font-bold  text-3xl md:text-4xl">
        NOSSO PORTFOLIO
      </h1>
      <PageBreak />
      <div className="flex flex-col items-center lg:flex-row justify-around">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -0 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            y: isVisible ? -50 : 0,
          }}
          transition={{ duration: 1 }}
          className="mr-0 lg:mr-12 mb-10 lg:mb-0 mt-10"
        >
          <h1 className="text-2xl w-full max-w-lg font-bold text-spaceblue">
            Desenvolvidos por pessoas que entendem sua dor, e entregam solução.
          </h1>
          <p className="pt-[15px] leading-snug text-lg w-full max-w-lg px-0 text-mutedSpaceblue">
            Acreditamos firmemente que o verdadeiro valor de uma empresa reside
            em sua capacidade de compreender as dores do cliente e fornecer
            soluções eficazes e personalizadas. Cada caso apresentado é o
            resultado do trabalho árduo e da dedicação de nossa equipe, composta
            por indivíduos apaixonados e experientes, que se dedicam a entender
            as necessidades únicas de cada cliente.
          </p>
          <Link href="/portfolio" target="_blank">
            <motion.button
              className="flex bg-green items-center text-xl w-fit text-black rounded-lg mt-5 py-3 px-10"
              whileHover={{ scale: 1.15 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              whileTap={{ scale: 1 }}
            >
              <h1 className="mr-2">Conheça nosso portfolio</h1>
              <ArrowSquare />
            </motion.button>
          </Link>
        </motion.div>
        <div className="mx-5 md:mx-14 lg:mx-10 xl:mx-10 2xl:mx-10">
          <CasesCarousel />
        </div>
      </div>
    </motion.section>
  );
};

export default Cases;
