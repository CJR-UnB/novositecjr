"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";
import CardDepoimento from "./cardDepoimentos";

function Depoimentos() {
  return (
    <section className="px-5 md:px-14">
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
        </Carousel>
      </div>
    </section>
  );
}

export default Depoimentos;
