import { useReducer } from "react"
import "./App.css"

// const state = {count: 0}
// action = {type: "incrementar"} || {type: "decrementar"} || {type: "reset"} || {type: "cualquier cosa"}
// const reducer = (state, action) => { action siempre debe tener una accion de tipo string}

const inicial = { count: 0 }

const reducer = (state, action) => {
  switch (action.type) {
    case "incrementar":
      return { count: state.count + 1 }
    case "decrementar":
      return { count: state.count - 1 }
    case "set":
      return { count: action.payload }
    default:
      return state
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, inicial)
  return (
    <div>
      <h1>Contador: {state.count}</h1>
      <button onClick={() => dispatch({ type: "incrementar" })}>
        Incrementar
      </button>
      <button onClick={() => dispatch({ type: "decrementar" })}>
        Decrementar
      </button>
      <button onClick={() => dispatch({ type: "set", payload: 0 })}>
        Set
      </button>
    </div>
  )
}

export default App