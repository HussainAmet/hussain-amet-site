import React from "react";
import HeroSection from "@/components/home/landingSection/HeroSection";
import AboutMeSection from "@/components/home/aboutMeSection/AboutMeSection";
import MySkillsSection from "@/components/home/mySkillsSection/MySkillsSection";

function Home() {
    return (
        <>
            <HeroSection />
            <AboutMeSection />
            <MySkillsSection />
        </>
    );
}

export default Home;
