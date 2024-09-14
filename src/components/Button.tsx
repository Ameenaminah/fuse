import { FC } from "react";

interface Props {
  buttonName: string;
  onPress?: () => void;
}

export const Button: FC<Props> = ({ buttonName, onPress }) => {
  return (
    <div className="flex flex-col lg:flex-row">
      <button
        onClick={onPress}
        className=" bg-white hover:bg-primary00 py-2 px-4 text-primary00 hover:text-white rounded-3xl cursor-pointer"
      >
        {buttonName}
      </button>
    </div>
  );
};
