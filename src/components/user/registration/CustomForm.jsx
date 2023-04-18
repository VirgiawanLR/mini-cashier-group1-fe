import React from "react";
import { useField } from "formik";

function CustomForm({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="relative">
      <div className="relative" data-te-input-wrapper-init>
        <input
          {...field}
          {...props}
          className={
            meta.touched && meta.error
              ? " placeholder:text-sm text-sm placeholder-red-400 bg-red-50 border-2" +
                " border-red-500 text-red-900 h-10 my-8 tracking-wider" +
                " sm:text-sm rounded-full shadow-xl focus:ring-red-600 focus:border-red-600 block w-full" +
                " px-3 dark:bg-gray-700 dark:border-2 dark:border-red-600 dark:placeholder-gray-400" +
                " dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" +
                "  placeholder:tracking-widest tracking-widest"
              : " placeholder:text-sm text-sm bg-gray-50 border border-gray-300 text-gray-900" +
                " sm:text-sm rounded-full shadow-xl h-10 my-8 tracking-wider" +
                " focus:ring-light focus:border-light block w-full px-3 dark:bg-gray-700" +
                " dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" +
                " dark:focus:ring-primary dark:focus:border-primary" +
                "  placeholder:tracking-widest tracking-widest"
          }
        />
      </div>
      {meta.touched && meta.error && (
        <div className="absolute tracking-wider text-red-600 text-xs left-3 top-12 pt-1 font-normal">
          {meta.error}
        </div>
      )}
    </div>
  );
}

export default CustomForm;