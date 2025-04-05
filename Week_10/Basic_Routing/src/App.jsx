import { Link, Route, Routes } from "react-router-dom"
import { Home } from "./views/Home";
import { Llamas } from "./views/Llamas";
import { Alpacas } from "./views/Alpaca";
import './App.css'

function App() {

  return (
    <>
    {/*Navigation Here */}
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/llamas">Llamas</Link></li>
      <li><Link to="/alpacas">Alpacas</Link></li>
    </ul>
    {/*Routes Here*/}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Llamas" element={<Llamas />} />
      <Route path="/Alpacas" element={<Alpacas />} />
    </Routes>
    </>
  )
}

export default App
