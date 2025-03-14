import { useState } from 'react';
import './App.css';
import MarineAnimalsComponent from './marineAnimalsComponent';

function App() {
  const [headline, setHeadline] = useState("List of animals");
  const [marineAnimals, setMarineAnimals] = useState(
    ["Seal",
      "Dolphin",
      "Whale",
      "Gull",
      "Shark",
      "Fish",
      "Octopus",
      "Shrimp"
    ]
  );
function deleteAnimal(animalName) {
  const updatedArray = marineAnimals.filter((state) => {
    return state !== animalName;
  });
  setMarineAnimals(updatedArray);
}
function focusAnimal(animalName) {
  setHeadline(animalName)
}
  return (
    <>
      <h1>{headline}</h1>
      {marineAnimals.map((loopAnimals) => {
        return <MarineAnimalsComponent 
        key={loopAnimals} 
        animalName={loopAnimals} 
        deleteFn={deleteAnimal}
        focusFn={focusAnimal}
        />
      })}
    </>
  )
}

export default App
