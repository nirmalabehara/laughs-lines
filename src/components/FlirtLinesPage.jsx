import React, { useState, useEffect } from 'react';
import { FaCopy, FaHeart, FaRegHeart } from 'react-icons/fa';
import linesLogo from '../assets/wrinking-2.webp'; 
import '../styles/FlirtLinesPage.css';
import audioFile from '../assets/remo_movie_love_bgm.mp3';
import { auth } from '../firebase/firebase';
import { useNavigate } from "react-router-dom";
import LoveCalculator from "./LoveCalculator";

const FlirtLinesPage = () => {
    const [line, setLine] = useState('');
    const [loading, setLoading] = useState(true);
    const [audio] = useState(new Audio(audioFile));
    const [favorites, setFavorites] = useState([]);
    const navigate = useNavigate();

    const pickupLines = [
        "Are you French? Because Eiffel for you.",
        "Are you a magician? Because whenever I look at you, everyone else disappears.",
        "Do you have a map? Because I keep getting lost in your eyes.",
        "If I were a cat, I'd spend all 9 lives with you.",
        "Is your name Google? Because you have everything I’ve been searching for.",
        "Do you have a Band-Aid? Because I just scraped my knee falling for you.",
        "Are you made of copper and tellurium? Because you’re Cu-Te.",
        "Are you a parking ticket? Because you’ve got FINE written all over you.",
        "Are you a time traveler? Because I see you in my future.",
        "Is your name Wi-Fi? Because I'm feeling a connection.",
        "Are you a snowstorm? Because you're making my heart race.",
        "Can I follow you home? Cause my parents always told me to follow my dreams.",
        "Do you have a sun? Because you light up my world.",
        "You must be tired, because you’ve been running through my mind all day.",
        "Are you a campfire? Because you’re hot and I want s’more.",
        "If you were a vegetable, you’d be a ‘cute-cumber.’",
        "Are you a star? Because your beauty lights up the night.",
        "Are you a beaver? Because daaaaam.",
        "Are you an angel? Because heaven is missing one.",
        "Is your dad a boxer? Because you’re a knockout.",
        "Do you have a pencil? Because I want to erase your past and write our future.",
        "Are you a dictionary? Because you add meaning to my life.",
        "If I were to ask you out, would your answer be the same as the answer to this question?",
        "You must be a magician, because every time I look at you, everyone else disappears.",
        "Are you a camera? Every time I look at you, I smile.",
        "Is there an airport nearby, or is that just my heart taking off?",
        "I’m not a photographer, but I can picture us together.",
        "Are you an angel? Because I think I’ve finally found heaven.",
        "Do you know what would look great on you? Me.",
        "Are you a beaver? Because I’m falling for you.",
        "If kisses were snowflakes, I’d send you a blizzard.",
        "Do you have a map? I just got lost in your eyes.",
        "Are you a campfire? Because you’re hot and I want s’more.",
        "Is your name Google? Because you have everything I’ve been searching for.",
        "Are you French? Because Eiffel for you.",
        "If you were a triangle, you’d be acute one.",
        "Do you have a mirror in your pocket? Because I can see myself in your pants.",
        "If you were a vegetable, you’d be a cutecumber.",
        "Are you a volcano? Because you’re hot and I’m ready to erupt.",
        "Do you have a name, or can I call you mine?",
        "Are you a parking ticket? Because you’ve got FINE written all over you.",
        "Do you believe in love at first sight, or should I walk by again?",
        "I must be a snowflake, because I’ve fallen for you.",
        "Are you a time traveler? Because I see you in my future.",
        "Can I follow you home? Cause my parents always told me to follow my dreams.",
        "You must be tired, because you’ve been running through my mind all day.",
        "You must be the square root of -1, because you can’t be real.",
        "Is it hot in here or is it just you?",
        "Do you have a Band-Aid? Because I just scraped my knee falling for you.",
        "Are you a campfire? Because you’re hot and I want s’more.",
        "If you were a vegetable, you’d be a ‘cute-cumber.’",
        "Are you a dictionary? Because you add meaning to my life.",
        "Can I follow you home? Cause my parents always told me to follow my dreams.",
        "You must be the square root of -1, because you can’t be real.",
        "Are you a magician? Because whenever I look at you, everyone else disappears.",
        "Is your name Google? Because you have everything I’ve been searching for.",
        "If you were a fruit, you’d be a fineapple.",
        "Are you made of copper and tellurium? Because you’re Cu-Te.",
        "Do you have a pencil? Because I want to erase your past and write our future.",
        "Are you a time traveler? Because I see you in my future.",
        "Are you a parking ticket? Because you’ve got FINE written all over you.",
        "If I were a cat, I’d spend all 9 lives with you.",
        "Do you have a sun? Because you light up my world.",
        "Can I follow you home? Cause my parents always told me to follow my dreams.",
        "Are you a parking ticket? Because you’ve got FINE written all over you.",
        "Are you a campfire? Because you’re hot and I want s’more.",
        "Is your name Wi-Fi? Because I'm feeling a connection.",
        "Do you have a map? Because I keep getting lost in your eyes.",
        "Are you an angel? Because heaven is missing one.",
        "Are you a star? Because your beauty lights up the night.",
        "You must be made of copper and tellurium because you’re Cu-Te.",
        "Are you French? Because Eiffel for you.",
        "You must be the square root of -1, because you can’t be real.",
        "Is your name Google? Because you have everything I’ve been searching for.",
        "If you were a vegetable, you’d be a ‘cute-cumber.’",
        "Are you a magician? Because whenever I look at you, everyone else disappears.",
        "Do you have a Band-Aid? Because I just scraped my knee falling for you.",
        "Is your dad a boxer? Because you’re a knockout.",
        "You must be tired, because you’ve been running through my mind all day.",
        "Can I follow you home? Cause my parents always told me to follow my dreams.",
        "Is it hot in here or is it just you?",
        "Are you a beaver? Because daaaaam.",
        "Are you a time traveler? Because I see you in my future.",
        "Do you have a map? I keep getting lost in your eyes.",
        "Is your name Wi-Fi? Because I’m feeling a connection.",
        "If I were a cat, I’d spend all 9 lives with you."
      ];

      useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
        if (storedFavorites) {
            setFavorites(storedFavorites);
        }
    }, []);

    // Save favorites to local storage whenever favorites change
    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    // Fetch a random pickup line
    const fetchLine = () => {
        setLoading(true);
        setTimeout(() => {
            const randomLine = pickupLines[Math.floor(Math.random() * pickupLines.length)];
            setLine(randomLine);
            setLoading(false);
        }, 500);
    };

    const playSound = () => {
        try {
            audio.play().catch((error) => {
                console.error('Error playing sound:', error);
            });
        } catch (error) {
            console.error('Error loading audio file:', error);
        }
    };

    const copyLine = () => {
        navigator.clipboard.writeText(line);
        alert('Pickup line copied to clipboard!');
        playSound();
    };
    
    // Load favorites from local storage when the component mounts
    useEffect(() => {
        const savedFavorites = JSON.parse(localStorage.getItem('favorites'));
        if (savedFavorites) {
            setFavorites(savedFavorites);
        }
    }, []);
    
    // Function to add/remove favorites and update local storage
    const toggleFavorite = (line) => {
        const userId = auth.currentUser?.uid; // Get user ID
        if (!userId) return; // Ensure user is logged in
      
        let updatedFavorites = [];
        const storedFavorites = JSON.parse(localStorage.getItem(`favorites_${userId}`)) || [];
      
        if (storedFavorites.includes(line)) {
          updatedFavorites = storedFavorites.filter(fav => fav !== line);
        } else {
          updatedFavorites = [...storedFavorites, line];
        }
      
        setFavorites(updatedFavorites);
        localStorage.setItem(`favorites_${userId}`, JSON.stringify(updatedFavorites));
      };
      
    return (
        <div className="flirt-page">
            <div className="flirt-header">
                <img src={linesLogo} alt="Flirty emoji" className="section-logo" />
                <h1>Flirty Pickup Lines</h1>
                <img src={linesLogo} alt="Flirty emoji" className="section-logo" />
            </div>

            <div className="flirt-container">
                {loading ? <div className="loading-spinner">Loading...</div> : <p>{line}</p>}
            </div>

            <div className="button-container">
                <button onClick={fetchLine} className="new-line-btn">Get Another</button>
                <button onClick={copyLine} className="copy-btn">
                    <FaCopy className="copy-icon" /> Copy
                </button>
                <button onClick={() => toggleFavorite(line)} className="favorite-btn">
                    {favorites.includes(line) ? <FaHeart className="favorite-icon" /> : <FaRegHeart className="favorite-icon" />}
                    {favorites.includes(line) ? 'Unfavorite' : 'Favorite'}
                </button>
                <button onClick={() => navigate("/lovehacks")} className="flirtbot-btn">
                💘 Love Hacks
                </button>
            </div>
            <div className="love-calculator-section">
                <LoveCalculator />
            </div>
        </div>
    );
};

export default FlirtLinesPage;