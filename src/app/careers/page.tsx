import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, MapPin, Clock, Users } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Careers at UNEY - Join Our Privacy-First Mission | Open Roles Dubai",
    description: "Join a bold team building impactful products that shape the future of privacy-first tech. Explore open roles in Dubai: Design, Marketing, Engineering.",
    keywords: "UNEY careers, privacy tech jobs, cybersecurity jobs Dubai, AI jobs UAE",
    openGraph: {
        title: "Careers at UNEY - Join Our Privacy-First Mission",
        description: "Join a bold team building impactful products that shape the future of privacy-first tech.",
        type: "website",
        url: "https://uney.com/careers/",
    },
};

export default function CareersPage() {
    const jobOpenings = [
        {
            id: 1,
            title: "Senior AI Engineer",
            department: "Engineering",
            location: "Dubai, UAE",
            type: "Full-time",
            experience: "5+ years",
            description: "Lead the development of AI-powered privacy solutions and work on cutting-edge machine learning algorithms."
        },
        {
            id: 2,
            title: "Cybersecurity Specialist",
            department: "Security",
            location: "Dubai, UAE",
            type: "Full-time",
            experience: "3+ years",
            description: "Design and implement security measures to protect our platforms and ensure compliance with privacy regulations."
        },
        {
            id: 3,
            title: "Product Designer",
            department: "Design",
            location: "Remote",
            type: "Full-time",
            experience: "4+ years",
            description: "Create intuitive and privacy-focused user experiences for our AI and security products."
        },
        {
            id: 4,
            title: "Privacy Compliance Manager",
            department: "Legal & Compliance",
            location: "Dubai, UAE",
            type: "Full-time",
            experience: "6+ years",
            description: "Ensure our products and processes comply with global privacy regulations and industry standards."
        },
        {
            id: 5,
            title: "Frontend Developer",
            department: "Engineering",
            location: "Remote",
            type: "Full-time",
            experience: "3+ years",
            description: "Build responsive and accessible web applications using modern frontend technologies."
        },
        {
            id: 6,
            title: "DevOps Engineer",
            department: "Engineering",
            location: "Dubai, UAE",
            type: "Full-time",
            experience: "4+ years",
            description: "Manage our cloud infrastructure and ensure high availability and security of our services."
        }
    ];

    const benefits = [
        {
            icon: "🏠",
            title: "Flexible Work",
            description: "Remote-first culture with flexible working hours"
        },
        {
            icon: "💰",
            title: "Competitive Salary",
            description: "Market-competitive compensation packages"
        },
        {
            icon: "🏥",
            title: "Health Insurance",
            description: "Comprehensive health and dental coverage"
        },
        {
            icon: "📚",
            title: "Learning Budget",
            description: "Annual budget for courses, conferences, and books"
        },
        {
            icon: "🏖️",
            title: "Unlimited PTO",
            description: "Take time off when you need it"
        },
        {
            icon: "💻",
            title: "Latest Tech",
            description: "Top-of-the-line equipment and tools"
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
                                Careers at UNEY
                            </h1>
                            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                                Join a bold team building impactful products that shape the future of privacy-first tech.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Why Work With Us */}
                <section className="section bg-white">
                    <div className="container">
                        <div className="text-center space-y-6 mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-[var(--uney-dark)]">
                                Why Work With Us
                            </h2>
                            <p className="text-lg text-[var(--uney-gray)] max-w-3xl mx-auto">
                                We&apos;re building technology that matters. Join us in creating solutions that protect privacy and empower users worldwide.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="text-center space-y-4">
                                    <div className="text-4xl">{benefit.icon}</div>
                                    <h3 className="text-xl font-semibold text-[var(--uney-dark)]">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-[var(--uney-gray)]">
                                        {benefit.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Open Positions */}
                <section className="section bg-[var(--uney-beige)]">
                    <div className="container">
                        <div className="text-center space-y-6 mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-[var(--uney-dark)]">
                                Open Positions
                            </h2>
                            <p className="text-lg text-[var(--uney-gray)] max-w-3xl mx-auto">
                                Explore our current openings and find the perfect role for your skills and passion.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {jobOpenings.map((job) => (
                                <div key={job.id} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="text-xl font-semibold text-[var(--uney-dark)] mb-2">
                                                {job.title}
                                            </h3>
                                            <p className="text-[var(--uney-gray)]">
                                                {job.description}
                                            </p>
                                        </div>

                                        <div className="flex flex-wrap gap-4 text-sm text-[var(--uney-gray)]">
                                            <div className="flex items-center space-x-1">
                                                <MapPin size={16} />
                                                <span>{job.location}</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <Clock size={16} />
                                                <span>{job.type}</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <Users size={16} />
                                                <span>{job.experience}</span>
                                            </div>
                                        </div>

                                        <div className="pt-2">
                                            <button className="inline-flex items-center space-x-2 text-[var(--uney-orange)] hover:text-[var(--uney-dark)] transition-colors font-medium">
                                                <span>Apply Now</span>
                                                <ArrowRight size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section bg-white">
                    <div className="container">
                        <div className="text-center space-y-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-[var(--uney-dark)]">
                                Don&apos;t See Your Role?
                            </h2>
                            <p className="text-lg text-[var(--uney-gray)] max-w-2xl mx-auto">
                                We&apos;re always looking for talented individuals who share our vision. Send us your resume and let&apos;s start a conversation.
                            </p>
                            <button className="inline-flex items-center space-x-2 bg-[var(--uney-orange)] text-white px-8 py-4 rounded-lg hover:bg-[#e55a2b] transition-colors font-semibold">
                                <span>Send Your Resume</span>
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
