import { FC } from "react";
import { ReviewCard } from "./ReviewCard";
import { reviews } from "../../../data";
import { ArrowLeftIcon, ArrowRightIcon } from "../../../assets/icons";
import { IconButton } from "../../../components";

export const ReviewsSection: FC = () => {
  return (
    <section className="bg-white">
      <div className="py-8 md:py-16 xl:py-20 px-5 md:px-16 lg:px-16">
        <div className="flex flex-col gap-10 container">
          <div className="flex flex-col lg:flex-row-reverse justify-between gap-10">
            <div className="flex flex-col gap-4 w-full lg:w-[40%]">
              <p className="font-Chivo font-bold text-4xl text-primary50">
                Success Stories
              </p>
              <p className="text-textParagraph text-base">
                Read all the Student’s Feedback about us and know what our
                loving students are saying about our platform
              </p>
              <div className="flex gap-5">
                <IconButton icon={ArrowLeftIcon} />
                <IconButton icon={ArrowRightIcon} className="bg-primary00" />
              </div>
            </div>
            <div
              className="w-full lg:w-[40%] p-8 bg-white"
              style={{ boxShadow: "0px 14px 28px 0px #241D000D" }}
            >
              <ReviewCard {...reviews[0]} />
            </div>
          </div>
          <div className="hidden lg:flex justify-between">
            {reviews.slice(1).map((review, index) => (
              <div className="w-[40%] bg-white">
                <ReviewCard key={index} {...review} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
