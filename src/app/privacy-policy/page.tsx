import { Metadata } from "next";
import { privacyPolicyPageData } from "@/dummyData/privacyPolicy";
import PrivacyPolicyPageComponent from "@/pages/PrivacyPolicy";
import { PageMetaData, PrivacyPolicyPageData } from "@/types";
import { CACHE_DURATION } from "@/utils/constants";

// Simple in-memory cache for privacy policy page data
let privacyPolicyPageDataCache: PrivacyPolicyPageData | null = null;
let cacheTimestamp = 0;

// Privacy policy page data using simple cache with time duration
const getPrivacyPolicyPageData = async (): Promise<PrivacyPolicyPageData> => {
  const now = Date.now();

  // Only return cache if it's valid
  if (privacyPolicyPageDataCache && (now - cacheTimestamp) < CACHE_DURATION) {
    if (privacyPolicyPageDataCache.contentData && privacyPolicyPageDataCache.ctaData) {
      return privacyPolicyPageDataCache;
    }
    // Clear invalid cache
    privacyPolicyPageDataCache = null;
  }

  await new Promise((resolve) => setTimeout(resolve, 50));

  if (!privacyPolicyPageData || !privacyPolicyPageData.contentData || !privacyPolicyPageData.ctaData) {
    throw new Error("Privacy policy page data is not available or incomplete");
  }

  privacyPolicyPageDataCache = privacyPolicyPageData;

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
  const pageData = await getPrivacyPolicyPageData();

  if (!pageData) {
    throw new Error("Privacy policy page data is not available");
  }

  if (!pageData.contentData) {
    throw new Error("Privacy policy page contentData is missing");
  }

  if (!pageData.ctaData) {
    throw new Error("Privacy policy page ctaData is missing");
  }

  // Ensure contentData has all required properties
  if (!pageData.contentData.heading || !pageData.contentData.content) {
    throw new Error("Privacy policy page contentData is missing required properties");
  }

  // Create explicit objects with fallbacks to ensure proper serialization during build
  const contentData = {
    heading: pageData.contentData?.heading || 'Privacy Policy',
    content: pageData.contentData?.content || '',
  };

  return (
    <PrivacyPolicyPageComponent contentData={contentData} ctaData={pageData.ctaData} />
  );
}
