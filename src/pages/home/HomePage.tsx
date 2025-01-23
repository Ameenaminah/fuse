import { FC } from "react";
import { HeroSection } from "./HeroSection";
import { ReviewsSection } from "./reviews/ReviewsSection";
import { ScholarBenefitsSection } from "../../components";
import { TrendingBootCampSection } from "./TrendingBootCampSection";

export const HomePage: FC = () => {
  return (
    <>
      <HeroSection />
      <TrendingBootCampSection />
      <ScholarBenefitsSection />
      <ReviewsSection />
    </>
  );
};
