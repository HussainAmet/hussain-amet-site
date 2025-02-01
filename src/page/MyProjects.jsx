import ProjectPage from '@/components/projects/ProjectPage'
import ContactMeSection from '@/components/utility/contactMeSection/ContactMeSection'
import Line from '@/components/utility/line/Line'
import React from 'react'

function MyProjects() {
  return (
    <>
      <ProjectPage />
      <Line direction='left' />
      <ContactMeSection />
    </>
  )
}

export default MyProjects