"use client";
import Image from "next/image";
import { Carousel } from "keep-react";

export const CarouselComponent = () => {
    return (
        <Carousel className="min-h-screen w-full bg-gradient-to-r from-sky-600 via-sky-400 to-sky-600" indicatorsType="ring" indicators={true}>
            
            <div className="container mx-auto md:flex justify-between items-center">
                <div>
                    <h1 className="text-3xl md:text-7xl text-white font-bold text-center">Message (বার্তা)</h1>
                </div>
                <div>
                    <Image className="h-96 w-96 px-5"
                        src="/img/services/message.svg"
                        alt="slider-1"
                        height={400}
                        width={910}
                    />
                </div>
            </div>
            <div className="container mx-auto md:flex justify-between items-center">
                <div>
                    <h1 className="text-3xl md:text-7xl text-white font-bold text-center">Sound (শব্দ)</h1>
                </div>
                <div>
                    <Image className="h-96 w-96 px-5"
                        src="/img/services/sound.svg"
                        alt="slider-1"
                        height={400}
                        width={910}
                    />
                </div>
            </div>
            <div className="container mx-auto md:flex justify-between items-center">
                <div>
                    <h1 className="text-3xl md:text-7xl text-white font-bold text-center">Torongo (তরঙ্গ)</h1>
                </div>
                <div>
                    <Image className="h-96 w-96 px-5"
                        src="/img/services/wave.svg"
                        alt="slider-1"
                        height={400}
                        width={910}
                    />
                </div>
            </div>
        </Carousel>
    )
}