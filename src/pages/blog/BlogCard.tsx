import { FC } from "react";
import { BlogResponse } from "../../models/blog";
import { Link } from "react-router-dom";
import { StyleConstants } from "../../constants";

interface Props {
  item: BlogResponse;
}

export const BlogCard: FC<Props> = ({ item }) => (
  <Link
    className={`flex flex-col lg:flex-row lg:items-center gap-6 font-dmSans ${StyleConstants.hoverFade}`}
    to={`/blog/${item.id}`}
  >
    <div className="w-full lg:w-[200px]">
      <img src={item.imageUrl} alt="" className="w-full h-full object-cover" />
    </div>
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-4">
        <p className="bg-pry4 p-2 rounded-sm text-sm text-grey10 inline">
          {item.category}
        </p>
        <p className=" text-sm text-grey10">{item.date}</p>
      </div>
      <p className="text-xl font-semibold text-grey12">{item.title}</p>
      <p className="text-base font-normal text-grey11 ">{[item.description]}</p>
      <p className="text-grey10 text-base font-normal">By {item.author}</p>
    </div>
  </Link>
);
