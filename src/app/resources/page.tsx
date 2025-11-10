import { cache } from "react";
import { Metadata } from "next";
import { resourcesPageData, resources } from "@/dummyData/resources";
import ResourcesPageComponent from "@/pages/Resources";
import { Article, PageMetaData, PaginationResponse, ResourcesPageData, ResourcesPageContentData } from "@/types";
import { CACHE_DURATION } from "@/utils/constants";

// Simple in-memory cache for static data
let staticDataCache: ResourcesPageData | null = null;
let cacheTimestamp = 0;

interface ResourcesPageProps {
    searchParams: { page?: string; limit?: string };
}

// Static data using simple cache with time duration
const getStaticPageData = async (): Promise<ResourcesPageData> => {
    const now = Date.now();

    // Only return cache if it's valid
    if (staticDataCache && (now - cacheTimestamp) < CACHE_DURATION) {
        if (staticDataCache.contentData && staticDataCache.ctaData) {
            return staticDataCache;
        }
        // Clear invalid cache
        staticDataCache = null;
    }

    await new Promise((resolve) => setTimeout(resolve, 50));

    if (!resourcesPageData || !resourcesPageData.contentData || !resourcesPageData.ctaData) {
        throw new Error("Resources page data is not available or incomplete");
    }

    staticDataCache = resourcesPageData;
    cacheTimestamp = now;
    return staticDataCache;
};

// Dynamic paginated resources - cached per page/limit combination
const getPaginatedResources = cache(async (page: number, limit: number): Promise<PaginationResponse<Article>> => {
    await new Promise((resolve) => setTimeout(resolve, 50));

    if (!resources || !Array.isArray(resources)) {
        throw new Error("Resources array is not available");
    }

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

    // Get static data first to ensure it's available
    const pageData = await getStaticPageData();

    // Only fetch paginated resources - static data is already cached from generateMetadata
    const paginatedResources = await getPaginatedResources(page, limit);

    if (!pageData) {
        throw new Error("Resources page data is not available");
    }

    if (!pageData.contentData) {
        throw new Error("Resources page contentData is missing");
    }

    if (!pageData.ctaData) {
        throw new Error("Resources page ctaData is missing");
    }

    // Ensure contentData has all required properties
    if (!pageData.contentData.pageTitle || !pageData.contentData.resourcesTitle) {
        throw new Error("Resources page contentData is missing required properties");
    }

    // Create explicit objects with fallbacks to ensure proper serialization during build
    const contentData = {
        pageTitle: pageData.contentData?.pageTitle || 'Resources',
        resourcesTitle: pageData.contentData?.resourcesTitle || 'All Resources',
    };

    // Ensure we have valid strings
    if (typeof contentData.pageTitle !== 'string' || typeof contentData.resourcesTitle !== 'string') {
        throw new Error("Resources page contentData object creation failed - invalid types");
    }

    if (!pageData.ctaData || !pageData.ctaData.buttonText || !pageData.ctaData.headingLines) {
        throw new Error("Resources page ctaData is incomplete");
    }

    return (
        <ResourcesPageComponent
            contentData={contentData}
            ctaData={pageData.ctaData}
            paginatedResources={paginatedResources}
        />
    );
}