import "./App.css"
import { useState } from "react"

const App = () => {
  const [value, setValue] = useState("")
  const handleChange = (e) => {
    setValue(e.target.value)
  }
  console.log(value)

  return (
    <div>
      {value.length > 5 ? <p>El valor es mayor a 5</p> : null}
      <input
        type="text"
        name="normal"
        id=""
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}

export default App
