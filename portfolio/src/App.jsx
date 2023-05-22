import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Middle from "./components/Middle";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="app">
      <Header />
      <Middle />
      <Projects />
    </div>
  );
}

export default App;
