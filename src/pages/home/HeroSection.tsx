import { FC } from "react";
import { Button, Statistic } from "../../components";
import { BoxAshImage, HeroImage } from "../../assets/images";

export const HeroSection: FC = () => {
  return (
    <section className={`bg-primary00 relative`}>
      <div className="pt-8 md:pt-16 xl:pt-20 px-5 md:px-16 lg:px-16">
        <div className="container">
          <p className="lg:w-[942px] text-4xl lg:text-6xl font-Chivo font-bold mb-10">
            Get Ahead In The Future of Work With The Right Skills
          </p>
          <div className="w-full flex flex-col lg:flex-row-reverse gap-10">
            <div className="flex flex-col w-full lg:w-1/2 gap-10">
              <p className="w-full text-justify lg:w-[487px] text-lg font-WorkSans">
                At FUSE Varsity, we've revolutionized skills education. Our
                comprehensive support system aims to assist you in cultivating
                the skills and confidence necessary to navigate and excel in
                your chosen career paths.
              </p>
              <Button buttonName="Get Started" />
              <div className="flex items-center gap-10">
                <Statistic label="Career Courses" number="10+" />
                <Statistic label="Our Students" number="100+" />
              </div>
            </div>
            <div className="lg:w-1/2">
              <img src={HeroImage} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden absolute bottom-0 right-0 lg:flex justify-end w-[150px] h-[150px] ml-auto">
        <img src={BoxAshImage} alt="" />
      </div>
    </section>
  );
};
