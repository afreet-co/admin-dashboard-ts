import React, { FC } from "react";
import { classes } from "../../configs/classnames";

interface TextInputProps {
  label: string;
  type?: string | undefined;
  placeholder?: string | undefined;
  controlId: string;
}

export const TextInput: FC<TextInputProps> = ({
  label,
  placeholder,
  type,
  controlId,
}) => {
  return (
    <div>
      <label
        className={`block uppercase ${classes.textBase} text-xs font-bold mb-2`}
        htmlFor={controlId}
      >
        {label}
      </label>
      <input
        type={type}
        id={controlId}
        className={`border-0 px-3 py-3 ${classes.placeholder} ${classes.textBase} ${classes.background.base} rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150`}
        placeholder={placeholder}
      />
    </div>
  );
};
