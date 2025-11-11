import { Metadata } from "next";
import { careerPageData } from "@/dummyData/career";
import CareersPageComponent from "@/pages/Careers";
import { CareerPageData } from "@/types";

const getCareerPageData = async (): Promise<CareerPageData> => {
    return careerPageData;
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

    const contentData = {
        heading: pageData.contentData?.heading,
        subHeading: pageData.contentData?.subHeading,
        heading2: pageData.contentData?.heading2,
        image: pageData.contentData?.image,
        imageMobile: pageData.contentData?.imageMobile,
        jobOpenings: pageData.contentData?.jobOpenings,
    };

    return <CareersPageComponent contentData={contentData} ctaData={pageData.ctaData} />;
}
