import React from "react";
import { AuthLayout } from "../layouts/AuthLayout";
import { HomeHeroImage } from "../components/svgs/HomeHeroImage";
import { Button } from "../components/buttons/Button";
const Main = () => {
  return (
    <AuthLayout>
      <div className="mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
          <p className="uppercase tracking-loose w-full">
            Need a simple admin dashboard starter template without hustle?
          </p>
          <h1 className="my-4 text-5xl font-bold leading-tight">
            Admin Dashboard is here!
          </h1>
          <p className="leading-normal text-2xl mb-8">
            Just copy and start your project
          </p>
          <div className="flex justify-center items-center w-full">
            <Button
              href="/app"
              rounded
              size="large"
              color="normal"
              classNames="mr-2"
            >
              Dashboard
            </Button>
            <Button href="/login" rounded color="normal" size="large">
              Login
            </Button>
          </div>
        </div>

        <div className="w-full md:w-3/5 py-6 text-center">
          <HomeHeroImage classNames="w-full md:w-4/5 mx-auto" />
        </div>
      </div>
    </AuthLayout>
  );
};

export default Main;
