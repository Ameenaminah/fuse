import React from "react";

interface Props {
  icon: string;
  onClick?: () => void;
  className?: string;
}

const buttonBaseStyles =
  "flex items-center justify-center w-[44px] h-[44px] rounded-full border-stroke border";

export const IconButton: React.FC<Props> = ({
  icon,
  onClick,
  className = "",
}) => {
  return (
    <button className={`${buttonBaseStyles} ${className}`} onClick={onClick}>
      <img src={icon} alt={icon} />
    </button>
  );
};


