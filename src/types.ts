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