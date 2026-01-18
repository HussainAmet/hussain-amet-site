"use client";
import LinkComponent from "@/components/utility/link/Link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

function HeroSection({ list, setList }) {
  const landingRef = useRef(null);
  const viewRef = useRef(null);

  useGSAP(() => {
    gsap.from(landingRef.current, {
      x: -90,
      opacity: 0,
      duration: 1.5,
      ease: "power3",
    });

    gsap.from(viewRef.current, {
      x: 90,
      opacity: 0,
      duration: 1.5,
      ease: "power3",
    });
  });

  return (
    <div>
      <div
        className="
                flex
                xl:flex-row xl:gap-0 xl:justify-between xl:items-end
                flex-col gap-5
            "
      >
        <div
          ref={landingRef}
          className="
                    flex flex-col gap-5
                    xl:w-[56vw]
                "
        >
          <h1
            className="
                        font-aptly-medium-italic
                        xl:text-9xl
                        lg:text-8xl
                        text-5xl
                    "
          >
            Personal Projects
          </h1>
          <h2
            className="
                        font-aptly-medium-italic
                        xl:text-4xl
                        lg:text-3xl
                        text-xl
                    "
          >
            Take a look at some of my projects!
          </h2>
          <p
            className="
                         text-[var(--light-white)]
                        xl:text-lg
                        lg:text-base lg:w-1/2
                        text-sm w-full
                    "
          >
            Explore carefully crafted projects, designed with passion and care
            to deliver smooth, impactful, and enjoyable experiences.
          </p>
        </div>
        <div
          ref={viewRef}
          className="
                    flex
                    xl:flex-col xl:gap-6 xl:justify-end
                    items-center gap-1
                "
        >
          <p
            className="
                         text-2xl font-semibold
                        xl:scale-100
                        scale-75
                    "
          >
            Viewing
          </p>
          <div
            className="
                        flex
                        xl:gap-6
                        gap-1
                    "
          >
            <LinkComponent
              onClick={() => setList("list")}
              href={"#"}
              isActive={list === "list" ? true : false}
              className={`${list === "list" ? "bg-[var(--accent)] text-[var(--accent)] border-(--accent) rounded-full !py-[29px] !px-6 overflow-hidden xl:scale-100 scale-75" : "bg-[var(--black)] text-[var(--accent)] xl:after:bg-[var(--accent)] border-(--accent) rounded-full !py-[29px] !px-6 overflow-hidden xl:scale-100 scale-75"}`}
              shadowColor="var(--accent)"
              imageAfter="/icons/common/listViewWhite.svg"
              imageBefore={`${list === "list" ? "/icons/common/listViewWhite.svg" : "/icons/common/listViewBlue.svg"}`}
            />
            <LinkComponent
              onClick={() => setList("grid")}
              href={"#"}
              isActive={list === "grid" ? true : false}
              className={`${list === "grid" ? "bg-[var(--accent)] text-[var(--accent)] border-(--accent) rounded-full !p-6 overflow-hidden xl:scale-100 scale-75" : "bg-[var(--black)] text-[var(--accent)] xl:after:bg-[var(--accent)] border-(--accent) rounded-full !p-6 overflow-hidden xl:scale-100 scale-75"}`}
              shadowColor="var(--accent)"
              imageAfter="/icons/common/gridViewWhite.svg"
              imageBefore={`${list === "grid" ? "/icons/common/gridViewWhite.svg" : "/icons/common/gridViewBlue.svg"}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
