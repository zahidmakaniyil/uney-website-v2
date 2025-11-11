import { cache } from "react";
import { Metadata } from "next";
import { resourcesPageData, resources } from "@/dummyData/resources";
import ResourcesPageComponent from "@/pages/Resources";
import { Article, PaginationResponse, ResourcesPageData } from "@/types";

interface ResourcesPageProps {
    searchParams: { page?: string; limit?: string };
}

const getStaticPageData = async (): Promise<ResourcesPageData> => {
    return resourcesPageData;
};

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

    const pageData = await getStaticPageData();

    const paginatedResources = await getPaginatedResources(page, limit);

    const contentData = {
        pageTitle: pageData.contentData?.pageTitle,
        resourcesTitle: pageData.contentData?.resourcesTitle,
    };

    return (
        <ResourcesPageComponent
            contentData={contentData}
            ctaData={pageData.ctaData}
            paginatedResources={paginatedResources}
        />
    );
}