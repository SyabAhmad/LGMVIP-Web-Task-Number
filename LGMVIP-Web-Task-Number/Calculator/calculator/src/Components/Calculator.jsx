import React, { useState } from "react";
import "../Style/Calculator.css";
import * as math from "mathjs";
const Calculator = () => {
  const [resultValue, setResultvalue] = useState("0");
  const clearAll = () => {
    setResultvalue("0");
  };
  const result = () => {
    try {
      const resultExpression = math.evaluate(resultValue);
      setResultvalue(String(resultExpression));
    } catch (error) {
      setResultvalue("Error: ", error);
    }
  };
  const handleButtonClick = (value) => {
    setResultvalue((prev) => {
      return prev === "0" ? String(value) : prev + value;
    });
  };
  return (
    <div className="container">
      <div className="innerContainer">
        <h2>Calculator</h2>
        <div className="display">
          <input type="text" readOnly value={resultValue} />
        </div>
        <div className="buttonsAndAllThat">
          <div className="buttons">
            <button onClick={() => handleButtonClick("1")}>1</button>
            <button onClick={() => handleButtonClick("2")}>2</button>
            <button onClick={() => handleButtonClick("3")}>3</button>
            <button onClick={clearAll}>AC</button>
          </div>
          <div className="buttons">
            <button onClick={() => handleButtonClick("4")}>4</button>
            <button onClick={() => handleButtonClick("5")}>5</button>
            <button onClick={() => handleButtonClick("6")}>6</button>
            <button onClick={() => handleButtonClick("-")}>- </button>
          </div>
          <div className="buttons">
            <button onClick={() => handleButtonClick("7")}>7</button>
            <button onClick={() => handleButtonClick("8")}>8</button>
            <button onClick={() => handleButtonClick("9")}>9</button>

            <button onClick={() => handleButtonClick("+")}>+</button>
          </div>
          <div className="buttons">
            <button onClick={() => handleButtonClick("00")}>00</button>
            <button onClick={() => handleButtonClick("0")}>0</button>
            <button onClick={() => handleButtonClick("*")}>*</button>

            <button onClick={() => handleButtonClick("%")}>%</button>
          </div>
          <div className="buttons">
            <button onClick={() => handleButtonClick("000")}>000</button>
            <button onClick={() => handleButtonClick(".")}>.</button>
            <button onClick={() => handleButtonClick("/")}>/</button>
            <button onClick={() => handleButtonClick("^")}>^</button>
          </div>
          <div className="buttons">
            <button onClick={result}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
