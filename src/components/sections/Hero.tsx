import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Icon } from '@/components/ui/Icon';
import backgroundVideo from '@/assets/videos/fondodepantallaweb.mp4';

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
    colors = ["#666666", "#999999", "#666666"],
    animationSpeed = 8,
    showBorder = false,
}: GradientTextProps) {
    const colorString = colors.join(", ");
    const borderColorString = colors[0];

    return (
        <span
            className={`${className} ${showBorder ? 'border-2 px-4 py-2 rounded-full' : ''}`}
            style={{
                background: `linear-gradient(45deg, ${colorString})`,
                backgroundSize: `${colors.length * 100}% 100%`,
                animation: `gradientShift ${animationSpeed}s ease-in-out infinite`,
                borderColor: showBorder ? borderColorString : 'transparent',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
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

  return (
    <section 
      className="relative min-h-[80vh] sm:min-h-screen w-full flex items-center justify-center overflow-x-hidden px-4 sm:px-6 lg:px-8"
      role="banner"
      aria-label="Hero section"
    >
      {/* Video de fondo */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: -1 }}
        >
          <source src={backgroundVideo} type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
        {/* Overlay para mejorar legibilidad del texto */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </div>

      {/* Contenedor principal centrado */}
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center space-y-8">
          {/* Badge/Etiqueta superior */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="inline-block bg-gray-800/20 border border-gray-600/50 rounded-full px-4 py-2">
              <span className="text-gray-300 text-sm font-bold tracking-wide uppercase">
                TRANSFORMA TU CLÍNICA CON IA
              </span>
            </div>
          </motion.div>

          {/* Título Principal */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            Reduce costos, mejora la atención y acelera tu crecimiento
          </motion.h1>



          {/* Botones CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#contact"
              className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              <span>Solicitar Demo</span>
              <Icon name="ArrowRight" size={18} />
            </a>
            <a
              href="#features"
              className="border-2 border-white text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:bg-white hover:text-gray-900 flex items-center justify-center gap-2"
            >
              <span>Ver Casos de Uso</span>
              <Icon name="ExternalLink" size={18} />
            </a>
          </motion.div>
        </div>
      </section>
  );
}
