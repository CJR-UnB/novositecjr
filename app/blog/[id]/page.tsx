import HeaderAlt from "@/app/sections/headerAlt/headerAlt";
import prisma from "@/lib/prisma";

export default async function BlogPost({ params }: { params: any }) {
  const { id } = params;
  const article = await prisma.article.findUnique({
    where: { id: parseInt(id, 10) },
  });

  if (!article) {
    return <p>Article not found</p>;
  }

  const date = new Date(article.createdAt);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const formattedDate = `${day}/${month}`;

  return (
    <main className="text-spaceblue">
      <HeaderAlt />
      <div className="self-center flex flex-col p-5">
        <h1 className="text-spaceblue font-semibold text-4xl md:text-5xl mt-3 mb-3">
          {article.title}
        </h1>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#001830"
            viewBox="0 0 256 256"
          >
            <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z"></path>
          </svg>
          <p className="text-lg font-medium mr-3">{formattedDate}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="#001830"
            viewBox="0 0 256 256"
          >
            <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
          </svg>
          <p className="text-lg font-medium">{article.author}</p>
        </div>
      </div>

      <article className="px-5">
        <p>{article.content}</p>
      </article>
    </main>
  );
}
