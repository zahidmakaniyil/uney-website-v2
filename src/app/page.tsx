import { homePageData } from "@/dummyData/home";
import HomePageComponent from "@/pages/Home";
import { Metadata } from "next";
import { HomePageData } from "@/types";
import { CACHE_DURATION } from "@/utils/constants";

// Simple in-memory cache for home page data
let homePageDataCache: HomePageData | null = null;
let cacheTimestamp = 0;

// Home page data using simple cache with time duration
const getHomePageData = async (): Promise<HomePageData> => {
  const now = Date.now();

  // Only return cache if it's valid
  if (homePageDataCache && (now - cacheTimestamp) < CACHE_DURATION) {
    if (homePageDataCache.heroData && homePageDataCache.ctaData) {
      return homePageDataCache;
    }
    // Clear invalid cache
    homePageDataCache = null;
  }

  await new Promise((resolve) => setTimeout(resolve, 50));

  if (!homePageData || !homePageData.heroData || !homePageData.ctaData) {
    throw new Error("Home page data is not available or incomplete");
  }

  homePageDataCache = homePageData;

  cacheTimestamp = now;
  return homePageDataCache;
};

export async function generateMetadata(): Promise<Metadata> {
  const { metaData } = await getHomePageData();

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
export default async function HomePage() {
  const pageData = await getHomePageData();

  if (!pageData) {
    throw new Error("Home page data is not available");
  }

  // Validate all required data exists
  if (!pageData.heroData || !pageData.solutionsData || !pageData.corePromiseData ||
    !pageData.aboutData || !pageData.teamData || !pageData.resourcesData || !pageData.ctaData) {
    throw new Error("Home page data is incomplete");
  }

  // Ensure ctaData has headingLines
  if (!pageData.ctaData.headingLines || !Array.isArray(pageData.ctaData.headingLines)) {
    throw new Error("Home page ctaData is missing headingLines or it's not an array");
  }

  // Create explicit objects with fallbacks to ensure proper serialization
  const ctaData = {
    buttonText: pageData.ctaData?.buttonText || '',
    buttonLink: pageData.ctaData?.buttonLink || '',
    headingLines: pageData.ctaData.headingLines,
  };

  return (
    <HomePageComponent
      heroData={pageData.heroData}
      solutionsData={pageData.solutionsData}
      corePromiseData={pageData.corePromiseData}
      aboutData={pageData.aboutData}
      teamData={pageData.teamData}
      resourcesData={pageData.resourcesData}
      ctaData={ctaData}
    />
  );
}
