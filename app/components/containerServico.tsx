export default function ServiceBox({
  icone,
  tipo,
  descricao,
}: {
  icone: string;
  tipo: string;
  descricao: string;
}) {
  return (
    <>
      <div className="flex flex-col py-2 px-2 items-center justify-center border-none border-2  bg-slate-50 rounded h-32 md:max-w-96 md:h-72">
        <div className="items-center justify-center">
          <i className="flex items-center justify-center size-10 md:size-16">
            {icone}
          </i>
        </div>

        <div>
          <p className="text-center p-2 text-sm text-spaceblue md:text-3xl">
            {tipo}
          </p>
        </div>

        <div className="h-72 hidden md:block md:text-warp">
          <p className="text-center text-wrap text-navyblue text-lg font-normal ">
            {descricao}
          </p>
        </div>
        <p className="text-base text-green cursor-pointer hover:underline hover:text-aquagreen hover:duration-500 transition-all md:place-self-start md:pl-8 md:pb-3 ">
          Saiba mais!
        </p>
      </div>
    </>
  );
}
