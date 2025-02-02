import { Link } from "react-router-dom";
import { BlueLogoIcon } from "../assets/icons";
import { FC } from "react";
import { StyleConstants } from "../constants";

interface Props {
  textColor?: string;
  iconName?: string;
}

export const Logo: FC<Props> = ({
  textColor = "text-pry9",
  iconName = BlueLogoIcon,
}) => {
  return (
    <Link
      to="/"
      className={`flex items-center gap-2 ${StyleConstants.hoverFade}`}
    >
      <img src={iconName} alt="logo" className="w-6 md:w-8 " />
      <p
        className={`text-sm md:text-xl lg:text-2xl font-cinzel font-bold ${textColor}`}
      >
        FUSE VARSITY
      </p>
    </Link>
  );
};
