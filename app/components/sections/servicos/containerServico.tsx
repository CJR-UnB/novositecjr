import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

export default function ServiceBox({
  icone,
  tipo,
  subtitulo,
  detalhes,
  temDetalhes,
}: {
  icone: string;
  tipo: string;
  subtitulo: string;
  detalhes: string;
  temDetalhes: boolean;
}) {
  const [isDropdown, setIsDropdown] = useState(false);

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
      className={`flex flex-col py-2 px-2 items-center justify-center border-solid border-2 border-navyblue rounded-lg md:max-w-96 min-h-32 md:h-auto md:w-auto overflow-hidden ${
        isDropdown ? "w-full" : "w-40 transition-all duration-500"
      }`}
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
          {subtitulo}
        </p>
      </motion.div>
      {temDetalhes && (
        <motion.button
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 1 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
          transition={{ duration: 0.2 }}
          onClick={() => setIsDropdown((prevState) => !prevState)}
        >
          <Image
            src={isDropdown ? "/dropup.svg" : "/dropdown.svg"}
            width={30}
            height={30}
            alt="botao"
          />
        </motion.button>
      )}
      <AnimatePresence>
        {isDropdown && (
          <motion.div
            initial={{ height: 0, opacity: 0, width: 0 }}
            animate={{ height: "auto", opacity: 1, width: "auto" }}
            exit={{ height: 0, opacity: 0, width: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className={`${isDropdown ? "block" : "hidden"}`}
          >
            <motion.p
              initial={{ opacity: 0, width: "full" }}
              animate={{ opacity: 1, width: "full" }}
              exit={{ opacity: 0, width: "full" }}
              transition={{
                delay: 0.4, // Delay only when opening
                duration: 0.4,
                ease: "easeInOut",
              }}
              className="text-lg text-mutedSpaceblue font-normal py-2 px-2 items-center justify-center"
            >
              {detalhes}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
