import { FC } from "react";
import { BootCampsSection, Button } from "../../components";
import { bootCamps } from "../../data";
import { TbArrowRight } from "react-icons/tb";
import { Link } from "react-router-dom";

export const TrendingBootCampSection: FC = () => {
  const trendingBootCamps = bootCamps.filter((bootCamp) => bootCamp.isTrending);

  return (
    <section className={`bg-pry1 relative font-dmSans md:border-b md:border-grey6`}>
      <div className="px-4 md:px-16 lg:px-24 2xl:px-0 font-dmSans container py-4 md:py-10 lg:py-20">
        <BootCampsSection
          title="Trending Bootcamps"
          items={trendingBootCamps}
        />
        <Link to="bootcamps" className="hidden md:flex justify-center mt-20">
          <Button
            buttonName="View All Bootcamps"
            icon={<TbArrowRight size={24} />}
            onPress={() => {}}
          />
        </Link>
      </div>
    </section>
  );
};
