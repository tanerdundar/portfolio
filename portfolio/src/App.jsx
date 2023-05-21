import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Middle from "./components/Middle";

function App() {
  return (
    <div className="app">
      <Header />
      <Middle />
    </div>
  );
}

export default App;
