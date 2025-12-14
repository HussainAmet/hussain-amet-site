import DetailsSection from '@/components/projectDetails/detailsSection/DetailsSection'
import HeroSection from '@/components/projectDetails/landingSection/HeroSection'
import ContactMeSection from '@/components/utility/contactMeSection/ContactMeSection'
import Line from '@/components/utility/line/Line'
import React from 'react'

async function ProjectDetail() {
  const siteData = await fetch(process.env.NEXT_PUBLIC_SITE_DATA_URL, {cache: 'no-store'})
    .then(res => res.json())
    .catch(() => null);
  return (
    <>
        <HeroSection siteData={siteData} />
        <DetailsSection siteData={siteData} />
        <Line direction="left" />
        <ContactMeSection siteData={siteData} />
    </>
  )
}

export default ProjectDetail