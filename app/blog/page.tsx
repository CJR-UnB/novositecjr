"use client";

import { useEffect, useState } from "react";
import { TailSpin } from "react-loading-icons";
import BlogCard from "../components/blogCard";
import Orcamento from "../components/botaoOrcamento";
import { Facebook, Instagram2, Linkedin } from "../components/SVGicons";
import { findAll } from "../lib/artigos";
import { Artigo } from "../sections/blog/blog";
import HeaderAlt from "../sections/headerAlt/headerAlt";

export default function Page() {
  const [artigos, setArtigos] = useState<Artigo[]>([]);
  const [visibleArtigos, setVisibleArtigos] = useState<Artigo[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadedArticlesCount, setLoadedArticlesCount] = useState(3); // Starting with 3 articles
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    findAll().then((response) => {
      setArtigos(response);
      setVisibleArtigos(response.slice(0, 3)); // Initially show 3 articles
      setLoading(false);
    });
  }, []);

  const loadMore = () => {
    const nextCount = loadedArticlesCount + 6;
    const nextArticles = artigos.slice(0, nextCount);

    setVisibleArtigos(nextArticles);
    setLoadedArticlesCount(nextCount);

    // If there are no more articles to load, disable the button and show a message
    if (nextArticles.length >= artigos.length) {
      setHasMore(false);
    }
  };

  return (
    <main className="flex flex-col">
      <HeaderAlt />
      <section className="flex flex-col w-fit self-center p-5">
        <h1 className="text-5xl font-bold ">Blog da CJR</h1>
        <h2 className="text-xl font-medium opacity-60">
          Fique por dentro das notícias e novidades do mundo da tecnologia!
        </h2>
      </section>
      <section className="">
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
        <section className="flex lg:flex-row flex-col justify-center lg:gap-20">
          <div className="flex flex-col items-center">
            <h1 className="self-start text-3xl font-semibold mb-3 mx-5 lg:mx-0">
              Confira nossas postagens!
            </h1>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 justify-center w-fit">
              {visibleArtigos.map((article) => (
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
            {hasMore ? (
              <button
                onClick={loadMore}
                className="bg-spaceblue py-1 px-2 mt-3 font-medium mb-10 lg:mb-0 text-xl text-white rounded-lg shadow-md hover:scale-110 duration-200 w-fit"
              >
                Carregar mais
              </button>
            ) : (
              <h2 className="text-center text-spaceblue/80 font-mdium text-lg mt-2 mb-4">
                Não existem mais artigos para serem carregados
              </h2>
            )}
          </div>
          <div className="flex flex-col items-center">
            <article className="w-[20rem]">
              <h1 className="text-2xl font-semibold mb-2">
                Confira nosso LinkedIn
              </h1>
              <a href="https://www.linkedin.com/company/cjr-unb/">
                <img src="" alt="Aqui vai vir uma imagem" />
              </a>
            </article>
            <article className="w-[20rem]">
              <h1 className="text-2xl font-semibold mb-2">
                Acompanhe nossas redes sociais
              </h1>
              <div className="items-center flex justify-center mb-5 md:mb-0">
                <button className="hover:scale-110 transition-all duration-300">
                  <a href="https://www.instagram.com/cjr.unb/" target="_blank">
                    <Instagram2 />
                  </a>
                </button>
                <button className="ml-6 hover:scale-110 transition-all duration-300">
                  <a
                    href="https://www.linkedin.com/company/cjr-unb/mycompany/"
                    target="_blank"
                  >
                    <Linkedin />
                  </a>
                </button>
                <button className="ml-6 hover:scale-110 transition-all duration-300">
                  <a href="https://www.facebook.com/unb.cjr/" target="_blank">
                    <Facebook />
                  </a>
                </button>
              </div>
            </article>
            <div className="h-1 bg-spaceblue my-6 rounded-full w-[20rem]"></div>
            <article className="bg-aquagreen/10 rounded-lg shadow-md flex flex-col w-[20rem] p-5 mb-5 lg:mb-0">
              <h1 className="text-2xl font-semibold mb-2">
                Entre em contato conosco!
              </h1>
              <p className="text-mutedSpaceblue mb-2">
                Está procurando por uma solução tecnológica para sua empresa? A
                CJR tem o que você precisa!
              </p>
              <Orcamento className="flex bg-aquagreen p-1 hover justify-center items-center rounded-lg" />
            </article>
          </div>
        </section>
      </section>
    </main>
  );
}
