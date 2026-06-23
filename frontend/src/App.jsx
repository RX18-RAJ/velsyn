import { useState } from 'react'
import './App.css'

function App() {
  const API_URL = "https://velsyn-backend.onrender.com";
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  const handlesubmit = async () => {
    const response = await fetch(
      `${API_URL}/greet`, 
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
        }),
      }
    );

    const data = await response.json();

    setMessage(data.message);
  }
  return (
    <>
      <h1>Study Assistant</h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handlesubmit}>
        Submit
      </button>

      <h2>{message}</h2>
    </>
  )
}

export default App