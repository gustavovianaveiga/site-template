
import './App.css'
import Blackhole from './components/Blackhole.jsx'
function App() {
  const dia = 'Bom dia!'
  const noite = 'Boa noite'

  return (
    <div className="App">
      <header>
        <section className="header">
          <Blackhole />
        </section>
      </header>
      <main className='bg-black'><section className='estrutura'>{dia}</section></main>
      <footer></footer>
    </div>
  )
}

export default App
