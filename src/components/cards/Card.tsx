import { FC } from "react";
import { classes } from "../../configs/classnames";

type CardSizes = "full" | "half" | "third";

interface CardProps {
  width?: CardSizes;
}
const widthClasses: { [key in CardSizes]: string } = {
  full: "w-full",
  half: "w-1/2",
  third: "w-1/3",
};

export const Card: FC<CardProps> = ({ width, children }) => {
  return (
    <div
      className={`flex flex-col ${
        widthClasses[width ?? "full"]
      } shadow-lg rounded ${classes.background.dark} p-4`}
    >
      <div className="block w-full">{children}</div>
    </div>
  );
};
