import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface TeamContainerProps {
    heading: string;
    subHeading: string;
    buttonText: string;
    buttonLink: string;
}

export default function Team({
    heading,
    subHeading,
    buttonText,
    buttonLink,
}: TeamContainerProps) {
    return (
        <section className="pt-[48px] pb-[64px] md:pb-[100px] md:pt-[0px] bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-[40%_56%] gap-[32px] items-center">
                    {/* Left Column */}
                    <div className="self-start">
                        <h2 className="section-title font-josefin text-heading text-center md:text-start">
                            {heading}
                        </h2>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-[20px]">
                        <div className="relative">
                            <p className="text-secondary text-center md:text-start our-story-description">
                                {subHeading}
                            </p>
                        </div>

                        <div className="text-center md:text-start">
                            <Link
                                href={buttonLink}
                                className="inline-flex items-center  bg-transparent border-1 border-[#2E3038]  transition-all duration-300 rounded-[8px] py-[10px] px-[16px] gap-[8px] hover:bg-primary hover:text-white  hover:border-primary"
                            >
                                <span className="team-button-text">{buttonText}</span>
                                <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
