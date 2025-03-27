import { useState } from "react";
import axios from "axios";

export default function MathSolver() {
  const [question, setQuestion] = useState("");
  const [solution, setSolution] = useState("");

  const solveMath = async () => {
    const response = await axios.post("http://localhost:5000/solve", { question });
    setSolution(response.data.solution);
  };

  return (
    <div className="container">
      <h1>NCERT Math Solver</h1>
      <input 
        type="text" 
        placeholder="Apna math problem likho..." 
        value={question} 
        onChange={(e) => setQuestion(e.target.value)} 
      />
      <button onClick={solveMath}>Solve</button>
      <div className="solution">
        <h2>Solution:</h2>
        <p>{solution}</p>
      </div>
    </div>
  );
}
