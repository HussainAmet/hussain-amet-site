"use client";
import Heading from "@/components/utility/heading/Heading";
import Image from "next/image";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LearnMore from "@/components/utility/learnMore/LearnMore";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

function MyProjectsSection({siteData, allowed = true, renderList = 2}) {
  const leftCard = useRef([]);
  const rightCard = useRef([]);
  
  useGSAP(() => {
    const mm = gsap.matchMedia();
    

    mm.add("(min-width: 992px)", () => {
      Object.keys(siteData.projects).forEach((_, index) => {
        const card =
          index % 2 === 0
            ? leftCard.current[index / 2]
            : rightCard.current[Math.floor(index / 2)];
        gsap.from(card, {
          x: index % 2 === 0 ? -90 : 90,
          opacity: 0,
          duration: 1.5,
          ease: "power3",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            toggleActions: "play none none none",
          },
        });
      });
    });

    mm.add("(max-width: 991px)", () => {
      Object.keys(siteData.projects).forEach((_, index) => {
        const card =
          index % 2 === 0
            ? leftCard.current[index / 2]
            : rightCard.current[Math.floor(index / 2)];
        gsap.from(card, {
          x: -90,
          opacity: 0,
          duration: 1.5,
          ease: "power3",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            toggleActions: "play none none none",
          },
        });
      });
    });

    return () => mm.revert();
  });

  const getCardRef = (index) => {
    return index % 2 === 0
      ? (el) => (leftCard.current[index / 2] = el)
      : (el) => (rightCard.current[Math.floor(index / 2)] = el);
  };
  return (
    <div>
      {allowed && <Heading text="My Projects" />}
      <div
        className={`
        grid
        ${allowed ? 'xl:mt-10 mt-8' : ''} xl:grid-cols-2 xl:grid-row-2 xl:gap-x-16 xl:gap-y-20
        gap-16 grid-cols-1
      `}
      >
        {Object.keys(siteData.projects).map((card, index) => (
          renderList === 2 ?
            siteData.projects[card]?.title === "Funds Website" || siteData.projects[card]?.title === "Simon Game" ?
              <Link
                href={siteData.projects[card]?.href}
                ref={getCardRef(index)}
                key={index}
                className="project linkHover"
              >
                <Image
                  src={siteData.projects[card]?.image}
                  alt="image"
                  className="
                    border-[2px] border-[var(--light-white)] rounded-md w-full h-auto
                    xl:mb-6
                    mb-5
                  "
                  width={600}
                  height={600}
                />
                <div>
                  <p
                    className="
                      font-aptly-medium-italic mb-3
                      xl:text-4xl
                      md:text-3xl
                      text-2xl
                    "
                  >
                    {siteData.projects[card]?.title}
                  </p>
                  <p
                    className="
                      font-Inter font-medium italic text-[var(--accent)]
                      xl:text-lg
                      md:text-base
                      text-sm
                    "
                  >
                    {siteData.projects[card]?.skill}
                  </p>
                </div>
              </Link>
            : null
          :
            <Link
              href={siteData.projects[card]?.href}
              ref={getCardRef(index)}
              key={index}
              className="project linkHover"
            >
              <Image
                src={siteData.projects[card]?.image}
                alt="image"
                className="
                  border-[2px] border-[var(--light-white)] rounded-md w-full h-auto
                  xl:mb-6
                  mb-5
                "
                width={600}
                height={600}
              />
              <div>
                <p
                  className="
                    font-aptly-medium-italic mb-3
                    xl:text-4xl
                    md:text-3xl
                    text-2xl
                  "
                >
                  {siteData.projects[card]?.title}
                </p>
                <p
                  className="
                    font-Inter font-medium italic text-[var(--accent)]
                    xl:text-lg
                    md:text-base
                    text-sm
                  "
                >
                  {siteData.projects[card]?.skill}
                </p>
              </div>
            </Link>
        ))}
      </div>
      {allowed && 
        <div className="mt-11 text-center">
          <LearnMore text="View More" href="/my-projects" />
        </div>
      }
    </div>
  );
}

export default MyProjectsSection;
