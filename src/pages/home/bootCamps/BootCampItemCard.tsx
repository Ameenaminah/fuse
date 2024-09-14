import { FC } from "react";
import { LineComponent } from "../../../components";

interface Props {
  image: string;
  title: string;
  body: string;
}

export const BootCampItemCard: FC<Props> = ({ image, title, body }) => {
  return (
    <div className="flex flex-col gap-10">
      <div className="rounded-2xl">
        <img src={image} alt="" />
      </div>
      <div>
        <p className="text-2xl text-textHeading font-bold">{title}</p>
        <LineComponent />
      </div>
      <p className="text-base text-textParagraph">{body}</p>
    </div>
  );
};
