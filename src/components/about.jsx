const About = () => {
  return (
    <div
      className="flex items-center justify-center py-20 md:py-[91px]"
      id="about"
    >
      <div className="px-14 md:max-w-md lg:max-w-[515px]">
        <div className="mb-5 font-roboto-slab text-2xl font-extrabold text-accent-lighter md:text-4xl lg:text-5xl">
          <span>Why Hire Me for Your Next Project?</span>
        </div>
        <div className="mb-5 text-justify font-poppins text-[13px] font-medium text-light lg:text-[15px]">
          <span>
          With two university degrees in Business Administration and Systems Analysis,
          Dario Echazu has a strong track record of being a self-starter and excelling in leadership roles,
          having managed over 20 employees in his previous role as head of the purchasing department,
          and over 30 employees as a supervisor in a casino, where he was also responsible for 
          handling large sums of money.
          Despite overcoming cancer after 20 rounds of chemotherapy in 2011, Dario has continued to grow
          and develop professionally by updating his full-stack development skills through platforms
          like Platzy and also at SoyHenry.com . He brings a combination of determination, skill, and
          a desire to inspire growth and excellence within the team he works with.
          In short, he is a committed professional who is always looking for ways 
          to push boundaries and exceed expectations
          </span>
        </div>
        <button className="rounded-md bg-accent/80 py-2 px-4 font-roboto text-xs font-semibold text-white transition-all hover:bg-accent md:rounded-lg md:px-5 md:text-[13px] lg:text-[15px]">
          Download CV
        </button>
      </div>
    </div>
  );
};

export default About;
