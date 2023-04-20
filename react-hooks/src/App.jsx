import './App.css'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Exercicio01 from './exercicios/01'
import Exercicio02 from './exercicios/02'
import Home from './pages/Home'

function App() {

  return (
    <div className="App">
      <h1>Exercícios de React Hooks</h1>
      <BrowserRouter>
      <ul className="menu">
        <li><Link to="/01">Exercício 1</Link></li>
        <li><Link to="/02">Exercício 2</Link></li>
        <li><Link to="/03">Exercício 3</Link></li>
        <li><Link to="/04">Exercício 4</Link></li>
        <li><Link to="/05">Exercício 5</Link></li>
        <li><Link to="/06">Exercício 6</Link></li>
      </ul>
      <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/01" element={<Exercicio01 />}/>
          <Route path="/02" element={<Exercicio02 />} />
          <Route path="/03" />
          <Route path="/04" />
          <Route path="/05" />
          <Route path="/06" />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
