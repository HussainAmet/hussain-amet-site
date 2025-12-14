import React from 'react'
import CmsPage from '@/components/CMS/CmsPage'

async function page() {
  const siteData = await fetch(process.env.NEXT_PUBLIC_SITE_DATA_URL, {cache: 'no-store'})
    .then(res => res.json())
    .catch(() => null);
  return (
    <CmsPage siteData={siteData} />
  );
}

export default page
