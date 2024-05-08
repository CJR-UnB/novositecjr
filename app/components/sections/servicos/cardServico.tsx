export default function ServiceBox({
  icone,
  tipo,
  descricao,
  descricao_back,
}: {
  icone: React.ReactNode;
  tipo: string;
  descricao: string;
  descricao_back: string;
}) {
  return (
    <div
      className="flex flex-col items-center justify-center border-solid border-2 border-navyblue 
    rounded-lg w-full  min-h-32 lg:h-auto lg:w-auto overflow-hidden"
    >
      <div className="w-[350px] h-72 bg-transparent cursor-pointer group rounded-lg perspective-1000">
        <div className="relative w-full h-full preserve-3d group-hover:rotate-y-180 duration-500">
          <div className="flex flex-col flex-wrap items-center pt-4 w-full h-full absolute overflow-hidden">
            <i className="flex items-center justify-center size-10 md:size-16">
              {icone}
            </i>

            <p className="text-center p-2 text-spaceblue text-2xl">{tipo}</p>

            <p
              className="text-center align-bottom text-pretty text-navyblue text-base font-normal px-12 md:px-18
            h-20 mb-8 md:text-base lg:text-lg "
            >
              {descricao}
            </p>
            <span className="text-sm mt-3 text-mutedSpaceblue font-medium md:hidden block">
              clique para saber mais
            </span>
            <span className="text-sm mt-3 text-mutedSpaceblue font-medium md:block hidden">
              Passe o mouse para saber mais
            </span>
          </div>

          {/* This is the back face of the card */}
          <div className="absolute flex rotate-y-180 w-full h-full max-w-96 min-w-16 bg-white text-navyblue rounded-md leading-6 overflow-hidden p-6 backface-hidden">
            {/* <div>
              <span className="font-bold text-2xl text-green">{tipo}</span>
            </div> */}

            <span className="self-center flex text-[18px] font-normal text-pretty">
              {descricao_back}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
