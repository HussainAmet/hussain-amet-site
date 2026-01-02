import { SiteDataProvider } from '@/app/providers/SiteDataProvider'
import React from 'react'

const MainContent = ({children}) => {
  return (
    <SiteDataProvider>
     {children} 
    </SiteDataProvider>
  )
}

export default MainContent
