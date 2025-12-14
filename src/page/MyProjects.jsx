import ProjectPage from '@/components/projects/ProjectPage'
import ContactMeSection from '@/components/utility/contactMeSection/ContactMeSection'
import Line from '@/components/utility/line/Line'
import React from 'react'

async function MyProjects() {
  const siteData = await fetch(process.env.NEXT_PUBLIC_SITE_DATA_URL, {cache: 'no-store'})
    .then(res => res.json())
    .catch(() => null);
  return (
    <>
      <ProjectPage siteData={siteData} />
      <Line direction='left' />
      <ContactMeSection siteData={siteData} />
    </>
  )
}

export default MyProjects