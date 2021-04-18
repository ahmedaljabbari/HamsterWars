import { createStore } from "redux";
import { v4 as uuid } from 'uuid';

const reducers = (state, action) => {
  switch (action.type) {
    case "GET_HAMSTERS":
      return {
        hamsters: state.hamsters
      }
  
    default:
      return state;
  }
}

const initialState = {
  counter: 22,
  hamsters: [
    {id: uuid(), name: "Hakmook"},
    {id: uuid(), name: "Toto"},
    {id: uuid(), name: "Kitty"},
    {id: uuid(), name: "Sameer"},
    {id: uuid(), name: "Misho"},
  ]
}

export default createStore(reducers, initialState)