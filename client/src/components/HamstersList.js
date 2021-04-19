import React, { Component} from "react";
import {ListGroup, ListGroupItem, Button} from "reactstrap";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../App.css";
import { connect } from "react-redux";
import axios from "axios";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";


class HamsterList extends Component{

  componentDidMount(){
    this.props.getItems();
  }

 
  render() {
    let hamsters = this.props.hamsters;
    return(
      <div>
        <h2>Hamster List</h2>

        <Button color="dark" style={{margin: "30px 0" }}
          onClick={()=> {
            const name = prompt("Add New Item")
          }}
        >Add New Hamster</Button>

        <ListGroup>
          <TransitionGroup>
            {hamsters.map(hamster => {
              return (<CSSTransition key={hamster.id} classNames="fade" timeout={500}>
                <ListGroupItem className="Listo" style={{display: "flex"}} tag="a" href={'/api/hamsters/'+hamster._id} action>
                  <span>{hamster.name}</span>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                  >
                    &times;
                  </Button>
                </ListGroupItem>
              </CSSTransition>)
            })}
          </TransitionGroup>
        </ListGroup>

        <h1>{this.props.counter}</h1>
        <button onClick={this.props.increase}>+</button>
        <button onClick={this.props.decrease}>-</button>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    hamsters: state.hamsters
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getItems: () => {
        {axios.get('/api/hamsters')
          .then(res => {
            dispatch({
              type: "GET_HAMSTERS",
              payload: res.data
            })
            console.log("_________________________________________________", res.data);
          })}
      },
    increase: () => {dispatch({type: "INCREASE"})},
    decrease: () => {dispatch({type: "DECREASE"})},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HamsterList);