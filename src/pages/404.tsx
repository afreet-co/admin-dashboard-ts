import router from "next/router";
import React from "react";
import { Button } from "../components/buttons/Button";
import { AuthLayout } from "../layouts/AuthLayout";

const NotFound = () => {
  return (
    <AuthLayout>
      <div className="flex flex-col px-10 justify-center items-center mt-10">
        <p className="text-6xl">404 :(</p>
        <p className="text-lg">The page you're looking for doesn't exists.</p>
        <Button
          classNames="mt-6"
          color="dark"
          size="large"
          onClick={() => router.push("/")}
        >
          Go Home
        </Button>
      </div>
    </AuthLayout>
  );
};

export default NotFound;
