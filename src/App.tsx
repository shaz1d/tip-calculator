import { useState } from "react";
import NumberInput from "./components/inputs/NumberInput";
import CurrencyInput from "./components/inputs/CurrencyInput";

function App() {
  const [totalBill, setTotalBill] = useState("");
  const [totalPeople, setTotalPeople] = useState(0);
  return (
    <div className="w-full min-h-screen bg-pest-300 flex flex-col justify-center items-center">
      <h1 className="uppercase text-2xl text-center font-bold text-pest-600 tracking-[10px] mb-10">
        Spli
        <br />
        tter
      </h1>

      <div className="w-full mx-auto max-w-4xl p-5 bg-white rounded-3xl shadow-2xl grid grid-cols-2">
        <div className="p-4">
          <CurrencyInput
            label="Bill"
            name="bill"
            state={totalBill}
            setState={setTotalBill}
          />
          <div className="grid grid-cols-3 gap-4"></div>
          <NumberInput
            label="Number of People"
            name="people"
            state={totalPeople}
            setState={setTotalPeople}
          />
        </div>
        <div>result</div>
      </div>
    </div>
  );
}

export default App;
