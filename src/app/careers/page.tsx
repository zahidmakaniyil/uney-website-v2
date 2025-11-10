import { Metadata } from "next";
import { careerPageData } from "@/dummyData/career";
import CareersPageComponent from "@/pages/Careers";
import { PageMetaData } from "@/types";
import { JobCardProps } from "@/components/JobCard";
import { CtaContainerProps } from "@/containers/Cta";
import { CACHE_DURATION } from "@/utils/constants";

// Simple in-memory cache for career page data
let careerPageDataCache: CareerPageData | null = null;
let cacheTimestamp = 0;

export interface CareerPageData {
    metaData: PageMetaData;
    contentData: {
        heading: string;
        subHeading: string;
        heading2: string;
        image: string;
        imageMobile: string;
        jobOpenings: JobCardProps[];
    };
    ctaData: CtaContainerProps;
}

// Career page data using simple cache with time duration
const getCareerPageData = async (): Promise<CareerPageData> => {
    const now = Date.now();

    if (careerPageDataCache && (now - cacheTimestamp) < CACHE_DURATION) {
        return careerPageDataCache;
    }

    await new Promise((resolve) => setTimeout(resolve, 50));

    const { metaData, contentData, ctaData } = careerPageData; //TODO: using dummy data for now

    careerPageDataCache = {
        metaData,
        contentData,
        ctaData,
    };

    cacheTimestamp = now;
    return careerPageDataCache;
};

export async function generateMetadata(): Promise<Metadata> {
    const { metaData } = await getCareerPageData();

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

export default async function CareersPage() {
    const { contentData, ctaData } = await getCareerPageData();

    return <CareersPageComponent contentData={contentData} ctaData={ctaData} />;
}
