import { FC } from "react";
import { classes } from "../../configs/classnames";

// Discriminated Union: If link is set onClick can't be set, and vice versa
type FooterLinkProps = {
  onClick?: () => void;
};

export const FooterLink: FC<FooterLinkProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={`${classes.textBase} ${classes.textHover} text-sm font-semibold block py-1 px-3`}
    >
      {children}
    </button>
  );
};
