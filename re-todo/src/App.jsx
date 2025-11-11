import { useState } from "react";
import "./App.css";

function App() {
  const quotes = [
    "Code is like humor. When you have to explain it, it’s bad.",
    "Talk is cheap. Show me the code.",
    "First, solve the problem. Then, write the code.",
    "Experience is the name everyone gives to their mistakes.",
    "Simplicity is the soul of efficiency.",
  ];

  const [quote, setQuote] = useState(quotes[0]);

  const newQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="App">
      <h1>💡 Random Quote Generator</h1>
      <p className="quote">"{quote}"</p>
      <button onClick={newQuote}>Inspire Me ✨</button>
    </div>
  );
}

export default App;
