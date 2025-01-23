import { FC, useRef, useState } from "react";
import { ReviewCard } from "./ReviewCard";
import { reviews } from "../../../data";
import { TbChevronLeft, TbChevronRight } from "react-icons/tb";

export const ReviewsSection: FC = () => {

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Adjust based on visible items
  const totalPages = Math.ceil(reviews.length / itemsPerPage);

  const handleNextPage = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: scrollContainerRef.current.offsetWidth,
        behavior: "smooth",
      });
      setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    }
  };

  const handlePrevPage = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -scrollContainerRef.current.offsetWidth,
        behavior: "smooth",
      });
      setCurrentPage((prev) => Math.max(prev - 1, 1));
    }
  };
  return (
    <section className={`bg-pry1 relative font-dmSan py-10 lg:py-20`}>
      <div className="flex flex-col gap-2 font-dmSans text-center px-6 md:px-16">
        <p className="text-3xl font-semibold text-grey12 ">Success Stories</p>
        <p className="text-base font-normal text-grey11">
          Read what our past students are saying about their FUSE experience
        </p>
        {/* <div className="flex flex-col gap-8 lg:hidden">
          {reviews.map((item) => (
            <ReviewCard key={item.id} item={item} />
          ))}
        </div> */}
      </div>
      {/* <div className="hidden lg:flex overflow-scroll mt-10">
        {reviews.map((item) => (
          <ReviewCard key={item.id} item={item} />
        ))}
      </div> */}

      <div
        className="px-6 md:px-16 lg:px-0 mt-10 flex flex-col gap-8 lg:flex-row lg:overflow-x-auto"
        ref={scrollContainerRef}
      >
        {reviews.map((item) => (
          <ReviewCard key={item.id} item={item} />
        ))}
      </div>
      <div className="flex justify-center items-center gap-6 lg:mt-10">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="p-2 bg-pry9 flex text-white rounded-full disabled:bg-grey7 font-bold"
        >
          <TbChevronLeft size={24} />
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="p-2 bg-pry9  text-white rounded-full disabled:bg-grey7 font-bold"
        >
          <TbChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};
