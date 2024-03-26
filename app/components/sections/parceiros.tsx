import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { PageBreak } from "../SVGicons";

const Parceiros: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.7, // Trigger when 50% of the component is visible
    onChange: setIsVisible, // Update isVisible state when component is in view
  });

  return (
    <>
      <motion.section
        ref={ref}
        className="text-center px-5 text-spaceblue font-bold text-4xl mt-20"
        id="parceiros"
      >
        <h1>NOSSOS PARCEIROS</h1>
        <PageBreak />
        <div className="flex flex-col md:flex-row items-center justify-around scale-75 md:scale-90 mx-20">
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            href="https://brasiljunior.org.br"
            target="_blank"
            className="mb-20 md:mb-0"
          >
            <Image
              src="/brj.svg"
              width={311}
              height={147}
              alt="brasil junior"
            />
          </motion.a>
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 1.5 }}
            href="https://concentrodf.com.br"
            target="_blank"
            className="mb-28 md:mb-0 mx-0 sm:mx-10"
          >
            <Image
              src="/concentro.svg"
              width={311}
              height={144}
              alt="concentro"
            />
          </motion.a>
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 2 }}
            href="https://www.cic.unb.br"
            target="_blank"
            className=""
          >
            <Image src="/unb cic.svg" width={311} height={146} alt="unb cic" />
          </motion.a>
        </div>
      </motion.section>
    </>
  );
};

export default Parceiros;
