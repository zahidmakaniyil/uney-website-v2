import { cache } from "react";
import { notFound } from "next/navigation";
import { resourceDetailData } from "@/dummyData/resourceDetail";
import { Metadata } from "next";
import ResourceDetailPageComponent from "@/pages/ResourceDetail";
import { PageMetaData } from "@/types";
import { ArticleDetail } from "@/types";
import { ResourcesContainerProps } from "@/containers/Resources";
import { CtaContainerProps } from "@/containers/Cta";
import { CACHE_DURATION } from "@/utils/constants";

// Simple in-memory cache for static data (metadata + ctaData)
let staticDataCache: {
    metaData: PageMetaData;
    ctaData: CtaContainerProps;
} | null = null;
let cacheTimestamp = 0;

export interface ResourceDetailPageData {
    metaData: PageMetaData;
    resourceDetail: ArticleDetail;
    relatedResourcesData: ResourcesContainerProps;
    ctaData: CtaContainerProps;
}

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

    const { metaData, ctaData } = resourceDetailData;
    staticDataCache = { metaData, ctaData };
    cacheTimestamp = now;

    return staticDataCache;
};

// Dynamic data that changes per slug (resourceDetail + relatedResources) - cached per slug
const getResourceDetailData = cache(
    async (
        _slug: string
    ): Promise<{
        resourceDetail: ArticleDetail;
        relatedResourcesData: ResourcesContainerProps;
    }> => {
        await new Promise((resolve) => setTimeout(resolve, 50));

        const { resourceDetail, relatedResourcesData } = resourceDetailData; //TODO: using dummy data for now

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

    const { resourceDetail, relatedResourcesData } = dynamicData;
    const { ctaData } = staticData;

    if (!resourceDetail) {
        notFound();
    }

    return (
        <ResourceDetailPageComponent
            resourceDetail={resourceDetail}
            relatedResources={relatedResourcesData}
            ctaData={ctaData}
        />
    );
}
