import Image from "next/image";
import { PageBreak } from "../SVGicons";
import QuemSomosItem from "../quemSomosItem";
import Orcamento from "../botaoOrcamento";

const QuemSomos: React.FC = () => {
    return (
        <section className="pt-52 px-32" id="quem-somos">
            <h1 className=" text-navyblue font-bold text-4xl text-center">
                QUEM SOMOS
            </h1>
            <PageBreak />
            <div className="flex flex-col lg:flex-row gap-4 items-center lg:gap-28 lg:items-start justify-center">
                <div className="flex flex-row min-w-fit gap-4 max-w-[547px] lg:gap-8">
                    
                    <div className="h-[218px] w-[218px] lg:h-[400px] lg:w-[400px]">
                        <Image alt="..."  
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }} src="/quem_somos_1.png" />
                    </div>
                    
                </div>
                <div className="flex flex-col gap-8">
                    <h2 className="text-4xl font-bold">The standard Lorem Ipsum passage, used since the 1500s</h2>
                    <p className="opacity-100 text-mutedSpaceblue">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <Orcamento />
                </div>
                
            </div>
            
      </section>
    );
};

export default QuemSomos;