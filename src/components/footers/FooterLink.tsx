import { FC } from "react";

// Discriminated Union: If link is set onClick can't be set, and vice versa
type FooterLinkProps = {
  onClick?: () => void;
};

export const FooterLink: FC<FooterLinkProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={`text-dark-700 dark:text-light-400 hover:text-dark-600 dark:hover:text-light-500 text-sm font-semibold block py-1 px-3`}
    >
      {children}
    </button>
  );
};
