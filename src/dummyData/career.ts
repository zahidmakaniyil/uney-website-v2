import { PageMetaData } from "@/types";
import CareersUneyImage from "@/assets/images/career-image.png";
import CareersUneyImageMobile from "@/assets/images/career-image-mobile.png";
import { JobCardProps } from "@/components/JobCard";
import { ctaData } from "./home";
import { CareerPageData } from "@/app/careers/page";

export const careerPageMetaData: PageMetaData = {
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

const heading: string = "Careers at UNEY";
const subHeading: string =
    "Join a bold team building impactful products that shape the future of privacy-first tech.";
const heading2: string = "Open Roles";
const image: string = CareersUneyImage.src;
const imageMobile: string = CareersUneyImageMobile.src;

const jobOpenings: JobCardProps[] = [
    {
        id: 1,
        slug: "product-marketing-manager",
        title: "Product Marketing Manager",
        department: "Marketing",
        location: "Dubai, UAE",
        type: "Full-time",
        experience: "5+ years",
        description: "Join our team in Dubai as a Product Marketing Manager and take ownership of shaping the voice of our products. Lead product positioning, messaging, channel management, and drive product awareness across the UAE and beyond. Work closely with product, marketing, and sales teams to ensure a seamless go-to-market strategy and exceptional customer experience, while empowering SMEs with cutting-edge technology solutions."
    },
    {
        id: 2,
        slug: "government-relations-advisor",
        title: "Government Relations Advisor",
        department: "Legal and Compliance",
        location: "Dubai, UAE",
        type: "Full-time",
        experience: "5+ years",
        description: "As a Government Relations Advisor, you will shape and manage the company’s relationships with Dubai and UAE governments, advocating for policy outcomes that align with the Dubai Economic Agenda. Develop and execute government relations strategies, analyze regulatory changes, and build strong stakeholder networks to influence key decision-makers. This position offers opportunities for career progression, including leadership roles and regional expansion, while making a significant impact on the company’s regulatory and economic strategies."
    },
    {
        id: 3,
        slug: "senior-principal-backend-engineer-ztna-sase-platform",
        title: "Senior Principal Backend Engineer – ZTNA/SASE Platform",
        department: "Engineering",
        location: "Dubai, UAE",
        type: "Full-time",
        experience: "10+ years",
        description: "Join our team as a Senior Principal Backend Engineer to lead the development of our cutting-edge ZTNA (Zero Trust Network Access) and SASE (Secure Access Service Edge) platform. You will architect and build secure, scalable, and high-performance backend services that power innovative security solutions, including identity-aware access control and dynamic policy engines. Collaborate with cross-functional teams to influence technology choices and deliver cloud-native security capabilities that drive the evolution of next-generation enterprise security."
    },
    {
        id: 4,
        slug: "senior-network-security-engineer",
        title: "Senior Network Security Engineer",
        department: "Engineering",
        location: "Dubai, UAE",
        type: "Full-time",
        experience: "7+ years",
        description: "We are looking for a Senior Network Security Engineer to lead the research, integration, and optimization of open-source technologies for our next-gen firewall and secure web gateway solutions. You will play a key role in enhancing security features, such as application control, content filtering, and data loss prevention (DLP). Your responsibilities will include conducting in-depth R&D, deploying and testing security solutions, and collaborating with software development teams to ensure high-performance, scalable, and reliable network security."
    },
    {
        id: 5,
        slug: "frontend-developer-react",
        title: "Frontend Developer (React)",
        department: "Engineering",
        location: "Dubai, UAE",
        type: "Full-time",
        experience: "3+ years",
        description: "We are looking for a skilled Frontend Developer with expertise in React to join our engineering team. In this role, you will build and maintain user interfaces for web applications, ensuring a seamless and dynamic user experience. You will collaborate closely with backend developers, UX/UI designers, and product teams to deliver high-quality, responsive, and performant frontend solutions. This is an exciting opportunity to work on innovative projects in a fast-paced environment, contributing to the development of cutting-edge digital products."
    }
];

export const careerPageData: CareerPageData = {
    metaData: careerPageMetaData,
    contentData: {
        heading,
        subHeading,
        heading2,
        image,
        imageMobile,
        jobOpenings,
    },
    ctaData,
};
