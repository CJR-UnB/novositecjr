import BlogCard from "@/app/components/blogCard";
import { PageBreak } from "@/app/components/SVGicons";
import prisma from "@/lib/prisma";

async function getArticles() {
  try {
    const articles = await prisma.article.findMany({
      take: 3,
      orderBy: {
        id: "desc",
      },
    });
    return articles;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function Blog() {
  const articles = await getArticles();

  return (
    <section className="mt-20 items-center flex flex-col" id="blog">
      <h1 className="text-center text-spaceblue font-bold text-4xl md:text-5xl">
        CONHEÇA O BLOG DA CJR
      </h1>
      <PageBreak />
      {articles.length === 0 && (
        <h2 className="text-center text-spaceblue font-semibold text-2xl">
          Nenhum artigo encontrado
        </h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 mb-10">
        {articles.map((article) => (
          <BlogCard
            key={article.id}
            id={article.id}
            title={article.title}
            author={article.author}
            createdAt={article.createdAt}
            updatedAt={article.updatedAt}
            content={article.content}
          />
        ))}
      </div>
    </section>
  );
}
