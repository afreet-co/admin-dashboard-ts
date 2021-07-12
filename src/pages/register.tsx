import React from "react";
import { AuthLayout } from "../layouts/AuthLayout";
const Register = () => {
  return (
    <AuthLayout>
      <div className="w-full lg:w-4/12 px-4">
        <div
          className={`relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-light-200 dark:bg-dark-600  border-0`}
        >
          <div className="mb-0 p-6">
            <div
              className={`block uppercase text-dark-800 dark:text-light-500 text-lg font-bold text-center`}
            >
              Register
            </div>
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form>
              <div className="relative w-full mb-3">
                <label
                  className={`block uppercase text-dark-700 dark:text-light-400 text-xs font-bold mb-2`}
                  htmlFor="grid-password"
                >
                  Name
                </label>
                <input
                  type="email"
                  className={`border-0 px-3 py-3 placeholder-dark-600 dark:placeholder-light-300 text-dark-700 dark:text-light-400 bg-light-300 dark:bg-dark-700 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150`}
                  placeholder="Name"
                />
              </div>

              <div className="relative w-full mb-3">
                <label
                  className={`block uppercase text-dark-700 dark:text-light-400 text-xs font-bold mb-2`}
                  htmlFor="grid-password"
                >
                  Email
                </label>
                <input
                  type="email"
                  className={`border-0 px-3 py-3 placeholder-dark-600 dark:placeholder-light-300 text-dark-700 dark:text-light-400 bg-light-300 dark:bg-dark-700 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150`}
                  placeholder="Email"
                />
              </div>

              <div className="relative w-full mb-3">
                <label
                  className={`block uppercase text-dark-700 dark:text-light-400 text-xs font-bold mb-2`}
                  htmlFor="grid-password"
                >
                  Password
                </label>
                <input
                  type="password"
                  className={`border-0 px-3 py-3 placeholder-dark-600 dark:placeholder-light-300 text-dark-700 dark:text-light-400 bg-light-300 dark:bg-dark-700 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150`}
                  placeholder="Password"
                />
              </div>

              <div>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    id="customCheckLogin"
                    type="checkbox"
                    className={`form-checkbox border-0 rounded text-dark-700 dark:text-light-400 ml-1 w-5 h-5 ease-linear transition-all duration-150`}
                  />
                  <span
                    className={`ml-2 text-sm font-semibold text-dark-700 dark:text-light-400`}
                  >
                    I agree with the{" "}
                    <a
                      href="#pablo"
                      className={`text-dark-800 dark:text-light-500`}
                      onClick={(e) => e.preventDefault()}
                    >
                      Privacy Policy
                    </a>
                  </span>
                </label>
              </div>

              <div className="text-center mt-6">
                <button
                  className={`dark:bg-dark-800 bg-light-500 text-dark-700 dark:text-light-400 dark:active:bg-dark-800 active:bg-light-500 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150`}
                  type="button"
                >
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Register;
