"use client";

import Image from "next/image";
import JobCard, { JobCardProps } from "@/components/JobCard";
import Cta, { CtaContainerProps } from "@/containers/Cta";
import Layout from "@/components/layout";

interface ContentData {
    heading: string;
    subHeading: string;
    heading2: string;
    image: string;
    imageMobile: string;
    jobOpenings: JobCardProps[];
}

interface CareerPageProps {
    contentData: ContentData;
    ctaData: CtaContainerProps;
}

const CareerPage = ({ contentData, ctaData }: CareerPageProps) => {
    const { heading, subHeading, heading2, image, imageMobile, jobOpenings } =
        contentData;
    return (
        <>
            <section className="mt-[72px] pb-[80px] pt-[40px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:flex flex flex-col gap-[48px]">
                    <h2
                        id="featured-article"
                        className="text-primary resources-page-title "
                    >
                        {heading}
                    </h2>
                    <div className=" items-center">
                        <div className="flex flex-col gap-[32px]">
                            <header className="self-start max-w-5xl">
                                <h3 className="resource-featured-title font-josefin text-heading ">
                                    {subHeading}
                                </h3>
                            </header>
                            <div className="hidden md:block rounded-lg overflow-hidden">
                                <Image
                                    src={image}
                                    alt={subHeading}
                                    width={1136}
                                    height={454}
                                    className="w-full h-full object-cover"
                                    priority
                                />
                            </div>
                            <div className="md:hidden rounded-lg overflow-hidden">
                                <Image
                                    src={imageMobile}
                                    alt={subHeading}
                                    width={1136}
                                    height={454}
                                    className="w-full h-full object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="section mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <div className="container">
                    <div className="text-center mb-[24px]">
                        <h2 className="font-josefin text-heading career-title">
                            {heading2}
                        </h2>
                    </div>

                    <div className="flex flex-col gap-[24px] pb-[64px] md:pb-[80px]">
                        {jobOpenings.map((job) => (
                            <JobCard key={job.id} {...job} />
                        ))}
                    </div>
                </div>
            </section>

            <Cta
                buttonText={ctaData.buttonText}
                buttonLink={ctaData.buttonLink}
                headingLines={ctaData.headingLines}
            />
        </>
    );
};

export default CareerPage;
