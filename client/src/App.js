import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./components/AppNavbar";
import {Provider} from 'react-redux';
import {Container /*, ListGroup, ListGroupItem, Button*/} from "reactstrap";
import Uniqe from "./components/uniqeHamster";

import Store from "./store";
//import { useState } from "react";
import HamsterList from "./components/HamstersList";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";


function App() {
  return (
    <Router>
      <Provider store={Store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <Route path="/" component={HamsterList} exact ></Route>
            <Route path="/api/hamsters/:id" component={Uniqe} exact ></Route>
          </Container>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
