import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import ProfilePage from './components/ProfilePage';  // Import the ProfilePage
import MainPage from './components/MainPage'; // Assuming you have a MainPage
import JokesPage  from './components/JokesPage';
import FlirtLinesPage from './components/FlirtLinesPage';
import LoveHacksPage from "./components/LoveHacks";
import LoveCalculator from "./components/LoveCalculator";
import KulluJokesPage from './components/KulluJokesPage';
import ScrollToTop from './components/ScrollToTop';


const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/jokes" element={<JokesPage />} />
        <Route path="/lines" element={<FlirtLinesPage />} />
        <Route path="/lovehacks" element={<LoveHacksPage />} />
        <Route path="/lovecalculator" element={<LoveCalculator />} />
        <Route path="/kullu" element={<KulluJokesPage />} />
      </Routes>
    </Router>
  );
};

export default App;

