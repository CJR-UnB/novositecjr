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
            titulo="realmente bem efetiva"
            texto='"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus, purus at aliquam placerat, elit risus faucibus ante, id vehicula magna quam elementum orci. Phasellus facilisis eu dolor ut ultrices. Maecenas vitae tempor tortor. Etiam mattis justo eget pellentesque scelerisque. Integer placerat dignissim odio quis sagittis. Pellentesque sit amet lacinia erat. In hac habitasse platea dictumst."'
            imgSrc={"/rafael.png"}
            nome="Rafael"
            atividade="residente de um hospício"
          />
          <CardDepoimento
            titulo="Isso é outro teste"
            texto='"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus, purus at aliquam placerat, elit risus faucibus ante, id vehicula magna quam elementum orci. Phasellus facilisis eu dolor ut ultrices. Maecenas vitae tempor tortor. Etiam mattis justo eget pellentesque scelerisque. Integer placerat dignissim odio quis sagittis. Pellentesque sit amet lacinia erat. In hac habitasse platea dictumst."'
            imgSrc={"/lagartixa.png"}
            nome="Largato"
            atividade="Ex-presidente da República"
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
