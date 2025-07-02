import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Icon } from '@/components/ui/Icon';
import AnimatedShapeBlur from '@/components/ui/AnimatedShapeBlur';
import TechBackground from '@/components/ui/TechBackground';
import WhatsAppDemo from './WhatsAppDemo';

// Hook para efecto typewriter con parte fija y parte variable
function useTypewriterAlternating(
  fixed: string,
  variants: string[],
  speed = 20,
  pauseBeforeDelete = 1500,
  pauseBeforeType = 1500
) {
  const [displayed, setDisplayed] = useState(fixed);
  const [variantIdx, setVariantIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [phase, setPhase] = useState<'typing'|'pausing'|'deleting'|'waiting'>('typing');

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentVariant = variants[variantIdx];
    if (phase === 'typing') {
      if (charIdx < currentVariant.length) {
        timeout = setTimeout(() => {
          setDisplayed(fixed + currentVariant.slice(0, charIdx + 1));
          setCharIdx(charIdx + 1);
        }, speed);
      } else {
        setPhase('pausing');
      }
    } else if (phase === 'pausing') {
      timeout = setTimeout(() => {
        setPhase('deleting');
      }, pauseBeforeDelete);
    } else if (phase === 'deleting') {
      if (charIdx > 0) {
        timeout = setTimeout(() => {
          setDisplayed(fixed + currentVariant.slice(0, charIdx - 1));
          setCharIdx(charIdx - 1);
        }, speed);
      } else {
        setPhase('waiting');
      }
    } else if (phase === 'waiting') {
      timeout = setTimeout(() => {
        setVariantIdx((variantIdx + 1) % variants.length);
        setPhase('typing');
      }, pauseBeforeType);
    }
    return () => clearTimeout(timeout);
  }, [charIdx, phase, variantIdx, fixed, variants, speed, pauseBeforeDelete, pauseBeforeType]);

  // Inicializa el texto fijo al principio
  useEffect(() => {
    setDisplayed(fixed);
    setCharIdx(0);
    setPhase('typing');
  }, [fixed]);

  return displayed;
}

// Agrega el componente GradientText aquí
interface GradientTextProps {
    children: React.ReactNode;
    className?: string;
    colors?: string[];
    animationSpeed?: number;
    showBorder?: boolean;
}

function GradientText({
    children,
    className = "",
    colors = ["#ffaa40", "#9c40ff", "#ffaa40"],
    animationSpeed = 8,
    showBorder = false,
}: GradientTextProps) {
    const gradientStyle = {
        backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
        animationDuration: `${animationSpeed}s`,
    };

    return (
        <span
            className={`inline-block font-medium bg-cover animate-gradient ${className}`}
                style={{
                    ...gradientStyle,
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                color: "transparent",
                    backgroundSize: "300% 100%",
                }}
            >
                {children}
        </span>
    );
}

export default function Hero() {
  const [showGlow, setShowGlow] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    // Reducir el glow después de 2 segundos
    const timer = setTimeout(() => {
      setShowGlow(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const typewriterText = useTypewriterAlternating(
    'Optimiza citas y ',
    ['reduce no-shows', 'mejora la experiencia del paciente', 'mejora tu tasa de asistencia', 'automatiza tus recordatorios'],
    45, // velocidad intermedia para escribir y borrar
    2000, // pausa después de escribir antes de borrar
    2000  // pausa después de borrar antes de volver a escribir
  );

  return (
    <section 
      className="relative min-h-[80vh] sm:min-h-screen w-full flex flex-col lg:flex-row items-center justify-center overflow-x-hidden px-2 sm:px-0"
      role="banner"
      aria-label="Hero section"
    >
      {/* Fondo con efectos desactivado temporalmente para aislar el problema de scroll */}
      {/* <TechBackground /> */}
      {/* <AnimatedShapeBlur /> */}

      {/* Contenedor principal para el contenido del Hero */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-6 py-8 sm:py-20 flex flex-col lg:flex-row items-center justify-center lg:items-center text-center gap-6 lg:gap-12">
        {/* Columna izquierda: textos y botón */}
        <div className="flex-1 flex flex-col items-center justify-center text-center w-full max-w-xl mx-auto">
          {/* Badge/Etiqueta superior */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-3 sm:mb-6"
          >
            <GradientText
              className="text-xs sm:text-sm lg:text-base font-bold tracking-wide uppercase"
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              showBorder={true}
            >
                TRANSFORMA TU CLÍNICA CON IA 
            </GradientText>
          </motion.div>

          {/* Título Principal con Glow */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className={`text-2xl xs:text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight mb-3 sm:mb-6 transition-all duration-1000 ${
              showGlow ? 'drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]' : 'drop-shadow-[0_0_5px_rgba(255,255,255,0.1)]'
            }`}
          >
            Homero AI
          </motion.h1>

          {/* Sub-título/Destacado "Ready for everything" con animación de gradiente */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-base xs:text-lg sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug mb-5 sm:mb-8 max-w-xs sm:max-w-xl mx-auto text-center"
          >
            <span className="bg-clip-text text-transparent animate-gradient bg-gradient-to-r from-homero-purpleLight via-white to-homero-purpleLight">
              {typewriterText}
              <span className="inline-block w-2 h-6 align-middle bg-white ml-1 animate-pulse" style={{borderRadius:2}}></span>
            </span>
          </motion.h2>

          {/* Botón CTA único */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="group bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 sm:py-4 sm:px-10 rounded-full text-base sm:text-lg shadow-lg hover:shadow-blue-500/50 hover:scale-105 hover:-translate-y-1 transition-all duration-300 flex items-center justify-between gap-3 min-w-[160px] sm:min-w-[280px] w-full sm:w-auto mx-auto"
            aria-label="Ponte en contacto"
          >
            <span>Ponte en contacto</span>
            <Icon name="Mail" size={20} className="group-hover:scale-110 transition-transform" />
          </motion.a>
        </div>
        {/* Columna derecha: WhatsAppDemo */}
        <div className="flex-1 flex items-center justify-center w-full mt-8 lg:mt-0">
          <WhatsAppDemo />
        </div>
      </div>
    </section>
  );
}
