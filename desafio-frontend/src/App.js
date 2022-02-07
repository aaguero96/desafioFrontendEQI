import InputCurrency from "./Components/InputCurrency";

function App() {
  return (
    <>
      <h1>Simulador de Investimentos</h1>
      <InputCurrency name={ "Aporte Inicial" }/>
      <InputCurrency name={ "Aporte Mensal" }/>
    </>
  );
}

export default App;
