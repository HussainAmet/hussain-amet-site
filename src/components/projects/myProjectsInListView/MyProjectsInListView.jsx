import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function MyProjectsInListView({siteData}) {
  const [hoveredProject, setHoveredProject] = useState(-1)
  const projectNameRef = useRef(null);
  const project1Refs = useRef([]);
  const project2Refs = useRef([]);
  const imagesRefs = useRef([]);

  useGSAP(() => {
    gsap.from(projectNameRef.current, {
      x: -90,
      opacity: 0,
      duration: 1.5,
      ease: "power3"
    });
  }, []);

  const handleMouseEnter = (index) => {
    gsap.to(imagesRefs.current[index], {
      opacity: 1,
      scaleY: 1,
      transformOrigin: "bottom",
      duration: 0.6,
      ease: "power3.out",
    });

    gsap.to(project1Refs.current[index], {
      scaleY: 0,
      transformOrigin: "top",
      duration: 0.6,
      ease: "power3.out",
    });

    gsap.to(project2Refs.current[index], {
      scaleY: 1,
      transformOrigin: "bottom",
      duration: 0.6,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = (index) => {
    gsap.to(imagesRefs.current[index], {
      opacity: 0,
      scaleY: 0,
      transformOrigin: "top",
      duration: 0.6,
      ease: "power3.in",
    });

    gsap.to(project1Refs.current[index], {
      scaleY: 1,
      transformOrigin: "bottom",
      duration: 0.6,
      ease: "power3.in",
    });

    gsap.to(project2Refs.current[index], {
      scaleY: 0,
      transformOrigin: "top",
      duration: 0.6,
      ease: "power3.in",
    });
  };

  return (
    <div
      ref={projectNameRef}
      className='
        flex flex-col
        xl:gap-[88px]
        lg:gap-[64px]
        gap-[44px]
      '
    >
      {Object.keys(siteData.projects).map((card, index) => (
        <div key={index} onMouseEnter={() => {setHoveredProject(index); handleMouseEnter(index)}} onMouseLeave={() => {setHoveredProject(-1); handleMouseLeave(index)}}>
          <Link
            href={siteData.projects[card]?.href}
            key={index}
            className="
              project linkHover flex justify-between relative
            "
          >
            <div ref={(el) => (project1Refs.current[index] = el)} >
              <p
                className={`
                  font-aptly-medium-italic mb-3
                  xl:text-[110px]
                  md:text-7xl
                  text-5xl
                  ${hoveredProject === -1 ? "text-[var(--white)]" : hoveredProject === index ? "text-[var(--white)]" : "text-[var(--light-white)]"}
                `}
              >
                {siteData.projects[card]?.title}
              </p>
            </div>
            <div ref={(el) => (project2Refs.current[index] = el)} className='absolute' >
              <p
                className={`
                  font-aptly-medium-italic mb-3
                  xl:text-[110px]
                  md:text-7xl
                  text-5xl
                  ${hoveredProject === -1 ? "text-[var(--white)]" : hoveredProject === index ? "text-[var(--white)]" : "text-[var(--light-white)]"}
                `}
              >
                {siteData.projects[card]?.title}
              </p>
            </div>
            <Image
              ref={(el) => (imagesRefs.current[index] = el)}
              src={siteData.projects[card]?.image}
              alt="image"
              className={`

                border-[2px] border-[var(--light-white)] rounded-md w-[30vw] h-auto absolute right-[0] -top-[6vw] z-30 opacity-0 scale-90
              `}
              width={600}
              height={600}
            />
          </Link>
        </div>
      ))}
    </div>
  )
}

export default MyProjectsInListView