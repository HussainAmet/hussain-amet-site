"use client";
import Heading from "@/components/utility/heading/Heading";
import LearnMore from "@/components/utility/learnMore/LearnMore";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function AboutMeSection() {
  const aboutRef = useRef(null);

  useGSAP(() => {
    const words = gsap.utils.toArray(".word");

    gsap.fromTo(
      words,
      { opacity: 0.3, x: 0 },
      {
        opacity: 1,
        x: 0,
        duration: 0.05,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top bottom",
          toggleActions: "play none none none",
        },
      },
    );
  });

  const renderTextWithSpans = (text) => {
    return text.split(" ").map((word, index) => (
      <span key={index} className="word inline-block">
        {word}&nbsp;
      </span>
    ));
  };

  return (
    <div>
      <Heading text="About Me" />
      <div
        ref={aboutRef}
        className="
            flex flex-col
            xl:mt-10 xl:gap-11
            mt-8 gap-6
        "
      >
        <span
          className="
            font-aptly-regular
            xl:text-[50px] xl:leading-[61px] xl:flex xl:flex-col
            lg:text-[36px] lg:leading-[43px] lg:flex lg:flex-col
            text-[30px] leading-[36px]
        "
        >
          <span className="xl:self-center md:self-center">
            {renderTextWithSpans("Based in India, I'm a")}
            <span className="text-[var(--accent)]">
              {renderTextWithSpans("Full Stack Software Developer")}
            </span>
          </span>
          <span>
            {renderTextWithSpans(
              "seeking a full-time opportunity to turn my coding passion into impactful digital solutions. As a fresher, I am ready to",
            )}
            <span className="text-[var(--accent)]">
              {renderTextWithSpans("learn, adapt, and grow")}
            </span>
            {renderTextWithSpans("with your team.")}
          </span>
        </span>
        <LearnMore href="/about-me" />
      </div>
    </div>
  );
}

export default AboutMeSection;
