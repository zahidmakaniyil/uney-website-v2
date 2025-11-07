import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Contact UNEY - Get in Touch | Dubai Office",
    description: "Contact UNEY for inquiries. Dubai office: The H Dubai Office Tower. Email: info@uney.com | Phone: +971 4 297 3339",
    keywords: "contact UNEY, Dubai office, privacy solutions inquiry",
    openGraph: {
        title: "Contact UNEY - Get in Touch",
        description: "Contact UNEY for inquiries. Dubai office: The H Dubai Office Tower.",
        type: "website",
        url: "https://uney.com/contact-us/",
    },
};

export default function ContactUsPage() {
    return (
        <div className="min-h-screen">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="pt-24 pb-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center space-y-6">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                                Contact UNEY
                            </h1>
                        </div>
                    </div>
                </section>

                {/* Contact Content */}
                <section className="py-16 md:py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Contact Form */}
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                                    Get in Touch
                                </h2>
                                <p className="text-lg text-gray-600 mb-8">
                                    Have a question about our privacy-first solutions? We&apos;d love to hear from you.
                                    Send us a message and we&apos;ll respond as soon as possible.
                                </p>

                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                                                First Name
                                            </label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                                            Company (Optional)
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                            Subject
                                        </label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                            required
                                        >
                                            <option value="">Select a subject</option>
                                            <option value="general">General Inquiry</option>
                                            <option value="sales">Sales & Partnerships</option>
                                            <option value="support">Technical Support</option>
                                            <option value="careers">Careers</option>
                                            <option value="media">Media & Press</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={6}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                            required
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>

                            {/* Contact Information */}
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                                        Our Office
                                    </h2>
                                    <div className="space-y-6">
                                        <div className="flex items-start space-x-4">
                                            <MapPin size={24} className="text-orange-500 mt-1" />
                                            <div>
                                                <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                                                <p className="text-gray-600">
                                                    The H Dubai - Office Tower<br />
                                                    Level 3<br />
                                                    1, Sheikh Zayed Road<br />
                                                    Dubai, UAE
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-4">
                                            <Phone size={24} className="text-orange-500 mt-1" />
                                            <div>
                                                <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                                                <a
                                                    href="tel:+97142973339"
                                                    className="text-gray-600 hover:text-orange-500 transition-colors"
                                                >
                                                    +971 4 297 3339
                                                </a>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-4">
                                            <Mail size={24} className="text-orange-500 mt-1" />
                                            <div>
                                                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                                                <a
                                                    href="mailto:info@uney.com"
                                                    className="text-gray-600 hover:text-orange-500 transition-colors"
                                                >
                                                    info@uney.com
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                                        Contact Information
                                    </h2>
                                    <div className="bg-gray-50 p-6 rounded-lg">
                                        <p className="text-gray-600 mb-4">
                                            For general inquiries, partnerships, or media requests, please use the contact form or reach out to us directly.
                                        </p>
                                        <p className="text-gray-600">
                                            We typically respond to all inquiries within 24 hours during business days.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
