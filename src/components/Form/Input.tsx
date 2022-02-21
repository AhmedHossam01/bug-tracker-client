import { FC, forwardRef } from "react";
import { FieldError } from "react-hook-form";

const Input: FC<{
  name: string;
  placeholder: string;
  type: string;
  label: string;
  error?: FieldError | undefined;
}> = forwardRef(({ type, name, placeholder, label, error, ...rest }) => {
  const className =
    "w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border-2 focus:border-blue-500 focus:bg-white focus:outline-none";
  const errClassName =
    "w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border-2 focus:border-blue-500 focus:bg-white focus:outline-none border-red-500 focus:border-red-500";

  return (
    <div>
      <label className="block text-gray-700" htmlFor={name}>
        {label}
      </label>

      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className={error ? errClassName : className}
        {...rest}
      />

      {error && <p className="text-red-500 mt-1">{error.message}</p>}
    </div>
  );
});

export default Input;
