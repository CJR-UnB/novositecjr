"use client";

import HeaderAlt from "@/app/sections/headerAlt/headerAlt";

import { useEffect, useState } from "react";

export default function EditArticle({ params }: { params: any }) {
  const [article, setArticle] = useState<any>(null);

  // Fetch the specific article based on the id
  useEffect(() => {
    async function fetchArticle() {
      try {
        const response = await fetch(`/api/articles/edit?id=${params.id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch article");
        }
        const article = await response.json();
        setArticle(article);
      } catch (error) {
        console.log("Erro ao buscar artigos:", error);
      }
    }

    fetchArticle();
  }, [params.id]);

  if (!article) {
    return <p>Article not found</p>;
  }

  return (
    <main>
      <HeaderAlt />
      <div>{article.content}</div>
    </main>
  );
}
