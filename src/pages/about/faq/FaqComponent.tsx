import { FC, useState } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

interface Props {
  question: string;
  answer: string;
}

export const FaqComponent: FC<Props> = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleQuestion = () => setShowAnswer((prev) => !prev);

  const ArrowIcon = showAnswer ? AiOutlineArrowUp : AiOutlineArrowDown;

  return (
    <div className="cursor-pointer">
      <div
        onClick={toggleQuestion}
        className="flex items-center justify-between"
      >
        <h3 className="font-medium text-2xl text-primary50">{question}</h3>
        <ArrowIcon color="black" size={20} />
      </div>
      {showAnswer && (
        <p className="text-base text-textParagraph transition-all duration-300 ease-in-out mb-4">
          {answer}
        </p>
      )}
      <div className="w-full h-[1px] bg-[#828282]" />
    </div>
  );
};
