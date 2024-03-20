import { motion } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Calendar, Code, Face, Members } from "../../SVGicons";
import Counter from "./contadorProp";

const Contador: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 1, // Trigger when 50% of the component is visible
    onChange: setIsVisible, // Update isVisible state when component is in view
  });

  return (
    <motion.div ref={ref} className="w-full h-fit bg-aquagreen">
      <div className="flex flex-col md:flex-row justify-around p-5 text-2xl font-semibold">
        <div className="text-center">
          <Calendar />
          <Counter duration={60} target={23} />
          <h1>Anos de funcionamento</h1>
        </div>
        <div className="text-center">
          <Code />
          <Counter duration={20} target={60} />
          <h1>Projetos recentes</h1>
        </div>
        <div className="text-center">
          <Members />
          <Counter duration={20} target={54} />
          <h1>Membros ativos</h1>
        </div>
        <div className="text-center">
          <Face />
          <Counter duration={10} target={100} />
          <h1>Nota de satisfação</h1>
        </div>
      </div>
    </motion.div>
  );
};

export default Contador;
