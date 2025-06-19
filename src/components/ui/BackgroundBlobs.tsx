import React from "react";
import { motion } from "framer-motion";

// Puedes ajustar colores, posiciones y tamaños para más creatividad
export default function BackgroundBlobs() {
  return (
    <div className="pointer-events-none select-none absolute inset-0 w-full h-full overflow-hidden z-0">
      {/* Mancha azul grande arriba izquierda */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-500/40 via-homero-purple/30 to-blue-700/30 blur-3xl"
        animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Mancha púrpura derecha */}
      <motion.div
        className="absolute top-[30%] right-[-12%] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-homero-purple/30 via-homero-purpleLight/20 to-blue-400/20 blur-3xl"
        animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      {/* Mancha azul pequeña abajo izquierda */}
      <motion.div
        className="absolute bottom-[-8%] left-[10%] w-[250px] h-[250px] rounded-full bg-gradient-to-br from-blue-400/30 via-blue-600/20 to-homero-purple/20 blur-2xl"
        animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      {/* Mancha púrpura pequeña abajo derecha */}
      <motion.div
        className="absolute bottom-[-10%] right-[5%] w-[200px] h-[200px] rounded-full bg-gradient-to-tl from-homero-purpleLight/30 via-blue-400/20 to-homero-purple/20 blur-2xl"
        animate={{ scale: [1, 1.09, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
    </div>
  );
} 