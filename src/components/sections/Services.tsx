import React from 'react';
import { motion } from 'framer-motion';
import DashboardVisual, { DashboardVisualMobile } from '@/components/ui/DashboardVisual'; // Importar ambas versiones

export default function Services() {
  return (
    <section className="relative w-full py-20 overflow-hidden flex items-center justify-center bg-transparent">
      {/* Contenedor para el título y el visual del dashboard */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl font-extrabold text-white mb-8 leading-tight"
        >
          ✨ Gestiona tu clinica con la IA ✨
        </motion.h2>
        {/* Desktop/Tablet Dashboard */}
        <div className="hidden sm:block w-full">
          <DashboardVisual />
        </div>
        {/* Mobile Dashboard */}
        <div className="block sm:hidden w-full">
          <DashboardVisualMobile />
        </div>
      </div>
    </section>
  );
} 