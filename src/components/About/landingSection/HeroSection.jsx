"use client";
import React, { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import FaceImage from '@/assets/profile_image/faceImage.png'

gsap.registerPlugin(ScrollTrigger);

function HeroSection() {
  const nameRef = useRef(null);
  const postRef = useRef(null);
  useGSAP(() => {
    gsap.from(nameRef.current, {
      x: -90,
      opacity: 0,
      duration: 1,
      ease: 'power1.in',
      scrollTrigger: {
        trigger: nameRef.current,
        start: "top bottom",
        toggleActions: "play none none none",
      }
    })

    gsap.from(postRef.current, {
      x: 90,
      opacity: 0,
      duration: 1,
      ease: 'power1.in',
      scrollTrigger: {
        trigger: postRef.current,
        start: "top bottom",
        toggleActions: "play none none none",
      }
    })
  })
  return (
    <div
      className='
        grid items-center justify-center
        xl:auto-cols-max xl:gap-11 xl:grid-flow-col
        lg:gap-11
        gap-6
      '
    >
      <div
        ref={nameRef}
        className='
          xl:text-right
          text-center
          md:mb-5 sm:mb-5
        '
      >
        <h2
          className='
            font-aptly-regular mb-2 tracking-tighter
            xl:text-[4vw]
            lg:text-[7vw]
            text-6xl
          '
        >
          Hussain Amet
        </h2>
        <div
          className='
            font-Inter
          '
        >
          <p
            className='
              mb-[2px]
              xl:text-[1vw]
              lg:text-[1.5vw]
              text-base
            '
          >
            Based in India
          </p>
          <div
            className='
              flex gap-2 items-center
              xl:justify-end
              justify-center
            '
          >
            <div
              className='
                bg-green-600 rounded-sm rotate-45 animate-pulse-shadow
                xl:w-2 xl:h-2
                lg:w-2 lg:h-2
                w-2 h-2
              '
            ></div>
            <p
              className='
                xl:text-[1vw]
                lg:text-[1.5vw]
                text-base
              '
            >
              Available for a full-time position
            </p>
          </div>
        </div>
      </div>
      <center>
        <div
          className='
            border border-[var(--accent)]
            xl:w-[34vw] xl:h-[34vw] xl:p-[1vw]
            lg:w-[34vw] lg:h-[34vw] lg:p-[1vw]
            w-[224px] h-[224px] p-[6px]
            rounded-full
          '
        >
          <div
            className='
              bg-gradient-to-br from-[var(--accent)] to-[#FFF94C]
              xl:w-[31.75vw] xl:h-[31.75vw]
              lg:w-[31.75vw] lg:h-[31.75vw]
              w-[210px] h-[210px]
              rounded-full relative
            '
          >
            <Image src={FaceImage} alt='faceImage' width={600} height={600}
              className='
                absolute
                xl:w-[31.75vw] xl:h-[31.75vw] xl:top-5
                lg:w-[31.75vw] lg:h-[31.75vw] lg:top-5
                w-[210px] h-[210px] top-4
              '
            />
          </div>
        </div>
      </center>
      <h2
        ref={postRef}
        className='
          font-aptly-regular tracking-tighter text-center
          xl:text-[3.5vw]
          lg:text-[6.5vw]
          text-5xl md:mt-5 sm:mt-5
        '
      >
        Full Stack<br/>Web Developer
      </h2>
    </div>
  )
}

export default HeroSection;