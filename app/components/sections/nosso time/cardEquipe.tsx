import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Github, Linkedin } from "../../SVGicons";

interface CardProps {
  imageSrc: string;
  nome: string;
  cargo: string;
  linkedin: string;
  github: string;
  tipo: string;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  nome,
  cargo,
  linkedin,
  github,
  tipo,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.3, // Trigger when 50% of the component is visible
    onChange: setIsVisible, // Update isVisible state when component is in view
  });
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        ref={ref}
        className="flex-col flex items-center justify-center my-20 bg-transparent"
        style={{
          borderRadius: 97,

          backgroundImage: `url(${
            tipo === "1"
              ? "/fundo.svg"
              : tipo === "2"
              ? "fundo1.svg"
              : "fundo2.svg"
          })`,
          backgroundPositionX: "50%",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",

          width: 600,
          height: 580,
        }}
      >
        <Image
          src={imageSrc}
          width={250}
          height={250}
          alt="foto de perfil"
          className="mb-5 z-40"
          style={{
            borderRadius: "30%",
          }}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="z-40"
        >
          <h1 className="w-full max-w-xs text-3xl font-bold text-center mb-2 text-white">
            {nome}
          </h1>
          <h2 className="w-full max-w-xs text-xl text-center font-semibold text-gray-300 mb-3">
            {cargo}
          </h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <a
              href={linkedin}
              target="_blank"
              className="mr-2 hover:scale-110 transition-transform duration-300"
            >
              <Linkedin />
            </a>
            <a
              href={github}
              target="_blank"
              className="ml-2 hover:scale-110 transition-transform duration-300"
            >
              <Github />
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Card;
