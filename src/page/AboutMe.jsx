"use client";
import { useSiteData } from "@/app/providers/SiteDataProvider";
import InfoSection from "@/components/About/infoSection/InfoSection";
import HeroSection from "@/components/About/landingSection/HeroSection";
import MyEduationSection from "@/components/About/myEducationSection/MyEduationSection";
import ContactMeSection from "@/components/utility/contactMeSection/ContactMeSection";
import Line from "@/components/utility/line/Line";
import Loader from "@/components/utility/loader/Loader";
import MyExperienceSection from "@/components/utility/myExperienceSection/MyExperienceSection";
import MyProjectsSection from "@/components/utility/myProjectsSection/MyProjectsSection";
import MySkillsSection from "@/components/utility/mySkillsSection/MySkillsSection";

function AboutMe() {
  const { siteData, loading } = useSiteData();

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <HeroSection siteData={siteData} />
      <InfoSection siteData={siteData} />
      <MySkillsSection siteData={siteData} />
      <MyExperienceSection siteData={siteData} />
      <MyProjectsSection siteData={siteData} />
      <MyEduationSection siteData={siteData} />
      <Line direction="left" />
      <ContactMeSection siteData={siteData} />
    </>
  );
}

export default AboutMe;
