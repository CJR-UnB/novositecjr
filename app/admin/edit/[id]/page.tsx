"use client";

import { ArticleData } from "@/app/api/articles/route";
import HeaderAlt from "@/app/sections/headerAlt/headerAlt";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditArticle() {
  const { id } = useParams();
  const [article, setArticle] = useState<ArticleData | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      if (id && typeof id === "string") {
        try {
          const response = await fetch(`/api/articles/${id}`);
          const data = await response.json();
          setArticle(data);
        } catch (error) {
          console.error("Error fetching article:", error);
        }
      }
    };

    fetchArticle();
  }, [id]);

  return (
    <>
      <HeaderAlt />
      <main>{article?.content}</main>
    </>
  );
}
