import React, { Component} from "react";
import {Container, ListGroup, ListGroupItem, Button} from "reactstrap";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../App.css";
import { connect } from "react-redux";

class HamsterList extends Component{

  render() {
    let hamsters = this.props.hamsters;
    return(
      <Container>
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
                <ListGroupItem className="Listo" style={{display: "flex"}} tag="a" href="#" action>
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
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    hamsters: state.hamsters
  }
}

export default connect(mapStateToProps)(HamsterList);