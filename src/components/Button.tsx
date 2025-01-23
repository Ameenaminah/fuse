import { FC, ReactNode } from "react";
import { StyleConstants } from "../constants";

interface Props {
  buttonName: string;
  onPress?: () => void;
  icon?: ReactNode;
}

export const Button: FC<Props> = ({ buttonName, onPress, icon }) => {
  return (
    <div className="flex  flex-col lg:flex-row">
      <button
        onClick={onPress}
        className={`flex items-center justify-center gap-2 bg-pry9 text-white text-base font-semibold py-2 px-4 ${StyleConstants.hoverFade}`}
      >
        {buttonName}
        {icon && icon}
      </button>
    </div>
  );
};
