import { FC } from "react";
import { faqs } from "../../../data";
import { FaqComponent } from "./FaqComponent";

export const FaqsSection: FC = () => (
  <section className="bg-white">
    <div className="py-8 md:py-16 xl:py-20 px-5 md:px-16 lg:px-16  ">
      <div className="container">
        <p className="text-[2.5rem] font-Cinzel font-bold text-primary50 pb-20">
          FREQUENTLY ASKED QUESTION
        </p>
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
