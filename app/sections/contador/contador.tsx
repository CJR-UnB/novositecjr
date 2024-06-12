import { Calendar, Code, Face, Members } from "@/app/components/SVGicons";
import Counter from "./contadorProp";

const Contador: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const startingYear = 1999;
  const functioningYears = currentYear - startingYear;

  const activeMembers = 70;

  return (
    <section className="">
      <div className="w-full h-fit bg-aquagreen mb-4 z-20">
        <div className="flex flex-col md:flex-row justify-around p-5 text-2xl font-semibold">
          <div className="text-center z-20">
            <Calendar />
            <Counter duration={60} target={functioningYears} />
            <h1>Anos de funcionamento</h1>
          </div>
          <div className="text-center z-20">
            <Code className="flex justify-center mb-4" />
            <Counter projetos={true} duration={20} target={60} />
            <h1>Projetos finalizados</h1>
          </div>
          <div className="text-center z-20">
            <Members />
            <Counter duration={20} target={activeMembers} />
            <h1>Membros ativos</h1>
          </div>
          <div className="text-center z-20">
            <Face />
            <Counter duration={10} target={100} />
            <h1>Nota de satisfação</h1>
          </div>
        </div>
      </div>
      <div
        id="base wave"
        className="w-full absolute transform -translate-y-10 z-10"
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1368 726"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 222.141L38 215.425C76 208.838 152 195.406 228 203.414C304 211.421 380 240.609 456 238.93C532 237.251 608 204.447 684 171.126C760 137.805 836 103.709 912 107.454C988 111.07 1064 152.399 1140 154.336C1216 156.273 1292 118.819 1330 100.092L1368 81.3655V0H1330C1292 0 1216 0 1140 0C1064 0 988 0 912 0C836 0 760 0 684 0C608 0 532 0 456 0C380 0 304 0 228 0C152 0 76 0 38 0H0V222.141Z"
            fill="#F2F2F2"
          />
          <path
            d="M0 88.1888L38 87.9737C76 87.8662 152 87.436 228 108.945C304 130.455 380 173.904 456 192.295C532 210.793 608 204.34 684 180.464C760 156.696 836 115.398 912 94.4265C988 73.4548 1064 72.8095 1140 80.8756C1216 88.9416 1292 105.719 1330 114.215L1368 122.604V0H1330C1292 0 1216 0 1140 0C1064 0 988 0 912 0C836 0 760 0 684 0C608 0 532 0 456 0C380 0 304 0 228 0C152 0 76 0 38 0H0V88.1888Z"
            fill="#B5E8CB"
            fill-opacity="0.8"
          />
          <path
            d="M0 111.69L38 121.905C76 132.121 152 152.552 228 163.857C304 175.298 380 177.478 456 161.814C532 146.15 608 112.643 684 111.962C760 111.281 836 143.426 912 144.379C988 145.333 1064 114.823 1140 98.7501C1216 82.6777 1292 80.7708 1330 79.9535L1368 79.0001V0H1330C1292 0 1216 0 1140 0C1064 0 988 0 912 0C836 0 760 0 684 0C608 0 532 0 456 0C380 0 304 0 228 0C152 0 76 0 38 0H0V111.69Z"
            fill="#69CD99"
            fill-opacity="0.6"
          />
          <path
            d="M0 54.0321L38 49.2377C76 44.3672 152 34.7784 228 36.1482C304 37.5181 380 49.9987 456 54.7931C532 59.5875 608 56.8478 684 48.9333C760 41.0948 836 28.1576 912 30.4406C988 32.7237 1064 50.227 1140 57.0761C1216 63.9253 1292 60.1202 1330 58.2177L1368 56.3151V0H1330C1292 0 1216 0 1140 0C1064 0 988 0 912 0C836 0 760 0 684 0C608 0 532 0 456 0C380 0 304 0 228 0C152 0 76 0 38 0H0V54.0321Z"
            fill="#27BD80"
          />
        </svg>
      </div>
    </section>
  );
};

export default Contador;
