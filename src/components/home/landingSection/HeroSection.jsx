"use client";
import LinkComponent from "@/components/utility/link/Link";
import React, { useRef } from "react";
import socialMediaLinks from "@/json/socialMediaLinks.json";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function HeroSection() {
  const heroRef = useRef(null);

  useGSAP(() => {
    gsap.from(heroRef.current, {
      x: -90,
      opacity: 0,
      duration: 1.5,
      ease: "power3",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top bottom",
        toggleActions: "play none none none",
      }
    });
  })
  return (
    <div ref={heroRef}>
      <div className="xl:px-[24px]">
        <div
          className="
          xl:w-[552px] xl:leading-[95px]
          lg:leading-[72px]
          leading-[53px]
        "
        >
          <p
            className="
            font-aptly-medium-italic uppercase
            xl:text-[80px]
            lg:text-[60px]
            text-[44px]
          "
          >
            hey y&apos;all <span className="text-[var(--accent)]">*</span>{" "}
            i&apos;m <span className="text-[var(--accent)]">hussain amet</span>!
          </p>
        </div>
        <div className="flex gap-10 flex-col pt-6">
          <div
            className="
            flex flex-col font-Inter font-bold text-[var(--light-white)]
            xl:w-[598px] xl:text-[18px] xl:leading-7 xl:gap-10
            lg:w-[528px] lg:text-[18px] lg:leading-7
            text-[16px] leading-6 tracking-[1px] gap-7
          "
          >
            <p>
              I&apos;m a{" "}
              <span className="text-[var(--white)]">
                full stack software developer
              </span>
              , ready to turn your vision into powerful, seamless solutions.
            </p>
            <p>
              <span className="text-[var(--accent)] font-aptly-medium">*</span>{" "}
              Based in India
            </p>
          </div>
          <div
            className="
            flex
            md:flex-col md:gap-8
            sm:flex-col sm:gap-8
            gap-10
          "
          >
            <LinkComponent
              text="Let's Connect"
              href={socialMediaLinks.linkedIn}
              isActive={false}
              className={`bg-[var(--accent)] text-[var(--white)] xl:after:bg-[var(--accent)] xl:hover:text-[var(--white)] border-[var(--accent)]`}
              shadowColor='var(--accent)'
              imageAfter="/icons/common/Link_white.svg"
              imageBefore="/icons/common/Link_white.svg"
              target="_blank"
            />
            <LinkComponent
              text="Download CV"
              href={socialMediaLinks.CV}
              isActive={false}
              className={`bg-[var(--black)] text-[var(--accent)] xl:after:bg-[var(--accent)] xl:hover:text-[var(--white)] border-[var(--accent)]`}
              shadowColor='var(--accent)'
              imageBefore="/icons/common/Download_blue.svg"
              imageAfter="/icons/common/Download_white.svg"
              target="_blank"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
