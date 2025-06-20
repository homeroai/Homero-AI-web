import { motion } from 'framer-motion';
import { Icon } from '@/components/ui/Icon';
import React from 'react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-12 sm:py-20 px-2 sm:px-6 relative z-10 bg-transparent">
      <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-5xl md:text-6xl font-extrabold text-white mb-2 sm:mb-4"
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
          ¿Listo para optimizar la gestión de tu clínica dental o de salud con Homero AI? Contáctanos para una demostración personalizada.
        </motion.p>
      </div>

      <div className="max-w-xl sm:max-w-2xl mx-auto bg-black/40 border border-homero-purple/30 rounded-lg p-4 sm:p-8 shadow-lg">
        <div className="flex flex-col sm:flex-row justify-around items-center gap-4 sm:gap-8 mb-6 sm:mb-10">
          <div className="flex items-center gap-2 sm:gap-3">
            <Icon name="Mail" size={24} className="sm:text-[32px] text-homero-purpleLight" />
            <span className="text-white text-base sm:text-lg">homeroagent@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <Icon name="MapPin" size={24} className="sm:text-[32px] text-homero-purpleLight" />
            <span className="text-white text-base sm:text-lg">Santiago, Chile 🇨🇱</span>
          </div>
        </div>
        <p className="text-white/70 text-center text-sm sm:text-base">
          En esta sección, se integraría un formulario para agendar una demostración o enviar una consulta específica para clínicas.
        </p>
      </div>
    </section>
  );
} 