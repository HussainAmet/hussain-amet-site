"use client"
import HeroSection from '@/components/About/landingSection/HeroSection'
import MySkillsSection from "@/components/utility/mySkillsSection/MySkillsSection";
import MyProjectsSection from "@/components/utility/myProjectsSection/MyProjectsSection";
import Line from "@/components/utility/line/Line";
import ContactMeSection from "@/components/utility/contactMeSection/ContactMeSection";
import React from 'react'
import MyEduationSection from '@/components/About/myEducationSection/MyEduationSection';
import InfoSection from '@/components/About/infoSection/InfoSection';
import MyExperienceSection from '@/components/utility/myExperienceSection/MyExperienceSection';
import { useSiteData } from '@/app/providers/SiteDataProvider';
import Loader from '@/components/utility/loader/Loader';

async function AboutMe() {
  const { siteData, loading } = useSiteData();

  if (loading) {
    return <Loader />
  }

  return (
    <>
      <HeroSection siteData={siteData} />
      <InfoSection siteData={siteData} />
      <MySkillsSection siteData={siteData} />
      <MyExperienceSection siteData={siteData} />
      <MyProjectsSection siteData={siteData} />
      <MyEduationSection siteData={siteData} />
      <Line direction='left' />
      <ContactMeSection siteData={siteData} />
    </>
  )
}

export default AboutMe