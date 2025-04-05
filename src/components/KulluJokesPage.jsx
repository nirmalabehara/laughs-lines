import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/JokesPage.css';

const kulluJokes = [
    { question: "What has hands but can’t clap?", answer: "A clock" },
    { question: "What can travel around the world while staying in one spot?", answer: "A stamp" },
    { question: "Why don’t scientists trust atoms?", answer: "Because they make up everything" },
    { question: "Why did the math book look sad?", answer: "Because it had too many problems" },
    { question: "What has a face and two hands but no arms or legs?", answer: "A clock" },
    { question: "Why don’t eggs tell jokes?", answer: "Because they’d crack each other up" },
    { question: "Why can’t your nose be 12 inches long?", answer: "Because then it would be a foot" },
    { question: "Why did the scarecrow win an award?", answer: "Because he was outstanding in his field" },
    { question: "Why did the bicycle fall over?", answer: "Because it was two-tired" },
    { question: "Why can't you give Elsa a balloon?", answer: "Because she will let it go" },
    { question: "Why did the golfer bring two pairs of pants?", answer: "In case he got a hole in one" },
    { question: "What’s orange and sounds like a parrot?", answer: "A carrot" },
    { question: "Why don’t skeletons fight each other?", answer: "They don’t have the guts" },
    { question: "Why did the chicken join a band?", answer: "Because it had the drumsticks" },
    { question: "What’s brown and sticky?", answer: "A stick" },
    { question: "Why did the tomato blush?", answer: "Because it saw the salad dressing" },
    { question: "Why did the coffee file a police report?", answer: "It got mugged" },
    { question: "Why did the kid bring a ladder to school?", answer: "Because he wanted to go to high school" },
    { question: "Why are ghosts bad at lying?", answer: "Because they are too transparent" },
    { question: "Why did the computer go to the doctor?", answer: "Because it had a virus" },
    { question: "Why did the banker switch careers?", answer: "He lost interest" },
    { question: "Why did the student eat his homework?", answer: "Because the teacher said it was a piece of cake" },
    { question: "Why are elevator jokes so good?", answer: "They work on many levels" },
    { question: "Why don’t oysters share their pearls?", answer: "Because they’re shellfish" },
    { question: "What’s a pirate’s favorite letter?", answer: "You’d think it’s R, but it’s the C" },
    { question: "Why did the cookie go to the hospital?", answer: "Because it felt crummy" },
    { question: "What do you call fake spaghetti?", answer: "An impasta" },
    { question: "What did one wall say to the other?", answer: "I'll meet you at the corner" },
    { question: "Why did the man put his money in the freezer?", answer: "He wanted cold hard cash" },
    { question: "Why can’t a leopard hide?", answer: "Because he’s always spotted" },
    { question: "Why did the duck get a red card?", answer: "Because he was quacking under pressure" },
    { question: "What’s black and white and goes around and around?", answer: "A penguin in a revolving door" },
    { question: "What do you call a bear with no teeth?", answer: "A gummy bear" },
    { question: "Why did the fish blush?", answer: "Because it saw the ocean's bottom" },
    { question: "Why don’t crabs give to charity?", answer: "Because they’re shellfish" },
    { question: "Why did the sun go to school?", answer: "To get a little brighter" },
    { question: "What do you call a snowman with a six-pack?", answer: "An abdominal snowman" },
    { question: "Why did the banana go to the doctor?", answer: "Because it wasn’t peeling well" },
    { question: "Why did Cinderella get kicked off the soccer team?", answer: "Because she kept running away from the ball" },
    { question: "Why can’t your nose be 12 inches long?", answer: "Because then it would be a foot" },
    { question: "What do you call a sleeping bull?", answer: "A bulldozer" },
    { question: "Why are frogs so happy?", answer: "Because they eat whatever bugs them" },
    { question: "What do you call cheese that isn’t yours?", answer: "Nacho cheese" },
    { question: "What did the grape do when he got stepped on?", answer: "Nothing but let out a little wine" },
    { question: "Why did the belt go to jail?", answer: "Because it held up a pair of pants" },
    { question: "Why don’t some couples go to the gym?", answer: "Because some relationships don’t work out" },
    { question: "What do you call a lazy kangaroo?", answer: "A pouch potato" },
    { question: "Why can’t skeletons play church music?", answer: "They don’t have any organs" },
    { question: "Why did the cow win an award?", answer: "Because it was outstanding in its field" },
    { question: "Why are ghosts bad at lying?", answer: "Because they are too transparent" },
    { question: "Why did the iPhone go to school?", answer: "To improve its Siri-ous skills" },
    { question: "Why did the banana wear sunscreen?", answer: "Because it peeled easily" },
    { question: "Why did the frog take the bus?", answer: "Because his car got toad" },
    { question: "Why did the football team go to the bank?", answer: "To get their quarterback" },
    { question: "Why don't we see elephants hiding in trees?", answer: "Because they're really good at it" },
    { question: "Why did the ghost go to school?", answer: "To learn how to be a better spook" },
    { question: "Why was the broom late?", answer: "It over-swept" },
    { question: "What do you get if you cross a vampire with a snowman?", answer: "Frostbite" },
    { question: "What has ears but cannot hear?", answer: "A cornfield" },
    { question: "Why do bees have sticky hair?", answer: "Because they use honeycombs" },
    { question: "What do you call a fish with no eyes?", answer: "Fsh" },
    { question: "Why did the pencil go to the principal’s office?", answer: "Because it was acting a little sketchy" },
    { question: "Why did the teddy bear say no to dessert?", answer: "Because it was stuffed" },
    { question: "Why did the cat sit on the computer?", answer: "To keep an eye on the mouse" },
    { question: "Why was the math teacher suspicious of prime numbers?", answer: "Because they can’t be divided evenly" },
    { question: "Why did the gym close down?", answer: "It just didn’t work out" },
    { question: "Why was the calendar so popular?", answer: "Because it had lots of dates" },
    { question: "Why did the man run around his bed?", answer: "Because he was trying to catch up on sleep" },
    { question: "Why don’t mountains get cold in the winter?", answer: "Because they wear snow caps" },
    { question: "Why did the clock get promoted?", answer: "Because it had good timing" },
    { question: "What’s green and sings?", answer: "Elvis Parsley" },
    { question: "What did one hat say to the other?", answer: "Stay here, I’m going on ahead" },
    { question: "Why did the skeleton skip the party?", answer: "He had no body to go with" },
    { question: "Why was the broom so tired?", answer: "Because it swept all night" },
    { question: "Why did the grape stop in the middle of the road?", answer: "Because it ran out of juice" },
    { question: "Why did the music teacher go to jail?", answer: "Because she got caught with too many notes" },
    { question: "Why did the dog sit in the shade?", answer: "Because he didn’t want to be a hot dog" },
    { question: "What do you get when you cross a snowman and a dog?", answer: "Frostbite" },
    { question: "Why did the spider go to school?", answer: "To learn web design" },
    { question: "Why was the music book sad?", answer: "Because it had too many notes" },
    { question: "Why did the cat go to Minnesota?", answer: "To get a mini soda" },
    { question: "Why are elephants so wrinkled?", answer: "Because they take too long to iron" },
    { question: "Why did the stadium get hot?", answer: "All the fans left" },
    { question: "Why did the squirrel swim on its back?", answer: "To keep its nuts dry" },
    { question: "Why did the astronaut break up with his girlfriend?", answer: "He needed space" },
    { question: "Why did the chicken go to space?", answer: "To see the moooon" },
    { question: "What’s a vampire’s favorite fruit?", answer: "A blood orange" },
    { question: "What’s a computer’s favorite snack?", answer: "Microchips" },
    { question: "Why did the tree go to the dentist?", answer: "To get a root canal" },
    { question: "What did one ocean say to the other?", answer: "Nothing, they just waved" },
    { question: "Why did the belt get promoted?", answer: "Because it held everything together" }
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
