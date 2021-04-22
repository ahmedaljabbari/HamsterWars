import { createStore } from "redux";

const initialState = {
  counter: 22,
  hamsters: [],
  loading: true
}

const reducers = (state, action) => {
  switch (action.type) {
    case "GET_HAMSTERS":
      
      return {
        ...state,
        loading: false,
        hamsters: action.payload,
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