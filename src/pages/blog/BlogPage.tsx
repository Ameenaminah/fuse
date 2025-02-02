import { FC, useState } from "react";
import { blogs } from "../../data";
import { BlogCard } from "./BlogCard";
import { TbChevronLeft, TbChevronRight } from "react-icons/tb";

export const BlogPage: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Calculate the start and end indices for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstItem, indexOfLastItem);

  // Handle pagination logic
  const totalPages = Math.ceil(blogs.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <section className={`bg-pry1 relative font-dmSans border-b border-grey6`}>
        <div className="px-4 md:px-16 lg:px-24 2xl:px-0 font-dmSans container py-4 md:py-10 lg:py-20">
          <div className="flex flex-col gap-5 md:gap-10">
            <div className="flex flex-col gap-10 lg:w-[835px]">
              <div className="flex flex-col gap-4">
                <p className="text-3xl lg:text-4xl text-justify font-semibold text-grey12">
                  Blog
                </p>
                <p className="text-xl font-normal text-grey11 text-justify">
                  Discover articles on tech, business, creativity, personal
                  development, and more.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-10 w-full">
              {currentBlogs.map((item) => (
                <BlogCard item={item} key={item.id} />
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
              <p className="text-2xl text-grey12">{currentPage}</p>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="p-2 bg-pry9  text-white rounded-full disabled:bg-grey7 font-bold"
              >
                <TbChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
