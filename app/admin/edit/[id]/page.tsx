"use client";

import Editor from "@/app/components/Editor";
import HeaderAlt from "@/app/sections/headerAlt/headerAlt";
import prisma from "@/lib/prisma";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";

interface Article {
  id: number;
  title: string;
  author: string;
  createdAt: Date;
  content: string;
  updatedAt: Date;
}

export default function EditArticle() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      return;
    }
    const fetchArticle = async () => {
      try {
        const article = await prisma.article.findUnique({
          where: { id: parseInt(id, 10) },
        });
        setArticle(article);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching article", error);
      }
    };

    fetchArticle();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!article) {
    return <p>Article not found</p>;
  }

  return (
    <main>
      <HeaderAlt />
      <Editor />
    </main>
  );
}
