'use client'
import Heading from "@/components/utility/heading/Heading";
import Image from "next/image";
import React, { useRef } from "react";
import Card from "/public/images/card1.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LearnMore from "@/components/utility/learnMore/LearnMore";
import Link from "next/link";
// import Cookies from "js-cookie"

gsap.registerPlugin(ScrollTrigger);

function MyProjectsSection() {

  // const device = Cookies.get('device')
  // const allow = device == 'desktop' ? 4 : 2;  
  const leftCard = useRef([]);
  const rightCard = useRef([]);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 992px)", () => {
      projectCards.forEach((_, index) => {
        const card = index % 2 === 0 ? leftCard.current[index / 2] : rightCard.current[Math.floor(index / 2)];
        gsap.from(card, {
          x: index % 2 === 0 ? -90 : 90,
          opacity: 0,
          duration: 1.5,
          ease: "power3",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            toggleActions: "play none none none",
          },
        });
      });
    });

    mm.add("(max-width: 991px)", () => {
      projectCards.forEach((_, index) => {
        const card = index % 2 === 0 ? leftCard.current[index / 2] : rightCard.current[Math.floor(index / 2)];
        gsap.from(card, {
          x: -90,
          opacity: 0,
          duration: 1.5,
          ease: "power3",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            toggleActions: "play none none none",
          },
        });
      });
    });

    return () => mm.revert();
  });
  const projectCards = [
    {
      image: Card,
      title: 'Funds App',
      tech: 'HTML5, CSS3, JavaScript',
      href: '/'
    },
    {
      image: Card,
      title: 'Funds App',
      tech: 'HTML5, CSS3, JavaScript',
      href: '/'
    },
    {
      image: Card,
      title: 'Funds App',
      tech: 'HTML5, CSS3, JavaScript',
      href: '/'
    },
    {
      image: Card,
      title: 'Funds App',
      tech: 'HTML5, CSS3, JavaScript',
      href: '/'
    },
  ]

  const getCardRef = (index) => {
    return index % 2 === 0
      ? (el) => (leftCard.current[index / 2] = el)
      : (el) => (rightCard.current[Math.floor(index / 2)] = el);
  };
  return (
    <div>
      <Heading text="My Projects" />
      <div className="">
        <div
          className="
          grid
          xl:mt-10 xl:grid-cols-2 xl:grid-row-2 xl:gap-x-16 xl:gap-y-20
          mt-8 gap-16 grid-cols-1
        "
        >
          {projectCards.map((card, index) => (
            <Link href={card.href} ref={getCardRef(index)} key={index} className={`project ${index === 2 || index === 3 ? 'lg:hidden md:hidden sm:hidden' : ''} `}>
              <Image
                src={card?.image}
                alt="image"
                className="
                  border-[2px] border-[var(--light-white)] rounded-xl w-full h-auto
                  xl:mb-6
                  mb-5
                "
                width='auto'
                height='auto'
              />
              <div>
                <p
                  className="
                    font-aptly-medium-italic mb-3
                    xl:text-4xl
                    md:text-3xl
                    text-2xl
                  "
                >
                  {card?.title}
                </p>
                <p
                  className="
                    font-Inter font-medium italic text-[var(--accent)]
                    xl:text-lg
                    md:text-base
                    text-sm
                  "
                >
                  {card?.tech}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-11 text-center">
          <LearnMore text="View More" href="/my-projects" />
        </div>
      </div>
    </div>
  );
}

export default MyProjectsSection;
