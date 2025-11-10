import { cache } from "react";
import { notFound } from "next/navigation";
import { resourceDetailData } from "@/dummyData/resourceDetail";
import { Metadata } from "next";
import ResourceDetailPageComponent from "@/pages/ResourceDetail";
import { PageMetaData, ArticleDetail } from "@/types";
import { ResourcesContainerProps } from "@/containers/Resources";
import { CtaContainerProps } from "@/containers/Cta";
import { CACHE_DURATION } from "@/utils/constants";

// Simple in-memory cache for static data (metadata + ctaData)
let staticDataCache: {
    metaData: PageMetaData;
    ctaData: CtaContainerProps;
} | null = null;
let cacheTimestamp = 0;

// Static data using simple cache with time duration
const getStaticData = async (): Promise<{
    metaData: PageMetaData;
    ctaData: CtaContainerProps;
}> => {
    const now = Date.now();

    if (staticDataCache && now - cacheTimestamp < CACHE_DURATION) {
        return staticDataCache;
    }

    await new Promise((resolve) => setTimeout(resolve, 50));

    if (!resourceDetailData) {
        throw new Error("Resource detail data is not available");
    }

    const { metaData, ctaData } = resourceDetailData;
    staticDataCache = { metaData, ctaData };
    cacheTimestamp = now;

    return staticDataCache;
};

// Dynamic data that changes per slug (resourceDetail + relatedResources) - cached per slug
const getResourceDetailData = cache(
    async (_slug: string): Promise<{
        resourceDetail: ArticleDetail;
        relatedResourcesData: ResourcesContainerProps;
    }> => {
        await new Promise((resolve) => setTimeout(resolve, 50));

        if (!resourceDetailData) {
            throw new Error("Resource detail data import is undefined");
        }

        if (typeof resourceDetailData !== 'object' || resourceDetailData === null) {
            throw new Error("Resource detail data is not a valid object");
        }

        if (!resourceDetailData.resourceDetail) {
            throw new Error("Resource detail data.resourceDetail is missing");
        }

        if (typeof resourceDetailData.resourceDetail !== 'object' || resourceDetailData.resourceDetail === null) {
            throw new Error("Resource detail data.resourceDetail is not a valid object");
        }

        if (!resourceDetailData.resourceDetail.title || !resourceDetailData.resourceDetail.content) {
            throw new Error("Resource detail data.resourceDetail is missing required properties");
        }

        if (!resourceDetailData.relatedResourcesData) {
            throw new Error("Resource detail data.relatedResourcesData is missing");
        }

        const { resourceDetail, relatedResourcesData } = resourceDetailData;

        return {
            resourceDetail,
            relatedResourcesData,
        };
    }
);

export async function generateMetadata(): Promise<Metadata> {
    const { metaData } = await getStaticData();

    return {
        title: metaData.title,
        description: metaData.description,
        keywords: metaData.keywords.join(", "),
        authors: [{ name: metaData.author }],
        alternates: {
            canonical: metaData.canonicalUrl,
        },
        openGraph: {
            title: metaData.ogTitle,
            description: metaData.ogDescription,
            type: "website",
            url: metaData.canonicalUrl,
            images: [
                {
                    url: metaData.ogImage,
                    width: metaData.ogImageWidth,
                    height: metaData.ogImageHeight,
                    alt: metaData.ogTitle,
                },
            ],
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
        verification: {
            google: metaData.googleVerificationCode,
        },
    };
}

export default async function ResourceDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    // Parallel calls: static data (cached) + dynamic data per slug
    const [staticData, dynamicData] = await Promise.all([
        getStaticData(),
        getResourceDetailData(slug),
    ]);

    if (!dynamicData || !dynamicData.resourceDetail || !dynamicData.relatedResourcesData) {
        notFound();
    }

    if (!staticData || !staticData.ctaData) {
        throw new Error("Resource detail static data is incomplete");
    }

    // Additional validation of dynamicData structure
    if (typeof dynamicData.resourceDetail !== 'object' || dynamicData.resourceDetail === null) {
        throw new Error("Resource detail resourceDetail is not a valid object");
    }

    // Validate resourceDetail has all required properties
    if (!dynamicData.resourceDetail.title || !dynamicData.resourceDetail.content) {
        throw new Error("Resource detail is missing required properties");
    }

    // Create explicit objects to ensure proper serialization during build
    const resourceDetail = {
        slug: dynamicData.resourceDetail.slug || '',
        title: dynamicData.resourceDetail.title,
        content: dynamicData.resourceDetail.content,
        readTime: dynamicData.resourceDetail.readTime || '',
        author: dynamicData.resourceDetail.author || '',
        excerpt: dynamicData.resourceDetail.excerpt || '',
        date: dynamicData.resourceDetail.date || '',
        image: dynamicData.resourceDetail.image || '',
    };

    const { relatedResourcesData } = dynamicData;
    const { ctaData } = staticData;

    // Final validation
    if (!resourceDetail.title || !resourceDetail.content) {
        throw new Error("Resource detail object creation failed - missing title or content");
    }

    if (typeof resourceDetail.title !== 'string' || typeof resourceDetail.content !== 'string') {
        throw new Error("Resource detail object has invalid types");
    }

    return (
        <ResourceDetailPageComponent
            resourceDetail={resourceDetail}
            relatedResources={relatedResourcesData}
            ctaData={ctaData}
        />
    );
}
