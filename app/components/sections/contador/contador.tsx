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
    <section className="">
      <motion.div ref={ref} className="w-full h-fit bg-aquagreen">
        <div className="flex flex-col md:flex-row justify-around p-5 text-2xl font-semibold">
          <div className="text-center z-40">
            <Calendar />
            <Counter duration={60} target={23} />
            <h1>Anos de funcionamento</h1>
          </div>
          <div className="text-center z-40">
            <Code />
            <Counter duration={20} target={60} />
            <h1>Projetos recentes</h1>
          </div>
          <div className="text-center z-40">
            <Members />
            <Counter duration={20} target={54} />
            <h1>Membros ativos</h1>
          </div>
          <div className="text-center z-40">
            <Face />
            <Counter duration={10} target={100} />
            <h1>Nota de satisfação</h1>
          </div>
        </div>
      </motion.div>
      <div id="base wave" className="w-full mt-">
      <svg width="100%" height="100%" className="rotate-180 -mt-1" viewBox="0 0 1368 58" fill="none" xmlns="http://www.w3.org/2000/svg"><path  d="M1368 16.47L1335.32 13.2149C1302.64 9.99729 1237.28 3.48718 1172.22 1.05524C1107.02 -1.37669 1042.26 0.269543 977.056 7.30345C912 14.3374 846.64 26.8338 781.584 28.3304C716.376 29.8269 651.624 20.3237 586.416 17.106C521.36 13.851 456 16.8441 390.944 19.725C325.736 22.5685 260.984 25.3372 195.776 25.6365C130.72 25.9358 65.3601 23.8406 32.6801 22.7556L0 21.708V58H32.6801C65.3601 58 130.72 58 195.776 58C260.984 58 325.736 58 390.944 58C456 58 521.36 58 586.416 58C651.624 58 716.376 58 781.584 58C846.64 58 912 58 977.056 58C1042.26 58 1107.02 58 1172.22 58C1237.28 58 1302.64 58 1335.32 58H1368V16.47Z" fill="#27BD80"></path></svg>
      </div>
    </section>
  );
};

export default Contador;
