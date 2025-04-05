import React, { useState } from 'react';
import { auth, provider, signInWithPopup } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import '../styles/WelcomePage.css';
import welcomeImage from '../assets/Welcome.png';

const WelcomePage = () => {
  const [user, setUser] = useState(null);  // State to store user information
  const navigate = useNavigate();

  // Handle sign-in with Google
  const signIn = async () => {
    try {
      console.log("Opening Google Sign-In...");
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User signed in:", user);
      setUser(user);  // Store the user info in state after successful sign-in
      navigate('/main');  // Redirect to main page after login
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };

  return (
    <div className="welcome-page">
      <div className="logo-container">
        <img src={welcomeImage} alt="Welcome" />
        <h1>Welcome to Laughs & Lines</h1>
        <p>Get ready to laugh... or blush!</p>
      </div>

      {!user && (
        // Display Google Sign-In button
        <div className="login-container">
          <button onClick={signIn} className="google-signin-btn">
            Sign in with Google
          </button>
        </div>
      )}
    </div>
  );
};

export default WelcomePage;
