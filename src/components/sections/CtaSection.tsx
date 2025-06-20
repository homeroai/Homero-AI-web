import { motion } from 'framer-motion';
import { Icon } from '@/components/ui/Icon';

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
          Contacta a Homero AI hoy y descubre cómo la automatización inteligente puede transformar la gestión de tu clínica.
        </motion.p>
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="group bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 sm:px-10 rounded-full text-base sm:text-lg shadow-lg hover:shadow-blue-500/50 hover:scale-105 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto max-w-xs sm:max-w-sm"
          aria-label="Ponte en contacto"
        >
          <span>Ponte en contacto</span>
          <Icon name="Mail" size={20} className="group-hover:scale-110 transition-transform" />
        </motion.a>
      </div>
    </section>
  );
} 