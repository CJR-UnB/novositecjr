interface CaseCardProps {
  titulo: string;
  subtitulo: string;
  imgSrc: string;
  imgAlt: string;
  descricao: string;
  link: string;
  invertido?: boolean;
}

const CaseCard: React.FC<CaseCardProps> = ({
  titulo,
  subtitulo,
  imgSrc,
  imgAlt,
  descricao,
  link,
  invertido,
}) => {
  return (
    <div className="m-2">
      <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border shadow-md">
        <div
          className={`hidden relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border ${
            invertido ? "hidden md:block" : "hidden"
          }`}
        >
          <img
            src={imgSrc}
            alt={imgAlt}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <div
            className={`block md:hidden m-0 w-full h-[20rem] shrink-0 overflow-hidden rounded-xl rounded-b-none bg-white bg-clip-border`}
          >
            <img src={imgSrc} alt={imgAlt} className="w-full object-cover" />
          </div>
          <div className="p-6">
            <h6 className="mb-2 block text-2xl font-semibold uppercase leading-relaxed  text-spaceblue antialiased">
              {titulo}
            </h6>
            <h4 className="mb-4 block  font-semibold leading-snug text-spaceblue/80 antialiased">
              {subtitulo}
            </h4>
            <p className="mb-8 block text-base font-normal leading-relaxed text-mutedSpaceblue antialiased">
              {descricao}
            </p>
            <a className="" href={link} target="_blank">
              <button
                className="flex select-none items-center gap-2 rounded-lg py-3 text-center text-xs font-bold uppercase text-aquagreen transition-all hover:bg-aquagreen/10 active:bg-aquagreen/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Veja o resultado
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  ></path>
                </svg>
              </button>
            </a>
          </div>
        </div>
        <div
          className={`relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-l-none bg-white bg-clip-border ${
            invertido ? "hidden" : "hidden md:block"
          }`}
        >
          <img
            src={imgSrc}
            alt={imgAlt}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default CaseCard;
