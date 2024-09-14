import { FC } from "react";
import { ScholarBenefitItem } from "./ScholarBenefitItem";
import { scholarBenefits } from "../../data";

export const ScholarBenefitsSection: FC = () => {
  return (
    <section className="bg-primary100">
      <div className="py-8 md:py-16 xl:py-20 px-5 md:px-16 lg:px-16">
        <div className="container">
          <p className="text-textHeading2 text-4xl lg:text-5xl font-Chivo font-bold text-center">
            Why Become A FUSE Scholar?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {scholarBenefits.map((benefit, index) => (
              <ScholarBenefitItem
                key={index}
                title={benefit.title}
                description={benefit.description}
                icon={benefit.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
