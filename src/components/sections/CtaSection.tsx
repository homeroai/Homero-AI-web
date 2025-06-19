import { motion } from 'framer-motion';

export default function CtaSection() {
  return (
    <section className="py-20 px-6 relative z-10 bg-transparent">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight"
        >
          ¿Listo para optimizar tu clínica y reducir no-shows?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-white/80 mb-10"
        >
          Contacta a Homero AI hoy y descubre cómo la automatización inteligente puede transformar la gestión de tu clínica dental o de salud.
        </motion.p>
        <motion.a
          href="#contact"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="inline-block bg-homero-purpleLight text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg hover:bg-homero-purple transition-colors duration-300 transform hover:scale-105"
        >
          Quiero transformar mi clínica
        </motion.a>
      </div>
    </section>
  );
} 