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
      <div className="fixed flex bottom-4 right-4 z-30 items-center">
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
          <WhatsappImage className="h-14 w-14 md:h-20 md:w-20  lg:h-24 lg:w-24 z-50" />
        </a>
      </div>
    </>
  );
};

export default Whatsapp;
