"use client";

import BlogCard from "@/app/components/blogCard";
import HeaderAlt from "@/app/sections/headerAlt/headerAlt";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface ArticleData {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: Date;
  updatedAt: Date;
}

export default function BlogAdmin() {
  const [articles, setArticles] = useState<ArticleData[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/articles");
        if (!response.ok) {
          throw new Error("Erro ao buscar artigos");
        }
        const fetchedArticles: ArticleData[] = await response.json();
        setArticles(fetchedArticles);
      } catch (error) {
        console.error(error);
      }
    };

    const accessToken = Cookies.get("accessToken");
    if (!accessToken) {
      router.push("/admin/auth");
    } else {
      fetchData();
    }
  }, [router]);

  return (
    <>
      <main className="text-spaceblue">
        <HeaderAlt />
        <article>
          <h1 className="text-center text-spaceblue font-bold text-4xl md:text-5xl mt-10 mb-3">
            Admin do Blog da CJR
          </h1>
          <p className="text-center text-xl text-mutedSpaceblue">
            Aqui você pode visualizar, editar e apagar artigos presentes no blog
            da CJR.
          </p>
        </article>
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          {/* Render the articles here */}
          {articles.map((article) => (
            <BlogCard
              key={article.id}
              id={article.id}
              title={article.title}
              author={article.author}
              createdAt={article.createdAt}
              content={article.content}
              updatedAt={article.updatedAt}
              isAdmin={true}
            />
          ))}
        </div>
      </main>
    </>
  );
}
