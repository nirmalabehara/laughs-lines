import React, { useState, useEffect } from 'react';
import { FaCopy, FaVolumeUp, FaStop } from 'react-icons/fa';
import jokesLogo from '../assets/laughing-1.webp';
import { Link } from 'react-router-dom'; // Make sure react-router-dom is installed
import '../styles/JokesPage.css';

const JokesPage = () => {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(true);

  // Fetch random joke from API
  const fetchJoke = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      const data = await response.json();
      setJoke(`${data.setup} ${data.punchline}`);
    } catch (error) {
      console.error("Error fetching joke:", error);
      setJoke("😂 Oops! Failed to load a joke. Try again!");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  // Copy joke to clipboard
  const copyJoke = () => {
    navigator.clipboard.writeText(joke);
    alert('😂 Joke copied to clipboard!');
  };

  // Text-to-speech
  const readJoke = () => {
    const speech = new SpeechSynthesisUtterance(joke);
    speech.lang = "en-US";
    speech.pitch = 1.2;
    speech.rate = 1;
    window.speechSynthesis.speak(speech);
  };

  const stopReading = () => {
    window.speechSynthesis.cancel();
  };

  return (
    <div className="jokes-page">
      {/* Random Joke Header */}
      <div className="jokes-header">
        <img src={jokesLogo} alt="Laughing emoji" className="section-logo" />
        <h1>Random Jokes</h1>
        <img src={jokesLogo} alt="Laughing emoji" className="section-logo" />
      </div>

      <div className="joke-container">
        {loading ? <p className="loading-text">Loading...</p> : joke}
      </div>

      <div className="button-container">
        <button onClick={fetchJoke} className="new-joke-btn">😂 Get Another</button>
        <button onClick={copyJoke} className="copy-btn">
          <FaCopy className="copy-icon" /> Copy
        </button>
        <button onClick={readJoke} className="read-joke-btn">
          <FaVolumeUp className="volume-icon" /> 🎙️ Read Joke
        </button>
        <button onClick={stopReading} className="stop-joke-btn">
          <FaStop className="stop-icon" /> Stop AI
        </button>
      </div>

      <hr style={{ margin: "40px 0", borderColor: "#ccc" }} />

      {/* Kullu Section as Link */}
      <div className="kullu-joke-section">
        <h2>🧠 Want a little challenge?</h2>
        <p>Try to answer some clever and funny questions!</p>
        <Link to="/kullu">
          <button className="new-joke-btn">🧠 Try to Answer My Questions</button>
        </Link>
      </div>
    </div>
  );
};

export default JokesPage;
