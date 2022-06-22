import './assets/App.css'

function App() {

  const dia = 'Bom dia!'
  const noite = 'Boa noite!'

  return (
    <div className="App">
      <div className="textos">
        <h2>{dia}</h2>
        <p>seja <strong className="color">bem-vindo</strong> ao meu site</p>
      </div>
    </div >
  )
}

export default App
