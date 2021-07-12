import { useRouter } from "next/router";
import React from "react";
import Head from "next/head";

import { getTitleFromPath } from "../../helpers/strings";
import { UserDropdown } from "../dropdowns/UserDropdown";
import { site_name } from "../../configs/strings";

export const DashboardNavbar = () => {
  const router = useRouter();
  const navbarTitle = getTitleFromPath(router.asPath);

  return (
    <>
      <Head>
        <title>
          {navbarTitle} | {site_name}
        </title>
      </Head>
      {/* Navbar */}
      <nav
        className={`md:flex hidden sticky top-0 w-full z-10 bg-light-400 dark:bg-dark-800 shadow md:flex-row md:flex-nowrap md:justify-start  items-center p-2`}
      >
        <div className="w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap px-4">
          <div
            className={`text-dark-800 dark:text-light-400 text-sm  hidden lg:inline-block  font-semibold`}
          >
            {navbarTitle}
          </div>

          {/* User */}
          <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
            <UserDropdown />
          </ul>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
};
