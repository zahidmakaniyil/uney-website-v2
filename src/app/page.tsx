import { homePageData } from "@/dummyData/home";
import HomePageComponent from "@/pages/Home";
import { Metadata } from "next";
import { HomePageData } from "@/types";

const getHomePageData = async (): Promise<HomePageData> => {
  return homePageData;
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

  return (
    <HomePageComponent
      heroData={pageData.heroData}
      solutionsData={pageData.solutionsData}
      corePromiseData={pageData.corePromiseData}
      aboutData={pageData.aboutData}
      teamData={pageData.teamData}
      resourcesData={pageData.resourcesData}
      ctaData={pageData.ctaData}
    />
  );
}
