import { FC } from "react";

interface Props {
  title: string;
  body1: string;
  body2: string;
  textClassName?: string;
  containerClassName?: string;
}

export const HeroContent: FC<Props> = ({
  title,
  textClassName,
  body1,
  body2,
  containerClassName,
}) => (
  <section className={`bg-primary00 ${containerClassName}`}>
    <div className="py-8 md:py-16 xl:py-20 px-5 md:px-16 lg:px-16">
      <div className="flex flex-col lg:flex-row gap-10 container">
        <p
          className={`text-3xl lg:text-[2.5rem] font-Chivo font-bold lg:w-[50%] ${textClassName}`}
        >
          {title}
        </p>
        <div className="flex flex-col gap-5 lg:w-[50%]">
          <p className={`text-lg ${textClassName}`}>{body1}</p>
          <p className={`text-lg ${textClassName}`}>{body2}</p>
        </div>
      </div>
    </div>
  </section>
);
