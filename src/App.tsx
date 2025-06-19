import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import SplashScreen from './components/SplashScreen';
import BackgroundBlobs from './components/ui/BackgroundBlobs';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Fondo gradiente global y manchas creativas */}
      <div className="fixed inset-0 -z-10 w-full h-full">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-black via-blue-900 to-blue-600" />
        <BackgroundBlobs />
      </div>
      <AnimatePresence>
        {showSplash ? (
          <SplashScreen key="splash" onAnimationComplete={handleSplashComplete} />
        ) : (
          <Home key="home" isAnimationComplete={!showSplash} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App; 