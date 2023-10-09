import React from "react";
import DollarIcon from "../../../assets/icon-dollar.svg";
type CurrencyInputProps = {
  label?: string;
  name: string;
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
};
const CurrencyInput = ({
  name,
  label,
  state,
  setState,
}: CurrencyInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (/^-?\d*\.?\d*$/.test(e.target.value)) {
      setState(e.target.value);
    }
  };

  return (
    <div className="flex flex-col gap-1 py-4">
      {label && (
        <label className="text-pest-500" htmlFor={name}>
          {" "}
          {label}
        </label>
      )}
      <div className="relative">
        <img
          className="absolute top-1/2 -translate-y-1/2 left-4"
          src={DollarIcon}
          alt=""
        />
        <input
          className="w-full outline-none border-2 border-transparent focus:border-2 focus:border-pest-450 bg-pest-200 p-2 rounded-[5px] text-right text-2xl text-pest-600 accent-pest-450 h-12 transition-colors duration-200"
          type="text"
          id={name}
          onChange={handleChange}
          value={state === "0" ? "" : state}
          placeholder="0"
        />
      </div>
    </div>
  );
};

export default CurrencyInput;
