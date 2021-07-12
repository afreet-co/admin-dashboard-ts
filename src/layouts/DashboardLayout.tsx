import React, { FC } from "react";
import { DashboardNavbar } from "../components/navbars/DashboardNavbar";
import { DashboardSidebar } from "../components/sidebars/DashboardSidebar";
import { Footer } from "../components/footers/Footer";

export const DashboardLayout: FC = ({ children }) => {
  return (
    <>
      <DashboardSidebar />
      <div
        className={`md:ml-64 bg-light-300 dark:bg-dark-400 h-screen overflow-auto`}
      >
        <DashboardNavbar />
        <div className="px-4 md:px-10 py-2 md:py-5 w-full min-h-full">
          {children}
        </div>
        <Footer isAuthLayout={false} />
      </div>
    </>
  );
};
