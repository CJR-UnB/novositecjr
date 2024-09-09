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
  }, []);

  const calculateReadingTime = (content: string) => {
    const wordsPerMinute = 200; // Average reading speed
    const wordCount = content.split(/\s+/).length;
    const readingTimeMinutes = Math.ceil(wordCount / wordsPerMinute);
    return readingTimeMinutes;
  };

  // Function to calculate days between two dates
  const daysSinceModified = (createdAt: string, updatedAt: string) => {
    const createdDate = new Date(createdAt);
    const updatedDate = new Date(updatedAt);

    const timeDifference = updatedDate.getTime() - createdDate.getTime(); // Difference in milliseconds
    const dayDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24)); // Convert milliseconds to days

    return dayDifference;
  };

  const formatedDate = artigo
    ? new Intl.DateTimeFormat("pt-BR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }).format(new Date(artigo.criadoEm))
    : "";

  const formatedModificado = artigo
    ? daysSinceModified(
        artigo.criadoEm.toString(),
        artigo.atualizadoEm.toString()
      )
    : null;

  return (
    <main className="">
      <HeaderAlt />

      {loading ? (
        <TailSpin
          stroke="#27BD80"
          strokeWidth={2}
          className="self-center my-2"
        />
      ) : (
        <article className="flex flex-col items-center w-screen text-spaceblue">
          <div className="w-full p-5 md:w-3/4 ">
            <h1 className="text-5xl font-semibold mt-5 mb-3">
              {artigo?.titulo}
            </h1>
            <div className="flex gap-1 items-center text-mutedSpaceblue mb-1">
              Escrito por:
              <h2 className="text-xl text-spaceblue font-medium">
                {artigo?.autor.nome}
              </h2>
            </div>
            <h2>
              {formatedDate} • Atualizado há {formatedModificado} dias
            </h2>
            <h2 className="text-mutedSpaceblue text-lg mb-1">
              Tempo de leitura:{" "}
              {artigo ? `${calculateReadingTime(artigo.conteudo)} min` : ""}
            </h2>
            <div
              className="article text-justify"
              dangerouslySetInnerHTML={{ __html: artigo?.conteudo || "" }}
            ></div>
          </div>
        </article>
      )}
    </main>
  );
}
