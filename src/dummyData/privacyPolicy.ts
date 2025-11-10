import { PageMetaData } from "@/types";
import { ctaData } from "./home";
import { PrivacyPolicyPageData } from "@/app/privacy-policy/page";

export const privacyPolicyPageMetaData: PageMetaData = {
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

const privacyPolicyTitle: string = "Privacy Policy";

const privacyPolicyContent: string = `
    <p class="text-lg text-gray-600 mb-8">
        <strong>Last updated:</strong> ${new Date().toLocaleDateString()}
      </p>

      <div class="space-y-8">
        <section>
          <h2 class="text-2xl font-semibold text-gray-900 mb-4">Our Privacy-First Commitment</h2>
          <p class="text-gray-700 leading-relaxed">
            At UNEY, privacy isn't just a feature—it's our foundation. We build AI-powered, privacy-first solutions 
            that put you in charge of your digital life. This privacy policy outlines how we collect, use, and protect 
            your information while maintaining our commitment to transparency and user control.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
          <div class="space-y-4">
            <div>
              <h3 class="text-xl font-medium text-gray-900 mb-2">Information You Provide</h3>
              <ul class="list-disc list-inside text-gray-700 space-y-2">
                <li>Contact information when you reach out to us</li>
                <li>Account information for our services</li>
                <li>Communication preferences and feedback</li>
                <li>Job application information (for career opportunities)</li>
              </ul>
            </div>
            
            <div>
              <h3 class="text-xl font-medium text-gray-900 mb-2">Information We Collect Automatically</h3>
              <ul class="list-disc list-inside text-gray-700 space-y-2">
                <li>Website usage data (anonymized and aggregated)</li>
                <li>Technical information necessary for service functionality</li>
                <li>Security and performance metrics</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            We use your information only for legitimate business purposes that align with our privacy-first principles:
          </p>
          <ul class="list-disc list-inside text-gray-700 space-y-2">
            <li>Providing and improving our privacy-first solutions</li>
            <li>Communicating with you about our services</li>
            <li>Ensuring the security and integrity of our platforms</li>
            <li>Complying with legal obligations</li>
            <li>Processing job applications and career opportunities</li>
          </ul>
        </section>

        <section>
          <h2 class="text-2xl font-semibold text-gray-900 mb-4">Data Protection and Security</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            Security is at the core of everything we do. We implement industry-leading security measures to protect your data:
          </p>
          <ul class="list-disc list-inside text-gray-700 space-y-2">
            <li>End-to-end encryption for sensitive communications</li>
            <li>Regular security audits and assessments</li>
            <li>Access controls and authentication protocols</li>
            <li>Data minimization principles</li>
            <li>Regular staff training on privacy and security</li>
          </ul>
        </section>

        <section>
          <h2 class="text-2xl font-semibold text-gray-900 mb-4">Your Privacy Rights</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            We believe you should have control over your data. You have the right to:
          </p>
          <ul class="list-disc list-inside text-gray-700 space-y-2">
            <li>Access your personal information</li>
            <li>Correct inaccurate or incomplete data</li>
            <li>Request deletion of your personal information</li>
            <li>Object to certain processing activities</li>
            <li>Data portability where technically feasible</li>
            <li>Withdraw consent at any time</li>
          </ul>
        </section>

        <section>
          <h2 class="text-2xl font-semibold text-gray-900 mb-4">Cookies and Tracking</h2>
          <p class="text-gray-700 leading-relaxed">
            We use minimal, privacy-respecting cookies and tracking technologies. We only collect data that is 
            necessary for website functionality and user experience. You can control cookie preferences through 
            your browser settings.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-semibold text-gray-900 mb-4">Third-Party Services</h2>
          <p class="text-gray-700 leading-relaxed">
            We carefully select third-party services that share our privacy values. When we do work with third parties, 
            we ensure they meet our privacy standards and only process data as necessary for the service provided.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-semibold text-gray-900 mb-4">International Data Transfers</h2>
          <p class="text-gray-700 leading-relaxed">
            As a global company, we may transfer your data across international borders. When we do, we ensure 
            appropriate safeguards are in place to protect your privacy rights, including standard contractual 
            clauses and adequacy decisions.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-semibold text-gray-900 mb-4">Children's Privacy</h2>
          <p class="text-gray-700 leading-relaxed">
            Our services are not directed to children under 13. We do not knowingly collect personal information 
            from children under 13. If we become aware that we have collected such information, we will take 
            steps to delete it promptly.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-semibold text-gray-900 mb-4">Changes to This Policy</h2>
          <p class="text-gray-700 leading-relaxed">
            We may update this privacy policy from time to time to reflect changes in our practices or legal requirements. 
            We will notify you of any material changes and post the updated policy on our website.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            If you have any questions about this privacy policy or our privacy practices, please contact us:
          </p>
          <div class="bg-gray-50 p-6 rounded-lg">
            <p class="text-gray-700">
              <strong>UNEY Privacy Team</strong><br />
              Email: privacy@uney.com<br />
              Address: Dubai, UAE
            </p>
          </div>
        </section>
      </div>
`;

export const privacyPolicyPageData: PrivacyPolicyPageData = {
  metaData: privacyPolicyPageMetaData,
  contentData: {
    heading: privacyPolicyTitle,
    content: privacyPolicyContent,
  },
  ctaData,
};
