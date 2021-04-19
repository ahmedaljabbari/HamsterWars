import { createStore } from "redux";
import axios from "axios";
//import { v4 as uuid } from 'uuid';

const initialState = {
  counter: 22,
  hamsters: []
}

const reducers = (state, action) => {
  switch (action.type) {
    case "GET_HAMSTERS":
      
      return {
        ...state,
        hamsters: action.payload
      }

    case "INCREASE":
      return {
        ...state,
        counter: state.counter + 1
      }

    case "DECREASE":
    return {
      ...state,
      counter: state.counter - 1
    }
  
    default:
      return state;
  }
}

export default createStore(reducers, initialState)