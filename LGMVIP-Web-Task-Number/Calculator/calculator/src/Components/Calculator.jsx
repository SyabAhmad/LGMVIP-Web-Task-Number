import React from "react";
import "../Style/Calculator.css";
const Calculator = () => {
  return (
    <div className="container">
      <div className="innerContainer">
        <div className="display">Display</div>
        <div className="buttonsAndAllThat">
          <div className="buttons">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>+</button>
          </div>
          <div className="buttons">
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>- </button>
          </div>
          <div className="buttons">
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>*</button>
          </div>
          <div className="buttons">
            <button>0</button>
            <button>00</button>
            <button>%</button>
            <button>/</button>
          </div>
          <div className="buttons">
            <button>=</button>
            <button>AC</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
