"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function InfoSection({siteData}) {
    const infoRef = useRef(null);

    useGSAP(() => {
        const infoWords = gsap.utils.toArray(".infoword");

        gsap.fromTo(
            infoWords,
            { opacity: 0.3, x: 0 },
            {
                opacity: 1,
                x: 0,
                duration: 0.5,
                ease: "power2.out",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: infoRef.current,
                    start: "top bottom",
                    toggleActions: "play none none none",
                },
            }
        );
    });

    const renderTextWithSpans = (text) => {
        return text.split(" ").map((word, index) => (
            <span key={index} className="infoword inline-block">
                {word}&nbsp;
            </span>
        ));
    };

  return (
    <div
        className='
            flex flex-col gap-11
            lg:gap-9
        '
    >
        <div className='font-aptly-regular'>
            <h1
                ref={infoRef}
                className='
                    text-center
                    xl:text-[55px] xl:mb-16 xl:leading-[75px]
                    lg:text-[50px] lg:mb-9 lg:leading-[65px]
                    text-[27px] mb-8 leading-[38px]
                '
            >
                {renderTextWithSpans("I craft")}
                <span className='text-[var(--accent)] font-medium xl:text-[65px] lg:text-6xl text-[32px]'>{renderTextWithSpans("dynamic")}</span>
                {renderTextWithSpans("and")}
                <span className='text-[var(--accent)] font-medium xl:text-[65px] lg:text-6xl text-[32px]'>{renderTextWithSpans("seamless")}</span>
                {renderTextWithSpans("digital experiences by combining")}
                <span className='text-[var(--accent)] font-medium xl:text-[65px] lg:text-6xl text-[32px]'>{renderTextWithSpans("frontend")}</span>
                {renderTextWithSpans("and")}
                <span className='text-[var(--accent)] font-medium xl:text-[65px] lg:text-6xl text-[32px]'>{renderTextWithSpans("backend")}</span>
                {renderTextWithSpans("development")}.
            </h1>
            <div
                className='
                    flex
                    xl:flex-row xl:gap-20 xl:text-4xl xl:justify-center
                    lg:text-4xl
                    flex-col gap-8 text-xl
                '
            >
                <p
                    className='
                        xl:w-[570px]
                        w-full
                    '
                >My creative journey began 2 years ago when I discovered a passion for building interactive digital experiences. Driven by curiosity and a desire to learn, I spent countless hours exploring frontend and backend development. Through online resources and personal projects, I continuously honed my skills and deepened my knowledge.</p>
                <p
                    className='
                        xl:w-[570px]
                        w-full
                    '
                >Since diving into web development, I have pursued a professional career where I apply my skills to create innovative solutions. I am passionate about contributing as a full-time developer, eager to bring dynamic ideas to life and continue my growth in this ever-evolving field.</p>
            </div>
        </div>
        <Link href={siteData.socialLinks.CV} className='flex gap-4 self-center linkHover' target='_blank'>
            <Image src='/icons/common/Download_blue.svg' alt='image' width={24.44} height={20} />
            <p className='text-[var(--accent)] underline underline-offset-4'>Download CV</p>
        </Link>
    </div>
  )
}

export default InfoSection