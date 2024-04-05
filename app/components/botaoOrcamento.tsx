import { motion } from "framer-motion";
import { ArrowSquare } from "./SVGicons";

const Orcamento: React.FC = () => {
  return (
    <>
      <a href="https://tally.so/r/3jeXOJ" target="_blank">
        <motion.button
          className="flex bg-green items-center text-xl w-fit text-black rounded-lg mt-5 py-3 px-10"
          whileHover={{ scale: 1.15 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
          whileTap={{ scale: 1 }}
        >
          <h1 className="mr-2">Fazer um orçamento</h1>
          <ArrowSquare />
        </motion.button>
      </a>
    </>
  );
};

export default Orcamento;
