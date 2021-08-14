import React from "react";
import Link from "next/link";
import { AuthLayout } from "../layouts/AuthLayout";
const Login = () => {
  return (
    <AuthLayout>
      <div className="w-full lg:w-4/12 px-4">
        <div
          className={`relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-light-400 dark:bg-dark-600  border-0`}
        >
          <div className="mb-0 p-6">
            <div
              className={`block uppercase text-dark-500 dark:text-light-400 text-lg font-bold text-center`}
            >
              Login
            </div>
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form>
              <div className="relative w-full mb-3">
                <label
                  className={`block uppercase text-dark-500 dark:text-light-400 text-xs font-bold mb-2`}
                  htmlFor="grid-password"
                >
                  Email
                </label>
                <input
                  type="email"
                  className={`border-0 px-3 py-3 placeholder-dark-300 dark:placeholder-light-300 text-dark-500 dark:text-light-400 bg-light-300 dark:bg-dark-500 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150`}
                  placeholder="Email"
                />
              </div>

              <div className="relative w-full mb-3">
                <label
                  className={`block uppercase text-dark-500 dark:text-light-400 text-xs font-bold mb-2`}
                  htmlFor="grid-password"
                >
                  Password
                </label>
                <input
                  type="password"
                  className={`border-0 px-3 py-3 placeholder-dark-300 dark:placeholder-light-300 text-dark-500 dark:text-light-400 bg-light-300 dark:bg-dark-500 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150`}
                  placeholder="Password"
                />
              </div>
              <div>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    id="customCheckLogin"
                    type="checkbox"
                    className={`form-checkbox border-0 rounded text-dark-600 dark:text-light-400 ml-1 w-5 h-5 ease-linear transition-all duration-150`}
                  />
                  <span
                    className={`ml-2 text-sm font-semibold text-dark-500 dark:text-light-400`}
                  >
                    Remember me
                  </span>
                </label>
              </div>

              <div className="text-center mt-6">
                <button
                  className={`dark:bg-dark-600 bg-light-500 text-dark-500 dark:text-light-400 dark:active:bg-dark-600 active:bg-light-500 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150`}
                  type="button"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex flex-wrap mt-6 relative">
          <div className="w-1/2">
            <a
              href="#pablo"
              onClick={(e) => e.preventDefault()}
              className={`text-dark-500 dark:text-light-400`}
            >
              <small>Forgot password?</small>
            </a>
          </div>
          <div className="w-1/2 text-right">
            <Link href="/register">
              <a href="#pablo" className={`text-dark-500 dark:text-light-400`}>
                <small>Create new account</small>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
