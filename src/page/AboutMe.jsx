import HeroSection from '@/components/About/landingSection/HeroSection'
import MySkillsSection from "@/components/utility/mySkillsSection/MySkillsSection";
import MyProjectsSection from "@/components/utility/myProjectsSection/MyProjectsSection";
import Line from "@/components/utility/line/Line";
import ContactMeSection from "@/components/utility/contactMeSection/ContactMeSection";
import React from 'react'
import MyEduationSection from '@/components/About/myEducationSection/MyEduationSection';
import { NavbarContainer, PageContainer } from '@/components/utility/container/Container';
import InfoSection from '@/components/About/infoSection/InfoSection';

function AboutMe() {
  return (
    <>
      <HeroSection />
      <InfoSection />
      <MySkillsSection />
      <MyEduationSection />
      <MyProjectsSection />
      <Line direction='left' />
      <ContactMeSection />
    </>
  )
}

export default AboutMe