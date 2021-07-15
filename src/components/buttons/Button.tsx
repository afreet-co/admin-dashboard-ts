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

  let textClasses = inverted
    ? `text-light-300 dark:text-dark-500`
    : `text-dark-500 dark:text-light-300`;
  let bgClasses = inverted
    ? `bg-dark-500 dark:bg-light-300`
    : `bg-light-300 dark:bg-dark-500`;
  let borderClasses = inverted
    ? `border-light-300 dark:border-dark-500`
    : `border-dark-500 dark:border-light-300`;

  switch (color) {
    case "dark":
      textClasses = inverted
        ? `text-light-400 dark:text-dark-600`
        : `text-dark-600 dark:text-light-400`;
      bgClasses = inverted
        ? `bg-dark-600 dark:bg-light-400`
        : `bg-light-400 dark:bg-dark-600`;
      borderClasses = inverted
        ? `border-light-400 dark:border-dark-600`
        : `border-dark-600 dark:border-light-400`;
      break;
    case "light":
      textClasses = inverted
        ? `text-light-200 dark:text-dark-300`
        : `text-dark-300 dark:text-light-200`;
      bgClasses = inverted
        ? `bg-dark-300 dark:bg-light-200`
        : `bg-light-200 dark:bg-dark-300`;
      borderClasses = inverted
        ? `border-light-200 dark:border-dark-300`
        : `border-dark-300 dark:border-light-200`;
      break;
    case "normal":
    default:
  }

  let contentClasses = "";
  switch (outline) {
    case true:
      contentClasses = `border-2 ${borderClasses} ${textClasses}`;
      break;
    case false:
    default:
      contentClasses = `${bgClasses} ${textClasses}`;
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
