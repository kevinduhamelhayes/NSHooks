import { useReducer } from "react";

// const state = {count: 0}
// action = {type: "incrementar"} || {type: "decrementar"} || {type: "reset"} || {type: "cualquier cosa"}
// const reducer = (state, action) => { action siempre debe tener una accion de tipo string}
const reducer = (state, action) => {
  switch (action.type) {
    case "incrementar":
      return { count: state.count + 1 };
    case "decrementar":
      return { count: state.count - 1 };
    default:
      return state;
  }
}
