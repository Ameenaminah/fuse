import { FC } from "react";

export const HeroSection: FC = () => {
  return (
    <section className={`bg-pry1 relative font-dmSans`}>
      <div className="px-4 md:px-16 lg:px-24 2xl:px-0 font-dmSans container">
        <div className="flex justify-between gap-5 lg:gap-10 py-4 md:py-10 lg:py-20 font-dmSans">
          <div className="flex flex-col gap-5 lg:gap-10 lg:w-1/2">
            <p className="text-2xl md:text-3xl lg:text-5xl font-bold text-pry9">
              What is{" "}
              <span className="lg:block text-2xl md:text-3xl lg:text-5xl font-bold text-pry9">
                FUSE Varsity?
              </span>
            </p>
            <div className="flex flex-col gap-3 md:gap-6">
              <p className="text-base md:text-lg font-normal text-grey11 text-justify">
                FUSE Varsity is an across-the-board varsity for individuals
                seeking to equip themselves with the essential skills and
                knowledge needed to thrive in the ever-evolving landscape of the
                future of work.
              </p>
              <p className="text-base md:text-lg font-normal text-grey11 text-justify">
                Whether you’re seeking to acquire tech skills, upskill or
                transition into a different career path, FUSE Varsity offers a
                comprehensive curriculum cutting across various domains just for
                you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
