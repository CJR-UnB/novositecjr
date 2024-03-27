import Image from "next/image";
import { PageBreak } from "../SVGicons";
import QuemSomosItem from "../quemSomosItem";
import Orcamento from "../botaoOrcamento";

const QuemSomos: React.FC = () => {
    return (
        <section className="mt-20 px-10 xl:px-32 2xl:px-72" id="quem-somos">
            <h1 className=" text-navyblue font-bold text-4xl text-center">
                QUEM SOMOS
            </h1>
            <PageBreak />
            <div className="flex flex-col justify-between lg:flex-row gap-8 items-center lg:gap-14 xl:gap-20  lg:items-start ">
                <div className="w-[100%] max-w-[450px] h-auto lg:min-w-[450px] lg:h-[450px] lg:w-[450px]">
                    <Image alt="..."  
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }} src="/quem_somos_1.png" />
                </div>
                <div className="flex flex-col gap-8 lg:w-[550px] h-[450px]">
                    <h2 className="text-2xl sm:text-4xl font-bold text-spaceblue">The standard Lorem Ipsum passage, used since the 1500s</h2>
                    <p className="opacity-100 text-mutedSpaceblue">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</p>
                    <div className="self-center lg:mt-auto lg:mb-auto">
                    <Orcamento />
                    </div>
                    
                </div>
                
            </div>
            
      </section>
    );
};

export default QuemSomos;