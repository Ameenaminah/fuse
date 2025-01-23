import { FC } from "react";
import { TbClock, TbMapPin } from "react-icons/tb";
import { BootCamp } from "../../data";
import { formatCurrencyWithCommas } from "../../helpers";

interface Props {
  item: BootCamp;
}

export const BootCampItemCard: FC<Props> = ({ item }) => {
  return (
    <div className="flex flex-col bg-white font-dmSans rounded-2xl shadow-md ">
      <div className="w-full">
        <img src={item.image} alt="" className="w-full"/>
      </div>
      <div className="flex flex-col gap-5 p-4">
        <div className="flex items-center justify-between gap-5">
          <div className="flex items-center gap-1 text-base text-grey11 font-normal">
            <TbClock size={16} />
            <p className="text-sm text-grey11 font-normal">
              {item.period} weeks
            </p>
          </div>
          <div className="flex items-center gap-1 text-base text-grey11 font-normal">
            <TbMapPin size={16} />
            <p className="text-sm text-grey11 font-normal">100% Live Virtual</p>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-lg text-grey12 font-semibold">{item.title}</p>
          <p className="text-base text-grey11 font-normal">{item.content}</p>
        </div>
        <div className="flex items-center justify-between gap-5">
          <p className="text-base text-pry9 font-semibold">
            {formatCurrencyWithCommas(item.price)}
          </p>
          <button className="text-base text-pry11 font-normal border-b border-pry11">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};
