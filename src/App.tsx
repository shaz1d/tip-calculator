import { useEffect, useState } from "react";
import NumberInput from "./components/inputs/NumberInput";
import CurrencyInput from "./components/inputs/CurrencyInput";
import TipPercentInput from "./components/inputs/TipPercentInput";
import ResultCard from "./components/cards/ResultCard";

function App() {
  const [totalBill, setTotalBill] = useState("");
  const [totalPeople, setTotalPeople] = useState(0);
  const [tipPercent, setTipPercent] = useState(0);
  const [tipCustomPercent, setTipCustomPercent] = useState("");

  const [perPersonTip, setPerPersonTip] = useState(0);
  const [perPersonBill, setPerPersonBill] = useState(0);

  const calculate = () => {
    const bill = parseFloat(totalBill) || 0;
    const people = totalPeople > 0 ? totalPeople : 1;
    const tip = parseFloat(tipCustomPercent) || tipPercent;
    const totalTip = (tip / 100) * bill;
    const perTip = parseFloat((totalTip / people).toFixed(2));
    const perBill = parseFloat((bill / people + perTip).toFixed(2));
    setPerPersonTip(perTip);
    setPerPersonBill(perBill);
  };

  const reset = () => {
    setTotalBill("");
    setTipCustomPercent("");
    setTotalPeople(0);
    setTipPercent(0);
    setPerPersonTip(0);
    setPerPersonBill(0);
  };
  useEffect(() => {
    calculate();

    return () => {
      calculate();
    };
  }, [totalBill, totalPeople, tipCustomPercent, tipPercent]);

  return (
    <div className="w-full min-h-screen bg-pest-300 py-5 flex flex-col justify-center items-center">
      <h1 className="uppercase text-2xl text-center font-bold text-pest-600 tracking-[10px] mb-10">
        Spli
        <br />
        tter
      </h1>

      <div className="w-full mx-auto max-w-4xl p-6 sm:p-8 bg-white rounded-3xl shadow-2xl grid md:grid-cols-2 gap-8">
        <div className="px-2 sm:px-4 py-0">
          <CurrencyInput
            label="Bill"
            name="bill"
            state={totalBill}
            setState={setTotalBill}
          />
          <div className="flex flex-col gap-[14px] py-1">
            <label className="text-pest-500">Select Tip %</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <TipPercentInput
                value={5}
                state={tipPercent}
                setState={setTipPercent}
                setCustomPersent={setTipCustomPercent}
              />
              <TipPercentInput
                value={10}
                state={tipPercent}
                setState={setTipPercent}
                setCustomPersent={setTipCustomPercent}
              />
              <TipPercentInput
                value={15}
                state={tipPercent}
                setState={setTipPercent}
                setCustomPersent={setTipCustomPercent}
              />
              <TipPercentInput
                value={25}
                state={tipPercent}
                setState={setTipPercent}
                setCustomPersent={setTipCustomPercent}
              />
              <TipPercentInput
                value={50}
                state={tipPercent}
                setState={setTipPercent}
                setCustomPersent={setTipCustomPercent}
              />
              <CurrencyInput
                name="custom-percent-input"
                state={tipCustomPercent}
                setState={setTipCustomPercent}
                setPercentInput={setTipPercent}
              />
            </div>
          </div>

          <NumberInput
            label="Number of People"
            name="people"
            state={totalPeople}
            setState={setTotalPeople}
          />
        </div>
        <ResultCard tip={perPersonTip} bill={perPersonBill} reset={reset} />
      </div>
    </div>
  );
}

export default App;
