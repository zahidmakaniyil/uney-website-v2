import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "UNEY Resources - Privacy & Security Insights | Blog",
    description: "Expert insights on privacy, AI, cybersecurity, and digital ethics. Stay informed with UNEY's latest articles and analysis.",
    keywords: "privacy blog, cybersecurity insights, AI security, digital privacy resources",
    openGraph: {
        title: "UNEY Resources - Privacy & Security Insights",
        description: "Expert insights on privacy, AI, cybersecurity, and digital ethics.",
        type: "website",
        url: "https://uney.com/resources/",
    },
};

export default function ResourcesPage() {
    const resources = [
        {
            id: 1,
            title: "How real-time analytics can transform your money strategy!",
            readTime: "3 min read",
            date: "24.01.2025",
            image: "/resource-1.jpg",
            slug: "real-time-analytics-money-strategy",
            excerpt: "Discover how real-time analytics can revolutionize your financial planning and investment strategies."
        },
        {
            id: 2,
            title: "Privacy-first AI: The future of intelligent systems",
            readTime: "5 min read",
            date: "22.01.2025",
            image: "/resource-2.jpg",
            slug: "privacy-first-ai-future",
            excerpt: "Exploring how AI can be both powerful and privacy-preserving in today's digital landscape."
        },
        {
            id: 3,
            title: "Cybersecurity best practices for small businesses",
            readTime: "4 min read",
            date: "20.01.2025",
            image: "/resource-3.jpg",
            slug: "cybersecurity-small-business",
            excerpt: "Essential cybersecurity measures every small business should implement to protect their data."
        },
        {
            id: 4,
            title: "Understanding GDPR compliance in 2025",
            readTime: "6 min read",
            date: "18.01.2025",
            image: "/resource-4.jpg",
            slug: "gdpr-compliance-2025",
            excerpt: "A comprehensive guide to GDPR compliance and what businesses need to know in 2025."
        },
        {
            id: 5,
            title: "The role of AI in threat detection",
            readTime: "4 min read",
            date: "16.01.2025",
            image: "/resource-5.jpg",
            slug: "ai-threat-detection",
            excerpt: "How artificial intelligence is revolutionizing cybersecurity and threat detection systems."
        },
        {
            id: 6,
            title: "Building trust in digital communications",
            readTime: "3 min read",
            date: "14.01.2025",
            image: "/resource-6.jpg",
            slug: "building-trust-digital-communications",
            excerpt: "Strategies for establishing and maintaining trust in digital communication channels."
        }
    ];

    return (
        <div className="min-h-screen">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="pt-24 pb-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center space-y-6">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                                UNEY Resources
                            </h1>
                            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                                Insights, guides, and thought leadership on privacy, AI, and cybersecurity.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Resources Grid */}
                <section className="py-16 md:py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {resources.map((resource) => (
                                <article key={resource.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                    {/* Image */}
                                    <div className="aspect-[4/3] bg-gray-200">
                                        <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                                            <div className="text-center">
                                                <div className="w-16 h-16 bg-[var(--uney-orange)] rounded-lg flex items-center justify-center mx-auto mb-2">
                                                    <span className="text-white font-bold text-xl">📊</span>
                                                </div>
                                                <p className="text-gray-600 text-sm">Resource Image</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h2 className="text-lg font-semibold text-[var(--uney-dark)] mb-3 line-clamp-2">
                                            {resource.title}
                                        </h2>
                                        <p className="text-[var(--uney-gray)] text-sm mb-4 line-clamp-2">
                                            {resource.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between text-sm text-[var(--uney-gray)] mb-4">
                                            <span>{resource.readTime}</span>
                                            <span>•</span>
                                            <span>{resource.date}</span>
                                        </div>
                                        <Link
                                            href={`/resources/${resource.slug}`}
                                            className="inline-flex items-center space-x-2 text-[var(--uney-dark)] hover:text-[var(--uney-orange)] transition-colors font-medium"
                                        >
                                            <span>Continue reading</span>
                                            <ArrowRight size={16} />
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
