import { Inter, Josefin_Sans } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin-sans",
});


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
      <head>
        <link rel="icon" href="/favicon-32.png" type="image/png" sizes="32x32" />
        <link
          rel="icon"
          href="/favicon-128.png"
          type="image/png"
          sizes="128x128"
        />
      </head>
      <body className={`${inter.variable} ${josefinSans.variable} antialiased`}>
        <Layout>
          {children}
        </Layout>
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
