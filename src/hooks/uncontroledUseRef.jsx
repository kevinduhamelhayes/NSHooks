import "./App.css"
import { useRef } from "react"

const App = () => {
  const input = useRef()
  const file = useRef()

  const SubmitEvent = () => {
    console.log(input.current.value) // Corrected this line
    console.log(file.current.files[0].name)
    const form = new FormData()
    form.append("campo", input.current.value)
  }

  return (
    <div>
      <div>
        <span>lala</span>
        <input type="text" name="campo" ref={input} />
        <input type="file"  ref={file} />
      </div>
      <input type="submit" value="enviar" onClick={SubmitEvent} />
    </div>
  )
}

export default App
