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
    <section className="pt-8 pb-16 sm:pt-12 sm:py-20 relative z-10 bg-transparent overflow-hidden">
      <div className="relative flex flex-row items-center justify-center gap-8" style={{ minHeight: 140 }}>
        {/* Carrusel izquierdo */}
        <div className="flex-1 flex justify-end">
          <div
            className="w-full max-w-xl flex overflow-hidden h-20 relative"
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
                  style={{ width: 56, height: 56, transition: 'all 0.5s' }}
                >
                  <img
                    src={integration.logo}
                    alt={integration.name + ' logo'}
                    className="object-contain transition-all duration-500"
                    style={{ 
                      maxWidth: 48, 
                      maxHeight: 48,
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
        <div className="flex-shrink-0 flex items-center justify-center relative" style={{ width: 140, height: 140 }}>
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-gray-700 via-gray-600 to-gray-800 blur-2xl opacity-60 animate-pulse" style={{ zIndex: 1 }}></div>
          <img src={hologo} alt="Homero AI Logo" className="object-contain w-28 h-28 relative z-10" style={{ borderRadius: '50%' }} />
        </div>
        {/* Carrusel derecho */}
        <div className="flex-1 flex justify-start">
          <div
            className="w-full max-w-xl flex overflow-hidden h-20 relative"
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
                  style={{ width: 56, height: 56, transition: 'all 0.5s' }}
                >
                  <img
                    src={integration.logo}
                    alt={integration.name + ' logo'}
                    className="object-contain transition-all duration-500"
                    style={{ 
                      maxWidth: 48, 
                      maxHeight: 48,
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