import useCount from "./hooks/useCount"
import "./App.css"
import { useEffect } from "react"

//const MiComponente = ({miProp}) => {
//return (
// <div>
// nombre: {miProp}
//</div>
//)
//}

//function App() {
//return (
//<MiComponente miProp={"mi nombre"} />
//)
//}
const Intervalo = ({count}) => {
  useEffect(() => {
    const i = setInterval(() => console.log(count), 1000)
    return () => { clearInterval(i)
    }
  }, [count])
  return <div>Intervalo</div>
}


const App = () => {
  const { count, incrementar } = useCount(0)
  useEffect(() => {
    document.title = `contador: ${count}`
  }, [count])
  return (
    <div>
      contador: {count}
      <button onClick={incrementar}>incrementar</button>
      <Intervalo count={count} />
    </div>
  )
}

export default App