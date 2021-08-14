import React, { FC } from "react";
import { classes } from "../../configs/classnames";

export const Heading: FC<{ title: string }> = ({ title }) => {
  return (
    <h3
      className={`shadow-sm rounded ${classes.background.dark} px-4 py-2 font-semibold text-xl ${classes.textBase}`}
    >
      {title}
    </h3>
  );
};
