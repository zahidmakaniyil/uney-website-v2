import type { Metadata } from "next";
import { Inter, Josefin_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin-sans",
});

export const metadata: Metadata = {
  title: "UNEY - Privacy First, Always | AI-Powered Privacy Solutions",
  description: "We build AI-powered, privacy-first solutions that put people in charge of their digital lives. From secure communication to transparent cloud protection.",
  keywords: "privacy-first solutions, AI privacy, cybersecurity, digital privacy, secure communication",
  authors: [{ name: "UNEY" }],
  openGraph: {
    title: "UNEY - Privacy First, Always",
    description: "AI-powered, privacy-first solutions that put people in charge of their digital lives.",
    type: "website",
    url: "https://uney.com/",
  },
  twitter: {
    card: "summary_large_image",
    title: "UNEY - Privacy First, Always",
    description: "AI-powered, privacy-first solutions for digital privacy and security.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "UNEY",
    "description": "Privacy-first AI and cybersecurity solutions",
    "url": "https://uney.com",
    "logo": "https://uney.com/wp-content/uploads/uney-logo.png",
    "foundingDate": "2024",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+971-4-297-3339",
      "contactType": "Customer Service",
      "email": "info@uney.com",
      "availableLanguage": ["English"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "The H Dubai - Office Tower, Level 3, 1, Sheikh Zayed Road",
      "addressLocality": "Dubai",
      "addressCountry": "UAE"
    },
    "sameAs": [
      "https://linkedin.com/company/weareuney",
      "https://instagram.com/weareuney_",
      "https://facebook.com/weareuney",
      "https://twitter.com/weareuney"
    ]
  };

  return (
    <html lang="en">
      <body className={`${inter.variable} ${josefinSans.variable} antialiased`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </body>
    </html>
  );
}
