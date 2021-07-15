import React from "react";
import { FC } from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  size?: "small" | "regular" | "large";
  color?: "light" | "normal" | "dark";
  inverted?: boolean;
  uppercase?: boolean;
  rounded?: boolean;
  outline?: boolean;
  classNames?: string;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({
  children,
  type,
  size,
  uppercase,
  rounded,
  outline,
  classNames,
  color,
  inverted,
  onClick,
}) => {
  let sizeClasses = "";
  switch (size) {
    case "large":
      sizeClasses = "text-base px-8 py-3 hover:shadow-md";
      break;
    case "regular":
      sizeClasses = "text-sm px-6 py-3 shadow hover:shadow-lg";
      break;
    case "small":
    default:
      sizeClasses = "text-xs px-4 py-2 shadow hover:shadow-md";
  }
  let darkClass = "dark-500";
  let lightClass = "light-300";
  switch (color) {
    case "dark":
      darkClass = "dark-600";
      lightClass = "light-400";
      break;
    case "light":
      darkClass = "dark-300";
      lightClass = "light-200";
      break;
    case "normal":
    default:
  }

  if (inverted) {
    const temp = darkClass;
    darkClass = lightClass;
    lightClass = temp;
  }

  let contentClasses = "";
  switch (outline) {
    case true:
      contentClasses = `border-2 border-${darkClass} dark:border-${lightClass} text-${darkClass} dark:text-${lightClass}`;
      break;
    case false:
    default:
      contentClasses = `bg-${lightClass} dark:bg-${darkClass} text-${darkClass} dark:text-${lightClass}`;
  }

  return (
    <button
      className={`${contentClasses} font-bold rounded focus:ring ring-dark-100 dark:ring-light-400 outline-none focus:outline-none ease-linear transition-all duration-150 ${
        uppercase ? "uppercase" : ""
      } ${rounded ? "rounded-full" : ""} ${sizeClasses} ${classNames || ""}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
