"use client";

import { ArticleData } from "@/app/api/articles/route";
import Tiptap from "@/app/components/TipTap/TipTap";
import HeaderAlt from "@/app/sections/headerAlt/headerAlt";
import Cookies from "js-cookie";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import TailSpin from "react-loading-icons/dist/esm/components/tail-spin";

export default function EditArticle() {
  const { id } = useParams();
  const [article, setArticle] = useState<ArticleData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchArticle = async () => {
      if (id && typeof id === "string") {
        try {
          const response = await fetch(`/api/articles/${id}`);
          if (!response.ok) {
            throw new Error("Failed to fetch article");
          }
          const data = await response.json();
          setArticle(data);
        } catch (error) {
          setError("Erro ao encontrar artigo");
        } finally {
          setLoading(false);
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

  if (loading) {
    return (
      <main className="flex flex-col">
        <HeaderAlt />
        <h1 className="text-center mt-10 font-semibold text-xl">
          Edite seu artigo para o blog da CJR aqui
        </h1>
        <TailSpin
          stroke="#27BD80"
          strokeWidth={2}
          className="self-center mt-5"
        />
      </main>
    );
  }

  if (error) {
    return (
      <main className="flex flex-col">
        <HeaderAlt />
        <h1 className="text-center mt-10 font-semibold text-xl">{error}</h1>
      </main>
    );
  }

  return (
    <main className="flex flex-col">
      <HeaderAlt />
      <h1 className="text-center mt-10 font-semibold text-xl">
        Edite seu artigo para o blog da CJR aqui
      </h1>
      {article ? (
        <>
          <div className="flex flex-col self-center w-fit mt-10">
            <h2 className="text-mutedSpaceblue">Insira o título aqui.</h2>
            <input
              type="text"
              className="border-2 border-black mt-1 p-2 text-4xl font-medium rounded-md self-center"
              defaultValue={article.title}
              id="title"
            />
            <h2 className="text-mutedSpaceblue mt-3">Insira o autor aqui.</h2>
            <input
              type="text"
              className="border-2 border-black mt-1 p-2 text-xl rounded-md self-center w-full"
              defaultValue={article.author}
              id="author"
            />
          </div>
          <div className="p-10">
            <Tiptap content={article.content} onChange={handleChange} />
          </div>
        </>
      ) : (
        <p className="text-center mt-10">Artigo não encontrado.</p>
      )}
    </main>
  );
}
