import { Article } from "@/types";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FeaturedArticle = ({ featuredArticle }: { featuredArticle: Article }) => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="hidden lg:flex flex flex-col gap-[48px]">
                <article className="grid grid-cols-2 gap-[48px] items-center">
                    <div className="flex flex-col gap-[8px]">
                        <header className="self-start">
                            <h3 className="resource-featured-title font-josefin text-heading">
                                {featuredArticle.title}
                            </h3>
                        </header>

                        <div className="text-neutral flex  resource-card-date gap-[8px]">
                            <span>{featuredArticle.readTime}</span>
                            <span>•</span>
                            <span>{featuredArticle.date}</span>
                        </div>

                        <p className="text-secondary resource-featured-excerpt">
                            {featuredArticle.excerpt}
                        </p>

                        <Link
                            href={`/resources/${featuredArticle.slug}`}
                            className="mt-[24px] inline-flex items-center  bg-transparent border-1 border-[#2E3038]  transition-all duration-300 rounded-[8px] py-[10px] px-[16px] gap-[8px] transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary w-max"
                            aria-label="Read more about Personal Data Security in the Digital Age"
                        >
                            Read more
                            <ArrowRight size={16} className="ml-2" />
                        </Link>
                    </div>

                    {/* Right Image */}
                    <figure className="rounded-lg overflow-hidden">
                        <Image
                            src={featuredArticle.image}
                            alt={featuredArticle.title}
                            width={528}
                            height={298}
                            className="w-full h-full object-cover"
                            priority
                        />
                    </figure>
                </article>
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden">
                <article>
                    <header>
                        <h3 className="resource-featured-title font-josefin text-heading mb-[16px]">
                            {featuredArticle.title}
                        </h3>
                    </header>

                    <figure className="h-[201px] rounded-lg overflow-hidden mb-[16px]">
                        <Image
                            src={featuredArticle.image}
                            alt={featuredArticle.title}
                            width={400}
                            height={300}
                            className="w-full h-full object-cover"
                            priority
                        />
                    </figure>

                    <div className="text-neutral flex  resource-card-date gap-[8px] mb-[16px]">
                        <span>{featuredArticle.readTime}</span>
                        <span className="mx-2">•</span>
                        <span>{featuredArticle.date}</span>
                    </div>

                    <p className="resource-featured-excerpt text-secondary">
                        {featuredArticle.excerpt}
                    </p>

                    <Link
                        href={`/resources/${featuredArticle.slug}`}
                        className="mt-[32px] inline-flex items-center  bg-transparent border-1 border-[#2E3038]  transition-all duration-300 rounded-[8px] py-[10px] px-[16px] gap-[8px] transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary w-max"
                        aria-label="Read more about Personal Data Security in the Digital Age"
                    >
                        Read more
                        <ArrowRight size={16} className="ml-2" />
                    </Link>
                </article>
            </div>
        </div>
    );
};

export default FeaturedArticle;
