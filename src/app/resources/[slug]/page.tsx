import { cache } from "react";
import { resourceDetailData } from "@/dummyData/resourceDetail";
import { Metadata } from "next";
import ResourceDetailPageComponent from "@/pages/ResourceDetail";
import { PageMetaData, ArticleDetail } from "@/types";
import { ResourcesContainerProps } from "@/containers/Resources";
import { CtaContainerProps } from "@/containers/Cta";

const getStaticData = async (): Promise<{
    metaData: PageMetaData;
    ctaData: CtaContainerProps;
}> => {

    const { metaData, ctaData } = resourceDetailData;

    return { metaData, ctaData };
};

const getResourceDetailData = cache(
    async (slug: string): Promise<{
        resourceDetail: ArticleDetail;
        relatedResourcesData: ResourcesContainerProps;
    }> => {
        if (!slug) {
            throw new Error("Slug is not available");
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

    const [staticData, dynamicData] = await Promise.all([
        getStaticData(),
        getResourceDetailData(slug),
    ]);

    const resourceDetail = {
        slug: dynamicData.resourceDetail.slug,
        title: dynamicData.resourceDetail.title,
        content: dynamicData.resourceDetail.content,
        readTime: dynamicData.resourceDetail.readTime,
        author: dynamicData.resourceDetail.author,
        excerpt: dynamicData.resourceDetail.excerpt,
        date: dynamicData.resourceDetail.date,
        image: dynamicData.resourceDetail.image,
    };

    const { relatedResourcesData } = dynamicData;
    const { ctaData } = staticData;

    return (
        <ResourceDetailPageComponent
            resourceDetail={resourceDetail}
            relatedResources={relatedResourcesData}
            ctaData={ctaData}
        />
    );
}
