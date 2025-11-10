import { Metadata } from "next";
import { privacyPolicyPageData } from "@/dummyData/privacyPolicy";
import PrivacyPolicyPageComponent from "@/pages/PrivacyPolicy";
import { PageMetaData } from "@/types";
import { CtaContainerProps } from "@/containers/Cta";
import { CACHE_DURATION } from "@/utils/constants";

// Simple in-memory cache for privacy policy page data
let privacyPolicyPageDataCache: PrivacyPolicyPageData | null = null;
let cacheTimestamp = 0;

export interface PrivacyPolicyPageData {
  metaData: PageMetaData;
  contentData: {
    heading: string;
    content: string;
  };
  ctaData: CtaContainerProps;
}

// Privacy policy page data using simple cache with time duration
const getPrivacyPolicyPageData = async (): Promise<PrivacyPolicyPageData> => {
  const now = Date.now();

  if (privacyPolicyPageDataCache && (now - cacheTimestamp) < CACHE_DURATION) {
    return privacyPolicyPageDataCache;
  }

  await new Promise((resolve) => setTimeout(resolve, 50));

  const { metaData, contentData, ctaData } = privacyPolicyPageData; //TODO: using dummy data for now

  privacyPolicyPageDataCache = {
    metaData,
    contentData,
    ctaData,
  };

  cacheTimestamp = now;
  return privacyPolicyPageDataCache;
};

export async function generateMetadata(): Promise<Metadata> {
  const { metaData } = await getPrivacyPolicyPageData();

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

export default async function PrivacyPolicyPage() {
  const { contentData, ctaData } = await getPrivacyPolicyPageData();

  return (
    <PrivacyPolicyPageComponent contentData={contentData} ctaData={ctaData} />
  );
}
