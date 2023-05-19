import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div>
      <input type="number" value={inputValue}></input>
      <div className="result"></div>
    </div>
  );
}

export default App;
