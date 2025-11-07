import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
    const buttonText = "Explore Career Opportunities";

    return (
        <section
            className="py-[64px] md:py-[100px] relative"
            style={{
                backgroundImage: "url('images/cta-bg.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 w-full h-full"></div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-[20px] ">
                <div className="max-w-7xl mx-auto flex flex-col gap-[32px]">
                    <h2 className="text-start font-josefin text-white cta-text">
                        Innovate with purpose. <br /> Build with meaning. Belong here.
                    </h2>

                    <div className="">
                        <Link
                            href="/careers"
                            className="inline-flex items-center flex-row gap-[8px] bg-transparent underline  text-white  cta-button-text cursor-pointer  transition-all duration-300  hover:scale-103 "
                        >
                            <span>{buttonText}</span>
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
