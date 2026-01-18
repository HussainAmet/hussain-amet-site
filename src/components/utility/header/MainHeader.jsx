"use client";
import LinkComponent from "@/components/utility/link/Link";
import MenuDrawer from "@/components/utility/menu/MenuDrawer";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";

function MainHeader({ navList }) {
  const url = usePathname();
  const splitUrl = url.split("/")[1];

  const imageRef = useRef(null);

  const animate = () => {
    gsap.to(imageRef.current, {
      rotation: 360,
      duration: 1,
      ease: "power1.in",
    });
  };

  const removeAnimation = () => {
    gsap.to(imageRef.current, {
      rotation: 0,
      duration: 0.5,
      ease: "power1.in",
    });
  };

  return (
    <>
      <div
        onMouseEnter={animate}
        onMouseLeave={removeAnimation}
        className="
            p-[5px] border-(--white) border-[3px] rounded-full bg-[var(--black)]
            xl:w-[60px] xl:h-[60px]
            lg:w-[48px] lg:h-[48px]
            w-[44px] h-[44px]
        "
      >
        <Link href="/" className="linkHover">
          <Image
            className="rounded-full"
            ref={imageRef}
            src="/images/header/LogoWithBG.jpeg"
            alt="logo"
            width={44}
            height={44}
            priority
          />
        </Link>
      </div>
      <div className="xl:flex xl:gap-4 hidden">
        {navList.map((link, index) => {
          return (
            <LinkComponent
              key={link.text}
              text={link.text}
              href={`${index === navList.length - 1 ? "" : "/"}` + link.href}
              isActive={splitUrl == link.href}
              className={`${
                splitUrl == link.href
                  ? "bg-[var(--white)] text-[var(--black)]"
                  : "bg-[var(--black)] text-[var(--white)] xl:after:bg-[var(--white)] xl:hover:text-[var(--black)]"
              } border-(--white)`}
              shadowColor="var(--white)"
              imageAfter={link.imageAfter || ""}
              imageBefore={link.imageBefore || ""}
              target={link.target || "_self"}
            />
          );
        })}
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
          } border-(--white)`}
          shadowColor="var(--white)"
          imageAfter={navList[3].imageAfter ? navList[3].imageAfter : ""}
          imageBefore={navList[3].imageBefore ? navList[3].imageBefore : ""}
          target={navList[3].target ? navList[3].target : "_self"}
        />

        <MenuDrawer navList={navList} url={url} />
      </div>
    </>
  );
}

export default MainHeader;
