import React, { useState } from "react";
import { useField } from "formik";
import TermsAndCondition from "./TermsAndCondition";

function CustomCheckbox({ ...props }) {
  const [field, meta] = useField(props);
  const [btnClick, setBtnClick] = useState(false);

  const buttonHandler = () => {
    setBtnClick(!btnClick);
  };

  return (
    <div className="relative">
      {btnClick && (
        <div
          className="fixed top-0 left-0 right-0 z-50 
        w-full p-4 md:inset-0 max-h-full
        modal-container flex justify-center items-center"
        >
          <div
            className="relative mx-auto overflow-x overflow-y-auto bg-white h-5/6 w-fit rounded-xl
          py-20 px-20"
          >
            <a
              className="text-gray-800 font-bold text-xl
              absolute right-4 top-4 hover:cursor-pointer"
              onClick={buttonHandler}
            >
              x
            </a>
            <div className="max-w-lg">
              <TermsAndCondition />
            </div>
          </div>
        </div>
      )}
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            {...field}
            {...props}
            className="w-4 h-4 border border-gray-300 rounded 
          bg-gray-50 focus:ring-3 focus:ring-teal-300 
          dark:bg-gray-700 dark:border-gray-600 
          dark:focus:ring-teal-600 dark:ring-offset-gray-800"
          />
        </div>
        <div className="ml-3 text-sm">
          <label
            htmlFor="terms"
            className="font-light text-gray-500 dark:text-gray-300"
          >
            I accept the{" "}
            <a
              className="font-medium text-teal-600 hover:underline 
              dark:text-teal-500"
              onClick={buttonHandler}
            >
              Terms and Conditions
            </a>
          </label>
        </div>
      </div>
      {meta.touched && meta.error && (
        <div className=" text-red-600 text-xs absolute font-semibold block">
          {meta.error}
        </div>
      )}
    </div>
  );
}

export default CustomCheckbox;
