"use client";

import { findUnique } from "@/app/lib/artigos";
import { Artigo } from "@/app/sections/blog/blog";
import HeaderAlt from "@/app/sections/headerAlt/headerAlt";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { TailSpin } from "react-loading-icons";

export default function Page() {
  const { id } = useParams();
  const pageId = Number(id);

  const [artigo, setArtigo] = useState<Artigo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    findUnique(pageId).then((response) => {
      setArtigo(response);
      setLoading(false);
    });
  });

  console.log(artigo);

  const formatedDate = artigo
    ? new Intl.DateTimeFormat("pt-BR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }).format(new Date(artigo.criadoEm))
    : "";

  const formatedModificado = artigo
    ? new Intl.DateTimeFormat("pt-BR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }).format(new Date(artigo.atualizadoEm))
    : "";

  return (
    <main>
      <HeaderAlt />

      {loading ? (
        <TailSpin
          stroke="#27BD80"
          strokeWidth={2}
          className="self-center my-2"
        />
      ) : (
        <article>
          <h1>{artigo?.titulo}</h1>
          <h2>Tempo de leitura</h2>
          <div>
            <h2>{artigo?.autor.nome}</h2>
            <h2>{formatedDate}</h2>
          </div>
          <p dangerouslySetInnerHTML={{ __html: artigo?.conteudo || "" }}></p>
        </article>
      )}
    </main>
  );
}
