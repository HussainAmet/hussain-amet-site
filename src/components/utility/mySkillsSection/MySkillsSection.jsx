"use client";
import Heading from "@/components/utility/heading/Heading";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Fragment, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function MySkillsSection({ siteData }) {
  const frontRef = useRef(null);
  const backRef = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      gsap.from(frontRef.current, {
        x: -90,
        opacity: 0,
        duration: 1.5,
        ease: "power3",
        scrollTrigger: {
          trigger: frontRef.current,
          start: "top bottom",
          toggleActions: "play none none none",
        },
      });
      gsap.from(backRef.current, {
        x: 90,
        opacity: 0,
        duration: 1.5,
        ease: "power3",
        scrollTrigger: {
          trigger: backRef.current,
          start: "top bottom",
          toggleActions: "play none none none",
        },
      });
    });

    mm.add("(max-width: 767px)", () => {
      gsap.from(frontRef.current, {
        x: -90,
        opacity: 0,
        duration: 1.5,
        ease: "power3",
        scrollTrigger: {
          trigger: frontRef.current,
          start: "top bottom",
          toggleActions: "play none none none",
        },
      });
      gsap.from(backRef.current, {
        x: -90,
        opacity: 0,
        duration: 1.5,
        ease: "power3",
        scrollTrigger: {
          trigger: backRef.current,
          start: "top bottom",
          toggleActions: "play none none none",
        },
      });
    });

    return () => mm.revert();
  });

  return (
    <div>
      <Heading text="My Skills" />
      <div
        className="
          flex  font-bold
          xl:text-2xl xl:flex-row xl:gap-10 xl:mt-10
          lg:text-lg lg:flex-row lg:gap-10
          text-base flex-col gap-5 mt-8
        "
      >
        {siteData.skills.map((item, index) => (
          <Fragment key={index}>
            {index == 1 && (
              <div
                className="
                  bg-[var(--light-white-20)]
                  xl:h-auto xl:w-[1px]
                  lg:h-auto lg:w-[1px]
                  h-[1px] w-auto
                "
              ></div>
            )}
            <div ref={index == 0 ? frontRef : backRef} className="flex-1">
              <div
                className="
                text-[var(--light-white)] font-semibold
                xl:mb-6
                mb-5
              "
              >
                {item?.title}
              </div>
              <div className="flex gap-4 flex-wrap items-center">
                {item?.skills.map((skill, index) => (
                  <div key={index} className="flex gap-4 items-center">
                    <span className="h-[10px] w-[10px] bg-[var(--accent)] rounded-xs rotate-45"></span>
                    <p key={index}>{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default MySkillsSection;
