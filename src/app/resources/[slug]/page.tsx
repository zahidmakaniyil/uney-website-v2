import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// This would typically come from a CMS or database
const resources = {
    'real-time-analytics-money-strategy': {
        title: "How real-time analytics can transform your money strategy!",
        content: `
      <p>In today's fast-paced financial landscape, real-time analytics has emerged as a game-changer for individuals and businesses looking to optimize their money management strategies. This comprehensive guide explores how leveraging real-time data can revolutionize your financial planning and investment decisions.</p>
      
      <h2>The Power of Real-Time Financial Data</h2>
      <p>Real-time analytics provides instant insights into market conditions, spending patterns, and investment performance. Unlike traditional monthly or quarterly reports, real-time data allows you to make informed decisions as market conditions change.</p>
      
      <h3>Key Benefits of Real-Time Analytics</h3>
      <ul>
        <li><strong>Immediate Market Response:</strong> React to market changes as they happen</li>
        <li><strong>Optimized Cash Flow:</strong> Monitor and adjust spending in real-time</li>
        <li><strong>Risk Management:</strong> Identify potential risks before they become problems</li>
        <li><strong>Performance Tracking:</strong> Monitor investment performance continuously</li>
      </ul>
      
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
        author: "Uney Team"
    },
    'privacy-first-ai-future': {
        title: "Privacy-first AI: The future of intelligent systems",
        content: `
      <p>As artificial intelligence becomes increasingly integrated into our daily lives, the need for privacy-first AI systems has never been more critical. This article explores how we can build AI that is both powerful and privacy-preserving.</p>
      
      <h2>The Challenge of AI and Privacy</h2>
      <p>Traditional AI systems often require vast amounts of personal data to function effectively. This creates a fundamental tension between AI capabilities and user privacy. However, recent advances in privacy-preserving technologies are changing this landscape.</p>
      
      <h3>Privacy-Preserving AI Techniques</h3>
      <ul>
        <li><strong>Federated Learning:</strong> Train models without centralizing data</li>
        <li><strong>Differential Privacy:</strong> Add mathematical noise to protect individual privacy</li>
        <li><strong>Homomorphic Encryption:</strong> Perform computations on encrypted data</li>
        <li><strong>Secure Multi-Party Computation:</strong> Enable collaborative analysis without data sharing</li>
      </ul>
      
      <h2>The Future of Privacy-First AI</h2>
      <p>At Uney, we're pioneering the development of AI systems that prioritize user privacy from the ground up. Our approach combines cutting-edge privacy-preserving techniques with state-of-the-art AI capabilities.</p>
      
      <p>The future of AI lies in systems that can deliver powerful insights while respecting user privacy. By embracing privacy-first principles, we can build AI that users can trust and rely on.</p>
    `,
        readTime: "5 min read",
        date: "22.01.2025",
        author: "Uney Team"
    }
};

export default function ResourcePage({ params }: { params: { slug: string } }) {
    const resource = resources[params.slug as keyof typeof resources];

    if (!resource) {
        notFound();
    }

    return (
        <div className="min-h-screen">
            <Header />
            <main>
                {/* Article Header */}
                <section className="pt-24 pb-16 bg-white">
                    <div className="container">
                        <div className="max-w-4xl mx-auto">
                            <Link
                                href="/resources"
                                className="inline-flex items-center space-x-2 text-[var(--uney-orange)] hover:text-[var(--uney-dark)] transition-colors mb-8"
                            >
                                <ArrowLeft size={20} />
                                <span>Back to Resources</span>
                            </Link>

                            <div className="space-y-6">
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--uney-dark)] leading-tight">
                                    {resource.title}
                                </h1>

                                <div className="flex flex-wrap items-center gap-6 text-[var(--uney-gray)]">
                                    <div className="flex items-center space-x-2">
                                        <Calendar size={16} />
                                        <span>{resource.date}</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Clock size={16} />
                                        <span>{resource.readTime}</span>
                                    </div>
                                    <div>
                                        <span>By {resource.author}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Article Content */}
                <section className="section bg-white">
                    <div className="container">
                        <div className="max-w-4xl mx-auto">
                            <div className="prose prose-lg max-w-none">
                                <div dangerouslySetInnerHTML={{ __html: resource.content }} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Related Articles */}
                <section className="section bg-[var(--uney-light)]">
                    <div className="container">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-2xl md:text-3xl font-bold text-[var(--uney-dark)] mb-8">
                                Related Articles
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {Object.entries(resources)
                                    .filter(([slug]) => slug !== params.slug)
                                    .slice(0, 2)
                                    .map(([slug, article]) => (
                                        <Link
                                            key={slug}
                                            href={`/resources/${slug}`}
                                            className="block bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                                        >
                                            <h3 className="text-lg font-semibold text-[var(--uney-dark)] mb-2">
                                                {article.title}
                                            </h3>
                                            <div className="flex items-center space-x-4 text-sm text-[var(--uney-gray)]">
                                                <span>{article.readTime}</span>
                                                <span>•</span>
                                                <span>{article.date}</span>
                                            </div>
                                        </Link>
                                    ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

// Generate static params for known resources
export async function generateStaticParams() {
    return Object.keys(resources).map((slug) => ({
        slug,
    }));
}
