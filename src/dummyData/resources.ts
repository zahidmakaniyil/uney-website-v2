import Resource1Image from "@/assets/images/resource-1.png";
import Resource2Image from "@/assets/images/resource-2.png";
import Resource3Image from "@/assets/images/resource-3.png";
import Resource4Image from "@/assets/images/resource-4.png";
import Resource5Image from "@/assets/images/resource-5.png";
import { Article, PageMetaData } from "@/types";
import { ctaData } from "./home";
import { ResourcesPageData } from "@/app/resources/page";

const resourcesPageMetaData: PageMetaData = {
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


const pageTitle: string = "UNEY Resources";
const resourcesTitle: string = "All Resources";

const resources: Article[] = [
    {
        id: 1,
        title: "Advanced Machine Learning for Cybersecurity Defense",
        readTime: "7 min read",
        date: "28.01.2025",
        image: Resource3Image.src,
        slug: "real-time-analytics-money-strategy",
        excerpt:
            "Explore cutting-edge machine learning techniques that are revolutionizing how we detect and prevent cyber threats in real-time.",
    },
    {
        id: 2,
        title: "Zero-Trust Architecture Implementation Guide",
        readTime: "5 min read",
        date: "26.01.2025",
        image: Resource1Image.src,
        slug: "real-time-analytics-money-strategy",
        excerpt:
            "Learn how to implement zero-trust security principles to protect your organization's most sensitive data and systems.",
    },
    {
        id: 3,
        title: "Blockchain Technology in Data Privacy",
        readTime: "6 min read",
        date: "25.01.2025",
        image: Resource5Image.src,
        slug: "real-time-analytics-money-strategy",
        excerpt:
            "Discover how blockchain technology is being used to create immutable and transparent data privacy solutions.",
    },
    {
        id: 4,
        title: "Quantum Computing Threats to Current Encryption",
        readTime: "8 min read",
        date: "23.01.2025",
        image: Resource2Image.src,
        slug: "real-time-analytics-money-strategy",
        excerpt:
            "Understanding the potential impact of quantum computing on current encryption methods and preparing for the future.",
    },
    {
        id: 5,
        title: "Cloud Security Best Practices for Enterprises",
        readTime: "4 min read",
        date: "21.01.2025",
        image: Resource4Image.src,
        slug: "real-time-analytics-money-strategy",
        excerpt:
            "Essential security measures every enterprise should implement when migrating to and operating in cloud environments.",
    },
    {
        id: 6,
        title: "AI-Powered Threat Intelligence Platforms",
        readTime: "5 min read",
        date: "19.01.2025",
        image: Resource1Image.src,
        slug: "real-time-analytics-money-strategy",
        excerpt:
            "How artificial intelligence is transforming threat intelligence and helping organizations stay ahead of cybercriminals.",
    },
    {
        id: 7,
        title: "Secure Software Development Lifecycle",
        readTime: "6 min read",
        date: "17.01.2025",
        image: Resource3Image.src,
        slug: "real-time-analytics-money-strategy",
        excerpt:
            "Integrating security practices throughout the entire software development process to build more secure applications.",
    },
    {
        id: 8,
        title: "Mobile Device Security in the Workplace",
        readTime: "4 min read",
        date: "15.01.2025",
        image: Resource5Image.src,
        slug: "real-time-analytics-money-strategy",
        excerpt:
            "Protecting corporate data on mobile devices through comprehensive security policies and advanced protection technologies.",
    },
    {
        id: 9,
        title: "Incident Response Planning and Execution",
        readTime: "7 min read",
        date: "13.01.2025",
        image: Resource2Image.src,
        slug: "real-time-analytics-money-strategy",
        excerpt:
            "Creating and implementing effective incident response plans to minimize damage and recovery time from security breaches.",
    },
    {
        id: 10,
        title: "Data Loss Prevention Strategies",
        readTime: "5 min read",
        date: "11.01.2025",
        image: Resource4Image.src,
        slug: "real-time-analytics-money-strategy",
        excerpt:
            "Comprehensive approaches to preventing sensitive data from leaving your organization through various channels.",
    },
    {
        id: 11,
        title: "Network Security Monitoring and Analysis",
        readTime: "6 min read",
        date: "09.01.2025",
        image: Resource1Image.src,
        slug: "real-time-analytics-money-strategy",
        excerpt:
            "Advanced techniques for monitoring network traffic and detecting suspicious activities in real-time.",
    },
    {
        id: 12,
        title: "Identity and Access Management Solutions",
        readTime: "4 min read",
        date: "07.01.2025",
        image: Resource3Image.src,
        slug: "real-time-analytics-money-strategy",
        excerpt:
            "Modern IAM solutions that provide secure and efficient access control across all organizational systems.",
    },
    {
        id: 13,
        title: "Penetration Testing Methodologies",
        readTime: "8 min read",
        date: "05.01.2025",
        image: Resource5Image.src,
        slug: "real-time-analytics-money-strategy",
        excerpt:
            "Professional approaches to conducting penetration tests and identifying vulnerabilities in your security infrastructure.",
    },
    {
        id: 14,
        title: "Security Awareness Training Programs",
        readTime: "3 min read",
        date: "03.01.2025",
        image: Resource2Image.src,
        slug: "real-time-analytics-money-strategy",
        excerpt:
            "Developing effective security awareness programs to educate employees and reduce human-related security risks.",
    },
    {
        id: 15,
        title: "Compliance Frameworks and Standards",
        readTime: "7 min read",
        date: "01.01.2025",
        image: Resource4Image.src,
        slug: "real-time-analytics-money-strategy",
        excerpt:
            "Understanding major compliance frameworks like ISO 27001, SOC 2, and NIST to meet regulatory requirements.",
    },
    {
        id: 16,
        title: "Endpoint Detection and Response Systems",
        readTime: "5 min read",
        date: "30.12.2024",
        image: Resource1Image.src,
        slug: "real-time-analytics-money-strategy",
        excerpt:
            "Advanced EDR solutions that provide comprehensive protection and response capabilities for endpoint devices.",
    },
    {
        id: 17,
        title: "Secure Communication Protocols",
        readTime: "6 min read",
        date: "28.12.2024",
        image: Resource3Image.src,
        slug: "real-time-analytics-money-strategy",
        excerpt:
            "Implementing secure communication protocols to protect data in transit and ensure privacy in digital communications.",
    },
    {
        id: 18,
        title: "Vulnerability Management Lifecycle",
        readTime: "4 min read",
        date: "26.12.2024",
        image: Resource5Image.src,
        slug: "real-time-analytics-money-strategy",
        excerpt:
            "Systematic approach to identifying, assessing, and remediating security vulnerabilities across your infrastructure.",
    },
    {
        id: 19,
        title: "Security Operations Center Best Practices",
        readTime: "7 min read",
        date: "24.12.2024",
        image: Resource2Image.src,
        slug: "real-time-analytics-money-strategy",
        excerpt:
            "Building and operating an effective SOC to provide 24/7 security monitoring and incident response capabilities.",
    },
    {
        id: 20,
        title: "Digital Forensics and Investigation",
        readTime: "8 min read",
        date: "22.12.2024",
        image: Resource4Image.src,
        slug: "real-time-analytics-money-strategy",
        excerpt:
            "Professional digital forensics techniques for investigating security incidents and gathering evidence for legal proceedings.",
    },
];


export const resourcesPageData: ResourcesPageData = {
    metaData: resourcesPageMetaData,
    contentData: {
        pageTitle,
        resourcesTitle,
    },
    ctaData,
};

// Export the raw resources array for pagination logic
export { resources };

