import { FC } from "react";
import { Button, Statistic } from "../../components";
import { HeroImage } from "../../assets/images";

export const HeroSection: FC = () => {
  return (
    <section className={`bg-pry1 relative font-dmSans border-b border-grey6`}>
      <div className=" px-6 md:px-16 lg:px-24 2xl:px-0 font-dmSans container">
        <div className="flex justify-between gap-10 py-10 lg:py-20 font-dmSans">
          <div className="flex flex-col gap-10 lg:w-[60%]">
            <div className="flex flex-col gap-6">
              <p className="text-3xl lg:text-5xl text-justify font-bold text-grey12">
                <span className="text-pry9 text-3xl lg:text-5xl font-bold">
                  Get Ahead
                </span>{" "}
                In The Future of Work With The Right Skills
              </p>
              <p className="text-lg font-normal text-grey11 text-justify">
                At FUSE Varsity, we're revolutionizing skills education. Our
                comprehensive support system aims to assist you in cultivating
                the skills and confidence necessary to navigate and excel in
                your chosen career paths.
              </p>
            </div>
            <Button buttonName="Get Started" onPress={() => {}} />
            <div className="flex items-center gap-8">
              <Statistic label="Career Courses" number="10+" />
              <Statistic label="Our Students" number="100+" />
            </div>
          </div>
          <div className="hidden lg:flex  lg:w-[400px] lg:h-[400px] rounded-full w-full bg-[#D9EBFF]">
            <img
              src={HeroImage}
              alt=""
              className="rounded-full w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
