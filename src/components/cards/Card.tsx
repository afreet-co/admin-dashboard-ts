import { FC } from "react";
import { classes } from "../../configs/classnames";

export const Card: FC = ({ children }) => {
  return (
    <div
      className={`flex flex-col w-full shadow-lg rounded ${classes.background.dark}`}
    >
      <div className="block w-full">{children}</div>
    </div>
  );
};
