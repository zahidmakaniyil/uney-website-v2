import Resource1Image from "@/assets/images/resource-1.png";
import Resource2Image from "@/assets/images/resource-2.png";
import Resource3Image from "@/assets/images/resource-3.png";
import { ArticleDetail, PageMetaData, ResourceDetailPageData } from "@/types";
import { ResourcesContainerProps } from "@/containers/Resources";
import { ctaData } from "./home";

const resourceDetailPageMetaData: PageMetaData = {
    title: "UNEY - Privacy First, Always | AI-Powered Privacy Solutions",
    description:
        "We build AI-powered, privacy-first solutions that put people in charge of their digital lives. From secure communication to transparent cloud protection.",
    keywords: [
        "privacy-first solutions",
        "AI privacy",
        "cybersecurity",
        "digital privacy",
        "secure communication",
        "data protection",
        "privacy technology",
    ],
    author: "UNEY",
    ogTitle: "UNEY - Privacy First, Always",
    ogDescription:
        "AI-powered, privacy-first solutions that put people in charge of their digital lives.",
    ogImage: "https://uney.com/wp-content/uploads/uney-og-image.jpg",
    ogImageWidth: 1200,
    ogImageHeight: 630,
    twitterTitle: "UNEY - Privacy First, Always",
    twitterDescription:
        "AI-powered, privacy-first solutions for digital privacy and security.",
    twitterImage: "https://uney.com/wp-content/uploads/uney-twitter-image.jpg",
    twitterCreator: "@weareuney",
    twitterSite: "@weareuney",
    canonicalUrl: "https://uney.com/",
    lastModified: new Date().toISOString(),
    featuredImage: "https://uney.com/wp-content/uploads/uney-logo.png",
    companyName: "UNEY",
    tagline: "Privacy First, Always",
    googleVerificationCode: "your-google-verification-code",
};

export const resourceDetail: ArticleDetail = {
    slug: "real-time-analytics-money-strategy",
    title: "The Importance of Personal Data Security in the Digital Age",
    content: `

      <h2>Introduction</h2>
      <p>Personal information is any data sufficient to precisely identify an individual. At a minimum, this includes: full name, date of birth, occupation, title, contact address, email address, phone number, national ID number, and passport number. Sensitive personal information includes medical records, tax records, health insurance card numbers, credit card numbers, and other private secrets.</p>
      
      <h3>Key Benefits of Real-Time Analytics</h3>
      <ul>
        <li><strong>Immediate Market Response:</strong> React to market changes as they happen</li>
        <li><strong>Optimized Cash Flow:</strong> Monitor and adjust spending in real-time</li>
        <li><strong>Risk Management:</strong> Identify potential risks before they become problems</li>
        <li><strong>Performance Tracking:</strong> Monitor investment performance continuously</li>
      </ul>
            <img src="https://images.pexels.com/photos/6963857/pexels-photo-6963857.jpeg" alt="The Importance of Personal Data Security in the Digital Age" />
      <h2>Implementing Real-Time Analytics</h2>
      <p>To effectively implement real-time analytics in your money strategy, consider the following steps:</p>
      
      <ol>
        <li><strong>Choose the Right Tools:</strong> Select analytics platforms that provide real-time data feeds</li>
        <li><strong>Set Up Automated Alerts:</strong> Configure notifications for significant changes</li>
        <li><strong>Create Dashboards:</strong> Develop visual representations of your financial data</li>
        <li><strong>Establish Decision Rules:</strong> Define clear criteria for when to take action</li>
      </ol>
      
      <h2>Privacy and Security Considerations</h2>
      <p>When implementing real-time analytics, it's crucial to prioritize privacy and security. At Uney, we believe in privacy-first solutions that protect your financial data while providing powerful insights.</p>
      
      <p>Real-time analytics can transform your money strategy by providing instant insights, enabling quick decision-making, and helping you stay ahead of market changes. By implementing the right tools and maintaining a focus on privacy and security, you can leverage real-time data to optimize your financial outcomes.</p>
    `,
    readTime: "3 min read",
    date: "24.01.2025",
    author: "Uney Team",
    excerpt:
        "In today's explosive age of information technology, personal data online has become a massive repository. If we don't have adequate and proper protection measures in place, it creates favorable conditions for criminals or malicious actors to exploit and carry out unlawful acts.",
    image: Resource1Image.src,
};

export const resourceDetailRelatedResourcesData: ResourcesContainerProps = {
    heading: "Related Resources",
    buttonText: "View more",
    buttonLink: "/resources",
    resources: [
        {
            id: 1,
            title: "How real-time analytics can transform your money strategy!",
            readTime: "3 min read",
            date: "24.01.2025",
            image: Resource1Image.src,
            slug: "real-time-analytics-money-strategy",
            excerpt: "How real-time analytics can transform your money strategy!",
        },
        {
            id: 2,
            title: "How real-time analytics can transform your money strategy!",
            readTime: "3 min read",
            date: "24.01.2025",
            image: Resource2Image.src,
            slug: "real-time-analytics-money-strategy",
            excerpt: "How real-time analytics can transform your money strategy!",
        },
        {
            id: 3,
            title: "How real-time analytics can transform your money strategy!",
            readTime: "3 min read",
            date: "24.01.2025",
            image: Resource3Image.src,
            slug: "real-time-analytics-money-strategy",
            excerpt: "How real-time analytics can transform your money strategy!",
        },
    ],
};

export const resourceDetailData: ResourceDetailPageData = {
    metaData: resourceDetailPageMetaData,
    resourceDetail: resourceDetail,
    relatedResourcesData: resourceDetailRelatedResourcesData,
    ctaData,
};
