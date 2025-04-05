import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/JokesPage.css';

const kulluJokes = [
    { question: "What has hands but can’t clap?", answer: "A clock" },
    { question: "What can travel around the world while staying in one spot?", answer: "A stamp" },
    { question: "Why don’t scientists trust atoms?", answer: "Because they make up everything" },
    { question: "Why did the math book look sad?", answer: "Because it had too many problems" },
    { question: "What has a face and two hands but no arms or legs?", answer: "A clock" }
];

const KulluJokesPage = () => {
    const [currentKulluJoke, setCurrentKulluJoke] = useState(null);
    const [userGuess, setUserGuess] = useState("");
    const [guessResult, setGuessResult] = useState("");
    const [showAnswer, setShowAnswer] = useState(false);
    const [showSubmit, setShowSubmit] = useState(true);

    useEffect(() => {
        generateNewKulluJoke();
    }, []);

    const generateNewKulluJoke = () => {
        const randomIndex = Math.floor(Math.random() * kulluJokes.length);
        setCurrentKulluJoke(kulluJokes[randomIndex]);
        setUserGuess("");
        setGuessResult("");
        setShowAnswer(false);
        setShowSubmit(true);
    };

    const handleGuessSubmit = () => {
        if (!userGuess.trim()) {
            setGuessResult("Please enter your guess!");
            return;
        }

        if (userGuess.toLowerCase().trim() === currentKulluJoke.answer.toLowerCase().trim()) {
            setGuessResult("✅ Correct!");
        } else {
            setGuessResult("❌ Nice try, but not quite!");
        }

        setShowAnswer(true);
        setShowSubmit(false);
    };

    return (
        <div className="jokes-page">
            <div className="jokes-header">
                <h1>🧠 Try to Answer My Questions</h1>
            </div>

            <div style={{ marginBottom: '20px' }}>
                <Link to="/jokes">
                    <button className="new-joke-btn">🔙 Back to Jokes</button>
                </Link>
            </div>

            {currentKulluJoke && (
                <div className="kullu-joke-section">
                    <p className="joke-question">Q: {currentKulluJoke.question}</p>
                    <input
                        className="guess-input"
                        type="text"
                        placeholder="Type your guess here..."
                        value={userGuess}
                        onChange={(e) => setUserGuess(e.target.value)}
                        disabled={showAnswer}
                    />
                    <div className="button-container">
                        {showSubmit && (
                            <button className="submit-guess-btn" onClick={handleGuessSubmit}>
                                Submit Guess
                            </button>
                        )}
                        {showAnswer && (
                            <>
                                <p className="guess-result">{guessResult}</p>
                                <p className="joke-answer">💡 Answer: {currentKulluJoke.answer}</p>
                                <button className="new-joke-btn" onClick={generateNewKulluJoke}>
                                    ➡️ Try Another
                                </button>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default KulluJokesPage;
