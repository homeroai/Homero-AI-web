import { motion } from 'framer-motion';
import { Icon } from '@/components/ui/Icon';
import React from 'react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 relative z-10 bg-transparent">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-white mb-4"
        >
          Agenda una Demostración para tu Clínica
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-white/80 max-w-3xl mx-auto"
        >
          ¿Listo para optimizar la gestión de tu clínica dental o de salud con Homero AI? Contáctanos para una demostración personalizada.
        </motion.p>
      </div>

      <div className="max-w-2xl mx-auto bg-black/40 border border-homero-purple/30 rounded-lg p-8 shadow-lg">
        <div className="flex flex-col md:flex-row justify-around items-center gap-8 mb-10">
          <div className="flex items-center gap-3">
            <Icon name="Mail" size={32} className="text-homero-purpleLight" />
            <span className="text-white text-lg">homeroagent@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Icon name="MapPin" size={32} className="text-homero-purpleLight" />
            <span className="text-white text-lg">Santiago, Chile 🇨🇱</span>
          </div>
        </div>

        {/* Para la demo, simplificamos el formulario a un mensaje. En un proyecto real, aquí iría un formulario interactivo. */}
        <p className="text-white/70 text-center">
          En esta sección, se integraría un formulario para agendar una demostración o enviar una consulta específica para clínicas.
        </p>
        {/* <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-white text-sm font-bold mb-2">Nombre</label>
            <input type="text" id="name" className="shadow appearance-none border border-homero-purple/50 rounded w-full py-3 px-4 text-white leading-tight focus:outline-none focus:shadow-outline bg-black/30" placeholder="Tu nombre" />
          </div>
          <div>
            <label htmlFor="email" className="block text-white text-sm font-bold mb-2">Email</label>
            <input type="email" id="email" className="shadow appearance-none border border-homero-purple/50 rounded w-full py-3 px-4 text-white leading-tight focus:outline-none focus:shadow-outline bg-black/30" placeholder="tu@email.com" />
          </div>
          <div>
            <label htmlFor="message" className="block text-white text-sm font-bold mb-2">Mensaje</label>
            <textarea id="message" rows={5} className="shadow appearance-none border border-homero-purple/50 rounded w-full py-3 px-4 text-white leading-tight focus:outline-none focus:shadow-outline bg-black/30" placeholder="Tu mensaje"></textarea>
          </div>
          <button type="submit" className="bg-homero-purpleLight text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg hover:bg-homero-purple transition-colors duration-300 transform hover:scale-105">Enviar Mensaje</button>
        </form> */}
      </div>
    </section>
  );
} 