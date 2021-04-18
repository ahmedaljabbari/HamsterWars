import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./components/AppNavbar";
import {Provider} from 'react-redux';
import Store from "./store";
//import { useState } from "react";
import HamsterList from "./components/HamstersList";

function App() {
  return (
    <Provider store={Store}>
    <div className="App">
      <AppNavbar />
      <HamsterList />
    </div>
    </Provider>
  );
}

export default App;
