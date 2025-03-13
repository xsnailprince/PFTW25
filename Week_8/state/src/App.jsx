import './App.css'
import {useState} from "react";
import llama from "./assets/llama.jpg";
import alpaca from "./assets/alpaca.jpg";
import Animal from './animal';

function App() {
  const [animal, setAnimal] = useState(llama);
  // const [animal, setAnimal] = useState(llama);
  
  return (
    <>
      <div>
      <Animal url={animal}/>
      </div>
      <h1>Llama or Alpaca?</h1>
      <div className="card">
        <button onClick={() => {
          console.log("click llama");
          setAnimal(llama);
        }}>Llama</button>
        <button onClick={() => {
          console.log("click alpaca");
          setAnimal(alpaca);
        }}>Alpaca</button>
      </div>
    </>
  )
}

export default App
