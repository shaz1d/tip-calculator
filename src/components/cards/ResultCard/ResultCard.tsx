type ResultCardProps = {
  tip: number;
  bill: number;
  reset: () => void;
};
const ResultCard = ({ tip, bill, reset }: ResultCardProps) => {
  return (
    <div className="w-full min-h-full flex flex-col justify-between gap-14 bg-pest-600 text-white rounded-[15px] p-10">
      <div className="flex flex-col gap-14">
        <div className="flex items-center justify-between gap-2">
          <div>
            <h2 className="text-base">Tip Amount</h2>
            <span className="text-sm text-pest-400">/ person</span>
          </div>
          <h2 className="text-5xl text-pest-550">${tip}</h2>
        </div>
        <div className="flex items-center justify-between gap-2">
          <div>
            <h2 className="text-base">Total</h2>
            <span className="text-sm text-pest-400">/ person</span>
          </div>
          <h2 className="text-5xl text-pest-550">${bill}</h2>
        </div>
      </div>

      <button
        onClick={reset}
        className="w-full h-12 bg-pest-550 text-pest-600 rounded-[5px] text-[20px] hover:bg-pest-450 transition-colors duration-200"
      >
        Reset
      </button>
    </div>
  );
};

export default ResultCard;
