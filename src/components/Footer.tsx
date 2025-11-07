import Link from "next/link";
import LogoDark from "@/assets/icons/LogoDark";
import CallIcon from "@/assets/icons/CallIcon";
import EmailIcon from "@/assets/icons/EmailIcon";
import SocialMediaLinkedinIcon from "@/assets/icons/SocialMediaLinkedinIcon";
import SocialMediaInstaIcon from "@/assets/icons/SocialMediaInstaIcon";
import SocialMediaFbIcon from "@/assets/icons/SocialMediaFbIcon";
import SocialMediaXIcon from "@/assets/icons/SocialMediaXIcon";

export default function Footer() {

    const footerContent = {
        address: {
            title: "Address",
            lines: ["The H Dubai - Office Tower", "Level 3", "1, Sheikh Zayed Road"],
        },
        company: {
            title: "Company",
            links: [
                { href: "/resources", text: "Blog" },
                { href: "/careers", text: "Careers" },
                { href: "/privacy-policy", text: "Privacy Policy" },
            ],
        },
        contact: {
            title: "Contact",
            email: "info@uney.com",
            phone: "+971 4 297 3339",
        },
        social: {
            linkedin: {
                href: "https://linkedin.com/company/weareuney",
                label: "LinkedIn",
            },
            instagram: {
                href: "https://instagram.com/weareuney_",
                label: "Instagram",
            },
            facebook: { href: "https://facebook.com/weareuney", label: "Facebook" },
            twitter: { href: "https://twitter.com/weareuney", label: "Twitter" },
        },
        copyright: "Copyright © 2025 UNEY Ltd. All rights reserved.",
    };

    // Reusable components
    const FooterLink = ({
        href,
        children,
        className = "",
    }: {
        href: string;
        children: React.ReactNode;
        className?: string;
    }) => (
        <Link
            href={href}
            className={`block text-secondary footer-link-description hover:text-primary transition-colors h-[32px] content-center ${className}`}
        >
            {children}
        </Link>
    );

    const FooterTitle = ({ children }: { children: React.ReactNode }) => (
        <h3 className="text-heading footer-link-title font-josefin mb-[12px]">
            {children}
        </h3>
    );

    const SocialLink = ({
        href,
        label,
        children,
    }: {
        href: string;
        label: string;
        children: React.ReactNode;
    }) => (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-orange-500 transition-colors"
            aria-label={label}
        >
            {children}
        </a>
    );
    return (
        <footer className="bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-[32px] sm:px-6 lg:px-8 py-[64px] md:pt-[100px] md:pb-[50px]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
                    {/* Address */}
                    <div className="">
                        <div className="mb-[24px]">
                            <LogoDark />
                        </div>
                        <FooterTitle>{footerContent.address.title}</FooterTitle>
                        <div className="text-secondary footer-link-description">
                            {footerContent.address.lines.map((line, index) => (
                                <p key={index}>{line}</p>
                            ))}
                        </div>
                    </div>

                    {/* Company Links */}
                    <div className="flex flex-col gap-[12px]">
                        <FooterTitle>{footerContent.company.title}</FooterTitle>
                        <div className="">
                            {footerContent.company.links.map((link, index) => (
                                <FooterLink key={index} href={link.href}>
                                    {link.text}
                                </FooterLink>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col gap-[12px]">
                        <FooterTitle>{footerContent.contact.title}</FooterTitle>
                        <div className="flex flex-col gap-[8px]">
                            <div className="flex items-center gap-[16px]">
                                <EmailIcon />
                                <a
                                    href={`mailto:${footerContent.contact.email}`}
                                    className="block text-secondary footer-link-description hover:text-primary transition-colors content-center"
                                >
                                    {footerContent.contact.email}
                                </a>
                            </div>
                            <div className="flex items-center gap-[16px]">
                                <CallIcon />
                                <a
                                    href={`tel:${footerContent.contact.phone.replace(/\s/g, "")}`}
                                    className="block text-secondary footer-link-description hover:text-primary transition-colors content-center"
                                >
                                    {footerContent.contact.phone}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-200 mt-8 pt-8">
                    <div className="flex flex-col md:flex-row justify-between gap-[16px]">
                        <p className="text-secondary footer-copyright-text">
                            {footerContent.copyright}
                        </p>

                        {/* Social Media Icons */}
                        <div className="flex items-center gap-[16px]">
                            <SocialLink
                                href={footerContent.social.linkedin.href}
                                label={footerContent.social.linkedin.label}
                            >
                                <SocialMediaLinkedinIcon />
                            </SocialLink>
                            <SocialLink
                                href={footerContent.social.instagram.href}
                                label={footerContent.social.instagram.label}
                            >
                                <SocialMediaInstaIcon />
                            </SocialLink>
                            <SocialLink
                                href={footerContent.social.facebook.href}
                                label={footerContent.social.facebook.label}
                            >
                                <SocialMediaFbIcon />
                            </SocialLink>
                            <SocialLink
                                href={footerContent.social.twitter.href}
                                label={footerContent.social.twitter.label}
                            >
                                <SocialMediaXIcon />
                            </SocialLink>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
