'use client'
import LinkComponent from '@/components/utility/link/Link';
import { useParams } from 'next/navigation';
import siteData from "@/json/siteData.json";
import React, { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function HeroSection() {
    const { project } = useParams();
    const projectData = siteData.projects[project];

    const landingRef = useRef(null);

    useGSAP(() => {
        gsap.from(landingRef.current, {
            x: -90,
            opacity: 0,
            duration: 1.5,
            ease: "power3"
        });
    }, []);

  return (
    <div
      ref={landingRef}
      className='
        flex flex-col gap-10
        md:gap-5 sm:gap-5
      '
    >
      <div
        className='
          flex flex-col gap-5
        '
      >
        <h1 
          className='
            font-aptly-medium-italic
            xl:text-9xl
            lg:text-8xl
            text-5xl
          '
        >
          {projectData.title}
        </h1>
        <p
          className='
            font-aptly-medium-italic
            xl:text-4xl
            lg:text-3xl
            text-xl
          '
        >
          {projectData.tagLine}
        </p>
        <p
          className='
            font-Inter text-[var(--light-white)]
            xl:text- xl:w-[56vw]
            lg:text-base
            text-sm w-full
          '
        >
          {projectData.overview}
        </p>
      </div>
      <div
        className='
          flex gap-4 flex-wrap xl:w-[70vw]
        '
      >
        {
          projectData.skill.split(", ").map((skill, index) => 
            <div
              key={index}
              className='
                font-Inter px-6 py-2 border w-fit rounded-full
                xl:text-lg
                lg:text-base
                text-sm
                
              '
            >
              <span>{skill}</span>
            </div>
          )
        }
      </div>
      <div
        className='
          flex
          xl:gap-10 lg:gap-10
          md:flex-col
          sm:flex-col
          gap-5
        '
      >
        {
          projectData.siteLink &&
            <LinkComponent
              text="View Site"
              href={projectData.siteLink}
              isActive={false}
              className={`bg-[var(--accent)] text-[var(--white)] xl:after:bg-[var(--accent)] xl:hover:text-[var(--white)] border-[var(--accent)]`}
              shadowColor='var(--accent)'
              imageAfter="/icons/common/Link_white.svg"
              imageBefore="/icons/common/Link_white.svg"
              target="_blank"
            />
        }
        <LinkComponent
          text="Code"
          href={projectData.codeLink}
          isActive={false}
          className={`bg-[var(--black)] text-[var(--accent)] xl:after:bg-[var(--black)] xl:hover:text-[var(--accent)] border-[var(--accent)]`}
          shadowColor='var(--accent)'
          imageAfter="/icons/common/Github.svg"
          imageBefore="/icons/common/Github.svg"
          target="_blank"
        />
      </div>
    </div>
  )
}

export default HeroSection