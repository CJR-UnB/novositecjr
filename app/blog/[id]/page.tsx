import HeaderAlt from "@/app/sections/headerAlt/headerAlt";
import prisma from "@/lib/prisma";

interface ArticleType {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: Date;
  updatedAt: Date;
}

export default async function BlogPost({ params }: { params: any }) {
  const { id } = params;
  const article = await prisma.article.findUnique({
    where: { id: parseInt(id, 10) },
  });

  if (!article) {
    return <p>Article not found</p>;
  }

  if (!article) {
    return <p>Carregando...</p>;
  }

  const formatDate = (createdAt: Date) => {
    const months = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ];

    const date = new Date(createdAt);
    const day = date.getDate();
    const monthName = months[date.getMonth()];
    const year = date.getFullYear();

    return `${day} de ${monthName}, ${year}`;
  };
  const formattedDate = formatDate(article.createdAt);

  const estimateReadingTime = (content: string) => {
    // Average reading speed in words per minute
    const wordsPerMinute = 200; // Adjust as needed

    // Count words in the content
    const wordCount = content.split(/\s+/).length;

    // Calculate reading time in minutes
    const readingTime = Math.ceil(wordCount / wordsPerMinute);

    return `${readingTime} minuto${readingTime > 1 ? "s" : ""} de leitura`;
  };
  const readingTime = estimateReadingTime(article.content);

  return (
    <main className="text-spaceblue">
      <HeaderAlt />
      <section className="items-center self-center flex flex-col p-5">
        <div className="mb-7">
          <h1 className="text-spaceblue font-semibold text-4xl md:text-6xl mt-3 mb-3">
            {article.title}
          </h1>
          <div className="self-start text-mutedSpaceblue">
            <div className="flex items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#4a5a6b"
                viewBox="0 0 256 256"
                className="mr-1"
              >
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path>
              </svg>
              <p className="text-lg font-medium mr-3">
                {readingTime} · {formattedDate}
              </p>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="#4a5a6b"
                viewBox="0 0 256 256"
                className="mr-2"
              >
                <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
              </svg>
              <p className="text-lg font-medium">{article.author}</p>
            </div>
          </div>
        </div>
        <article className="px-5 md:w-2/3 text-justify text-xl text-black">
          <p>{article.content}</p>
        </article>
      </section>
    </main>
  );
}
