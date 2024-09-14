import { FC } from "react";
import { HeroSection } from "./HeroSection";
import { BootCampsSection } from "./bootCamps/BootCampsSection";
import { ReviewsSection } from "./reviews/ReviewsSection";
import { ScholarBenefitsSection } from "../../components";

export const HomePage: FC = () => {
  return (
    <>
      <HeroSection />
      <BootCampsSection />
      <ScholarBenefitsSection />
      <ReviewsSection />
    </>
  );
};
