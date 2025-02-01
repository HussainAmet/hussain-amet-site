import DetailsSection from '@/components/projectDetails/detailsSection/DetailsSection'
import HeroSection from '@/components/projectDetails/landingSection/HeroSection'
import ContactMeSection from '@/components/utility/contactMeSection/ContactMeSection'
import Line from '@/components/utility/line/Line'
import React from 'react'

function ProjectDetail() {
  return (
    <>
        <HeroSection />
        <DetailsSection />
        <Line direction="left" />
        <ContactMeSection />
    </>
  )
}

export default ProjectDetail