"use client"
import React from "react";
import HeroSection from "@/components/home/landingSection/HeroSection";
import AboutMeSection from "@/components/home/aboutMeSection/AboutMeSection";
import MySkillsSection from "@/components/utility/mySkillsSection/MySkillsSection";
import MyProjectsSection from "@/components/utility/myProjectsSection/MyProjectsSection";
import Line from "@/components/utility/line/Line";
import ContactMeSection from "@/components/utility/contactMeSection/ContactMeSection";
import MyExperienceSection from "@/components/utility/myExperienceSection/MyExperienceSection";
import { useSiteData } from "@/app/providers/SiteDataProvider";
import Loader from "@/components/utility/loader/Loader";

async function Home() {
    const { siteData, loading } = useSiteData();

    if (loading) {
        return <Loader/>
    }

    return (
        <>        
            <HeroSection siteData={siteData} />
            <AboutMeSection siteData={siteData} />
            <MySkillsSection siteData={siteData} />
            <MyExperienceSection siteData={siteData} />
            <MyProjectsSection siteData={siteData} />
            <Line direction='left' />
            <ContactMeSection siteData={siteData} />
        </>
    );
}

export default Home;
