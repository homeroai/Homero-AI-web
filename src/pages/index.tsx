import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Home from './Home';
import SplashScreen from '../components/SplashScreen';

export default function IndexPage() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <AnimatePresence>
      {showSplash ? (
        <SplashScreen key="splash" onAnimationComplete={handleSplashComplete} />
      ) : (
        <Home key="home" isAnimationComplete={!showSplash} />
      )}
    </AnimatePresence>
  );
} 