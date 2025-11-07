import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Resource1Image from '@/assets/images/resource-1.png';
import Resource2Image from '@/assets/images/resource-2.png';
import Resource3Image from '@/assets/images/resource-3.png';

export default function Resources() {

    const sectionTitle = "Resources";

    const buttonText = "Continue Reading";

    const resources = [
        {
            id: 1,
            title: "How real-time analytics can transform your money strategy!",
            readTime: "3 min read",
            date: "24.01.2025",
            image: Resource1Image,
            slug: "real-time-analytics-money-strategy"
        },
        {
            id: 2,
            title: "How real-time analytics can transform your money strategy!",
            readTime: "3 min read",
            date: "24.01.2025",
            image: Resource2Image,
            slug: "real-time-analytics-money-strategy-2"
        },
        {
            id: 3,
            title: "How real-time analytics can transform your money strategy!",
            readTime: "3 min read",
            date: "24.01.2025",
            image: Resource3Image,
            slug: "real-time-analytics-money-strategy-3"
        }
    ];

    return (
        <section className="py-[64px] md:py-[100px] bg-surface-gray">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="self-start ">
                    <h2 className="section-title font-josefin text-heading text-center md:mx-auto">
                        {sectionTitle}
                    </h2>
                </div>

                {/* Resources Grid - Mobile Scrollable, Desktop Grid */}
                <div className="mt-[28px] md:mt-[48px]">
                    {/* Mobile: Horizontal Scrollable Cards */}
                    <div className="md:hidden overflow-x-auto scrollbar-hide">
                        <div className="flex space-x-8 min-w-max pl-4">
                            {resources.map((resource, index) => {
                                const isLastItem = index === resources.length - 1;
                                return (
                                    <div
                                        key={resource.id}
                                        className={` overflow-hidden w-[300px] flex-shrink-0 ${isLastItem ? "mr-4" : ""}`}
                                    >
                                        {/* Image */}
                                        <div className="w-full h-[169px] rounded-xl overflow-hidden">
                                            <Image
                                                width={300}
                                                height={169}
                                                src={resource.image}
                                                alt={resource.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="py-[24px]  flex flex-col gap-[8px]">
                                            <h3 className="text-heading resource-card-title line-clamp-2">
                                                {resource.title}
                                            </h3>
                                            <div className="text-neutral flex  resource-card-date gap-[8px]">
                                                <span>{resource.readTime}</span>
                                                <span>•</span>
                                                <span>{resource.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Desktop: Grid Layout */}
                    <div className="hidden md:grid grid-cols-3 lg:grid-cols-3 gap-8">
                        {resources.map((resource) => (
                            <div key={resource.id} className="rounded-xl overflow-hidden ">
                                {/* Image */}
                                <div className="w-full h-[201px] rounded-xl overflow-hidden">
                                    <Image
                                        width={300}
                                        height={169}
                                        src={resource.image}
                                        alt={resource.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Content */}
                                <div className="py-[24px]  flex flex-col gap-[8px]">
                                    <h3 className="text-heading resource-card-title line-clamp-2">
                                        {resource.title}
                                    </h3>
                                    <div className="text-neutral flex  resource-card-date gap-[8px]">
                                        <span>{resource.readTime}</span>
                                        <span>•</span>
                                        <span>{resource.date}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* View All Button */}
                <div className="text-center mt-[24px]">
                    <Link
                        href="/careers"
                        className="inline-flex items-center  bg-transparent border-1 border-[#2E3038] rounded-[8px] py-[10px] px-[16px] gap-[8px]  transition-all duration-300 hover:bg-primary hover:text-white hover:scale-103 hover:border-primary"
                    >
                        <span className="team-button-text">{buttonText}</span>
                        <ArrowUpRight size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
