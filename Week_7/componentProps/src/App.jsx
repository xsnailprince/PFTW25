import Color from "./components/Color";
import llama from "./components/images/llama.jpg";
import alpaca from "./components/images/alpaca.jpg";
function App() {
  const colorData = [
    {name: "Llama", imgsrc: llama, desc: "A llama can spit green, partially digested food 15 feet or more."},
    {name: "Alpaca", imgsrc: alpaca, desc: "Alpacas can produce a soft hum as a form of communication."},
  ]
  return (
    <div>
      <h2>Animal Facts</h2>
      <Color name={colorData[0].name}
      imgsrc={colorData[0].imgsrc} 
      desc={colorData[0].desc} />
      <Color name={colorData[1].name} 
      imgsrc={colorData[1].imgsrc}
      desc={colorData[1].desc} />
    </div>
  )
}

export default App;