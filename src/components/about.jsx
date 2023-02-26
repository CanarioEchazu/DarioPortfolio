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
        {/* <div className={`mb-5 font-roboto-slab font-extrabold text-white md:text-4xl lg:text-${nameFontSize}`}>
          <span>Dario Echazu</span>
        </div> */}
        <div className="mb-5 font-roboto-slab text-2xl font-extrabold text-accent-lighter md:text-4xl lg:text-5xl">
          <span>Why Hire Me for Your Next Project?</span>
        </div>
        <div className="mb-5 text-justify font-poppins text-[13px] font-medium text-light lg:text-[15px]">
          <span>
            With two university degrees in Business Administration and Systems
            Analysis, Dario Echazu has a strong track record of being a
            self-starter and excelling in leadership roles, having managed over
            20 employees in his previous role as head of the purchasing
            department, and over 30 employees as a supervisor in a casino, where
            he was also responsible for handling large sums of money. Despite
            overcoming cancer after 20 rounds of chemotherapy in 2011, Dario has
            continued to grow and develop professionally by updating his
            full-stack development skills through platforms like Platzy and also
            at SoyHenry.com . He brings a combination of determination, skill,
            and a desire to inspire growth and excellence within the team he
            works with. In short, he is a committed professional who is always
            looking for ways to push boundaries and exceed expectations
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
