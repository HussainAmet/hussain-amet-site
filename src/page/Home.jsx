import React from "react";
import HeroSection from "@/components/home/landingSection/HeroSection";
import AboutMeSection from "@/components/home/aboutMeSection/AboutMeSection";
import MySkillsSection from "@/components/utility/mySkillsSection/MySkillsSection";
import MyProjectsSection from "@/components/utility/myProjectsSection/MyProjectsSection";
import Line from "@/components/utility/line/Line";
import ContactMeSection from "@/components/utility/contactMeSection/ContactMeSection";
import MyExperienceSection from "@/components/utility/myExperienceSection/MyExperienceSection";

async function Home() {
    const siteData = await fetch(process.env.NEXT_PUBLIC_SITE_DATA_URL, {cache: 'no-store'})
    .then(res => res.json())
    .catch(() => null);

    return (
        <>        
            <HeroSection siteData={siteData} />
            <AboutMeSection />
            <MySkillsSection siteData={siteData} />
            <MyExperienceSection siteData={siteData} />
            <MyProjectsSection siteData={siteData} />
            <Line direction='left' />
            <ContactMeSection siteData={siteData} />
        </>
    );
}

export default Home;
