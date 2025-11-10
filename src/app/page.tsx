import { homePageData } from "@/dummyData/home";
import HomePageComponent from "@/pages/Home";
import { Metadata } from "next";
import { CtaContainerProps } from "@/containers/Cta";
import { AboutContainerProps } from "@/containers/About";
import { TeamContainerProps } from "@/containers/Team";
import { ResourcesContainerProps } from "@/containers/Resources";
import { HeroContainerProps } from "@/containers/Hero";
import { SolutionsContainerProps } from "@/containers/Solutions";
import { CorePromiseContainerProps } from "@/containers/CorePromise";
import { PageMetaData } from "@/types";
import { CACHE_DURATION } from "@/utils/constants";

// Simple in-memory cache for home page data
let homePageDataCache: HomePageData | null = null;
let cacheTimestamp = 0;

export interface HomePageData {
  metaData: PageMetaData;
  heroData: HeroContainerProps;
  solutionsData: SolutionsContainerProps;
  corePromiseData: CorePromiseContainerProps;
  aboutData: AboutContainerProps;
  teamData: TeamContainerProps;
  resourcesData: ResourcesContainerProps;
  ctaData: CtaContainerProps;
}

// Home page data using simple cache with time duration
const getHomePageData = async (): Promise<HomePageData> => {
  const now = Date.now();

  if (homePageDataCache && (now - cacheTimestamp) < CACHE_DURATION) {
    return homePageDataCache;
  }

  await new Promise((resolve) => setTimeout(resolve, 50));

  const {
    metaData,
    heroData,
    solutionsData,
    corePromiseData,
    aboutData,
    teamData,
    resourcesData,
    ctaData,
  } = homePageData; //TODO: using dummy data for now

  homePageDataCache = {
    metaData,
    heroData,
    solutionsData,
    corePromiseData,
    aboutData,
    teamData,
    resourcesData,
    ctaData,
  };

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
  const {
    heroData,
    solutionsData,
    corePromiseData,
    aboutData,
    teamData,
    resourcesData,
    ctaData,
  } = await getHomePageData();

  return (
    <HomePageComponent
      heroData={heroData}
      solutionsData={solutionsData}
      corePromiseData={corePromiseData}
      aboutData={aboutData}
      teamData={teamData}
      resourcesData={resourcesData}
      ctaData={ctaData}
    />
  );
}
