import { FC } from "react";

interface Props {
  label: string;
  number: string;
}

export const Statistic: FC<Props> = ({ number, label }) => (
  <div className="flex flex-col gap-2 font-dmSans text-pry9">
    <p className="text-3xl font-semibold text-pry9">{number}</p>
    <p className="text-base font-normal text-pry9">{label}</p>
  </div>
);
