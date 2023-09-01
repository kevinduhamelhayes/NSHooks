import useCount from './hooks/useCount'
import './App.css'

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





const App = () => {

  const {count, incrementar} = useCount(0)
  return (
    <div>
      contador: {count}
      <button onClick={incrementar}>incrementar</button>
    </div>
  )
}





export default App
