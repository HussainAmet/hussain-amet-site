"use client"
import MainHeader from '@/components/utility/header/MainHeader';
import siteData from '@/json/siteData'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

function Header() {
    const navRef = useRef(null);

    useGSAP(() => {
        gsap.from(navRef.current, {
          y: -90,
          opacity: 0,
          duration: 1.5,
          ease: "power3",
          scrollTrigger: {
            trigger: navRef.current,
            start: "top bottom",
            toggleActions: "play none none none",
          }
        });
      })

    const navList = [
        {
            text: "Home",
            href: '',
        },
        {
            text: "About Me",
            href: 'about-me',
        },
        {
            text: "My Projects",
            href: 'my-projects',
        },
        {
            text: "LinkedIn",
            href: siteData.socialLinks.linkedIn,
            imageBefore: '/icons/common/Link_white.svg',
            imageAfter: '/icons/common/Link_black.svg',
            target: "_blank",
        },
    ]

    return (
        <div ref={navRef} className='flex justify-between items-center max-w-[1660px] mx-auto pt-6 pb-6'>
            <MainHeader navList={navList} />
        </div>
    )
}

export default Header;