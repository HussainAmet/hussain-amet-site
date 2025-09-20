"use client";
import React, { useEffect, useState } from "react";
import AllProjectListSection from "@/components/projects/allProjectListSection/AllProjectListSection";
import HeroSection from "@/components/projects/landingSection/HeroSection";

function ProjectPage() {
  const [list, setList] = useState("grid");

  useEffect(() => {
    // this runs only on client
    if (window.innerWidth > 990) {
      setList("list");
    } else {
      setList("grid");
    }
  }, []);

  return (
    <>
      <HeroSection list={list} setList={setList} />
      <AllProjectListSection list={list} />
    </>
  );
}

export default ProjectPage;
