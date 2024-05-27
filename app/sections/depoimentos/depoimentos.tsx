"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";
import CardDepoimento from "./cardDepoimentos";

function Depoimentos() {
  return (
    <section className="px-5 md:px-14" id="depoimentos">
      <div className="md:mx-10 mb-20 bg-transparent rounded-lg shadow-xl">
        <Carousel
          pauseOnHover={true}
          leftControl={
            <Image
              src="/left.svg"
              width={100}
              height={100}
              alt="left"
              className="absolute right-3 md:right-10"
            />
          }
          rightControl={
            <Image
              src="/right.svg"
              width={100}
              height={100}
              alt="left"
              className="absolute left-3 md:left-10"
            />
          }
        >
          <CardDepoimento
            titulo="Sempre prontos para resolver qualquer problema"
            texto="Durante o decorrer de 1 ano, a equipe da CJR fez um ótimo trabalho construindo a nova plataforma do Selo Social de treinamento e qualificação de lideranças para o desenvolvimento de projetos alinhados aos Objetivos de Desenvolvimento Sustentável (ODS). O processo foi longo, por ser uma plataforma bastante complexa. No entanto, mesmo sendo um trabalho difícil, a equipe sempre foi muito prestativa, 
            estando disponível para responder dúvidas e resolver todos os conflitos necessários durante todo o desenvolvimento do projeto, o que resultou em uma entrega fidedigna ao que foi pedido desde o início quando foi solicitado o serviço"
            imgSrc="/carina.png"
            nome="Carina Giunco"
            atividade="Diretora do instituto Selo Social"
          />
          <CardDepoimento
            titulo="Networking valioso"
            texto='"Durante meu tempo na empresa júnior de computação, além de aplicar conceitos teóricos em projetos reais, fiz networking valioso e construí amizades duradouras. Desenvolvi habilidades de liderança e trabalho em equipe, aprofundando meu conhecimento técnico. A experiência foi crucial para minha formação, enfrentando desafios práticos e contribuindo significativamente para meu crescimento profissional."'
            imgSrc={"/depoimento_bruno.jpg"}
            nome="Bruno Sanguinetti"
            atividade="Ex-membro da CJR e Fundador da Startup Explanada dos Mistérios"
          />
          <CardDepoimento
            titulo="Habilidades profissionais e interpessoais"
            texto='"A CJR foi uma ótima experiência durante a minha graduação, me permitiu experienciar o mercado de trabalho e aprender linguagens e frameworks que eu não aprenderia durante o curso de ciência da computação. Além disso, fiz muitos amigos, dos quais sou próximo até hoje."'
            imgSrc={"/depoimento_victor.png"}
            nome="Victor Naves"
            atividade="Ex-membro da CJR"
          />
          <CardDepoimento
            titulo="Melhores anos da minha vida"
            texto='"Ser um dos líders da empresa com certeza foi um dos melhores anos da minha vida. Me fez entender que liderar um time não é só passar tarefas. É sobre entender um pouquinho de cada coisa e ajudar a galera a ter um ponto de partida. Depois, as coisas andam, o time acredita naquilo que está fazendo e todo mundo cresce junto.
            Tudo bem que, além da CJR, eu consegui um estágio, mas isso é o de menos eu acho. A CJR abriu minhas perspectivas e me possibilitou conhecer pessoas incríveis que estão comigo na caminhada até hoje. Enxergo, hoje, a possibilidade de empreender e gerar valor de uma forma diferente, que eu realmente gosto. Me juntei a quatro CJotinhas que também enxergam essa possibilidade e hoje temos uma Startup."'
            imgSrc={"/arthursilvaCJR.jpg"}
            nome="Arthur Silva"
            atividade="Ex-Líder de Talentos da CJR"
          />
        </Carousel>
      </div>
    </section>
  );
}

export default Depoimentos;
