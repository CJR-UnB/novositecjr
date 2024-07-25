"use client";

import { ArticleData } from "@/app/api/articles/route";
import Tiptap from "@/app/components/TipTap/TipTap";
import HeaderAlt from "@/app/sections/headerAlt/headerAlt";
import Cookies from "js-cookie";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditArticle() {
  const { id } = useParams();
  const [article, setArticle] = useState<ArticleData | null>(null);
  const router = useRouter();

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

  useEffect(() => {
    const accessToken = Cookies.get("accessToken");
    if (!accessToken) {
      router.push("/admin/auth");
    }
  }, [router]);

  const handleChange = (content: string) => {
    if (article) {
      setArticle({ ...article, content });
      console.log(article);
    }
  };

  return (
    <main className="flex flex-col">
      <HeaderAlt />
      <h1 className="text-center mt-10 font-semibold text-xl">
        Edite seu artigo para o blog da CJR aqui
      </h1>
      {article && (
        <>
          <div className="flex flex-col self-center w-fit mt-10">
            <h2 className="text-mutedSpaceblue">Insira o título aqui.</h2>
            <input
              type="text"
              className="border-2 border-black mt-1 p-2 text-4xl font-medium rounded-md self-center"
              placeholder={article.title}
              id="title"
            />
            <h2 className="text-mutedSpaceblue mt-3">Insira o autor aqui.</h2>
            <input
              type="text"
              className="border-2 border-black mt-1 p-2 text-xl rounded-md self-center w-full"
              placeholder={article.author}
              id="author"
            />
          </div>
          <div className="p-10">
            <Tiptap content={article.content} onChange={handleChange} />
          </div>
        </>
      )}
    </main>
  );
}

// primeiras 50 palavras do lorem ipsum
// Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec libero nec libero ultricies.
