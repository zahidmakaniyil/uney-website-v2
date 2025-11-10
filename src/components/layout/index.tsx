"use client";

import Header from "./Header";
import Footer from "./Footer";
import { usePathname } from "next/navigation";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const isLight = pathname === "/" ? false : true;
    return (
        <>
            <Header isLight={isLight} />
            <main role="main">
                <div className="min-h-screen">{children}</div>
            </main>
            <Footer />
        </>
    );
}
