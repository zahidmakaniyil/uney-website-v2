"use client";

import { memo } from "react";
import Hero, { HeroContainerProps } from "@/containers/Hero";
import Solutions, { SolutionsContainerProps } from "@/containers/Solutions";
import CorePromise, {
    CorePromiseContainerProps,
} from "@/containers/CorePromise";
import About, { AboutContainerProps } from "@/containers/About";
import Team, { TeamContainerProps } from "@/containers/Team";
import Resources, { ResourcesContainerProps } from "@/containers/Resources";
import Cta, { CtaContainerProps } from "@/containers/Cta";

interface HomePageProps {
    heroData: HeroContainerProps;
    solutionsData: SolutionsContainerProps;
    corePromiseData: CorePromiseContainerProps;
    aboutData: AboutContainerProps;
    teamData: TeamContainerProps;
    resourcesData: ResourcesContainerProps;
    ctaData: CtaContainerProps;
}

const HomePage = ({
    heroData,
    solutionsData,
    corePromiseData,
    aboutData,
    teamData,
    resourcesData,
    ctaData,
}: HomePageProps) => {
    return (
        <>
            <Hero
                headingLines={heroData.headingLines}
                subHeadingLines={heroData.subHeadingLines}
                buttonText={heroData.buttonText}
                videoUrl={heroData.videoUrl}
            />
            <Solutions
                heading={solutionsData.heading}
                subHeading={solutionsData.subHeading}
                solutions={solutionsData.solutions}
                tabs={solutionsData.tabs}
            />
            <CorePromise
                heading={corePromiseData.heading}
                subHeading={corePromiseData.subHeading}
                promises={corePromiseData.promises}
            />
            <About
                heading={aboutData.heading}
                subHeading={aboutData.subHeading}
                ourVisionHeading={aboutData.ourVisionHeading}
                ourMissionHeading={aboutData.ourMissionHeading}
                ourVisionSubHeading={aboutData.ourVisionSubHeading}
                ourMissionSubHeading={aboutData.ourMissionSubHeading}
            />
            <Team
                heading={teamData.heading}
                subHeading={teamData.subHeading}
                buttonText={teamData.buttonText}
                buttonLink={teamData.buttonLink}
            />
            <Resources
                resources={resourcesData.resources}
                buttonText={resourcesData.buttonText}
                buttonLink={resourcesData.buttonLink}
                heading={resourcesData.heading}
            />
            <Cta
                buttonText={ctaData.buttonText}
                buttonLink={ctaData.buttonLink}
                headingLines={ctaData.headingLines}
            />
        </>
    );
};

export default memo(HomePage);
