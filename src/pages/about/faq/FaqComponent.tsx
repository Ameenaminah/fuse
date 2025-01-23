import { FC, useState } from "react";
import { TbChevronDown, TbChevronUp } from "react-icons/tb";

interface Props {
  question: string;
  answer: string;
}

export const FaqComponent: FC<Props> = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleQuestion = () => setShowAnswer((prev) => !prev);

  const ArrowIcon = showAnswer ? TbChevronUp : TbChevronDown;

  return (
    <div className="cursor-pointer font-dmSans border-b border-grey3">
      <div
        onClick={toggleQuestion}
        className="flex items-center justify-between"
      >
        <h3 className="font-semibold text-lg md:text-2xl text-grey12">
          {question}
        </h3>
        <ArrowIcon color="#1E1F24" size={24} />
      </div>
      {showAnswer && (
        <p className="text-base text-justify md:text-xl text-grey11 font-normal transition-all duration-300 ease-in-out mb-4">
          {answer}
        </p>
      )}
    </div>
  );
};
