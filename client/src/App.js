import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./components/AppNavbar";
import {Provider} from 'react-redux';
import {Container /*, ListGroup, ListGroupItem, Button*/} from "reactstrap";
import Uniqe from "./components/uniqeHamster";
import Home from "./pages/home";
import Battle from "./pages/Battle";

import Store from "./store";
//import { useState } from "react";
//import HamsterList from "./components/HamstersList";
import {BrowserRouter as Router, Route} from "react-router-dom";


function App() {
  return (
    <Router>
      <Provider store={Store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <Route path="/" component={Home} exact ></Route>
            <Route path="/hamsters/:id" component={Uniqe} exact ></Route>
            <Route path="/battle" component={Battle} exact ></Route>
          </Container>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
