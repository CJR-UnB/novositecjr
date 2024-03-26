import { motion } from "framer-motion";
import { useState } from "react";
import { WhatsappImage } from "./SVGicons";

const Whatsapp: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const zoomInAnimation = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <>
      <div className="fixed flex bottom-4 right-4 z-40 items-center">
        <motion.div
          className={`text-black bg-offwhite h-fit p-3 mr-4 rounded-3xl shadow-xl text-lg`}
          initial="hidden"
          animate={isHovered ? "visible" : "hidden"}
          variants={zoomInAnimation}
        >
          Precisa de ajuda?
        </motion.div>
        <a
          href="https://wa.me/61920034064"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <WhatsappImage className="h-20 w-20 md:h-24 md:w-24  lg:h-32 lg:w-32" />
        </a>
      </div>
    </>
  );
};

export default Whatsapp;
