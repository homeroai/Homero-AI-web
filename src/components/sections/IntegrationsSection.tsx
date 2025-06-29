import React from 'react';
import { motion } from 'framer-motion';
import hologo from '@/assets/logos/hologo.png';
import linkedinLogo from '@/assets/logos_4_homero/LinkedIn/LinkedIn_Symbol_0.svg';
import openaiLogo from '@/assets/logos_4_homero/OpenAI/OpenAI_Symbol_1.png';
import facebookLogo from '@/assets/logos_4_homero/Facebook/Facebook_Symbol_0.svg';
import notionLogo from '@/assets/logos_4_homero/Notion/Notion_Symbol_0.svg';
import gmailLogo from '@/assets/logos_4_homero/Gmail/Gmail_idrA5FDGTH_0.svg';
import airtableLogo from '@/assets/logos_4_homero/Airtable/Airtable_idbbncOsuL_0.svg';
import instagramLogo from '@/assets/logos_4_homero/Instagram/Instagram_Symbol_Alternative_0.svg';
import n8nLogo from '@/assets/logos_4_homero/N8n.io/N8n.io_id9y5Acqtx_0.svg';
import calendlyLogo from '@/assets/logos_4_homero/Calendly/Calendly_idoHNAJiuQ_0.svg';
import googleCalendarLogo from '@/assets/logos_4_homero/GoogleCalendar/google-calendar-seeklogo.png';
import googleDriveLogo from '@/assets/logos_4_homero/GoogleDrive/google-drive-seeklogo.png';
import whatsappLogo from '@/assets/logos_4_homero/WhatsApp/whatsapp-icon-seeklogo.png';

export default function IntegrationsSection() {
  const integrations = [
    { name: 'Google Drive', logo: googleDriveLogo },
    { name: 'OpenAI', logo: openaiLogo },
    { name: 'Facebook', logo: facebookLogo },
    { name: 'Notion', logo: notionLogo },
    { name: 'WhatsApp', logo: whatsappLogo },
    { name: 'Google Calendar', logo: googleCalendarLogo },
    { name: 'LinkedIn', logo: linkedinLogo },
    { name: 'Calendly', logo: calendlyLogo },
    { name: 'Gmail', logo: gmailLogo },
    { name: 'Airtable', logo: airtableLogo },
    { name: 'Instagram', logo: instagramLogo },
    { name: 'N8n.io', logo: n8nLogo },
  ];

  // Dividir los logos en dos columnas de 6
  const leftLogos = integrations.slice(0, 6);
  const rightLogos = integrations.slice(6, 12);
  // Duplicar para animación infinita
  const leftLogosLoop = [...leftLogos, ...leftLogos, ...leftLogos, ...leftLogos];
  const rightLogosLoop = [...rightLogos, ...rightLogos, ...rightLogos, ...rightLogos];

  return (
    <section className="py-24 sm:py-32 relative z-10 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-extrabold text-white tracking-wider"
        >
          HOMERO AI
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mt-4"
        >
          Conecta el ecosistema de tu clínica a Homero y deja que la IA se encargue de agendar, responder y acompañar a tus pacientes, sin perder el toque humano.
        </motion.p>
      </div>
      <div className="relative flex flex-row items-center justify-center gap-8" style={{ minHeight: 180 }}>
        {/* Carrusel izquierdo */}
        <div className="flex-1 flex justify-end">
          <div
            className="w-full max-w-xl flex overflow-hidden h-24 relative"
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, #fff 30%, #fff 70%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, #fff 30%, #fff 70%, transparent 100%)',
            }}
          >
            <div className="flex items-center animate-scroll-right" style={{ minWidth: 'fit-content' }}>
              {leftLogosLoop.map((integration, idx) => (
                <div
                  key={`left-${integration.name}-${idx}`}
                  className="flex items-center justify-center flex-shrink-0 mx-4 transition-all duration-500"
                  style={{ width: 64, height: 64, transition: 'all 0.5s' }}
                >
                  <img
                    src={integration.logo}
                    alt={integration.name + ' logo'}
                    className="object-contain transition-all duration-500"
                    style={{ 
                      maxWidth: 56, 
                      maxHeight: 56,
                      opacity: 'calc(0.5 + 0.5 * (1 - Math.abs((idx % 6) - 2.5) / 2.5))',
                      transform: `scale(${0.8 + 0.4 * (1 - Math.abs((idx % 6) - 2.5) / 2.5)})`
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Logo central de Homero con aurora */}
        <div className="flex-shrink-0 flex items-center justify-center relative" style={{ width: 180, height: 180 }}>
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-homero-purpleLight via-blue-500 to-homero-purple blur-2xl opacity-60 animate-pulse" style={{ zIndex: 1 }}></div>
          <img src={hologo} alt="Homero AI Logo" className="object-contain w-36 h-36 relative z-10" style={{ borderRadius: '50%' }} />
        </div>
        {/* Carrusel derecho */}
        <div className="flex-1 flex justify-start">
          <div
            className="w-full max-w-xl flex overflow-hidden h-24 relative"
            style={{
              maskImage: 'linear-gradient(to left, transparent 0%, #fff 30%, #fff 70%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to left, transparent 0%, #fff 30%, #fff 70%, transparent 100%)',
            }}
          >
            <div className="flex items-center animate-scroll-left" style={{ minWidth: 'fit-content' }}>
              {rightLogosLoop.map((integration, idx) => (
                <div
                  key={`right-${integration.name}-${idx}`}
                  className="flex items-center justify-center flex-shrink-0 mx-4 transition-all duration-500"
                  style={{ width: 64, height: 64, transition: 'all 0.5s' }}
                >
                  <img
                    src={integration.logo}
                    alt={integration.name + ' logo'}
                    className="object-contain transition-all duration-500"
                    style={{ 
                      maxWidth: 56, 
                      maxHeight: 56,
                      opacity: 'calc(0.5 + 0.5 * (1 - Math.abs((idx % 6) - 2.5) / 2.5))',
                      transform: `scale(${0.8 + 0.4 * (1 - Math.abs((idx % 6) - 2.5) / 2.5)})`
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 