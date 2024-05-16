"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";
import CardCases from "./cardCases";

{
  /*As imagens para serem usadas nesse cases devem ter uma resolução de 800x450 na proporção de 16:9 para caber no carrossel perfeitamente*/
}

function CasesCarousel() {
  return (
    <div className="bg-transparent rounded-lg shadow-xl">
      <Carousel
        pauseOnHover={true}
        leftControl={
          <Image
            src="/left.svg"
            width={100}
            height={100}
            alt="left"
            className="absolute right-3 md:right-12 scale-150"
          />
        }
        rightControl={
          <Image
            src="/right.svg"
            width={100}
            height={100}
            alt="left"
            className="absolute left-3 md:left-12 scale-150"
          />
        }
      >
        <Image
          src={"/daniel.png"}
          width={800}
          height={450}
          alt="case"
          className=""
        />
        <Image
          src={"/mulher.png"}
          width={800}
          height={450}
          alt="case"
          className=""
        />
        <CardCases imgSrc={"/case_test.svg"} />
      </Carousel>
    </div>
  );
}

export default CasesCarousel;
