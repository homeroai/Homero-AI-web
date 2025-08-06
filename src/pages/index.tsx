import React from 'react';
import Home from './Home';
import HomeDebug from './HomeDebug';

export default function IndexPage() {
  // Cambiar a true para usar la versión de debug
  const useDebug = false;
  
  if (useDebug) {
    return <HomeDebug />;
  }
  
  return <Home isAnimationComplete={true} />;
} 