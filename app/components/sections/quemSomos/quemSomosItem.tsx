import Image from "next/image";

interface QuemSomosItemProps {
    bgcolor?: string
    src?: string
};

const QuemSomosItem: React.FC<QuemSomosItemProps> = ({bgcolor, src}) => {
    //let className = `w-[161px] h-[161px] ${bgcolor ? `bg-${bgcolor}` : `src-`}`; 
    var className = `h-[101px] w-[101px] lg:h-[161px] lg:w-[161px] bg-${bgcolor}`
    if (bgcolor)
        return (
            <div className={className}></div>
        );
    return (
        <div className="h-[101px] w-[101px] lg:h-[161px] lg:w-[161px]">
            <Image alt="..."  
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }} src="/quem_somos_1.png" />
        </div>
        
    )
  };
  
export default QuemSomosItem;  