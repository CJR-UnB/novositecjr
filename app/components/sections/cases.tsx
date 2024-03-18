import Image from "next/image";
import Carousel from "../carousel";

const slides = [
    "/brj.svg",
    "/case_test.svg",
    "/case_test.svg",
    "/concentro.svg",
  ];

const Cases: React.FC = () => {
    return (
        <section className="my-32 flex xl:mx-10 2xl:mx-56 justify-between items-center text-center flex-col lg:flex-row" id="nossos-cases">
            <span className="text-center lg:text-left md:w-2/5">
                <h1 className=" text-navyblue font-bold text-4xl">
                    CASES
                </h1>
                <p className="pt-[15px]">
                    Algumas das soluções que desenvolvemos para solucionar os mais diversos problemas de nossos clientes.
                </p>
            </span>
            <div>
                <Carousel autoSlideInterval={3000} autoSlide={true} >
                    {[...slides.map((s, id) => (
                        <span className=" z-20 bg-gradient-to-b from-transparent via-transparent to-[#003366] min-h-fit min-w-fit" key={id}>
                            <Image className="z-0" alt="..." height={305} width={472} src={s} />
                        </span>
                    ))]}
                </Carousel>
            </div>
            

            
        </section>
        
    );
};

export default Cases;