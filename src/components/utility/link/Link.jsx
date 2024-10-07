"use client"
import React, { useState } from "react";
import Link from "next/link";
import "./animation.css";

function LinkComponent({ text, className, shadowColor, isActive, imageBefore, imageAfter, ...props }) {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <Link
        {...props}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`
          ${className}
          flex gap-4 items-center border-[2px] rounded-[8px] font-aptly-medium-italic
          xl:text-[22px] xl:py-[15px] xl:px-[24px] xl:w-fit
          lg:text-[20px] lg:w-fits
          md:w-fit
          py-[10px] px-[18px] text-[16px] justify-center
          link-button link-btn ${isActive ? '' : `xl:hover:scale-110`}
        `}
        style={{
          boxShadow: !isActive && hovered && window.innerWidth >= 992 ? `4px 5px 8px -2px ${shadowColor}` : "none",
        }}
      >
        <p>{text}</p>
        {imageBefore && <img src={hovered && window.innerWidth >= 992 ? imageAfter : imageBefore} />}
      </Link>
    </>
  );
}

export default LinkComponent;
