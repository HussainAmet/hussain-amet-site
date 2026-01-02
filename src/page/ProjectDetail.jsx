"use client"
import { useSiteData } from '@/app/providers/SiteDataProvider'
import DetailsSection from '@/components/projectDetails/detailsSection/DetailsSection'
import HeroSection from '@/components/projectDetails/landingSection/HeroSection'
import ContactMeSection from '@/components/utility/contactMeSection/ContactMeSection'
import Line from '@/components/utility/line/Line'
import Loader from '@/components/utility/loader/Loader'
import React from 'react'

async function ProjectDetail() {
  const { siteData, loading } = useSiteData();

  if (loading) {
    return <Loader />
  }

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