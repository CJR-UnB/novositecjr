import { motion } from "framer-motion";
import Image from "next/image";
import { PageBreak } from "../SVGicons";

const Parceiros: React.FC = () => {
  return (
    <>
      <motion.section
        className="text-center px-5 text-spaceblue font-bold text-4xl mt-20"
        id="parceiros"
      >
        <h1>NOSSOS PARCEIROS</h1>
        <PageBreak />
        <div className="flex flex-col md:flex-row items-center justify-around scale-75 md:scale-90 mx-20">
          <motion.a
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
          <motion.a href="https://www.cic.unb.br" target="_blank" className="">
            <Image src="/unb cic.svg" width={311} height={146} alt="unb cic" />
          </motion.a>
        </div>
      </motion.section>
    </>
  );
};

export default Parceiros;
