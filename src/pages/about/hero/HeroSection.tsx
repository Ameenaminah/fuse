import { FC } from "react";
import { AboutHeroImage, BoxAshImage } from "../../../assets/images";
import { HeroContent } from "./HeroContent";

export const HeroSection: FC = () => {
  return (
    <section className={`bg-primary00 `}>
      <HeroContent
        title="  What is FUSE Varsity ?"
        body1=" FUSE Varsity is an across-the-board varsity for individuals
                seeking to equip themselves with the essential skills and
                knowledge needed to thrive in the ever-evolving landscape of the
                future of work."
        body2="Whether you’re seeking to acquire tech skills, upskill or
                transition into a different career path, FUSE Varsity offers a
                comprehensive curriculum cutting across various domains just for
                you."
      />
      <div className="flex justify-end w-[150px] h-[150px] mr-auto">
        <img src={BoxAshImage} alt="" className="transform rotate-90"/>
      </div>
      <div>
        <img src={AboutHeroImage} alt="" className="object-cover" />
      </div>

      <HeroContent
        title="Our Mission and vision"
        body1="Our mission and vision is to foster inclusive opportunities for all individuals by connecting them with the knowledge and skills necessary to thrive in an ever-evolving global landscape. "
        body2="We aim to be a catalyst for transformation growth and equitable advancement in Africa and beyond, empowering individuals from all backgrounds to realize their full potential and contribute meaningfully to a dynamic global economy through skills education."
        containerClassName="bg-white"
        textClassName="text-primary50"
      />
    </section>
  );
};
