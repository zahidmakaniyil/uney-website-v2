import ControlIcon from "@/assets/icons/ControlIcon";
import TransparencyIcon from "@/assets/icons/TransparencyIcon";
import TrustIcon from "@/assets/icons/TrustIcon";

export default function CorePromise() {
    const sectionTitle = "Our Core Promise";
    const sectionSubtitle =
        "Innovation with integrity. Privacy and transparency at the core.";

    const promises = [
        {
            icon: TrustIcon,
            title: "Trust",
            description:
                "We believe trust is earned daily—through transparency, accountability, and consistent, user-focused innovation. ",
        },
        {
            icon: TransparencyIcon,
            title: "Transparency",
            description:
                "Clear, honest communication is foundational to every product we create and every interaction we have.",
        },
        {
            icon: ControlIcon,
            title: "Control",
            description:
                "Your data, your rules. Our solutions put you in charge of your digital experience, ensuring privacy by design and by default. ",
        },
    ];

    return (
        <section className="px-[16px] pb-[64px] md:pb-[100px] bg-white">
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
                        {sectionTitle}
                    </h2>
                    <p className="section-subtitle text-heading">{sectionSubtitle}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-[24px] max-w-7xl mx-auto">
                    {promises.map((promise, index) => {
                        const IconComponent = promise.icon;
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
