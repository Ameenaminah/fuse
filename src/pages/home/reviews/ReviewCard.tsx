import { FC } from "react";
import { CommentIcon } from "../../../assets/icons";
import { ReviewResponse } from "../../../models/review";

interface Props {
  item: ReviewResponse;
}

export const ReviewCard: FC<Props> = ({ item }) => (
  <div className="flex flex-col gap-4 bg-pry2 rounded-2xl border border-pry9 px-6 py-10 font-dmSans w-full  m-auto">
    <div className="flex  gap-2 ">
      <div className="hidden md:flex">
        <img src={CommentIcon} alt="" className="w-full h-full " />
      </div>
      <p className="text-textParagraph text-base text-center">
        {item.feedback}
      </p>
    </div>
    <div className="flex flex-col justify-center items-center gap-0">
      <p className="text-grey12 text-lg font-semibold">{item.name}</p>
      <p className="text-grey11 text-base font-normal">{item.role}</p>
    </div>
  </div>
);
