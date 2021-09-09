import Link from "next/link";
import React from "react";
import { FC } from "react";
import { classes } from "../../configs/classnames";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  size?: "small" | "regular" | "large";
  color?: "light" | "normal" | "dark";
  uppercase?: boolean;
  rounded?: boolean;
  classNames?: string;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({
  children,
  type,
  size,
  href,
  uppercase,
  rounded,
  classNames,
  color,
  onClick,
  disabled,
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
  let bgClasses = `${classes.background.baseInverted} ${classes.background.hoverDarkInverted}`;
  switch (color) {
    case "dark":
      bgClasses = `${classes.background.darkInverted} ${classes.background.hoverLightInverted}`;
      break;
    case "light":
      bgClasses = `${classes.background.lightInverted} ${classes.background.hoverBaseInverted}`;
      break;
    case "normal":
    default:
  }

  const disabledClasses = disabled
    ? "disabled:opacity-50 disabled:cursor-not-allowed"
    : "";

  const finalClasses = `${bgClasses} ${
    classes.textBaseInverted
  } ${disabledClasses} box-border font-bold rounded focus:ring ring-dark-100 dark:ring-light-400 block outline-none focus:outline-none ease-linear transition-all duration-150 ${
    uppercase ? "uppercase" : ""
  } ${rounded ? "rounded-full" : ""} ${sizeClasses} ${classNames || ""}`;

  return (
    <>
      {href ? (
        <Link href={href}>
          <a className={finalClasses}>{children}</a>
        </Link>
      ) : (
        <button
          className={finalClasses}
          type={type}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </button>
      )}
    </>
  );
};
