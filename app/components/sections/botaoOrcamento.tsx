import { ArrowSquare } from "../SVGicons";

const Orcamento: React.FC = () => {
  return (
    <>
      <a href="https://tally.so/r/3jeXOJ" target="_blank">
        <button className="flex bg-green items-center p-2 w-fit text-black hover:scale-110 transition-all duration-300">
          <h1 className="mr-2">Fazer um orçamento</h1>
          <ArrowSquare />
        </button>
      </a>
    </>
  );
};

export default Orcamento;
