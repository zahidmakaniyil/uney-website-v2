import { cache } from "react";
import { Metadata } from "next";
import { resourcesPageData, resources } from "@/dummyData/resources";
import ResourcesPageComponent from "@/pages/Resources";
import { Article, PageMetaData, PaginationResponse } from "@/types";
import { CtaContainerProps } from "@/containers/Cta";
import { CACHE_DURATION } from "@/utils/constants";

// Simple in-memory cache for static data
let staticDataCache: ResourcesPageData | null = null;
let cacheTimestamp = 0;

export interface ResourcesPageContentData {
    pageTitle: string;
    resourcesTitle: string;
}

export interface ResourcesPageData {
    metaData: PageMetaData;
    contentData: ResourcesPageContentData;
    ctaData: CtaContainerProps;
}

interface ResourcesPageProps {
    searchParams: { page?: string; limit?: string };
}

// Static data using simple cache with time duration
const getStaticPageData = async (): Promise<ResourcesPageData> => {
    const now = Date.now();

    if (staticDataCache && (now - cacheTimestamp) < CACHE_DURATION) {
        return staticDataCache;
    }

    await new Promise((resolve) => setTimeout(resolve, 50));
    staticDataCache = resourcesPageData;
    cacheTimestamp = now;
    return staticDataCache;
};

// Dynamic paginated resources - cached per page/limit combination
const getPaginatedResources = cache(async (page: number, limit: number): Promise<PaginationResponse<Article>> => {
    await new Promise((resolve) => setTimeout(resolve, 50));

    const offset = (page - 1) * limit;
    const totalItems = resources.length;
    const totalPages = Math.ceil(totalItems / limit);
    const data = resources.slice(offset, offset + limit);

    return {
        data,
        pagination: {
            currentPage: page,
            totalPages,
            totalItems,
            itemsPerPage: limit,
            hasNextPage: page < totalPages,
            hasPreviousPage: page > 1,
            nextPage: page < totalPages ? page + 1 : null,
            previousPage: page > 1 ? page - 1 : null,
        }
    };
});

export async function generateMetadata(): Promise<Metadata> {
    const { metaData } = await getStaticPageData();

    return {
        title: metaData.title,
        description: metaData.description,
        keywords: metaData.keywords.join(", "),
        authors: [{ name: metaData.author }],
        alternates: { canonical: metaData.canonicalUrl },
        openGraph: {
            title: metaData.ogTitle,
            description: metaData.ogDescription,
            type: "website",
            url: metaData.canonicalUrl,
            images: [{
                url: metaData.ogImage,
                width: metaData.ogImageWidth,
                height: metaData.ogImageHeight,
                alt: metaData.ogTitle,
            }],
            siteName: metaData.companyName,
        },
        twitter: {
            card: "summary_large_image",
            title: metaData.twitterTitle,
            description: metaData.twitterDescription,
            images: [metaData.twitterImage],
            creator: metaData.twitterCreator,
            site: metaData.twitterSite,
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
        verification: { google: metaData.googleVerificationCode },
    };
}



export default async function ResourcesPage({ searchParams }: ResourcesPageProps) {
    const page = parseInt(searchParams.page || '1', 10);
    const limit = parseInt(searchParams.limit || '10', 10);

    // Only fetch paginated resources - static data is already cached from generateMetadata
    const paginatedResources = await getPaginatedResources(page, limit);

    // Get static data from cache (should not trigger new API call)
    const pageData = await getStaticPageData();

    return (
        <ResourcesPageComponent
            contentData={pageData.contentData}
            ctaData={pageData.ctaData}
            paginatedResources={paginatedResources}
        />
    );
}