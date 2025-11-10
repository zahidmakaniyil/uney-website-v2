import Solution1Image from "@/assets/images/solution-1.jpg";
import Solution2Image from "@/assets/images/solution-2.jpg";
import Solution3Image from "@/assets/images/solution-3.jpg";
import Solution4Image from "@/assets/images/solution-4.jpg";
import Resource1Image from "@/assets/images/resource-1.png";
import Resource2Image from "@/assets/images/resource-2.png";
import Resource3Image from "@/assets/images/resource-3.png";
import { PageMetaData, HomePageData } from "@/types";
import { ResourcesContainerProps } from "@/containers/Resources";
import { HeroContainerProps } from "@/containers/Hero";
import { SolutionsContainerProps } from "@/containers/Solutions";
import { CorePromiseContainerProps } from "@/containers/CorePromise";
import { AboutContainerProps } from "@/containers/About";
import { TeamContainerProps } from "@/containers/Team";
import { CtaContainerProps } from "@/containers/Cta";



export const homePageMetaData: PageMetaData = {
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

export const homePageHeroData: HeroContainerProps = {
    headingLines: ["Innovation is", "made simple"],
    subHeadingLines: [
        "We build AI-powered, privacy-first ",
        " solutions that give people true control ",
        "over their digital lives,",
        " from secure communication to intelligent threat protection.",
    ],
    buttonText: "Discover more",
    videoUrl: "https://www.pexels.com/download/video/7792630/",
};


export const homePageSolutionsData: SolutionsContainerProps = {
    heading: "Solutions for a Privacy-First Future",
    subHeading:
        "AI and cybersecurity working together to protect your digital world.",
    tabs: [
        {
            id: 'ai-innovation',
            label: 'AI Innovation',
        },
        {
            id: 'cyber-security',
            label: 'Cybersecurity',
        },
    ],
    solutions: [
        {
            image: Solution1Image.src,
            title: "AI-Powered Privacy Intelligence",
            description:
                "Adaptive AI that enables real-time privacy control, consent management, and predictive alerts for data risk signals.",
            tabId: 'ai-innovation',
            order: 1,
        },
        {
            image: Solution2Image.src,
            title: "AI Agents for Web & Mobile",
            description:
                "Deployable smart agents to automate threat responses and compliance workflows across platforms.",
            tabId: 'ai-innovation',
            order: 2,
        },
        {
            image: Solution3Image.src,
            title: "Behavioral Threat Detection",
            description:
                "ML-driven detection of anomalous behavior, identity misuse, and cloud-based data threats.",
            tabId: 'ai-innovation',
            order: 3,
        },
        {
            image: Solution4Image.src,
            title: "Explainable AI (XAI)",
            description:
                "Auditable, transparent AI decision-making for enhanced trust and regulatory compliance.",
            tabId: 'ai-innovation',
            order: 4,
        },
        {
            image: Solution1Image.src,
            title: "AI-Powered Privacy Intelligence",
            description:
                "Adaptive AI that enables real-time privacy control, consent management, and predictive alerts for data risk signals.",
            tabId: 'ai-innovation',
            order: 5,
        },
        {
            image: Solution2Image.src,
            title: "AI Agents for Web & Mobile",
            description:
                "Deployable smart agents to automate threat responses and compliance workflows across platforms.",
            tabId: 'ai-innovation',
            order: 6,
        },
        {
            image: Solution3Image.src,
            title: "Advanced Encryption",
            description:
                "End-to-end encryption solutions that protect your data in transit and at rest with military-grade security.",
            tabId: 'cyber-security',
            order: 7,
        },
        {
            image: Solution4Image.src,
            title: "Threat Monitoring",
            description:
                "24/7 real-time monitoring and analysis of security threats with automated response capabilities.",
            tabId: 'cyber-security',
            order: 8,
        },
        {
            image: Solution1Image.src,
            title: "Incident Response",
            description:
                "Rapid response protocols and automated systems to contain and mitigate security breaches.",
            tabId: 'cyber-security',
            order: 9,
        },
        {
            image: Solution2Image.src,
            title: "Data Protection",
            description:
                "Comprehensive data protection strategies including backup, recovery, and secure data management.",
            tabId: 'cyber-security',
            order: 10,
        },
        {
            image: Solution3Image.src,
            title: "Advanced Encryption",
            description:
                "End-to-end encryption solutions that protect your data in transit and at rest with military-grade security.",
            tabId: 'cyber-security',
            order: 11,
        },
        {
            image: Solution4Image.src,
            title: "Threat Monitoring",
            description:
                "24/7 real-time monitoring and analysis of security threats with automated response capabilities.",
            tabId: 'cyber-security',
            order: 12,
        },
    ],
};

export const homePageCorePromiseData: CorePromiseContainerProps = {
    heading: "Our Core Promise",
    subHeading:
        "Innovation with integrity. Privacy and transparency at the core.",
    promises: [
        {
            icon: "trust",
            title: "Trust",
            description:
                "We believe trust is earned daily—through transparency, accountability, and consistent, user-focused innovation. ",
        },
        {
            icon: "transparency",
            title: "Transparency",
            description:
                "Clear, honest communication is foundational to every product we create and every interaction we have.",
        },
        {
            icon: "control",
            title: "Control",
            description:
                "Your data, your rules. Our solutions put you in charge of your digital experience, ensuring privacy by design and by default. ",
        },
    ],
};

export const homePageAboutData: AboutContainerProps = {
    heading: "Our Story",
    subHeading:
        "What began as a mission to empower users with greater digital autonomy has grown into a commitment to building secure, scalable platforms that prioritize privacy starting with communication and evolving into a full privacy-first ecosystem. ",
    ourVisionHeading: "Our Vision",
    ourMissionHeading: "Our Mission",
    ourVisionSubHeading:
        "A digital world where privacy and accountability are the default, where people control their data, and where everyone feels safe and empowered online.",
    ourMissionSubHeading:
        "We offer solutions for secure, confidential, and private Digital environments for Customers and Businesses to protect your Data.",
};

export const homePageTeamData: TeamContainerProps = {
    heading: "Our Team",
    subHeading:
        "We’re a diverse group of technologists, designers, privacy advocates, and forward-thinkers united by a shared mission: to build ethical technology that puts people first. ",
    buttonText: "Explore Career Opportunities",
    buttonLink: "/careers",
};

export const homePageResourcesData: ResourcesContainerProps = {
    heading: "Resources",
    buttonText: "Continue reading",
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

export const ctaData: CtaContainerProps = {
    buttonText: "Explore Career Opportunities",
    buttonLink: "/careers",
    headingLines: ["Innovate with purpose.", "Build with meaning. Belong here."],
};


export const homePageData: HomePageData = {
    metaData: homePageMetaData,
    heroData: homePageHeroData,
    solutionsData: homePageSolutionsData,
    corePromiseData: homePageCorePromiseData,
    aboutData: homePageAboutData,
    teamData: homePageTeamData,
    resourcesData: homePageResourcesData,
    ctaData,
};