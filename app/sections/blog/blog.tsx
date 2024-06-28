import BlogCard from "@/app/components/blogCard";
import { PageBreak } from "@/app/components/SVGicons";
import prisma from "@/lib/prisma";

async function getArticles() {
  const articles = await prisma.article.findMany({
    take: 5,
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
      {/* A gente vai precisar de uma função map com critério de post mais recente aqui
      vou deixar um placeholder por enquanto */}
      {articles.map((article) => (
        <BlogCard
          key={article.id}
          id={article.id}
          title={article.title}
          author={article.author}
          createdAt={article.createdAt}
          content={article.content}
        />
      ))}
    </section>
  );
}
