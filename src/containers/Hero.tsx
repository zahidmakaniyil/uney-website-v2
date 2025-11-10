"use client";

import { ArrowDown } from "lucide-react";

export interface HeroContainerProps {
    headingLines: string[];
    subHeadingLines: string[];
    buttonText: string;
    videoUrl: string;
}

export default function Hero({
    headingLines,
    subHeadingLines,
    buttonText,
    videoUrl,
}: HeroContainerProps) {
    const scrollToNext = () => {
        const nextSection = document.getElementById("solutions");
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
        >
            {/* Background Video */}
            <div className="absolute inset-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* Video overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 w-full px-[32px] lg:px-0 text-center text-white">
                <div className="mx-auto flex flex-col gap-[24px] md:gap-[32px]">
                    <h1 className="hero-heading ">
                        {headingLines[0]}
                        <br className="block md:hidden" /> {headingLines[1]}
                    </h1>

                    <p className="hero-paragraph text-gray-200 mx-auto">
                        {subHeadingLines[0]}
                        <br className="block lg:hidden" />
                        {subHeadingLines[1]}
                        <br className="block lg:hidden" />
                        {subHeadingLines[2]}
                        <br />
                        {subHeadingLines[3]}
                    </p>
                </div>
            </div>
            <div className="absolute bottom-[48px] left-0 right-0 flex flex-col items-center">
                <div className="flex flex-col items-center">
                    <button
                        aria-label="Scroll to next section"
                        onClick={scrollToNext}
                        className="animate-bounce inline-flex items-center  bg-transparent text-white py-[10px] font-semibold cursor-pointer gap-[8px]"
                    >
                        <span className="discover-button-text">{buttonText}</span>
                        <div className="">
                            <ArrowDown size={24} className="text-white" />
                        </div>
                    </button>
                    <div className="h-[1.5px] w-[61px] bg-white self-start ml-[0px]" />
                </div>
            </div>
        </section>
    );
}
