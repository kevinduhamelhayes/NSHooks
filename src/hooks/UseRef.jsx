import { useRef } from "react"
import "./App.css"
const App = () => {
  const ref = useRef()
const click = () => {
  console.log(ref.current)
}
  return (
    <div onClick={click} ref={ref}>lala</div>
  )
}


export default App