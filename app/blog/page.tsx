"use client";

// Code Generated with love
import { useEffect, useState } from "react";
import TailSpin from "react-loading-icons/dist/esm/components/tail-spin";
import { ArticleData } from "../api/articles/route";
import BlogCard from "../components/blogCard";
import { PageBreak } from "../components/SVGicons";
import HeaderAlt from "../sections/headerAlt/headerAlt";

async function getArticles() {
  const response = await fetch("/api/articles");
  if (!response.ok) {
    throw new Error("Failed to fetch articles");
  }
  const articles = await response.json();
  return articles;
}

export default function Blog() {
  const [articles, setArticles] = useState<ArticleData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticles()
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <main className="flex flex-col">
        <HeaderAlt />
        <h1 className="text-center text-spaceblue font-bold text-4xl md:text-5xl mt-10">
          BLOG DA CJR
        </h1>
        <PageBreak />
        <p className="text-center text-xl text-mutedSpaceblue">
          Fique por dentro das novidadade na área da tecnologia e das notícias e
          conquistas da CJR
        </p>
        <TailSpin
          stroke="#27BD80"
          strokeWidth={2}
          className="self-center mt-5"
        />
      </main>
    );
  }

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
      {articles.length === 0 && (
        <h2 className="text-center text-spaceblue font-semibold text-2xl mt-5">
          Nenhum artigo encontrado
        </h2>
      )}
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
