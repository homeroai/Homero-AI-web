import { motion } from 'framer-motion';
import { Icon } from '@/components/ui/Icon';
import React from 'react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-10 sm:py-20 px-2 sm:px-6 relative z-10 bg-transparent">
      <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12 px-2 sm:px-0">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-xl sm:text-5xl md:text-6xl font-extrabold text-white mb-2 sm:mb-4"
        >
          Agenda una Demostración para tu Clínica
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg text-white/80 max-w-xs sm:max-w-3xl mx-auto"
        >
          ¿Listo para optimizar la gestión de tu clínica? Agenda una demostración personalizada en el horario que mejor te convenga.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-2xl mx-auto"
      >
        <div className="bg-black/40 border border-homero-purple/30 rounded-lg p-8 sm:p-12 shadow-lg text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Icon name="Calendar" className="text-gray-400" size={32} />
            <h3 className="text-2xl font-semibold text-white">Agenda tu demostración</h3>
          </div>
          
          <p className="text-white/80 mb-8 text-lg">
            Selecciona el horario que mejor te convenga para una demostración personalizada de Homero AI
          </p>
          
          <a
            href="https://calendar.app.google/nWgKwX7gFA7Pcn5K7"
            target="_blank"
            rel="noopener noreferrer"
                          className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Icon name="Calendar" className="text-white" size={24} />
            Abrir Calendario
            <Icon name="ExternalLink" className="text-white" size={20} />
          </a>
          
          <div className="mt-8 space-y-4">
            <div className="flex items-center justify-center gap-3 text-white/70">
              <Icon name="Clock" className="text-gray-400" size={20} />
              <span>Duración: 30 minutos</span>
        </div>
            <div className="flex items-center justify-center gap-3 text-white/70">
              <Icon name="Video" className="text-gray-400" size={20} />
              <span>Demostración por videollamada</span>
        </div>
            <div className="flex items-center justify-center gap-3 text-white/70">
              <Icon name="Gift" className="text-gray-400" size={20} />
              <span>Completamente gratuita</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
} 