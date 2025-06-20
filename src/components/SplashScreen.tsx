import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import HOLogo from '@/assets/logos/hologo.png';

interface SplashScreenProps {
  onAnimationComplete: () => void;
}

export default function SplashScreen({ onAnimationComplete }: SplashScreenProps) {
  const controls = useAnimation();
  const [logoAnimationDone, setLogoAnimationDone] = useState(false);

  // Duraciones de la animación
  const initialAppearanceDuration = 0.5; // El logo aparece y se escala en 0.5 segundos
  const staticDisplayDuration = 1.5;    // El logo permanece estático por 1.5 segundos
  const movementDuration = 1;           // El logo se mueve a la barra de navegación en 1 segundo
  const fadeOutDelay = 0.2;             // Pequeño retraso antes de que la pantalla de inicio se desvanezca

  useEffect(() => {
    // Primero hacemos que el logo aparezca y se quede estático
    controls.start({
      opacity: 1,
      scale: 1,
      transition: { duration: initialAppearanceDuration, ease: "easeOut" }
    });

    // Después de que aparezca y se quede estático, iniciamos el movimiento al navbar
    const timer = setTimeout(() => {
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
    }, (initialAppearanceDuration + staticDisplayDuration) * 1000);

    return () => clearTimeout(timer);
  }, [controls, initialAppearanceDuration, staticDisplayDuration, movementDuration]);

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
      className="fixed inset-0 bg-gradient-to-b from-[#2A0338] via-[#4A0B6B] to-[#2A0338] flex items-center justify-center z-[9999]"
    >
      <motion.img
        src={HOLogo}
        alt="Homero AI Logo"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={controls}
        className="h-64 md:h-80 filter invert(100%)"
      />
    </motion.div>
  );
} 