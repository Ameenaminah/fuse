import { FC } from "react";
import { HeroSection } from "./hero/HeroSection";
import { FaqsSection } from "./faq/FaqsSection";

export const AboutPage: FC = () => {
  return (
    <>
      <HeroSection />
      <FaqsSection />
    </>
  );
};
