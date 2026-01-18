"use client";
import { useSiteData } from "@/app/providers/SiteDataProvider";
import AboutMeSection from "@/components/home/aboutMeSection/AboutMeSection";
import HeroSection from "@/components/home/landingSection/HeroSection";
import ContactMeSection from "@/components/utility/contactMeSection/ContactMeSection";
import Line from "@/components/utility/line/Line";
import Loader from "@/components/utility/loader/Loader";
import MyExperienceSection from "@/components/utility/myExperienceSection/MyExperienceSection";
import MyProjectsSection from "@/components/utility/myProjectsSection/MyProjectsSection";
import MySkillsSection from "@/components/utility/mySkillsSection/MySkillsSection";

function Home() {
  const { siteData, loading } = useSiteData();

  if (loading || !siteData.isLoaded) {
    return <Loader />;
  }

  return (
    siteData.isLoaded && (
      <>
        <HeroSection siteData={siteData} />
        <AboutMeSection siteData={siteData} />
        <MySkillsSection siteData={siteData} />
        <MyExperienceSection siteData={siteData} />
        <MyProjectsSection siteData={siteData} />
        <Line direction="left" />
        <ContactMeSection siteData={siteData} />
      </>
    )
  );
}

export default Home;
