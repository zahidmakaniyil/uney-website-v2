"use client";

import Cta, { CtaContainerProps } from "@/containers/Cta";

interface PrivacyPolicyPageProps {
    contentData: {
        heading: string;
        content: string;
    };
    ctaData: CtaContainerProps;
}

const PrivacyPolicyPage = ({
    contentData,
    ctaData,
}: PrivacyPolicyPageProps) => {
    // Defensive check - ensure contentData exists
    if (!contentData) {
        return null;
    }

    const { heading, content } = contentData;
    return (
        <>
            <section className="mt-[72px] pb-[80px] pt-[40px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-heading article-detail-title font-josefin  text-center privacy-policy-content">
                    {heading}
                </h1>
                <div className="max-w-5xl mx-auto pb-[64px] pt-[24px]">
                    <div className="prose prose-lg max-w-none">
                        <div dangerouslySetInnerHTML={{ __html: content }} />
                    </div>
                </div>
            </section>
            <Cta
                buttonText={ctaData.buttonText}
                buttonLink={ctaData.buttonLink}
                headingLines={ctaData.headingLines}
            />
        </>
    );
};

export default PrivacyPolicyPage;
