import { motion } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

export default function ServiceBox({
  icone,
  tipo,
  descricao,
}: {
  icone: string;
  tipo: string;
  descricao: string;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.5, // Trigger when 50% of the component is visible
    onChange: setIsVisible, // Update isVisible state when component is in view
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col py-2 px-2 items-center justify-center border-solid border-2 border-navyblue rounded-lg h-32 md:max-w-96 md:h-auto"
    >
      <motion.div
        className="items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <i className="flex items-center justify-center size-10 md:size-16">
          {icone}
        </i>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-center p-2 text-sm text-spaceblue md:text-3xl">
          {tipo}
        </p>
      </motion.div>

      <motion.div
        className="h-fit mb-8 hidden md:block md:text-warp"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-center text-wrap text-navyblue text-lg font-normal ">
          {descricao}
        </p>
      </motion.div>
    </motion.div>
  );
}
