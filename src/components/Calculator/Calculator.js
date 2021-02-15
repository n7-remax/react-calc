import React, { useState } from "react";

const Calculator = () => {
  const [value, setValue] = useState("");
  const [operationDone, setOperationDone] = useState(false);
  const [calcError, setCalcError] = useState(false);

  const removeLastAction = () => {
    const currentValue = value;
    setValue(currentValue.substring(0, currentValue.length - 1));
  };
  const getResult = () => {
    try {
      const currentValue = eval(value);

      if (isNaN(currentValue)) {
        throw new Error();
      }
      setValue(currentValue.toString());
    } catch (error) {
      setValue("Error");
      setCalcError(true);
      setTimeout(() => {
        setValue("");
        setCalcError(false);
      }, 1000);
      return;
    }

    setOperationDone(true);
  };
  const setCalculatorValue = (e) => {
    if (operationDone && Number.isInteger(+e.target.value)) {
      setValue(e.target.value);
      setOperationDone(false);
      return;
    }
    if (operationDone) {
      setOperationDone(false);
    }
    setValue((prevState) => prevState + e.target.value);
  };
  console.log(typeof value);
  return (
    <div className="calculator">
      <div className="container">
        <div className="calculator-result">
          <span className="calculator-result-span">{value}</span>
        </div>
        <div className="calculator-buttons">
          <button
            className="btn"
            type="button"
            disabled={calcError}
            onClick={() => setValue("")}
          >
            AC
          </button>
          <button
            className="btn"
            type="button"
            disabled={calcError}
            onClick={removeLastAction}
          >
            &#9003;
          </button>
          <button
            className="btn"
            type="button"
            value="%"
            disabled={calcError}
            // onClick={(e) => setValue((prevState) => prevState + e.target.value)}
          >
            %
          </button>
          <button
            className="btn btn-action"
            type="button"
            value="/"
            disabled={calcError}
            onClick={setCalculatorValue}
          >
            /
          </button>

          <button
            className="btn"
            type="button"
            value="7"
            disabled={calcError}
            onClick={setCalculatorValue}
          >
            7
          </button>
          <button
            className="btn"
            type="button"
            value="8"
            disabled={calcError}
            onClick={setCalculatorValue}
          >
            8
          </button>
          <button
            className="btn"
            type="button"
            value="9"
            disabled={calcError}
            onClick={setCalculatorValue}
          >
            9
          </button>
          <button
            className="btn btn-action"
            type="button"
            value="*"
            disabled={calcError}
            onClick={setCalculatorValue}
          >
            *
          </button>

          <button
            className="btn"
            type="button"
            value="4"
            disabled={calcError}
            onClick={setCalculatorValue}
          >
            4
          </button>
          <button
            className="btn"
            type="button"
            value="5"
            disabled={calcError}
            onClick={setCalculatorValue}
          >
            5
          </button>
          <button
            className="btn"
            type="button"
            value="6"
            disabled={calcError}
            onClick={setCalculatorValue}
          >
            6
          </button>
          <button
            className="btn btn-action"
            type="button"
            value="-"
            disabled={calcError}
            onClick={setCalculatorValue}
          >
            -
          </button>

          <button
            className="btn"
            type="button"
            value="1"
            disabled={calcError}
            onClick={setCalculatorValue}
          >
            1
          </button>
          <button
            className="btn"
            type="button"
            value="2"
            disabled={calcError}
            onClick={setCalculatorValue}
          >
            2
          </button>
          <button
            className="btn"
            type="button"
            value="3"
            disabled={calcError}
            onClick={setCalculatorValue}
          >
            3
          </button>
          <button
            className="btn btn-action"
            type="button"
            value="+"
            disabled={calcError}
            onClick={setCalculatorValue}
          >
            +
          </button>

          <button
            className="btn"
            type="button"
            value="."
            disabled={calcError}
            onClick={setCalculatorValue}
          >
            .
          </button>
          <button
            className="btn"
            type="button"
            value="0"
            disabled={calcError}
            onClick={setCalculatorValue}
          >
            0
          </button>
          <button
            className="btn btn-equally"
            type="button"
            disabled={calcError}
            onClick={getResult}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
