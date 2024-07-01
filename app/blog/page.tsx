// Code Generated with love
import prisma from "@/lib/prisma";
import BlogCard from "../components/blogCard";
import { PageBreak } from "../components/SVGicons";
import HeaderAlt from "../sections/headerAlt/headerAlt";

async function getArticles() {
  const articles = await prisma.article.findMany({
    orderBy: {
      id: "desc",
    },
  });
  return articles;
}

export default async function Blog() {
  const articles = await getArticles();
  return (
    <main className="text-spaceblue">
      <HeaderAlt />
      <article>
        <h1 className="text-center text-spaceblue font-bold text-4xl md:text-5xl mt-10">
          BLOG DA CJR
        </h1>
        <PageBreak />
        <p className="text-center text-xl text-mutedSpaceblue">
          Fique por dentro das novidadade na área da tecnologia e das notícias e
          conquistas da CJR
        </p>
      </article>
      <div className="grid grid-cols-1 md:grid-cols-3 ">
        {articles.map((article) => (
          <BlogCard
            key={article.id}
            id={article.id}
            title={article.title}
            author={article.author}
            createdAt={article.createdAt}
            content={article.content}
            updatedAt={article.updatedAt}
          />
        ))}
      </div>
    </main>
  );
}
