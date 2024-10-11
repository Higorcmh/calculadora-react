import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <input type="number" id="value1" placeholder="Valor 1" />
      <input type="number" id="value2" placeholder="Valor 2" />
      <select id="operation">
        <option value="add">Soma</option>
        <option value="subtract">Subtração</option>
        <option value="multiply">Multiplicação</option>
        <option value="divide">Divisão</option>
      </select>
      <button onClick={calculate}>Calcular</button>
      <div id="history">Histórico:</div>
    </>
  );
}
{
  /* const calculadora = () => ({}); */
}
let calculations = [];

function calculate() {
  const value1 = parseFloat(document.getElementById("value1").value);
  const value2 = parseFloat(document.getElementById("value2").value);
  const operation = document.getElementById("operation").value;
  let result;

  switch (operation) {
    case "add":
      result = value1 + value2;
      break;
    case "subtract":
      result = value1 - value2;
      break;
    case "multiply":
      result = value1 * value2;
      break;
    case "divide":
      result = value1 / value2;
      break;
    default:
      result = "Operação inválida";
  }

  alert("Resultado: " + result);

  const calcString = `${value1} ${getOperationSymbol(
    operation
  )} ${value2} = ${result}`;
  if (calculations.length >= 5) {
    calculations.shift();
  }
  calculations.push(calcString);

  displayHistory();
}

function getOperationSymbol(operation) {
  switch (operation) {
    case "add":
      return "+";
    case "subtract":
      return "-";
    case "multiply":
      return "*";
    case "divide":
      return "/";
    default:
      return "";
  }
}

function displayHistory() {
  const historyDiv = document.getElementById("history");
  historyDiv.innerHTML = "Histórico:<br>" + calculations.join("<br>");
}
export default App;
