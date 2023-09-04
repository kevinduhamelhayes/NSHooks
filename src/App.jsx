import "./App.css"
import { useState } from "react"

const App = () => {
  const [value, setValue] = useState({ normal: "", texto: "", select: "" })
  const handleChange = (e) => {
    console.log(e.target.name)
    setValue((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }))
  }
  console.log(value)

  return (
    <div>
      {value.length < 5 ? <span>logitud minima de 5 caracteres</span> : null}
      <input
        type="text"
        name="normal"
        value={value.normal}
        onChange={handleChange}
        placeholder="normal"
      />
      <textarea name="texto" onChange={handleChange} cols="30" rows="2" />
      <select name="select" value={value.select} onChange={handleChange} id="">
        <option value="">seleccione</option>
        <option value="chanchofeliz">chancho feliz</option>
        <option value="chanchotriste">chancho triste</option>
        <option value="chanchitofeliz">chanchito feliz</option>
        <option value="felipe">felipe</option>
      </select>
    </div>
  )
}

export default App
