import { FC } from "react";
import { ScholarBenefit } from "../../data";

interface Props {
  item: ScholarBenefit;
}

export const ScholarBenefitItem: FC<Props> = ({ item }) => (
  <div className="flex flex-col gap-6 font-dmSans p-0 lg:p-10">
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-center w-[44px] h-[44px] rounded-full bg-white">
        <img src={item.icon} alt={item.title} />
      </div>
      <div>
        <p className="text-xl text-grey1 font-semibold">{item.title}</p>
        <p className="text-base text-grey2 font-normal">{item.description}</p>
      </div>
    </div>
  </div>
);
