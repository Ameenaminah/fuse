import { FC } from "react";
import { faqs } from "../../../data";
import { FaqComponent } from "./FaqComponent";

export const FaqsSection: FC = () => (
  <section className={`bg-pry1 relative font-dmSans`}>
    <div className="px-4 md:px-16 lg:px-24 2xl:px-0 font-dmSans container">
      <div className="flex flex-col justify-between gap-10 lg:gap-20 py-4 md:py-10 lg:py-20 font-dmSans">
        <div className="flex flex-col gap-2">
          <p className="text-xl md:text-3xl font-semibold text-grey12 text-center">
            FAQs
          </p>
          <p className="text-base font-normal text-grey11 text-center">
            You’ve got questions for us? Find answers to common queries about
            our bootcamps, enrollment, instructors, and more.
          </p>
        </div>
        <div className="flex flex-col gap-10">
          {faqs.map((item, index) => (
            <FaqComponent
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);
