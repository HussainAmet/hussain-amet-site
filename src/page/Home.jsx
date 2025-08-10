import React from "react";
import HeroSection from "@/components/home/landingSection/HeroSection";
import AboutMeSection from "@/components/home/aboutMeSection/AboutMeSection";
import MySkillsSection from "@/components/utility/mySkillsSection/MySkillsSection";
import MyProjectsSection from "@/components/utility/myProjectsSection/MyProjectsSection";
import Line from "@/components/utility/line/Line";
import ContactMeSection from "@/components/utility/contactMeSection/ContactMeSection";

function Home() {
    return (
        <>        
            <HeroSection />
            <AboutMeSection />
            <MySkillsSection />
            <MyProjectsSection />
            <Line direction='left' />
            <ContactMeSection />
        </>
    );
}

export default Home;
