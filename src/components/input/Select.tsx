import React, { forwardRef } from "react";
import { classes } from "../../configs/classnames";

interface SelectProps {
  options: { text: string; value: string | number }[];
  placeholder?: string;
  selected?: string | number;
  controlId: string;
  size?: "small" | "regular" | "large";
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, onChange, placeholder, controlId, selected, size }, ref) => {
    let sizeClasses = "";
    switch (size) {
      case "large":
        sizeClasses = "text-base px-3 py-3 hover:shadow-md";
        break;
      case "regular":
        sizeClasses = "text-sm px-3 py-3 shadow hover:shadow-lg";
        break;
      case "small":
      default:
        sizeClasses = "text-xs px-2 py-2 shadow hover:shadow-md";
    }

    return (
      <select
        ref={ref}
        onChange={onChange}
        className={`block ${classes.textBase} border ${classes.border} ${classes.background.light} rounded-sm shadow-sm ${sizeClasses} focus:ring ring-dark-100 dark:ring-light-400 outline-none focus:outline-none ease-linear transition-all duration-150`}
        name={controlId}
        value={selected}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map(({ text, value }) => (
          <option key={value} value={value}>
            {text}
          </option>
        ))}
      </select>
    );
  }
);
