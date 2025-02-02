import { FC } from "react";
import {
  Goal1Icon,
  Goal2Icon,
  Goal3Icon,
  Goal4Icon,
  Goal5Icon,
  Goal6Icon,
} from "../../assets/icons";

const goals = [
  { icon: Goal1Icon, label: "Accessibility" },
  { icon: Goal2Icon, label: "Innovation" },
  { icon: Goal3Icon, label: "Inclusivity" },
  { icon: Goal4Icon, label: "Continuous Learning" },
  { icon: Goal5Icon, label: "Personal Growth" },
  { icon: Goal6Icon, label: "Community" },
];

export const GoalsSection: FC = () => {
  return (
    <section className={`bg-pry1 relative font-dmSans`}>
      <div className="px-4 md:px-16 lg:px-24 2xl:px-0 font-dmSans container">
        <div className="flex flex-col justify-between gap-5 lg:gap-10 py-4 md:py-10 lg:py-20 font-dmSans">
          <p className="text-xl md:text-3xl font-semibold text-grey12 text-center">
            Our Core Goals
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 justify-between items-center">
            {goals.map(({ icon, label }) => (
              <div
                key={label}
                className="flex flex-col justify-center items-center p-5 md:p-0 border-b md:border-b-0 md:border-r lg:last:border-r-0 border-grey6"
              >
                <div className="w-14 h-14">
                  <img src={icon} alt={label} className="w-full h-full" />
                </div>
                <p className="text-sm lg:text-lg font-semibold text-center text-pry9">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
