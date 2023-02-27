import { useState, useEffect } from "react";

const About = () => {
  const [nameFontSize, setNameFontSize] = useState("5xl");

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 640) {
        setNameFontSize("2xl");
      } else if (windowWidth <= 768) {
        setNameFontSize("3xl");
      } else if (windowWidth <= 1024) {
        setNameFontSize("4xl");
      } else {
        setNameFontSize("5xl");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="mt-28 flex items-center justify-center py-20 md:py-[91px]"
      id="about"
    >
      <div className="px-4 md:max-w-md md:px-14 lg:max-w-[515px]">
        <div className="mb-5 font-roboto-slab text-2xl font-extrabold text-accent-lighter md:text-4xl lg:text-5xl">
          <span>Why Hire Me for Your Next Project?</span>
        </div>
        <div className="mb-5 text-justify font-poppins text-[13px] font-medium text-light lg:text-[15px]">
          <span>
          I have two university degrees: one in Business Administration and another as a Systems Analyst. I have been familiar with the ZACHMAN - IDEF1X methodology since 1991, and have applied it in work for major companies such as Alto Noa Shopping in Salta, managing data to achieve better results for the company.

I have a solid track record as an entrepreneur and in leadership roles, having managed over 20 employees in my previous role as Head of the Purchasing Department and over 30 employees as a supervisor in a casino, where I was also responsible for handling large sums of money.

I have continued to grow and develop professionally by updating my FULL-STACK developer skills through platforms like Platzy.com and SoyHenry.com. I have a combination of determination, skill, and a desire to inspire growth and excellence within the team I work with. In summary, I consider myself a committed professional who always seeks ways to push boundaries and meet the expectations the company requires.
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;