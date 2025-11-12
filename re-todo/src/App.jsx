import { useState } from "react";
import "./App.css";

function App() {
  const facts = [
    "Honey never spoils. Archaeologists have found edible honey in ancient Egyptian tombs!",
    "Octopuses have three hearts and blue blood.",
    "Bananas are berries, but strawberries aren’t.",
    "A group of flamingos is called a ‘flamboyance’.",
    "There are more stars in the universe than grains of sand on Earth.",
  ];

  const [fact, setFact] = useState(facts[0]);

  const generateFact = () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    setFact(facts[randomIndex]);
  };

  return (
    <div className="App">
      <h1>🌍 Random Fun Fact Machine</h1>
      <div className="fact-box">
        <p className="fact">"{fact}"</p>
      </div>
      <button onClick={generateFact}>Show Me Another 🤯</button>
    </div>
  );
}

export default App;
