import React from "react";
import { motion } from "framer-motion";

// Puedes ajustar colores, posiciones y tamaños para más creatividad
export default function BackgroundBlobs() {
  return (
    <div className="pointer-events-none select-none absolute inset-0 w-full h-full overflow-hidden z-0">
      {/* Mancha negra grande arriba izquierda */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-gray-800/40 via-black/30 to-gray-900/30 blur-3xl"
        animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Mancha gris oscura derecha */}
      <motion.div
        className="absolute top-[30%] right-[-12%] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-gray-900/30 via-gray-800/20 to-gray-700/20 blur-3xl"
        animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      {/* Mancha negra pequeña abajo izquierda */}
      <motion.div
        className="absolute bottom-[-8%] left-[10%] w-[250px] h-[250px] rounded-full bg-gradient-to-br from-gray-800/30 via-black/20 to-gray-900/20 blur-2xl"
        animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      {/* Mancha gris oscura pequeña abajo derecha */}
      <motion.div
        className="absolute bottom-[-10%] right-[5%] w-[200px] h-[200px] rounded-full bg-gradient-to-tl from-gray-800/30 via-gray-700/20 to-black/20 blur-2xl"
        animate={{ scale: [1, 1.09, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
    </div>
  );
} 