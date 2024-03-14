import { Key, useState, useEffect } from "react";

import Image from "next/image";
import { LeftArrow, RightArrow } from "./SVGicons";

interface CarouselProps {
    children: React.ReactNode;
    autoSlide: boolean;
    autoSlideInterval: number;
}

const Carousel: React.FC<CarouselProps> = ({children: slides, autoSlide = true, autoSlideInterval = 3000 }) => {
    const [curr, setCurr] = useState(0);

    const prev = () => setCurr((curr) => (curr === 0 ? slides!.length - 1 : curr - 1));

    const next = () => setCurr((curr) => (curr === slides!.length - 1 ? 0 : curr + 1));

    return (
        <div className="flex items-center pt-12">
            <button className="-mr-6 sm:mr-0 sm:pr-6 2xl:pr-20 z-10 h-fit " onClick={prev}>
                <LeftArrow />
            </button>
            <div className='overflow-hidden relative sm:min-w-[472px] max-w-[472px] min-w-min z-0 min-h-[230px]'>
                <div className='flex transition-transform ease-out duration-500 min-h-[230px]' style={{ transform: `translateX(-${curr * 100}%)` }}>
                    {slides}
                </div>
                
                <div className="absolute bottom-4 right-0 left-0">
                    <div className="flex items-center justify-center gap-2">
                    {slides.map((_: any, i: Key | null | undefined) => (
                        <div
                            key={i}
                            className={`
                            transition-all w-2 h-2 bg-aquagreen rounded-full
                            ${curr === i ? "" : "bg-gray-300"}
                            `}
                        />
                    ))}
                    </div>
                </div>
            </div>
            <button className="-ml-6 sm:ml-0 sm:pl-6 2xl:pl-20 z-10 h-fit" onClick={next}>
                <RightArrow />
            </button>
        
        </div>
        
    );
};

export default Carousel;