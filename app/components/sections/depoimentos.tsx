"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";
import CardDepoimento from "../cardDepoimentos";

function Depoimentos() {
  return (
    <div className="mx-5 rounded-full shadow-xl mb-20">
      <Carousel
        pauseOnHover={true}
        leftControl={
          <Image src="/left.svg" width={30} height={30} alt="left" />
        }
        rightControl={
          <Image src="/right.svg" width={30} height={30} alt="left" />
        }
      >
        <CardDepoimento
          titulo="realmente bem efetiva"
          texto='"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus, purus at aliquam placerat, elit risus faucibus ante, id vehicula magna quam elementum orci. Phasellus facilisis eu dolor ut ultrices. Maecenas vitae tempor tortor. Etiam mattis justo eget pellentesque scelerisque. Integer placerat dignissim odio quis sagittis. Pellentesque sit amet lacinia erat. In hac habitasse platea dictumst."'
          imgSrc={"/rafael.png"}
          nome="Rafael"
          atividade="residente de um hospício"
        />
        <div className="flex h-full items-center justify-center bg-gray-400">
          Slide 2
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400">
          Slide 3
        </div>
      </Carousel>
    </div>
  );
}

export default Depoimentos;
