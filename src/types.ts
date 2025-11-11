import type { JobCardProps } from "@/components/JobCard";
import type { CtaContainerProps } from "@/containers/Cta";
import type { HeroContainerProps } from "@/containers/Hero";
import type { SolutionsContainerProps } from "@/containers/Solutions";
import type { CorePromiseContainerProps } from "@/containers/CorePromise";
import type { AboutContainerProps } from "@/containers/About";
import type { TeamContainerProps } from "@/containers/Team";
import type { ResourcesContainerProps } from "@/containers/Resources";

export interface PageMetaData {
    title: string;
    description: string;
    keywords: string[];
    author: string;
    ogTitle: string;
    ogDescription: string;
    ogImage: string;
    ogImageWidth: number;
    ogImageHeight: number;
    twitterTitle: string;
    twitterDescription: string;
    twitterImage: string;
    twitterCreator: string;
    twitterSite: string;
    canonicalUrl: string;
    lastModified: string;
    featuredImage: string;
    companyName: string;
    tagline: string;
    googleVerificationCode: string;
}

export type Article = {
    id: number;
    title: string;
    readTime: string;
    date: string;
    image: string;
    slug: string;
    excerpt: string;
};

export type ArticleDetail = {
    slug: string;
    title: string;
    content: string;
    readTime: string;
    author: string;
    excerpt: string;
    date: string;
    image: string;
}

export interface PaginationParams {
    page: number;
    limit: number;
    offset: number;
}

export interface PaginationResponse<T> {
    data: T[];
    pagination: {
        currentPage: number;
        totalPages: number;
        totalItems: number;
        itemsPerPage: number;
        hasNextPage: boolean;
        hasPreviousPage: boolean;
        nextPage: number | null;
        previousPage: number | null;
    };
}

// Page Data Interfaces (moved here to break circular dependencies)
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

export interface ResourcesPageContentData {
    pageTitle: string;
    resourcesTitle: string;
}

export interface ResourcesPageData {
    metaData: PageMetaData;
    contentData: ResourcesPageContentData;
    ctaData: CtaContainerProps;
}

export interface ResourceDetailPageData {
    metaData: PageMetaData;
    resourceDetail: ArticleDetail;
    relatedResourcesData: ResourcesContainerProps;
    ctaData: CtaContainerProps;
}

export interface PrivacyPolicyPageData {
    metaData: PageMetaData;
    contentData: {
        heading: string;
        content: string;
    };
    ctaData: CtaContainerProps;
}