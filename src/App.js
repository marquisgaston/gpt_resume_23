//App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import getRandomImage from './backgrounds';
import './App.css';

function App() {
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    async function fetchRandomImage() {
      const imageUrl = await getRandomImage();
      setBackgroundImage(imageUrl);
    }

    fetchRandomImage();

    const interval = setInterval(() => {
      fetchRandomImage();
    }, 24 * 60 * 60 * 1000); // 24 hours in milliseconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Router>
      <div className="App">
        <div className="header-mainpage-wrapper" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <Header />
          <MainPage />
        </div>
        <div className="footer-wrapper">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

function MainPage() {
  return (
    <div className="mainpage">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;