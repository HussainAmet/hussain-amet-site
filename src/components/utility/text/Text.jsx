"use client"
import './style.css';
import gsap from "gsap";
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Text({ text, className = '', ...props }) {
  const textRef = useRef(null);

  useEffect(() => {
    if (!props.noRef) {
      const textArr = text.split("");
      const clutter = textArr.map(letter => `<span class="block text-span">${letter}</span>`).join('');
      textRef.current.innerHTML = clutter;
  
      gsap.from(textRef.current.querySelectorAll('.text-span'), {
        y: 90,
        opacity: 0,
        duration: 0.2,
        delay: 0.5,
        stagger: 0.1,
        ease: "bounce.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top bottom",
          toggleActions: "play none none reverse",
        }
      });
    }
  }, [text, props.noRef]);

  return (
    <div
      ref={props.noRef ? null : textRef}
      className={`
        ${className} text-span
        font-aptly-regular-italic flex justify-center overflow-hidden whitespace-pre
        xl:w-[458px] xl:text-[70px] xl:h-[84px]
        lg:w-[295px] lg:text-[57px] lg:h-[68px]
        md:justify-start
        sm:justify-start
        w-[224px] text-[44px] h-[52px]
      `}
      {...props}
    >{props.noRef ? text : ""}</div>
  );
}

export default Text;