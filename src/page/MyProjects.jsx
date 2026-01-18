"use client";
import { useSiteData } from "@/app/providers/SiteDataProvider";
import ProjectPage from "@/components/projects/ProjectPage";
import ContactMeSection from "@/components/utility/contactMeSection/ContactMeSection";
import Line from "@/components/utility/line/Line";
import Loader from "@/components/utility/loader/Loader";

function MyProjects() {
  const { siteData, loading } = useSiteData();

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <ProjectPage siteData={siteData} />
      <Line direction="left" />
      <ContactMeSection siteData={siteData} />
    </>
  );
}

export default MyProjects;
