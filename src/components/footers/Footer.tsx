import { useRouter } from "next/router";
import React, { FC } from "react";
import { company_name } from "../../configs/strings";
import { useToggleTheme } from "../../hooks/useToggleTheme";
import { FooterLink } from "./FooterLink";

export const Footer: FC<{ isAuthLayout: boolean }> = ({ isAuthLayout }) => {
  const { nextTheme, toggleTheme } = useToggleTheme();
  const router = useRouter();
  return (
    <>
      <footer
        className={`sticky ${
          isAuthLayout ? "" : `bg-light-400 dark:bg-dark-800`
        } bottom-0 block py-2`}
      >
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4">
              <div
                className={`text-sm text- font-semibold py-1 text-center md:text-left`}
              >
                Copyright © {new Date().getFullYear()}
                <a
                  href="#"
                  className={`text-dark-700 dark:text-light-400 hover:text-dark-600 dark:hover:text-light-500 text-sm font-semibold p-1`}
                >
                  {company_name}
                </a>
              </div>
            </div>
            <div className="w-full md:w-8/12 px-4 mt-2 md:mt-0">
              <ul className="flex flex-wrap list-none md:justify-end justify-center">
                <li>
                  <FooterLink>{company_name}</FooterLink>
                </li>
                <li>
                  <FooterLink
                    onClick={() =>
                      router.push(isAuthLayout ? "/about" : "/app/about")
                    }
                  >
                    About
                  </FooterLink>
                </li>
                <li>
                  <FooterLink onClick={toggleTheme}>
                    {nextTheme === "dark" ? (
                      <i className="fas fa-moon"></i>
                    ) : (
                      <i className="fas fa-sun"></i>
                    )}
                  </FooterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
