import { FC } from "react";
import { classes } from "../../configs/classnames";

export const Checkbox: FC = ({ children }) => {
  return (
    <div>
      <label className="inline-flex items-center cursor-pointer">
        <input
          id="customCheckLogin"
          type="checkbox"
          className={`form-checkbox outline-none ${classes.textBase} rounded-md cursor-pointer ml-1 w-6 h-6 ease-linear transition-all duration-300 checked:border-transparent`}
        />
        <span className={`ml-2 text-sm font-semibold ${classes.textBase}`}>
          {children}
        </span>
      </label>
    </div>
  );
};
