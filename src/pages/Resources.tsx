"use client";

import { memo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ReactPaginate from "react-paginate";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Cta, { CtaContainerProps } from "@/containers/Cta";
import FeaturedArticle from "@/components/FeaturedArticle";
import ArticleCard from "@/components/ArticleCard";
import { Article, PaginationResponse } from "@/types";

const PAGE_RANGE_DISPLAYED = 3;

interface ContentData {
    pageTitle: string;
    resourcesTitle: string;
}

interface ResourcesPageProps {
    contentData: ContentData;
    ctaData: CtaContainerProps;
    paginatedResources: PaginationResponse<Article>;
}

const ResourcesPage = ({
    contentData,
    ctaData,
    paginatedResources,
}: ResourcesPageProps) => {
    const { pageTitle, resourcesTitle } = contentData;
    const router = useRouter();
    const searchParams = useSearchParams();

    const { data: resources, pagination } = paginatedResources;

    const handlePageClick = (event: { selected: number }) => {
        const newPage = event.selected + 1;
        const params = new URLSearchParams(searchParams?.toString() || "");
        params.set("page", newPage.toString());
        router.push(`/resources?${params.toString()}`);
    };

    return (
        <>
            <section
                className="pt-[40px] pb-[64px] mt-[72px] max-w-7xl mx-auto"
                aria-labelledby="featured-article"
            >
                <h2 className="text-primary resources-page-title mb-[48px] px-[16px] md:px-[32px]">
                    {pageTitle}
                </h2>
                <FeaturedArticle featuredArticle={resources[0]} />
            </section>

            {/* Resources Grid */}
            <section
                className="pb-[80px] lg:pb-[100px] bg-white"
                aria-labelledby="resources-grid"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 id="resources-grid" className="sr-only">
                        {resourcesTitle}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {resources.slice(1).map((resource) => (
                            <ArticleCard key={resource.id} article={resource} />
                        ))}
                    </div>
                    <nav className="flex justify-center items-center mt-6 gap-2">
                        <ReactPaginate
                            forcePage={pagination.currentPage - 1}
                            pageRangeDisplayed={PAGE_RANGE_DISPLAYED}
                            className="flex items-center gap-1 cursor-pointer"
                            previousLabel={
                                <button
                                    className="p-2 rounded hover:bg-gray-100 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
                                    disabled={!pagination.hasPreviousPage}
                                >
                                    <ChevronLeft size={20} />
                                </button>
                            }
                            nextLabel={
                                <button
                                    className="p-2 rounded hover:bg-gray-100 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
                                    disabled={!pagination.hasNextPage}
                                >
                                    <ChevronRight size={20} />
                                </button>
                            }
                            onPageChange={handlePageClick}
                            pageCount={pagination.totalPages}
                            pageLinkClassName="px-3 py-2 rounded hover:bg-gray-100 text-gray-700"
                            activeLinkClassName="bg-primary text-white hover:bg-primary-600"
                            breakLabel="..."
                            breakLinkClassName="px-3 py-2 text-gray-500"
                        />
                    </nav>
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
export default memo(ResourcesPage);
