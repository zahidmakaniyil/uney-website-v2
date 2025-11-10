import { Metadata } from "next";
import { careerPageData } from "@/dummyData/career";
import CareersPageComponent from "@/pages/Careers";
import { CareerPageData } from "@/types";
import { CACHE_DURATION } from "@/utils/constants";

let careerPageDataCache: CareerPageData | null = null;
let cacheTimestamp = 0;

const getCareerPageData = async (): Promise<CareerPageData> => {
    const now = Date.now();

    // Only return cache if it's valid
    if (careerPageDataCache && (now - cacheTimestamp) < CACHE_DURATION) {
        if (careerPageDataCache.contentData && careerPageDataCache.ctaData) {
            return careerPageDataCache;
        }
        // Clear invalid cache
        careerPageDataCache = null;
    }

    await new Promise((resolve) => setTimeout(resolve, 50));

    if (!careerPageData) {
        throw new Error("Career page data import is undefined");
    }

    if (typeof careerPageData !== 'object' || careerPageData === null) {
        throw new Error("Career page data is not a valid object");
    }

    if (!careerPageData.contentData) {
        throw new Error("Career page data.contentData is missing");
    }

    if (typeof careerPageData.contentData !== 'object' || careerPageData.contentData === null) {
        throw new Error("Career page data.contentData is not a valid object");
    }

    if (!careerPageData.contentData.heading || !careerPageData.contentData.subHeading) {
        throw new Error("Career page data.contentData is missing required properties");
    }

    if (!careerPageData.ctaData) {
        throw new Error("Career page data.ctaData is missing");
    }

    careerPageDataCache = careerPageData;
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
    const pageData = await getCareerPageData();

    if (!pageData) {
        throw new Error("Career page data is not available");
    }

    if (!pageData.contentData) {
        throw new Error("Career page contentData is missing");
    }

    if (!pageData.ctaData) {
        throw new Error("Career page ctaData is missing");
    }

    // Ensure contentData has all required properties
    if (!pageData.contentData.heading || !pageData.contentData.subHeading || !pageData.contentData.heading2) {
        throw new Error("Career page contentData is missing required properties");
    }

    // Create explicit objects with fallbacks to ensure proper serialization during build
    const contentData = {
        heading: pageData.contentData?.heading || '',
        subHeading: pageData.contentData?.subHeading || '',
        heading2: pageData.contentData?.heading2 || '',
        image: pageData.contentData?.image || '',
        imageMobile: pageData.contentData?.imageMobile || '',
        jobOpenings: pageData.contentData?.jobOpenings || [],
    };

    // Final validation of created object
    if (!contentData.heading || !contentData.subHeading || !contentData.heading2) {
        throw new Error("Career page contentData object creation failed");
    }

    if (!pageData.ctaData || !pageData.ctaData.buttonText || !pageData.ctaData.headingLines) {
        throw new Error("Career page ctaData is incomplete");
    }

    return <CareersPageComponent contentData={contentData} ctaData={pageData.ctaData} />;
}
