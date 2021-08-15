import React from "react";
import Link from "next/link";
import { site_name } from "../../configs/strings";
import { useRouter } from "next/router";
import { getTitleFromPath } from "../../helpers/strings";
import Head from "next/head";
import { classes } from "../../configs/classnames";

export const AuthNavbar = () => {
  const router = useRouter();
  const navbarTitle = getTitleFromPath(router.asPath);
  return (
    <>
      <Head>
        <title>
          {navbarTitle} | {site_name}
        </title>
      </Head>
      <nav
        className={`sticky top-0 w-full z-10 ${classes.background.dark} flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg`}
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a
                className={`${classes.textBase} text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase`}
              >
                {site_name}
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
