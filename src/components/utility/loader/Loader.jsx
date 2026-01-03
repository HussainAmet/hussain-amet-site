import Image from "next/image";
import React from "react";
import "@/components/utility/loader/style.css";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex justify-center items-center bg-[var(--black)]">
      <div className="loader xl:h-[400px] xl:w-[400px] h-[250px] w-[250px]">
        <div className="box">
          <div className="logo">
            <Image
              className="rounded-full"
              src="/images/header/LogoWithBG.jpeg"
              width={1000}
              height={1000}
              alt="logo"
              priority
            />
          </div>
        </div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
    </div>
  );
}