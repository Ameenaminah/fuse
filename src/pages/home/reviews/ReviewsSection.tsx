import { FC, useCallback, useState } from "react";
import { ReviewCard } from "./ReviewCard";
import { reviews } from "../../../data";
import { TbChevronLeft, TbChevronRight } from "react-icons/tb";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Navigation } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const ReviewsSection: FC = () => {
  const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);

  const handlePrev = useCallback(() => {
    if (swiperRef) swiperRef.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    if (swiperRef) swiperRef.slideNext();
  }, [swiperRef]);

  return (
    <section className={`bg-pry1 relative font-dmSan py-10 lg:py-20`}>
      <div className="flex flex-col gap-2 font-dmSans text-center px-6 md:px-16">
        <p className="text-3xl font-semibold text-grey12 ">Success Stories</p>
        <p className="text-base font-normal text-grey11">
          Read what our past students are saying about their FUSE experience
        </p>
      </div>
      <div className="relative mt-10 lg:mt-20">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          slidesPerView={1.2}
          centeredSlides={true}
          loop={true}
          spaceBetween={300}
          onSwiper={(swiper: SwiperType) => setSwiperRef(swiper)}
          className="swiper_container"
          coverflowEffect={{
            rotate: 0,
            stretch: 50,
            depth: 150,
            modifier: 1.5,
            slideShadows: false,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          modules={[EffectCoverflow, Pagination, Navigation]}
        >
          {reviews.map((item) => (
            <SwiperSlide
              key={item.id}
              className="transition-opacity duration-300"
            >
              {({ isActive }) => (
                <div
                  className={`${
                    isActive ? "opacity-100" : "opacity-50 scale-90"
                  }`}
                >
                  <ReviewCard item={item} />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex justify-center items-center gap-6 lg:mt-10">
        <button
          onClick={handlePrev}
          className="p-2 bg-pry9 flex text-white rounded-full disabled:bg-grey7 font-bold"
        >
          <TbChevronLeft size={24} />
        </button>
        <button
          onClick={handleNext}
          className="p-2 bg-pry9  text-white rounded-full disabled:bg-grey7 font-bold"
        >
          <TbChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};
