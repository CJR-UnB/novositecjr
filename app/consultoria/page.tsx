"use client";
import React, { useState } from "react";
import Link from "next/link";
import Orcamento from "@/app/components/botaoOrcamento";
import { CJR, ArrowSquare, PageBreak, WhatsappImage } from "@/app/components/SVGicons";
import Footer from "../sections/footer";

const Consultoria: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const whatsappHref =
    "https://wa.me/556181539581?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20consultoria";
  return (
    <>
      <header className="sticky top-0 z-30 bg-spaceblue text-gray-300 flex items-center justify-between px-4 py-3 shadow-md">
        <Link href="/" className="flex items-center" aria-label="Voltar à home">
          <CJR />
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-white p-2 rounded-full"
            aria-label="Voltar à home (top)"
          >
            <ArrowSquare />
          </Link>
        </div>
      </header>

      <main className="mt-10 flex flex-col items-center px-5 lg:px-8" id="consultoria">
        <h1 className="text-center font-bold text-4xl">Consultoria Especializada</h1>
        <PageBreak />

      <div className="max-w-3xl lg:max-w-5xl xl:max-w-6xl w-full bg-white rounded-xl shadow-lg p-8 lg:p-12 text-center">
        <p className="text-lg sm:text-xl mb-5 px-5 text-mutedSpaceblue font-normal text-center">
          Soluções estratégicas e consultoria especializada para impulsionar o crescimento do seu negócio
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Orcamento className="flex items-center gap-3 bg-green text-black h-12 px-6 rounded-lg text-lg w-fit font-normal" />
          <a
            href="https://wa.me/556181539581?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20consultoria"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-aquagreen text-black h-12 px-6 rounded-lg text-lg w-fit font-normal transition-all duration-200 ease-out transform hover:scale-110 active:scale-95"
          >
            <WhatsappImage className="h-6 w-6" />
            <span className="font-medium">Fale pelo WhatsApp</span>
          </a>
        </div>

        <div className="mt-8 mx-auto text-center text-base leading-relaxed space-y-6">
          <p>
            Nossas consultorias especializadas abrangem otimização e aprimoramento de sites,
            aplicativos móveis, E-commerce e PWA. Identificamos oportunidades de melhoria e
            implementamos soluções personalizadas para maximizar o impacto de sua presença online.
          </p>

          <h2 className="font-semibold text-xl">Nossa abordagem</h2>
          <p>
            Começamos com uma análise completa do seu negócio, público e produtos. Em seguida,
            definimos prioridades com base em métricas reais, usabilidade e potencial de conversão.
            As entregas incluem diagnóstico, roadmap de melhorias, protótipos (quando aplicável)
            e suporte na implementação técnica.
          </p>

          <h2 className="font-semibold text-xl">Áreas atendidas</h2>
          <ul className="list-disc list-inside mx-auto max-w-xl lg:max-w-2xl">
            <li>Otimização de performance e SEO técnico</li>
            <li>Melhoria de UX/UI e acessibilidade</li>
            <li>Arquitetura e integração de sistemas</li>
            <li>Estratégia de E-commerce e funil de vendas</li>
            <li>PWA: confiabilidade offline e engajamento</li>
          </ul>

          <h2 className="font-semibold text-xl">Benefícios</h2>
          <p>
            Implementações orientadas por dados, aumento de conversões, redução de fricção para
            usuários e maior escalabilidade das suas soluções digitais. Trabalhamos para entregar
            resultados mensuráveis e sustentáveis.
          </p>

          <h2 className="font-semibold text-xl">Como trabalhamos</h2>
          <ol className="list-decimal list-inside mx-auto max-w-xl lg:max-w-2xl">
            <li>Diagnóstico e levantamento de requisitos</li>
            <li>Planejamento estratégico e roadmap</li>
            <li>Design e prototipagem (quando necessário)</li>
            <li>Implementação e otimização contínua</li>
            <li>Medição de resultados e ajustes</li>
          </ol>

          <p>
            Quer discutir um projeto? Clique em "Solicitar Orçamento" para conversar com a nossa
            equipe e receber uma proposta personalizada.
          </p>
        </div>

        <div className="mt-8 flex gap-4 justify-center items-center">
          <a
            href="https://wa.me/556181539581?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20consultoria"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-aquagreen text-black h-12 px-6 rounded-lg text-lg w-fit font-normal transition-all duration-200 ease-out transform hover:scale-110 active:scale-95"
          >
            <WhatsappImage className="h-6 w-6" />
            <span className="font-medium">Conversar no WhatsApp</span>
          </a>

          <Link
            href="/"
            aria-label="Voltar à home"
            className="flex items-center gap-2 bg-aquagreen text-black h-12 px-6 rounded-lg text-lg w-fit font-normal transition-all duration-200 ease-out transform hover:scale-110 active:scale-95"
          >
            <ArrowSquare className="text-black" />
            <span className="font-medium">Voltar à Home</span>
          </Link>
        </div>
      </div>

      <div className="fixed bottom-4 right-4 z-40 flex items-center">
        <div
          className={`text-black bg-offwhite h-fit p-3 mr-3 rounded-3xl shadow-xl text-lg transition-all duration-200 transform ${
            isHovered ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          Precisa de ajuda?
        </div>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <WhatsappImage className="h-14 w-14 md:h-20 md:w-20 lg:h-24 lg:w-24 z-50" />
        </a>

        
      </div>
      
    </main>
    <Footer />
    </>
  );
};

export default Consultoria;
