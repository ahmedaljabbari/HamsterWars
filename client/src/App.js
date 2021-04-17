import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./components/AppNavbar";
import { useState } from "react";
import HamsterList from "./components/HamstersList";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <HamsterList />
    </div>
  );
}

export default App;
