import React, { useState } from "react";
import "./App.css";

const BottomRow = () => {
  const [downValue, setDownValue] = useState(3);
  const [toGoValue, setToGoValue] = useState(7);
  const [ballOnValue, setBallOnValue] = useState(21);

  const downValueChange = () => {
    setDownValue(downValue + 1);
    setToGoValue(toGoValue - 1);
  }

  const ballOnIncrement = () => {
    setBallOnValue(ballOnValue + 1);
  }

  const ballOnDecrement = () => {
    setBallOnValue(ballOnValue - 1);
  }


  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{downValue}</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">{toGoValue}</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">{ballOnValue}</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">4</div>
      </div>
      <div>
        <button onClick={downValueChange}>Match +</button>
        <button onClick={ballOnIncrement}>Ball +</button>
        <button onClick={ballOnDecrement}>Ball -</button>
      </div>
    </div>
    
    
  );
};

export default BottomRow;
