"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export interface Solution {
    image: string;
    title: string;
    description: string;
    tabId: string;
    order: number;
}
export interface SolutionsContainerProps {
    heading: string;
    subHeading: string;
    tabs: {
        id: string;
        label: string;
    }[];
    solutions: Solution[];
}

export default function Solutions({
    heading,
    subHeading,
    solutions,
    tabs,
}: SolutionsContainerProps) {
    const [activeTab, setActiveTab] = useState("ai-innovation");
    const [isAnimating, setIsAnimating] = useState(false);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Reset scroll position when tab changes
    useEffect(() => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft = 0;
        }
    }, [activeTab]);

    const handleTabChange = (tabId: string) => {
        if (tabId === activeTab) return;

        setIsAnimating(true);
        setTimeout(() => {
            setActiveTab(tabId);
            setTimeout(() => {
                setIsAnimating(false);
            }, 50);
        }, 200);
    };

    const getCurrentSolutions = () => {
        return solutions.filter((solution) => solution.tabId === activeTab).sort((a, b) => a.order - b.order);
    };

    const TabButton = ({ tab }: { tab: { id: string; label: string } }) => (
        <button
            aria-label="Change tab"
            onClick={() => handleTabChange(tab.id)}
            className={`cursor-pointer solution-tab-title flex-1 md:flex-none h-[56px] relative md:px-[32px] transition-colors duration-200 ${activeTab === tab.id
                ? "text-heading"
                : "text-neutral hover:text-primary"
                }`}
        >
            {tab.label}
            <div
                className={`absolute bottom-0 left-0 right-0 h-[2px] transition-colors duration-200 ${activeTab === tab.id ? "bg-primary" : "bg-[#DDDFE3]"
                    }`}
            ></div>
        </button>
    );

    return (
        <section id="solutions" className=" py-[64px] md:py-[100px] bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center flex flex-col gap-[12px] px-[20px]">
                    <h2 className="section-title font-josefin text-heading md:text-center md:mx-auto">
                        {heading}
                    </h2>
                    <p className="section-subtitle text-heading">{subHeading}</p>
                </div>

                {/* Tabs */}
                <div className="flex gap-[24px] my-[32px] md:my-[48px] px-[20px] md:justify-center">
                    {tabs.map((tab) => (
                        <TabButton key={tab.id} tab={tab} />
                    ))}
                </div>
            </div>

            {/* Horizontally Scrollable Cards - Full Width */}
            <div ref={scrollContainerRef} className="overflow-x-auto scrollbar-hide">
                <div
                    className={`flex gap-[32px] min-w-max pl-[20px] lg:pl-[max(20px,calc((100vw-1280px)/2+20px))] transition-all duration-300 ease-in-out ${isAnimating
                        ? "opacity-0 translate-y-4"
                        : "opacity-100 translate-y-0"
                        }`}
                >
                    {getCurrentSolutions().map((solution, index) => {
                        const isLastItem = index === getCurrentSolutions().length - 1;
                        return (
                            <div
                                key={index}
                                className={`bg-white rounded-xl w-[300px] flex-shrink-0  flex flex-col gap-[20px] transition-all duration-300 ease-in-out ${isLastItem ? "mr-[20px]" : ""
                                    } ${isAnimating
                                        ? "opacity-0 translate-y-2"
                                        : "opacity-100 translate-y-0"
                                    }`}
                                style={{ transitionDelay: `${index * 50}ms` }}
                            >
                                <div className="w-full h-[300px] rounded-xl overflow-hidden">
                                    <Image
                                        width={300}
                                        height={300}
                                        src={solution.image}
                                        alt={solution.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex flex-col gap-[8px]">
                                    <h3 className="solution-card-title text-heading">
                                        {solution.title}
                                    </h3>
                                    <p className="solution-card-description text-secondary">
                                        {solution.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
