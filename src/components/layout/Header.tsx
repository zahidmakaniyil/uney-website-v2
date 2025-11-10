"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HamburgerMenuIcon from "@/assets/icons/HamburgerMenuIcon";
import LogoLight from "@/assets/icons/LogoLight";
import LogoDark from "@/assets/icons/LogoDark";
import SidebarCloseIcon from "@/assets/icons/SidebarCloseIcon";
import ContactModal from "@/components/ContactModal";

// Desktop navigation data
const desktopNavigationLinks = [
    {
        label: "About Us",
        href: "/about-us",
        isScrollLink: true,
        scrollTarget: "about",
    },
    {
        label: "Solutions",
        href: "/solutions",
        isScrollLink: true,
        scrollTarget: "solutions",
        isContactButton: false,
    },
    {
        label: "Resources",
        href: "/resources",
        isScrollLink: false,
        isContactButton: false,
    },
    {
        label: "Careers",
        href: "/careers",
        isScrollLink: false,
        isContactButton: false,
    },
    {
        label: "Contact Us",
        href: "/",
        isScrollLink: false,
        isContactButton: true,
    },
];

// Mobile navigation data
const mobileNavigationLinks = [
    {
        label: "Home",
        href: "/",
        isScrollLink: false,
        isContactButton: false,
    },
    {
        label: "Resources",
        href: "/resources",
        isScrollLink: false,
        isContactButton: false,
    },
    {
        label: "Careers",
        href: "/careers",
        isScrollLink: false,
        isContactButton: false,
    },
    {
        label: "Privacy Policy",
        href: "/privacy-policy",
        isScrollLink: false,
        isContactButton: false,
    },
    {
        label: "Contact Us",
        href: "/",
        isScrollLink: false,
        isContactButton: true,
    },
];

export default function Header({ isLight = false }: { isLight?: boolean }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        if (isLight) {
            setIsScrolled(true);
            return;
        }
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const scrollThreshold = windowHeight * 0.8 + 120;
            const shouldShowDark = scrollY > scrollThreshold;
            setIsScrolled(shouldShowDark);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, [isLight]);

    // Simple scroll lock - just add/remove CSS class
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.classList.add("scroll-locked");
        } else {
            document.body.classList.remove("scroll-locked");
        }
    }, [isMobileMenuOpen]);

    const scrollToSection = (sectionId: string) => {
        if (pathname === "/") {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            window.location.href = `/#${sectionId}`;
        }
        setIsMobileMenuOpen(false);
    };

    const isActiveLink = (linkPath: string) => {
        if (linkPath === "/" && pathname === "/") return true;
        if (linkPath !== "/" && pathname && pathname.startsWith(linkPath)) return true;
        return false;
    };

    // Mobile Navigation Component
    const MobileNavLinks = () => (
        <nav className="flex-1 mt-[67px]">
            <ul>
                {mobileNavigationLinks.map((link, index) => {
                    if (link.isContactButton) {
                        return (
                            <li className="my-[24] mx-[32]" key={index}>
                                <button
                                    aria-label="Open contact modal"
                                    onClick={() => {
                                        setIsContactModalOpen(true);
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className="py-[12px] px-[24px] w-full bg-primary  text-white rounded-lg hover:bg-primary-600 transition-colors cursor-pointer header-contact-button"
                                >
                                    {link.label}
                                </button>
                            </li>
                        );
                    }

                    return (
                        <li key={link.label}>
                            <Link
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`mobile-nav-link flex items-center h-[56px] block px-[32px] py-3 transition-colors font-bold text-lg ${isActiveLink(link.href)
                                    ? "text-primary border-l-4 border-primary"
                                    : "text-secondary hover:text-gray-900"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );

    // Desktop Navigation Component
    const DesktopNavLinks = () => (
        <div className="flex items-center gap-[32px]">
            {desktopNavigationLinks.map((link, index) =>
                link.isScrollLink ? (
                    <button
                        aria-label="Scroll to section"
                        key={index}
                        onClick={() => scrollToSection(link.scrollTarget!)}
                        className={`cursor-pointer desktop-nav-link transition-colors ${isScrolled
                            ? `${isActiveLink(link.href) ? "text-primary" : "text-heading"
                            } hover:text-primary`
                            : "text-white hover:text-primary"
                            }`}
                    >
                        {link.label}
                    </button>
                ) : link.isContactButton ? (
                    <button
                        aria-label="Open contact modal"
                        key={index}
                        onClick={() => {
                            setIsContactModalOpen(true);
                        }}
                        className="py-[10px] px-[16px] bg-primary  text-white rounded-lg hover:bg-primary-600 transition-colors cursor-pointer header-contact-button"
                    >
                        {link.label}
                    </button>
                ) : (
                    <Link
                        aria-label="Navigate to section"
                        key={index}
                        href={link.href}
                        className={`cursor-pointer desktop-nav-link transition-colors ${isScrolled
                            ? `${isActiveLink(link.href) ? "text-primary" : "text-heading"
                            } hover:text-primary`
                            : "text-white hover:text-primary"
                            }`}
                    >
                        {link.label}
                    </Link>
                )
            )}
        </div>
    );

    return (
        <>
            {/* Mobile Header */}
            <header className="md:hidden fixed top-0 left-0 right-0 z-50">
                <div
                    className={`mt-[10px] mr-[20px] ml-[20px] rounded-[10px] overflow-hidden transition-all duration-300 backdrop-blur-[16px] shadow-[0_0_32px_0_rgba(0,0,0,0.06)] ${isScrolled ? "bg-white/90" : "bg-white/10"
                        }`}
                >
                    <div className="px-4 py-3 flex items-center justify-center relative">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="hover:opacity-80 absolute left-4"
                            aria-label="Toggle mobile menu"
                        >
                            <HamburgerMenuIcon isScrolled={isScrolled} />
                        </button>
                        <div className="flex items-center">
                            {isScrolled ? <LogoDark isMobile /> : <LogoLight isMobile />}
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Sidebar */}
            <div
                className={`md:hidden fixed inset-0 z-50 transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
            >
                <div className="flex h-full">
                    {/* Sidebar */}
                    <div
                        className={`w-full bg-gray-200 flex flex-col transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                            }`}
                    >
                        {/* Sidebar Header */}
                        <div className="px-4 py-3 flex items-center justify-center relative">
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-gray-700 hover:text-gray-900 absolute left-[6px]"
                                aria-label="Close mobile menu"
                            >
                                <SidebarCloseIcon />
                            </button>
                            <div className="flex items-center">
                                <LogoDark isMobile />
                            </div>
                        </div>

                        {/* Navigation Links */}
                        <MobileNavLinks />
                    </div>

                    {/* Overlay */}
                    <div
                        className={`flex-1 bg-black transition-opacity duration-300 ${isMobileMenuOpen ? "bg-opacity-50" : "bg-opacity-0"
                            }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block fixed top-0 left-0 right-0 z-50">
                <div
                    className={`transition-all duration-300 backdrop-blur-[16px] shadow-[0_0_32px_0_rgba(0,0,0,0.06)] ${isScrolled ? "bg-white/90" : "bg-white/10"
                        }`}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <nav className="flex items-center justify-between py-4">
                            {/* Logo */}
                            <Link href="/" className="flex items-center">
                                {isScrolled ? <LogoDark /> : <LogoLight />}
                            </Link>

                            {/* Desktop Navigation */}
                            <DesktopNavLinks />
                        </nav>
                    </div>
                </div>
            </div>
            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />
        </>
    );
}
