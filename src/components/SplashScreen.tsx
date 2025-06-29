import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import hologo from '@/assets/logos/hologo.png';

interface SplashScreenProps {
  onAnimationComplete: () => void;
}

export default function SplashScreen({ onAnimationComplete }: SplashScreenProps) {
  const controls = useAnimation();
  const [logoAnimationDone, setLogoAnimationDone] = useState(false);
  const [typewriterText, setTypewriterText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const splashText = 'Homero AI';

  // Duraciones de la animación
  const initialAppearanceDuration = 0.5; // El logo aparece y se escala en 0.5 segundos
  const staticDisplayDuration = 1.5;    // El logo permanece estático por 1.5 segundos
  const movementDuration = 1;           // El logo se mueve a la barra de navegación en 1 segundo
  const fadeOutDelay = 0.2;             // Pequeño retraso antes de que la pantalla de inicio se desvanezca
  const typewriterSpeed = 70;           // Velocidad de la máquina de escribir

  useEffect(() => {
    controls.start({
      opacity: 1,
      scale: 1,
      transition: { duration: initialAppearanceDuration, ease: "easeOut" }
    });
    // Iniciar efecto máquina de escribir después de la aparición del logo
    const typewriterStart = setTimeout(() => {
      let i = 0;
      setTypewriterText('');
      setShowCursor(true);
      const interval = setInterval(() => {
        setTypewriterText(splashText.slice(0, i + 1));
        i++;
        if (i >= splashText.length) {
          clearInterval(interval);
          setShowCursor(false);
          // Esperar un poco y luego mover el logo y el texto
          setTimeout(() => {
            const targetX = -window.innerWidth / 2 + 80; // Aproximación de alineación izquierda
            const targetY = -window.innerHeight / 2 + 32; // Aproximación de alineación superior
            const targetScale = (64 / 256); // h-16 (64px) / h-64 (256px) para el logo grande
            controls.start({
              x: targetX,
              y: targetY,
              scale: targetScale,
              opacity: 1,
              transition: { duration: movementDuration, ease: "easeInOut" }
            }).then(() => {
              setLogoAnimationDone(true);
            });
          }, staticDisplayDuration * 1000);
        }
      }, typewriterSpeed);
    }, initialAppearanceDuration * 1000 + 300);
    return () => clearTimeout(typewriterStart);
  }, [controls, initialAppearanceDuration, staticDisplayDuration, movementDuration, splashText]);

  useEffect(() => {
    if (logoAnimationDone) {
      const finalFadeOutTimer = setTimeout(() => {
        onAnimationComplete();
      }, fadeOutDelay * 1000);
      return () => clearTimeout(finalFadeOutTimer);
    }
  }, [logoAnimationDone, onAnimationComplete, fadeOutDelay]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: logoAnimationDone ? 0 : 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-gradient-to-br from-black via-blue-900 to-blue-600 flex items-center justify-center z-[9999]"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={controls}
        className="flex items-center gap-6"
      >
        <img
          src={hologo}
          alt="Homero AI Logo"
          className="h-64 md:h-80 filter invert-0 drop-shadow-lg"
        />
        <span className="text-white text-4xl md:text-6xl font-extrabold tracking-tight min-w-[2ch]">
          {typewriterText}
          {showCursor && <span className="inline-block w-2 h-8 align-middle bg-white ml-1 animate-pulse" style={{borderRadius:2}}></span>}
        </span>
      </motion.div>
    </motion.div>
  );
} 