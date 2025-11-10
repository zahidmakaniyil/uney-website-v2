import TrustIcon from "@/assets/icons/TrustIcon";
import TransparencyIcon from "@/assets/icons/TransparencyIcon";
import ControlIcon from "@/assets/icons/ControlIcon";

export interface CorePromise {
    icon: string;
    title: string;
    description: string;
}
export interface CorePromiseContainerProps {
    heading: string;
    subHeading: string;
    promises: CorePromise[];
}

export default function CorePromise({
    heading,
    subHeading,
    promises,
}: CorePromiseContainerProps) {
    // Map icon identifiers to actual components
    const iconMap = {
        trust: TrustIcon,
        transparency: TransparencyIcon,
        control: ControlIcon,
    };

    return (
        <section className="px-[16px] bg-white">
            <div
                className="py-[80px] md:py-[100px] rounded-xl"
                style={{
                    backgroundImage: "url(images/our-core-promise-bg.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="text-center flex flex-col gap-[12px] px-[24px] mb-[32px] md:mb-[48px]">
                    <h2 className="section-title font-josefin text-heading md:text-center md:mx-auto">
                        {heading}
                    </h2>
                    <p className="section-subtitle text-heading">{subHeading}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-[24px] max-w-7xl mx-auto">
                    {promises.map((promise, index) => {
                        const IconComponent = iconMap[promise.icon as keyof typeof iconMap];
                        return (
                            <div
                                key={index}
                                className="bg-white p-[32px] rounded-xl text-center flex flex-col gap-[24px]"
                            >
                                <div className="w-[64px] h-[64px] rounded-[12px] mx-auto">
                                    <IconComponent />
                                </div>
                                <div className="flex flex-col gap-[8px]">
                                    <h3 className="core-promise-card-title text-heading font-josefin">
                                        {promise.title}
                                    </h3>
                                    <p className="core-promise-card-description text-secondary">
                                        {promise.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
