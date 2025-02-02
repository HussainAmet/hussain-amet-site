"use client";
import LinkComponent from "@/components/utility/link/Link";
import React, { useRef } from "react";
import siteData from "@/json/siteData.json";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from "next/image";
import './style.css';

gsap.registerPlugin(ScrollTrigger);

function HeroSection() {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  useGSAP(() => {
    const firstTextArr = "hussain".split("");
    const firstClutter = firstTextArr.map(letter => `<span class="block first-text-span">${letter}</span>`).join('');
    firstNameRef.current.innerHTML = firstClutter;

    const lastTextArr = "amet".split("");
    const lastClutter = lastTextArr.map(letter => `<span class="block last-text-span">${letter}</span>`).join('');
    lastNameRef.current.innerHTML = lastClutter;

    gsap.from(firstNameRef.current.querySelectorAll('.first-text-span'), {
      y: 90,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "bounce.out",
      scrollTrigger: {
        trigger: firstNameRef.current,
        start: "top bottom",
        toggleActions: "play none none none",
      }
    });

    gsap.from(lastNameRef.current.querySelectorAll('.last-text-span'), {
      y: 90,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "bounce.out",
      scrollTrigger: {
        trigger: lastNameRef.current,
        start: "top bottom",
        toggleActions: "play none none none",
      }
    });

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
    gsap.from(imageRef.current, {
      x: 90,
      opacity: 0,
      duration: 1.5,
      ease: "power3",
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top bottom",
        toggleActions: "play none none none",
      }
    });
  })
  return (
    <div className="xl:flex block">
      <div ref={heroRef} className="xl:w-3/4">
        <div>
          <div className="relative uppercase font-aptly-medium-italic text-[28vw] text-center xl:hidden mb-6">
            <div className="flex justify-center" ref={firstNameRef}></div>
            <div className="flex justify-center" ref={lastNameRef}></div>
          </div>
          {/* <div className="w-full flex justify-center items-center xl:hidden mb-6 " >
            <Image src='/images/graph1.png' alt="image" width={200} height={200} className="w-[50vw]" />
          </div> */}
          <div className="absolute z-50 top-[10vw] w-full flex justify-center items-center xl:hidden" >
            <Image src='/images/profile_image/HA.png' alt="image" width={150} height={150} className="border-[2px] border-[var(--light-white)] animate-float rounded-full shadow-custom-blue bg-[var(--accent)] w-[40vw]" />
          </div>
        </div>
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
                xl:w-full xl:text-[18px] xl:leading-7 xl:gap-10
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
                sm:flex-col sm:gap-8
                gap-10
              "
            >
              <LinkComponent
                text="Let's Connect"
                href={siteData.socialLinks.linkedIn}
                isActive={false}
                className={`bg-[var(--accent)] text-[var(--white)] xl:after:bg-[var(--accent)] xl:hover:text-[var(--white)] border-[var(--accent)]`}
                shadowColor='var(--accent)'
                imageAfter="/icons/common/Link_white.svg"
                imageBefore="/icons/common/Link_white.svg"
                target="_blank"
              />
              <LinkComponent
                text="Download CV"
                href={siteData.socialLinks.CV}
                download="Hussain_Amet_CV.pdf"
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
      {/* <div ref={imageRef} className="w-full xl:flex justify-center items-center hidden" >
        <Image src='/images/HA1.svg' alt="image" width={250} height={250} className="border-[2px] border-[var(--light-white)] animate-float rounded-full shadow-custom-blue bg-[var(--accent)] " />
      </div> */}
      <div ref={imageRef} className="w-full xl:flex justify-center items-center hidden" >
        <Image src='/images/profile_image/graph1.png' alt="image" width={400} height={400} />
      </div>
    </div>
  );
}

export default HeroSection;
