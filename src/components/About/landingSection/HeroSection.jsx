"use client";
import React from 'react'

function HeroSection() {
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
        className='
          xl:text-right
          text-center
        '
      >
        <p
          className='
            font-aptly-regular mb-2 tracking-tighter
            xl:text-[4vw]
            lg:text-[7vw]
            text-6xl
          '
        >
          Hussain Amet
        </p>
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
                bg-green-600 rounded-full animate-pulse
                xl:w-3 xl:h-3
                lg:w-3 lg:h-3
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
              rounded-full
            '
          ></div>
        </div>
      </center>
      <p
        className='
          font-aptly-regular tracking-tighter text-center
          xl:text-[3.5vw]
          lg:text-[6.5vw]
          text-5xl
        '
      >
        Full Stack<br/>Web Developer
      </p>
    </div>
  )
}

export default HeroSection;