import { FC } from "react";
import { LineComponent } from "../LineComponent";

interface Props {
  title: string;
  description: string;
  icon: string;
}

export const ScholarBenefitItem: FC<Props> = ({ title, description, icon }) => (
  <div className="flex flex-col gap-6">
    <div className="flex items-center gap-6">
      <div className="flex items-center justify-center w-[44px] h-[44px] rounded-full bg-iconBg">
        <img src={icon} alt={title} />
      </div>
      <div>
        <p className="text-lg lg:text-2xl text-textHeading font-bold">
          {title}
        </p>
        <LineComponent />
      </div>
    </div>
    <p className="text-base text-textParagraph">{description}</p>
  </div>
);
