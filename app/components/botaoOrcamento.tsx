import { motion } from "framer-motion";
import { ArrowSquare } from "./SVGicons";

const Orcamento: React.FC = () => {
  return (
    <>
      <a href="https://tally.so/r/3jeXOJ" target="_blank">
        <motion.button
          className="flex bg-green items-center p-2 w-fit text-black"
          whileHover={{ scale: 1.15 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
        >
          <h1 className="mr-2">Fazer um orçamento</h1>
          <ArrowSquare />
        </motion.button>
      </a>
    </>
  );
};

export default Orcamento;
