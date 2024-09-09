"use client";

import BlogCard from "@/app/components/blogCard";
import { PageBreak } from "@/app/components/SVGicons";
import { findAll } from "@/app/lib/artigos";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import TailSpin from "react-loading-icons/dist/esm/components/tail-spin";

export interface Artigo {
  id: number;
  titulo: string;
  conteudo: string;
  criadoEm: Date;
  atualizadoEm: Date;
  autorId: number;
  autor: {
    nome: string;
  };
}

export default function Blog() {
  const [artigos, setArtigos] = useState<Artigo[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    findAll().then((response) => {
      // Get the first 6 articles
      setArtigos(response.slice(0, 5));
      setLoading(false);
    });
  }, []);

  return (
    <section className="mt-20 items-center flex flex-col" id="blog">
      <h1 className="text-center text-spaceblue font-bold text-4xl md:text-5xl">
        CONHEÇA O BLOG DA CJR
      </h1>
      <PageBreak />
      <button
        onClick={() => router.push("/blog")}
        className="hover:cursor-pointer hover:scale-110 duration-200 ease-in-out rounded-lg shadow-md bg-aquagreen text-white px-3 py-2 text-xl font-medium mb-5"
      >
        Conheça nosso blog!
      </button>
      {loading ? (
        <TailSpin
          stroke="#27BD80"
          strokeWidth={2}
          className="self-center my-2"
        />
      ) : (
        artigos.length === 0 && (
          <h2 className="text-center text-spaceblue font-semibold text-2xl">
            Nenhum artigo encontrado
          </h2>
        )
      )}
      <div className="flex flex-wrap gap-5 mb-10 justify-center mx-5">
        {artigos.map((article) => (
          <BlogCard
            key={article.id}
            titulo={article.titulo}
            conteudo={article.conteudo}
            data={article.criadoEm}
            modificadoEm={article.atualizadoEm}
            autor={article.autor.nome}
            id={article.id}
          />
        ))}
      </div>
    </section>
  );
}
