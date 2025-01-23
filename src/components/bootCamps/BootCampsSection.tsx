import { FC } from "react";
import { BootCampItemCard } from "./BootCampItemCard";
import { BootCamp } from "../../data";

interface Props {
  title: string;
  items: BootCamp[];
}

export const BootCampsSection: FC<Props> = ({ items, title }) => (
  <section className="flex flex-col justify-between gap-10 font-dmSans">
    <p className="text-3xl font-semibold text-grey12 text-center">{title}</p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {items.map((item) => (
        <BootCampItemCard key={item.id} item={item} />
      ))}
    </div>
  </section>
);
