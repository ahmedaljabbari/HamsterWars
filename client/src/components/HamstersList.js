import React, { Component} from "react";
import {Container, ListGroup, ListGroupItem, Button} from "reactstrap";
import { v4 as uuid } from 'uuid';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../App.css";

class HamsterList extends Component{
  state = {
    hamsters: [
      {id: uuid(), name: "Hakmook"},
      {id: uuid(), name: "Toto"},
      {id: uuid(), name: "Kitty"},
      {id: uuid(), name: "Sameer"},
      {id: uuid(), name: "Misho"},
    ]
  }

  render() {
    let hamsters = this.state.hamsters;
    return(
      <Container>
        <h2>Hamster List</h2>
        <Button color="dark" style={{margin: "30px 0" }}
          onClick={()=> {
            const name = prompt("Add New Item");
            if(name){
              this.setState({
                hamsters: [...this.state.hamsters, {id: uuid(), name: name}]
              })
            }

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
                    onClick={() =>
                      this.setState({
                        hamsters: this.state.hamsters.filter(item => item.id !== hamster.id)
                      })
                    }
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

export default HamsterList;