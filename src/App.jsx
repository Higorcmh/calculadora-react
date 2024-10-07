import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <form>
        <label class="numero">
          Primeiro número:
          <input type="text" />
        </label>
        <br />
        <select name="operacoes" required="required">
          <option value="">Escolha à operação</option>
          <option value="soma">Soma</option>
          <option value="subtacao">Subtração</option>
          <option value="multiplicacao">Multiplicação</option>
          <option value="divisao">Divisão</option>
        </select>
        <br />
        <label class="numero">
          Segundo número:
          <input type="text" />
        </label>
      </form>
    </>
  );
}
const calculadora = () => ({});
export default App;
