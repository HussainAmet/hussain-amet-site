import React, { useEffect, useRef, useState } from "react";
import MenuIcon from "./MenuIcon";
import ArrowWhite from "/public/icons/common/arrow_white.svg";
import ArrowBlack from "/public/icons/common/arrow_black.svg";
import Link from "next/link";
import gsap from "gsap";

function MenuDrawer({ navList, url }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const drawerRef = useRef(null);

  const splitUrl = url.split("/")[1];

  const openDrawer = () => {
    setIsVisible(true);
    setIsOpen(true);
  };

  const closeDrawer = () => {
    gsap.to(drawerRef.current, {
      y: -50,
      opacity: 0,
      duration: 0.5,
      ease: "power1.inOut",
      onComplete: () => {
        setIsOpen(false);
        setIsVisible(false);
      },
    });
  };

  useEffect(() => {
    if (isVisible && isOpen) {
      gsap.fromTo(
        drawerRef.current,
        { y: -50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power1.inOut",
        }
      );
    }
  }, [isVisible, isOpen]);

  return (
    <div>
      <div onClick={() => (isOpen ? closeDrawer() : openDrawer())}>
        <MenuIcon clicked={isOpen} />
      </div>

      {isVisible && (
        <div className="absolute h-[100vh] w-full bg-[#0E090D75] left-0 z-50">
          <div
            ref={drawerRef}
            className="mt-6 flex flex-col py-6 bg-[var(--white)] font-aptly-medium-italic text-lg rounded-[24px]"
          >
            {navList.map((item, index) => (
              <Link
                key={index}
                href={`${index === navList.length - 1 ? "" : "/"}${item.href}`}
                onClick={closeDrawer}
                className={`flex justify-between items-center ${
                  splitUrl === item.href
                    ? "bg-[var(--black)] text-[var(--white)]"
                    : "bg-[var(--white)] text-[var(--black)]"
                } pl-8 pr-4 py-8`}
              >
                <div>{item.text}</div>
                {splitUrl === item.href ? <ArrowWhite /> : <ArrowBlack />}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default MenuDrawer;