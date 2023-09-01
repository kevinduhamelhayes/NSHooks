import "./App.css"
const submit = (e) => {
  e.preventDefault()
  console.log(e.target.campo.value)
  console.log(e.target.campo2.value)
}

const App = () => {
  return (
    <form onSubmit={submit} action="/lala" method="POST">
      <div>
        <span>lala</span>
        <input type="text" name="campo" />
      </div>
      <input type="text" name="campo2" />
      <input type="submit" value="enviar" />
    </form>
  )
}

export default App
