import React, { FC } from "react";
import { Footer } from "../components/footers/Footer";
import { AuthNavbar } from "../components/navbars/AuthNavbar";

export const AuthLayout: FC = ({ children }) => {
  return (
    <div
      className={`w-screen h-screen bg-light-300 dark:bg-dark-500 bg-no-repeat bg-full overflow-auto`}
    >
      <AuthNavbar />
      <div className=" min-h-full w-full flex justify-center items-start pt-10">
        {children}
      </div>
      <Footer isAuthLayout={true} />
    </div>
  );
};
