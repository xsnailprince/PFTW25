import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

    const llamaFacts = [
      "llama poo produces little to no odor",
      "Llamas are related to camels",
      "A llama can carry as much as 200 pounds for 12 hours a day",
      "Llamas are native to the mountainous region of South America",
      "Females give birth every other year",
      "When one llama is angry at another llama, they will stick their tongues out to express their dislike"
      ];


  return (
   <div>
    <h1>Llama Facts</h1>
    <ol>
      {llamaFacts.map((llamaFact) => (
        <li>{llamaFact}</li>
      ))}
    </ol>
   </div>
  )
}

export default App
