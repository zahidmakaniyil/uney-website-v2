import Image from "next/image";
import OurStoryImage from "@/assets/images/our-story.png";
import OurStoryImageMobile from "@/assets/images/our-story-mobile.png";

export interface AboutContainerProps {
    heading: string;
    subHeading: string;
    ourVisionHeading: string;
    ourMissionHeading: string;
    ourVisionSubHeading: string;
    ourMissionSubHeading: string;
}

export default function About({
    heading,
    subHeading,
    ourVisionHeading,
    ourMissionHeading,
    ourVisionSubHeading,
    ourMissionSubHeading,
}: AboutContainerProps) {
    return (
        <section
            id="about"
            className="pt-[32px] md:pt-[50px] md:pb-[48px] bg-white md:pb-0 pt-[64px] md:pt-[100px]"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-[40%_56%] gap-[32px] lg:gap-12 items-center">
                    {/* Left Column - Our Story */}
                    <div className="self-start">
                        <h2 className="section-title font-josefin text-heading text-center md:text-start">
                            {heading}
                        </h2>
                    </div>

                    {/* Right Column - Image and Vision/Mission */}
                    <div className="">
                        {/* Office Image */}
                        <div className="relative mb-[32px] md:flex md:flex-col md:gap-[48px] md:mb-[48px]">
                            <div className="mb-[32px] md:mb-0">
                                <p className="text-gray-600 our-story-description text-center md:text-start">
                                    {subHeading}
                                </p>
                            </div>
                            <div className=" rounded-xl overflow-hidden">
                                {/* Mobile Image */}
                                <Image
                                    src={OurStoryImageMobile}
                                    alt={heading}
                                    width={353}
                                    height={235.33}
                                    className="w-full h-full object-cover md:hidden"
                                />
                                {/* Desktop Image */}
                                <Image
                                    src={OurStoryImage}
                                    alt={heading}
                                    width={687}
                                    height={229}
                                    className="w-full h-full object-cover hidden md:block"
                                />
                            </div>
                        </div>

                        {/* Vision and Mission */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px] text-center md:text-start">
                            <div className="flex flex-col gap-[16px]">
                                <h3 className="text-heading vision-mission-title font-josefin">
                                    / {ourVisionHeading}
                                </h3>
                                <p className="text-secondary vision-mission-description">
                                    {ourVisionSubHeading}
                                </p>
                            </div>
                            <div className="flex flex-col gap-[16px]">
                                <h3 className="text-heading vision-mission-title font-josefin">
                                    / {ourMissionHeading}
                                </h3>
                                <p className="text-secondary vision-mission-description">
                                    {ourMissionSubHeading}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[1px] bg-[#DDDFE3] mx-[20px] mt-[48px] md:max-w-7xl mx-auto"></div>
        </section>
    );
}
