import { FC } from "react";
import { BootCampsSection } from "../components";
import { bootCamps } from "../data";

export const BootCampPage: FC = () => {
  return (
    <section className={`bg-pry1 relative font-dmSans border-b border-grey6`}>
      <div className="px-4 md:px-16 lg:px-24 2xl:px-0 font-dmSans container py-4 md:py-10 lg:py-20">
        <div className="flex flex-col gap-5 md:gap-12">
          <div className="flex flex-col gap-10 lg:w-[835px]">
            <div className="flex flex-col gap-6">
              <p className="text-3xl lg:text-5xl md:text-justify font-semibold text-grey12">
                Welcome to Our Bootcamp Catalog!
              </p>
              <p className="text-base md:text-lg font-normal text-grey11 md:text-justify">
                Explore our diverse range of bootcamps tailored to help you
                reach your personal development and career growth goals. Whether
                you’re looking to advance your career, learn a new skill, or
                pursue a personal interest, we have something for everyone.
              </p>
            </div>
          </div>
          <BootCampsSection title="Our Bootcamps" items={bootCamps} />
        </div>
      </div>
    </section>
  );
};
