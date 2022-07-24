import { v4 as uuid } from 'uuid';

function App() {
  const list = [
    { id: uuid(), task: "Levar o Nico para passear"},
    { id: uuid(), task: "Terminar as aulas de React no DevClub"}
  ]

  function inputMudou(event) {
    console.log(event.target.value)
  }

  function cliqueiNoBotao() {
    console.log("Cliquei no botão")
  }

  return (
    <div>
      <input onChange={inputMudou} placeholder="O que tenha para fazer..." />
      <button onClick={cliqueiNoBotao}>Adicionar</button>

      <ul>
        {
          list.map(item => (
            <li key={item.id}>{item.task}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default App
