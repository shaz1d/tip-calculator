type TipPercentInputProps = {
  value: number;
  state: number;
  setState: React.Dispatch<React.SetStateAction<number>>;
  setCustomPersent: React.Dispatch<React.SetStateAction<string>>;
};

const TipPercentInput = ({
  value,
  state,
  setState,
  setCustomPersent,
}: TipPercentInputProps) => {
  const handleClick = () => {
    if (value !== state) {
      setState(value);
    }
    setCustomPersent("");
  };
  return (
    <button
      onClick={handleClick}
      className={`h-12 rounded-[5px] text-2xl flex justify-center items-center hover:bg-pest-450 hover:text-pest-600 transition duration-200 ${
        value === state
          ? "bg-pest-450 text-[#00474B]"
          : "bg-pest-600  text-white"
      }`}
    >
      {value}%
    </button>
  );
};

export default TipPercentInput;
