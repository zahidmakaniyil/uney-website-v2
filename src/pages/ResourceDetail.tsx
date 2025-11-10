"use client";

import { ArrowLeft, LinkIcon } from "lucide-react";
import Link from "next/link";
import Resources, { ResourcesContainerProps } from "@/containers/Resources";
import Cta, { CtaContainerProps } from "@/containers/Cta";
import Image from "next/image";
import resourceImage from "@/assets/images/resource-1.png";
import SocialMediaLinkedinIcon from "@/assets/icons/SocialMediaLinkedinIcon";
import SocialMediaFbIcon from "@/assets/icons/SocialMediaFbIcon";
import EmailIcon from "@/assets/icons/EmailIcon";
import { ArticleDetail } from "@/types";

interface ResourceDetailPageProps {
    resourceDetail: ArticleDetail;
    relatedResources: ResourcesContainerProps;
    ctaData: CtaContainerProps;
}

const BUTTON_STYLES = {
    base: "border border-heading h-[40px] flex items-center justify-center rounded-[8px] cursor-pointer",
    square: "w-[40px]",
    copyLink: "gap-[8px] px-[16px] py-[10px]",
};

const LAYOUT_CONSTANTS = {
    maxWidth: {
        article: "max-w-6xl",
        content: "max-w-7xl",
        prose: "max-w-4xl",
    },
    spacing: {
        gap: "gap-[8px]",
        gapLarge: "gap-[12px]",
        padding: "px-[20px]",
        paddingLarge: "px-[16px] py-[10px]",
    },
    sticky: {
        top: "top-[100px]",
    },
};

const SocialButton = ({
    children,
    className = "",
    onClick,
}: {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}) => (
    <div className={`${BUTTON_STYLES.base} ${className}`} onClick={onClick}>
        {children}
    </div>
);

const CopyLinkButton = () => (
    <SocialButton className={BUTTON_STYLES.copyLink}>
        <span className="text-heading">Copy link</span>
        <LinkIcon size={16} />
    </SocialButton>
);

const TopButton = () => (
    <SocialButton
        className={`${BUTTON_STYLES.square} justify-center`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
        <div className="flex scroll-top-button justify-center">TOP</div>
    </SocialButton>
);

const ResourceDetailPage = ({
    resourceDetail,
    relatedResources,
    ctaData,
}: ResourceDetailPageProps) => {
    return (
        <>
            <section
                className={`${LAYOUT_CONSTANTS.maxWidth.article} mx-auto mb-[24px] md:mb-[48px] mt-[72px] bg-white pt-[32px] md:pt-[56px] ${LAYOUT_CONSTANTS.spacing.padding}`}
            >
                <Link
                    href="/resources"
                    className="flex items-center gap-[8px] text-primary mb-[20px]"
                >
                    <ArrowLeft size={20} />

                    <span className="text-primary resources-page-title">Back</span>
                </Link>

                <div>
                    <h1 className="text-heading article-detail-title font-josefin mb-[20px]">
                        {resourceDetail.title}
                    </h1>

                    <div className="text-neutral flex resource-card-date gap-[8px] mb-[20px]">
                        <time dateTime="2025-01-24">{resourceDetail.readTime}</time>
                        <span>•</span>
                        <time dateTime="2025-01-24">{resourceDetail.date}</time>
                    </div>
                    <p className="text-neutral resource-featured-excerpt">
                        {resourceDetail.excerpt}
                    </p>
                </div>
            </section>
            {/* Mobile Social Buttons - Horizontal layout before image */}
            <section
                className={`md:hidden bg-white ${LAYOUT_CONSTANTS.spacing.padding} pb-[48px]`}
            >
                <div className={`${LAYOUT_CONSTANTS.maxWidth.content} mx-auto`}>
                    <div
                        className={`flex justify-start ${LAYOUT_CONSTANTS.spacing.gapLarge}`}
                    >
                        <CopyLinkButton />
                        <SocialButton className={BUTTON_STYLES.square}>
                            <EmailIcon />
                        </SocialButton>
                        <SocialButton className={BUTTON_STYLES.square}>
                            <SocialMediaFbIcon />
                        </SocialButton>
                        <SocialButton className={BUTTON_STYLES.square}>
                            <SocialMediaLinkedinIcon />
                        </SocialButton>
                    </div>
                </div>
            </section>
            <section
                className={`${LAYOUT_CONSTANTS.maxWidth.content} mx-auto md:rounded-[16px] overflow-hidden`}
            >
                <Image
                    src={resourceImage}
                    alt={resourceDetail.title}
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover"
                    priority
                />
            </section>
            {/* Article Content */}
            <section
                className={`section bg-white ${LAYOUT_CONSTANTS.spacing.padding} md:px-[0px] pb-[64px] md:pb-[100px] ${LAYOUT_CONSTANTS.maxWidth.content} mx-auto flex justify-between`}
            >
                {/* Desktop Social Buttons - Sticky vertical layout */}
                <div
                    className={`hidden md:flex flex-col ${LAYOUT_CONSTANTS.spacing.gap} mt-[48px] sticky ${LAYOUT_CONSTANTS.sticky.top} h-fit`}
                >
                    <TopButton />
                    <SocialButton className={BUTTON_STYLES.square}>
                        <EmailIcon />
                    </SocialButton>
                    <SocialButton className={BUTTON_STYLES.square}>
                        <SocialMediaFbIcon />
                    </SocialButton>
                    <SocialButton className={BUTTON_STYLES.square}>
                        <SocialMediaLinkedinIcon />
                    </SocialButton>
                </div>
                <div
                    className={`prose prose-lg resource-detail-content ${LAYOUT_CONSTANTS.maxWidth.prose} mx-auto`}
                >
                    <div dangerouslySetInnerHTML={{ __html: resourceDetail.content }} />
                </div>
            </section>
            <Resources
                resources={relatedResources.resources}
                buttonText={relatedResources.buttonText}
                buttonLink={relatedResources.buttonLink}
                heading={relatedResources.heading}
            />
            <Cta
                buttonText={ctaData.buttonText}
                buttonLink={ctaData.buttonLink}
                headingLines={ctaData.headingLines}
            />
        </>
    );
};

export default ResourceDetailPage;
