import Image from "next/image";
import { PageBreak } from "../SVGicons";
import QuemSomosItem from "../quemSomosItem";

const QuemSomos: React.FC = () => {
    return (
        <section className="py-10 lg:px-40" id="quem-somos">
            <h1 className=" text-navyblue font-bold text-4xl text-center">
                QUEM SOMOS
            </h1>
            <PageBreak />
            <div className="flex flex-col lg:flex-row gap-4 items-center lg:gap-8 lg:items-start">
                <div className="flex flex-row min-w-fit gap-4 max-w-[547px] lg:gap-8">
                    
                    <div className="h-[218px] w-[218px] lg:h-[356px] lg:w-[354px]">
                        <Image alt="..."  
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }} src="/quem_somos_1.png" />
                    </div>
                    <div className="flex flex-col gap-4 lg:gap-8">
                        <QuemSomosItem bgcolor="navyblue"/>
                        <QuemSomosItem bgcolor="aquagreen"/>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-4 max-w-[335px] lg:max-w-[547px] lg:gap-8">
                    <QuemSomosItem src="/quem_somos_1.png"/>
                    <QuemSomosItem bgcolor="aquagreen"/>
                    <QuemSomosItem src="/quem_somos_1.png"/>
                    <div className="col-span-3 h-full">
                    Desde 1999 conquistamos clientes através de atendimentos e serviços de qualidade. Trabalhamos incansávelmente para agregar valor aos negócios de nossos clientes e estimular o cenário de empreendedorismo brasileiro, além de impactar diretamente o crescimento e evolução de nossos membros.
                    </div>
                </div>
                
            </div>
            
      </section>
    );
};

export default QuemSomos;