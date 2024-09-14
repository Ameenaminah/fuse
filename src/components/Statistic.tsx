import { FC } from "react";

interface Props {
  label: string;
  number: string;
}

export const Statistic: FC<Props> = ({ number, label }) => (
  <div className="statistic">
    <p className="text-4xl font-bold">{number}</p>
    <p className="text-sm">{label}</p>
  </div>
);
