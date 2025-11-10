import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ArticleCard from "@/components/ArticleCard";
import ScrollableArticleCard from "@/components/ScrollableArticleCard";
import { Article } from "@/types";

export interface ResourcesContainerProps {
    resources: Article[];
    buttonText: string;
    buttonLink: string;
    heading: string;
}

export default function Resources({
    resources,
    buttonText,
    buttonLink,
    heading,
}: ResourcesContainerProps) {
    return (
        <section className="py-[64px] md:py-[100px] bg-surface-gray">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="self-start ">
                    <h2 className="section-title font-josefin text-heading text-center md:mx-auto">
                        {heading}
                    </h2>
                </div>

                {/* Resources Grid - Mobile Scrollable, Desktop Grid */}
                <div className="mt-[28px] md:mt-[48px]">
                    {/* Mobile: Horizontal Scrollable Cards */}
                    <div className="md:hidden overflow-x-auto scrollbar-hide">
                        <div className="flex gap-[32px] min-w-max pl-4">
                            {resources.map((resource, index) => {
                                const isLastItem = index === resources.length - 1;
                                return (
                                    <ScrollableArticleCard
                                        key={resource.id}
                                        article={resource}
                                        isLastItem={isLastItem}
                                    />
                                );
                            })}
                        </div>
                    </div>

                    {/* Desktop: Grid Layout */}
                    <div className="hidden md:grid grid-cols-3 lg:grid-cols-3 gap-8">
                        {resources.map((resource) => (
                            <ArticleCard key={resource.id} article={resource} />
                        ))}
                    </div>
                </div>

                {/* View All Button */}
                <div className="text-center mt-[24px]">
                    <Link
                        href={buttonLink}
                        className="inline-flex items-center  bg-transparent border-1 border-[#2E3038] rounded-[8px] py-[10px] px-[16px] gap-[8px] hover:bg-primary hover:text-white hover:border-primary"
                    >
                        <span className="team-button-text">{buttonText}</span>
                        <ArrowUpRight size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
