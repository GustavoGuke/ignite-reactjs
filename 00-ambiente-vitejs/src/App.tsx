import { useState } from "react"
import { Contas } from "./components/Contas"
import { AppRoutes } from "./App.Routes"
//import "./Teste.css"
function App() {
  // let [count, setCount] = useState(4)
  // const [newConta, setNewConta] = useState<string[]>([
  //   "Conta -1 ",
  //   "Conta -2 ",
  //   "Conta -3 "
  // ])
  // let contaString = "Conta -" + count


  // function createConta() {
  //   setNewConta([...newConta, contaString])
  //   setCount(count += 1)
  // }

  // const styl = {
  //   backgroundColor: "#646010",
  //   color: "#e1e1f6",
  //   cursor: "pointer",
  //   padding: "6px 12px"
  //}
  return (
    <>
      {/* <h1>Vitejs</h1>
      {
        newConta.map(conta => {
          return <Contas name={conta} />
        })
      }

      <button
        onClick={createConta}
        style={styl}
      >
        Adicionar uma conta
      </button> */}

      <AppRoutes/>
    </>
  )
}

export default App
