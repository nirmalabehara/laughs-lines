import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase';  
import '../styles/MainPage.css';
import jokesLogo from '../assets/laughing-1.webp';
import linesLogo from '../assets/wrinking-2.webp';

const MainPage = () => {
  const [user, setUser] = useState(null);
  const [profilePic, setProfilePic] = useState('/default-profile.png');
  const [userName, setUserName] = useState('Loading...');  
  const navigate = useNavigate();

  // Function to fetch updated profile details
  const fetchProfileData = (currentUser) => {
    if (currentUser) {
      const savedProfile = JSON.parse(localStorage.getItem(`profile_${currentUser.uid}`));
      if (savedProfile) {
        setProfilePic(savedProfile.profilePic || currentUser.photoURL || '/default-profile.png');
        setUserName(savedProfile.name || currentUser.displayName || 'User');  
      } else {
        setProfilePic(currentUser.photoURL || '/default-profile.png');
        setUserName(currentUser.displayName || 'User');
      }
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        fetchProfileData(currentUser); // Fetch profile data when user logs in
      } else {
        navigate('/');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  // Listen for profile updates in localStorage
  useEffect(() => {
    const handleStorageChange = () => {
      if (user) fetchProfileData(user);
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [user]);

  return (
    <div className="main-page">
      {/* Profile section in the top-right */}
      {user && (
        <div className="profile-section">
          <button className="profile-icon-container" onClick={() => navigate('/profile')}>
            <img src={profilePic} alt="User Profile" className="profile-icon" />
          </button>
          <span className="user-name">{userName}</span> {/* Updated Name Display */}
        </div>
      )}

      <h1>Welcome to Laughs & Lines</h1>
      <p>Your daily dose of humor and charm!</p>

      <div className="sections-container">
        {/* Jokes Section */}
        <div className="section jokes-section">
          <img src={jokesLogo} alt="Jokes" className="section-logo" />
          <h2>Jokes That Make You LOL!</h2>
          <p className="equal-paragraphs">Get ready for some hilarious jokes that will keep you laughing!</p>
          <button onClick={() => navigate('/jokes')} className="explore-btn">
            Explore Jokes
          </button>
        </div>

        {/* Flirt Lines Section */}
        <div className="section lines-section">
          <img src={linesLogo} alt="Flirt Lines" className="section-logo" />
          <h2>Flirty & Cheesy Pickup Lines!</h2>
          <p className="equal-paragraphs">Charm your way with some smooth, funny, and romantic lines!</p>
          <button onClick={() => navigate('/lines')} className="explore-btn">
            Explore Flirt Lines
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
