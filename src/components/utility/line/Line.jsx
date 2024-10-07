"use client"
import React, { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Line({ className='', direction , ...props }) {
  const lineRef = useRef(null);
  useGSAP(() => {
    gsap.from(lineRef.current, {
      scaleX: 0,
      transformOrigin: direction,
      opacity: 0,
      duration: 0.5,
      ease: 'power1.in',
      scrollTrigger: {
        trigger: lineRef.current,
        start: "top bottom",
        toggleActions: "play none none none",
      }
    })
  })
  return (
    <div
      ref={lineRef}
      {...props}
      className={`
        ${className} line
        bg-[var(--light-white)] overflow-hidden h-[1px] w-full
      `}
    ></div>
  )
}

export default Line