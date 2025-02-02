import { FC } from "react";
import { HeroSection } from "./HeroSection";
import { FaqsSection } from "./faq/FaqsSection";
import { GoalsSection } from "./GoalsSection";
import { MissionAndVisionSection } from "./MissionAndVisionSection";

export const AboutPage: FC = () => {
  return (
    <>
      <HeroSection />
      <MissionAndVisionSection />
      <GoalsSection />
      <FaqsSection />
    </>
  );
};
