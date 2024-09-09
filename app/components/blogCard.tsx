import { useRouter } from "next/navigation";

export default function BlogCard({
  titulo,
  conteudo,
  data,
  modificadoEm,
  autor,
  id,
}: {
  titulo: string;
  conteudo: string;
  data: Date;
  modificadoEm: Date;
  autor: string;
  id: number;
}) {
  const formatedDate = new Intl.DateTimeFormat("pt-BR", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  }).format(new Date(data));

  const router = useRouter();

  return (
    <article className="bg-white rounded-lg shadow-md p-3 text-center items-center flex flex-col w-[20rem] border-[1px] border-spaceblue/60">
      <h2 className="opacity-75 mb-1">{formatedDate}</h2>
      <h1 className="font-semibold text-2xl mb-2">{titulo}</h1>

      <p
        className="text-mutedSpaceblue mb-2"
        dangerouslySetInnerHTML={{ __html: conteudo.substring(0, 200) + "..." }}
      ></p>
      <p
        className="border-[1px] border-spaceblue/40 hover:scale-110 duration-200 ease-in-out cursor-pointer rounded-xl bg-spaceblue text-white text-center p-2 w-fit"
        onClick={() => router.push(`/blog/${id}`)}
      >
        Leia mais
      </p>
    </article>
  );
}
