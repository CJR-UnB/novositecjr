import BlogCard from "@/app/components/blogCard";
import { PageBreak } from "@/app/components/SVGicons";
import prisma from "@/lib/prisma";

async function getArticles() {
  const articles = await prisma.article.findMany({
    take: 3,
    orderBy: {
      id: "desc",
    },
  });
  return articles;
}

export default async function Blog() {
  const articles = await getArticles();

  return (
    <section className="mt-20 items-center flex flex-col" id="blog">
      <h1 className="text-center text-spaceblue font-bold text-4xl md:text-5xl">
        CONHEÇA O BLOG DA CJR
      </h1>
      <PageBreak />
      <div className="grid grid-cols-1 md:grid-cols-3 ">
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
