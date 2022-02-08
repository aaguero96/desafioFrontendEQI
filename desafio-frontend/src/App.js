import InputCurrency from "./Components/InputCurrency";
import InputPercentage from "./Components/InputPercentage";

function App() {
  return (
    <>
      <h1>Simulador de Investimentos</h1>
      <InputCurrency name={ "Aporte Inicial" }/>
      <InputCurrency name={ "Aporte Mensal" }/>
      <InputPercentage name={ "Rentabilidade" }/>
      <InputPercentage name={ "IPCA (ao ano)" }/>
      <InputPercentage name={ "CDI (ao ano)" }/>
    </>
  );
}

export default App;
