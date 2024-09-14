import { FC } from "react";
import { ScholarBenefitsSection } from "../../components";
import { HeroSection } from "./hero/HeroSection";
import { FaqsSection } from "./faq/FaqsSection";

export const AboutPage: FC = () => {
  return (
    <>
      <HeroSection />
      <ScholarBenefitsSection />
      <FaqsSection/>
    </>
  );
};
