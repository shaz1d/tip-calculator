import ContainerCard from "./components/cards/ContainerCard";

function App() {
  return (
    <div className="w-full min-h-screen bg-pest-300 flex flex-col justify-center items-center">
      <h1 className="uppercase text-2xl text-center font-bold text-pest-600 tracking-[10px] mb-10">
        Spli
        <br />
        tter
      </h1>
      <ContainerCard />
    </div>
  );
}

export default App;
