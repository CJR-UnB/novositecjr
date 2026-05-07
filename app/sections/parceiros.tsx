import Image from "next/image";
import { PageBreak } from "../components/SVGicons";

const Parceiros: React.FC = () => {
  return (
    <section
      className="text-center px-5 text-spaceblue font-bold text-4xl mt-20"
      id="parceiros"
    >
      <h1>NOSSOS PARCEIROS</h1>

      <PageBreak />

      <div className="flex flex-nowrap items-center justify-between w-full gap-16 overflow-x-auto px-6 lg:px-16 py-4 scroll-smooth">
        
        <a
          href="https://brasiljunior.org.br"
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-w-[220px] items-center justify-center hover:scale-105 transition-transform duration-300"
        >
          <Image
            src="/brj.svg"
            width={220}
            height={120}
            alt="brasil junior"
            className="object-contain"
          />
        </a>

        <a
          href="https://concentrodf.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-w-[220px] items-center justify-center hover:scale-105 transition-transform duration-300"
        >
          <Image
            src="/concentro.svg"
            width={220}
            height={120}
            alt="concentro"
            className="object-contain"
          />
        </a>

        <a
          href="https://www.factoagencia.com.br/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-w-[220px] items-center justify-center hover:scale-105 transition-transform duration-300"
        >
          <Image
            src="/factologo.png"
            width={220}
            height={120}
            alt="facto"
            className="object-contain"
          />
        </a>

        <a
          href="https://lamparinadesign.com.br/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-w-[220px] items-center justify-center hover:scale-105 transition-transform duration-300"
        >
          <Image
            src="/lamp3.png"
            width={220}
            height={120}
            alt="lamparina"
            className="object-contain"
          />
        </a>

        <a
          href="https://www.cic.unb.br"
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-w-[220px] items-center justify-center hover:scale-105 transition-transform duration-300"
        >
          <Image
            src="/unb cic.svg"
            width={220}
            height={120}
            alt="unb cic"
            className="object-contain"
          />
        </a>

      </div>
    </section>
  );
};

export default Parceiros;