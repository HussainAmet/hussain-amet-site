"use client";
import React, { useEffect, useState } from "react";
import AllProjectListSection from "@/components/projects/allProjectListSection/AllProjectListSection";
import HeroSection from "@/components/projects/landingSection/HeroSection";

function ProjectPage() {
  const [list, setList] = useState(window.innerWidth > 990 ? "list" : "grid");
  return (
    <>
      <HeroSection list={list} setList={setList} />
      <AllProjectListSection list={list} />
    </>
  );
}

export default ProjectPage;
