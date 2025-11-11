import { Metadata } from "next";
import { privacyPolicyPageData } from "@/dummyData/privacyPolicy";
import PrivacyPolicyPageComponent from "@/pages/PrivacyPolicy";
import { PrivacyPolicyPageData } from "@/types";

const getPrivacyPolicyPageData = async (): Promise<PrivacyPolicyPageData> => {
  return privacyPolicyPageData;
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

  const contentData = {
    heading: pageData.contentData?.heading,
    content: pageData.contentData?.content,
  };

  return (
    <PrivacyPolicyPageComponent contentData={contentData} ctaData={pageData.ctaData} />
  );
}
