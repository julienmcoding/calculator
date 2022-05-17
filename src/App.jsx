import { useState } from "react";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "+", "-", "."];

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const deleteLast = () => {
    if (calc === "") {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  };

  const reset = () => {
    setCalc("");
    setResult("");
  }

  return (
    <div className="App">
      <h1>React Calculator</h1>
      <div className="calculator">
        <div className="screen">
          {result ? <span>({result})</span> : ""}&nbsp;
          {calc || "0"}
        </div>

        <div className="interface">
          <div className="row3">
            <button className="grey" onClick={reset}>
              AC
            </button>

            <button className="grey" onClick={deleteLast}>
              DEL
            </button>

            <button className="operators" onClick={() => updateCalc("/")}>
              /
            </button>
          </div>

          <div className="row4">
            <button className="digits" onClick={() => updateCalc("1")}>
              1
            </button>
            <button className="digits" onClick={() => updateCalc("2")}>
              2
            </button>
            <button className="digits" onClick={() => updateCalc("3")}>
              3
            </button>

            <button className="operators" onClick={() => updateCalc("*")}>
              *
            </button>
          </div>
          <div className="row4">
            <button className="digits" onClick={() => updateCalc("4")}>
              4
            </button>
            <button className="digits" onClick={() => updateCalc("5")}>
              5
            </button>
            <button className="digits" onClick={() => updateCalc("6")}>
              6
            </button>

            <button className="operators" onClick={() => updateCalc("+")}>
              +
            </button>
          </div>

          <div className="row4">
            <button className="digits" onClick={() => updateCalc("7")}>
              7
            </button>
            <button className="digits" onClick={() => updateCalc("8")}>
              8
            </button>
            <button className="digits" onClick={() => updateCalc("9")}>
              9
            </button>

            <button className="operators" onClick={() => updateCalc("-")}>
              -
            </button>
          </div>

          <div className="row3">
            <button className="digits" onClick={() => updateCalc("0")}>0</button>
            <button className="digits" onClick={() => updateCalc(".")}>.</button>
            <button className="operators" onClick={calculate}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
