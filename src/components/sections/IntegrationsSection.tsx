import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@/components/ui/Icon';
import HOLogo from '@/assets/logos/HOLogo.png';

export default function IntegrationsSection() {
  const integrations = [
    { name: 'WhatsApp', icon: 'MessagesSquare' },
    { name: 'Google Calendar', icon: 'CalendarDays' },
    { name: 'Email', icon: 'Mail' },
    { name: 'SMS', icon: 'MessageSquareText' },
    { name: 'CRM', icon: 'Cloud' },
    { name: 'Base de Datos', icon: 'Database' },
    { name: 'IA Avanzada', icon: 'Brain' },
    { name: 'Zoom', icon: 'Video' },
    { name: 'Redes Sociales', icon: 'Share2' },
  ];

  // Duplicar para efecto infinito
  const logos = [...integrations, ...integrations, ...integrations];
  const iconSize = 64; // px
  const gap = 32; // px
  const duration = 18; // segundos
  const totalWidth = logos.length * (iconSize + gap);

  return (
    <section className="py-20 px-6 relative z-10 bg-transparent">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight"
        >
          Conecta Homero AI con tu Ecosistema Clínico
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-white/80 max-w-3xl mx-auto"
        >
          Integra Homero AI sin esfuerzo con las herramientas que ya usas en tu clínica dental o de salud, potenciando cada aspecto de tu operación.
        </motion.p>
      </div>

      <div className="relative flex items-center justify-center py-10" style={{ minHeight: 200 }}>
        {/* Línea de conexión de fondo */}
        <div className="absolute w-full h-px bg-homero-purple/50"></div>

        {/* Carrusel tipo Framer */}
        <div className="relative w-full max-w-5xl mx-auto flex items-center justify-center" style={{ height: iconSize + 40 }}>
          <section
            className="w-full overflow-hidden"
            style={{
              maskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, black 15%, black 85%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, black 15%, black 85%, rgba(0,0,0,0) 100%)',
            }}
          >
            <motion.ul
              className="flex items-center gap-8 m-0 p-0 list-none relative"
              style={{ width: totalWidth }}
              animate={{ x: [0, -totalWidth / 3] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration,
                  ease: 'linear',
                },
              }}
            >
              {logos.map((integration, idx) => (
                <li
                  key={`${integration.name}-${idx}`}
                  className="flex flex-col items-center gap-2 text-white/70 flex-shrink-0"
                  style={{ width: iconSize }}
                >
                  <div className="w-16 h-16 rounded-full bg-black/50 border border-white/10 flex items-center justify-center shadow-lg">
                    <Icon name={integration.icon} size={32} className="text-homero-purpleLight" />
                  </div>
                  <span className="text-xs font-medium text-center mt-2 whitespace-nowrap">{integration.name}</span>
                </li>
              ))}
            </motion.ul>
          </section>

          {/* Logo central de Homero AI, fijo y con glow */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
            <motion.div
              className="p-4 bg-homero-purpleDark rounded-full shadow-2xl border-4 border-homero-purpleLight flex items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              style={{ width: 120, height: 120 }}
              animate={{
                scale: [1, 1.2, 1],
                boxShadow: [
                  '0 0 0 rgba(255,255,255,0)',
                  '0 0 20px rgba(255,255,255,0.3)',
                  '0 0 0 rgba(255,255,255,0)'
                ],
                transition: { duration: 2, repeat: Infinity }
              }}
            >
              <img src={HOLogo} alt="Homero AI Logo" className="h-16 w-16 filter invert(100%)" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 