import { FC } from "react";
import { ScholarBenefitItem } from "./ScholarBenefitItem";
import { scholarBenefits } from "../../data";

export const ScholarBenefitsSection: FC = () => {
  return (
    <section className={`bg-pry1 relative font-dmSans border-b border-grey6`}>
      <div className="px-6 md:px-16 lg:px-24 2xl:px-0 font-dmSans container py-10 lg:py-20">
        <div className="flex flex-col justify-between gap-10 font-dmSans">
          <p className="text-3xl font-semibold text-grey12 text-center">
            Why Become A FUSE Scholar?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 bg-pry9 p-4 lg:p-10 rounded-3xl">
            {scholarBenefits.map((benefit, index) => (
              <ScholarBenefitItem key={index} item={benefit} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
