import Heading from "../heading/Heading";

const MyExperienceSection = ({ siteData }) => {
  return (
    <div>
      <div className="md:hidden sm:hidden">
        <Heading text="My Experience" />
      </div>
      <div className="xl:hidden lg:hidden">
        <Heading text="Experience" />
      </div>
      {[...siteData.experiences].reverse().map((experience, index) => (
        <div
          className={`
                    ${index == 0 ? "xl:mt-10" : "xl:mt-16"} xl:p-8
                    lg:py-9 lg:px-6
                    py-5 px-4 mt-8 bg-[var(--light-black)] rounded-[10px] ${index == 0 ? "shadow-[2px_2px_4px_0_#00FF3B]" : "shadow-[2px_2px_4px_0_#5180FF]"}
                `}
          key={index}
        >
          <div
            className="
                        xl:flex xl:items-center xl:justify-between
                        lg:flex lg:items-center lg:justify-between
                    "
          >
            <div
              className="
                            xl:flex-row xl:items-center xl:gap-5
                            lg:flex-row lg:items-center lg:gap-5
                            flex-col flex gap-1
                        "
            >
              <div
                className="
                                md:flex md:flex-col md:gap-1 md:w-fit
                                sm:flex sm:flex-col sm:gap-1 sm:w-fit
                            "
              >
                <p
                  className="
                                    xl:text-4xl
                                    lg:text-4xl
                                    text-3xl font-aptly-medium text-[var(--white)]
                                "
                >
                  {experience.role}
                </p>
                <div
                  className="
                                    xl:hidden
                                    lg:hidden
                                    md:h-1
                                    sm:h-1
                                    bg-[var(--white)] rounded-full
                                "
                ></div>
              </div>
              <span
                className="
                                xl:text-4xl
                                lg:text-4xl
                                md:hidden sm:hidden
                                font-aptly-medium text-[var(--white)]
                            "
              >
                |
              </span>
              <div className="flex items-center justify-between">
                <p
                  className="
                                    xl:text-3xl
                                    lg:text-2xl
                                    text-xl font-aptly-medium-italic text-[var(--light-white)]
                                "
                >
                  {experience.company}
                </p>
                <p
                  className="
                                    xl:hidden
                                    lg:hidden
                                    text-xs  font-bold text-[var(--light-white)]
                                "
                >
                  {experience.duration}
                </p>
              </div>
            </div>
            <p
              className="
                            xl:text-xl
                            lg:text-lg
                            md:hidden sm:hidden
                             font-bold text-[var(--light-white)]
                        "
            >
              {experience.duration}
            </p>
          </div>
        </div>
      ))}
      {/* <div className="mt-11 text-center">
                <LearnMore text="View More" href="/my-projects" />
            </div> */}
    </div>
  );
};

export default MyExperienceSection;
