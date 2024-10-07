"use client";
import React, { useRef } from "react";
import Logo from "/public/icons/header/logo.png";
import Image from "next/image";
import LinkComponent from "@/components/utility/link/Link";
import { usePathname } from "next/navigation";
import Link from "next/link";
import gsap from "gsap";

function MainHeader({ navList }) {
  const url = usePathname();
  const imageRef = useRef(null);

  let tween;

  const animate = () => {
    tween = gsap.to(imageRef.current, {
      rotation: 360,
      duration: 1,
      ease: "power1.in",
      repeat: -1,
    });
  };

  const removeAnimation = () => {
    if (tween) {
      tween.kill();
      gsap.to(imageRef.current, {
        rotation: 0,
        duration: 0.5,
        ease: "power1.in",
      });
    }
  };

  return (
    <>
      <div
        onMouseEnter={animate}
        onMouseLeave={removeAnimation}
        className="
            p-[5px] border-[var(--white)] border-[3px] rounded-full bg-[var(--black)]
            xl:w-[60px] xl:h-[60px]
            lg:w-[48px] lg:h-[48px]
            w-[44px] h-[44px]
        "
      >
        <Link href="/">
          <Image
            ref={imageRef}
            src={Logo}
            alt="logo"
            width="44px"
            height="44px"
          />
        </Link>
      </div>
      <div className="xl:flex xl:gap-4 hidden">
        {navList.map((link) => (
          <LinkComponent
            key={link.text}
            text={link.text}
            href={link.href}
            isActive={url == `${link.href}` ? true : false}
            className={`${
              url == `${link.href}`
                ? "bg-[var(--white)] text-[var(--black)]"
                : "bg-[var(--black)] text-[var(--white)] xl:after:bg-[var(--white)] xl:hover:text-[var(--black)] "
            } border-[var(--white)]`}
            shadowColor="var(--white)"
            imageAfter={link.imageAfter ? link.imageAfter : ""}
            imageBefore={link.imageBefore ? link.imageBefore : ""}
            target={link.target ? link.target : "_self"}
          />
        ))}
      </div>
      <div className="flex gap-4 xl:hidden">
        <LinkComponent
          text="Let's Connect"
          href={navList[3].href}
          isActive={url == `${navList[3].href}` ? true : false}
          className={`${
            url == `${navList[3].href}`
              ? "bg-[var(--white)] text-[var(--black)]"
              : "bg-[var(--black)] text-[var(--white)] xl:after:bg-[var(--white)] xl:hover:text-[var(--black)]"
          } border-[var(--white)]`}
          shadowColor="var(--white)"
          imageAfter={navList[3].imageAfter ? navList[3].imageAfter : ""}
          imageBefore={navList[3].imageBefore ? navList[3].imageBefore : ""}
          target={navList[3].target ? navList[3].target : "_self"}
        />
      </div>
    </>
  );
}

export default MainHeader;
