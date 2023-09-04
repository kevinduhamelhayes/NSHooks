import "./App.css"
import { useState } from "react"

const App = () => {
  const [value, setValue] = useState({
    normal: "",
    texto: "",
    select: "",
    check: false,
    estado: "feliz",
  })
  const handleChange = ({ target }) => {
    console.log(target.name)
    setValue((state) => ({
      ...state,
      [target.name]: target.type === "checkbox" ? target.checked : target.value,
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

      <input
        type="checkbox"
        name="check"
        onChange={handleChange}
        checked={value.check}
      />

      <div>
        <label htmlFor="">chancho</label>
        <input
          onChange={handleChange}
          type="radio"
          value="feliz"
          name="estado"
          checked={value.estado === "feliz"}
        />{" "}
        feliz
        <input
          onChange={handleChange}
          type="radio"
          value="triste"
          name="estado"
          checked={value.estado === "triste"}
        />{" "}
        triste
        <input
          onChange={handleChange}
          type="radio"
          value="felipe"
          name="estado"
          checked={value.estado === "felipe"}
        />{" "}
        felipe
      </div>
    </div>
  )
}

export default App
