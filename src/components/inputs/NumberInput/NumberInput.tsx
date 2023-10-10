import { useState } from "react";
import PeopleIcon from "../../../assets/icon-person.svg";

type NumberInputProps = {
  label?: string;
  name: string;
  state: number;
  setState: React.Dispatch<React.SetStateAction<number>>;
};

const NumberInput = ({ name, label, state, setState }: NumberInputProps) => {
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (isNaN(parseInt(newValue)) || !parseInt(newValue)) {
      setState(0);
      setError("Can't be 0");
    } else {
      setState(parseInt(newValue));
      setError("");
    }
  };

  return (
    <div className="flex flex-col gap-2 py-4">
      {label && (
        <label className="text-pest-500" htmlFor={name}>
          {" "}
          {label}
        </label>
      )}
      <div className="relative">
        <img
          className="absolute top-1/2 -translate-y-1/2 left-4"
          src={PeopleIcon}
          alt=""
        />
        <input
          className="w-full outline-none border-2 border-transparent focus:border-2 focus:border-pest-450 bg-pest-200 p-2 rounded-[5px] text-right text-2xl text-pest-600 accent-pest-450 h-12 transition-colors duration-200"
          type="text"
          id={name}
          onChange={handleChange}
          value={state === 0 ? "" : state}
          placeholder="0"
        />
        {error && (
          <p className="text-xs text-red-400 absolute -bottom-4 right-1">
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default NumberInput;
