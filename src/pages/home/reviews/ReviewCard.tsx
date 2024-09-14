import { FC } from "react";

interface Props {
  name: string;
  role: string;
  feedback: string;
  image: string;
}

export const ReviewCard: FC<Props> = ({ name, role, feedback, image }) => (
  <div className="flex flex-col gap-4">
    <div className="flex items-center gap-7">
      <div className="w-[116px] h-[116px] rounded-full">
        <img src={image} alt={`${name}'s picture`} className="w-full" />
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="text-textHeading text-xl font-bold">{name}</h1>
        <p className="text-textParagraphLight text-sm">{role}</p>
      </div>
    </div>
    <p className="text-textParagraph text-base">{feedback}</p>
  </div>
);
