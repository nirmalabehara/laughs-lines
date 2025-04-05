import React, { useState } from "react";
import "../styles/LoveCalculator.css"; // External CSS for styling

const LoveCalculator = () => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState(null);

  const calculateLove = () => {
    if (!name1.trim() || !name2.trim()) {
      setResult("❌ Please enter both names!");
      return;
    }

    const loveScore = Math.floor(Math.random() * 51) + 50; // Generates 50% - 100%
    
    let message = "";
    if (loveScore >= 90) {
      message = `💞 Perfect match! ${name1} & ${name2} are meant to be! 💍`;
    } else if (loveScore >= 75) {
      message = `🔥 Strong chemistry! ${name1} and ${name2} are a power couple! 💖`;
    } else {
      message = `💔 Work on it! ${name1} and ${name2} need more bonding! 😉`;
    }

    setResult(`❤️ Love Score: ${loveScore}%\n${message}`);
  };

  return (
    <div className="love-calculator">
      <h2>💘 Love Calculator 💘</h2>
      <p>Enter your name and your crush's name to check compatibility! 🔥</p>

      <input 
        type="text" 
        placeholder="Your Name" 
        value={name1} 
        onChange={(e) => setName1(e.target.value)}
      />
      <input 
        type="text" 
        placeholder="Crush's Name" 
        value={name2} 
        onChange={(e) => setName2(e.target.value)}
      />

      <button onClick={calculateLove}>💞 Calculate Love</button>

      {result && <div className="result">{result}</div>}
    </div>
  );
};

export default LoveCalculator;
