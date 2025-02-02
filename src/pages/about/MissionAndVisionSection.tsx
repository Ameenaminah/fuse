import { FC } from "react";
import { ArrowImage, EyeImage } from "../../assets/images";

export const MissionAndVisionSection: FC = () => {
  return (
    <section className={`bg-pry9 relative font-dmSans`}>
      <div className="px-4 md:px-16 lg:px-24 2xl:px-0 font-dmSans container">
        <div className="flex flex-col justify-between gap-5 lg:gap-10 py-4 md:py-10 lg:py-20 font-dmSans">
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col gap-8 md:w-2/5">
              <p className="text-xl md:text-2xl text-white font-semibold border-b-4 border-white w-max">
                Our Mission
              </p>
              <p className="text-base text-white font-semibold">
                Our mission is to foster inclusive opportunities for all
                individuals by connecting them with the knowledge and skills
                necessary to thrive in an ever-evolving global landscape.
                Additionally, we aim to serve as the premier job pipeline for
                talented individuals in Africa, ensuring equitable access to
                opportunities and promoting economic empowerment across the
                continent.
              </p>
            </div>
            <div className="hidden md:block w-2/5">
              <img src={ArrowImage} alt="" className="w-full h-full" />
            </div>
          </div>

          <div className="flex justify-between items-center w-full">
            <div className=" hidden md:block w-2/5">
              <img src={EyeImage} alt="" className="w-full h-full" />
            </div>
            <div className="flex flex-col gap-8 md:w-2/5">
              <p className="text-xl md:text-2xl text-white font-semibold border-b-4 w-max border-white">
                Our Vision
              </p>
              <p className="text-base text-white font-semibold">
                Our vision is to be the leading catalyst for transformative
                growth and equitable advancement in Africa and beyond,
                empowering individuals from all backgrounds to realize their
                full potential and contribute meaningfully to a dynamic global
                economy through skills education.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
