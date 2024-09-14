import { FC } from "react";
import { BootCampItemCard } from "./BootCampItemCard";
import { bootCamps } from "../../../data";

export const BootCampsSection: FC = () => (
  <section className="bg-white">
    <div className="py-8 md:py-16 xl:py-20 px-5 md:px-16 lg:px-16  ">
      <div className="container">
        <p className="text-5xl font-Chivo font-bold text-primary50 pb-20">
          OUR BOOTCAMPS
        </p>
        <div className="flex flex-col lg:flex-row gap-10">
          {bootCamps.map((item, index) => (
            <BootCampItemCard
              key={index}
              image={item.image}
              title={item.title}
              body={item.body}
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);
