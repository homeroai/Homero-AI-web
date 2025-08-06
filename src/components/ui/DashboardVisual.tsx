import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@/components/ui/Icon';
import hologo from '@/assets/logos/hologo.png';

export default function DashboardVisual() {
  const sidebarItems = [
    { name: 'Santiago, RM', icon: 'MapPin' },
    { name: 'Launchpad', icon: 'Rocket' },
    { name: 'Tablero', icon: 'LayoutDashboard' },
    { name: 'Conversaciones', icon: 'MessageCircle' },
    { name: 'Calendarios', icon: 'Calendar' },
    { name: 'Pacientes', icon: 'Users' },
    { name: 'Pacientes Potenciales', icon: 'Target' },
    { name: 'Pagos', icon: 'DollarSign' },
    { name: 'Agentes IA', icon: 'Bot' },
    { name: 'Configuración', icon: 'Settings' },
  ];

  const topTabs = ['Conversaciones', 'Acciones manuales', 'Fragmentos', 'Enlaces de activación'];

  const hasSearchResults = true;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative w-full max-w-6xl h-[600px] bg-homero-purpleDark/40 backdrop-blur-xl rounded-xl shadow-2xl flex overflow-hidden border border-white/10"
      aria-label="Homero AI Dashboard Visualization"
    >
      {/* Sidebar */}
      <div className="w-64 bg-black/30 border-r border-white/10 p-6 flex flex-col">
        <div className="flex items-center gap-2 mb-8 select-none">
          <img src={hologo} alt="Homero AI Logo" className="h-12" />
          <span className="text-xl font-bold text-white">Homero AI</span>
        </div>
        <nav className="flex flex-col gap-4">
          {sidebarItems.map((item, index) => (
            <div key={index} className="flex items-center gap-3 text-white/80 select-none"
              aria-label={item.name}
            >
              <Icon name={item.icon} size={20} />
              {item.name}
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-homero-purple/20 p-6 backdrop-blur-md">
        {/* Top Tabs and Search */}
        <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
          <div className="flex flex-wrap gap-4">
            {topTabs.map((tab, index) => (
              <div
                key={index}
                className={`px-4 py-2 rounded-lg text-sm font-semibold select-none
                  ${index === 0 
                    ? 'bg-homero-purpleLight text-white shadow-md border border-homero-purpleLight/50' 
                    : 'text-white/70 backdrop-blur-sm border border-transparent'}
                `}
                aria-selected={index === 0}
                role="tab"
              >
                {tab}
              </div>
            ))}
          </div>
          <div className="relative flex-1 min-w-[200px] md:flex-initial">
            <input
              type="text"
              placeholder="Buscar"
              className="pl-10 pr-4 py-2 w-full rounded-lg bg-black/20 text-white/90 border border-white/10 focus:ring-2 focus:ring-homero-purpleLight focus:border-transparent outline-none placeholder-animated"
              aria-label="Search input"
              readOnly
            />
            <Icon name="Search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60" />
          </div>
        </div>

        {/* Main Dashboard Cards */}
        <h3 className="text-2xl font-bold text-white mb-8 leading-tight" id="conversations-heading">
          Así Homero AI automatiza tu clínica (dental o de salud)
        </h3>
        
        {!hasSearchResults ? (
          <div className="flex-1 flex items-center justify-center text-white/60 text-lg">
            No se encontraron conversaciones. Intenta una búsqueda diferente.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
            {/* Card 1: Clínica Dental (ejemplo) */}
            <motion.div
              whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)" }} // homero-purpleLight glow
              transition={{ duration: 0.2 }}
              className="bg-black/20 rounded-lg p-6 flex flex-col justify-between border border-white/10 shadow-xl backdrop-blur-sm select-none"
              role="listitem"
              aria-labelledby="dental-clinic-name"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="relative w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center">
                  <Icon name="Tooth" size={24} className="text-white" />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-black" aria-label="Online status"></span>
                </div>
                <span className="text-white font-medium text-lg" id="dental-clinic-name">Clínica Dental Sonrisa Perfecta</span>
              </div>
              <p className="text-white/70 text-base mb-4">"Tenemos muchos 'no-shows' y el personal pierde tiempo llamando. Necesitamos recordatorios automáticos de citas y confirmaciones."</p>
              <span className="text-homero-purpleLight text-sm mt-auto">Automatizado: Recordatorios y Confirmaciones de Citas</span>
            </motion.div>

            {/* Card 2: Clínica de Salud (ejemplo) */}
            <motion.div
              whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)" }}
              transition={{ duration: 0.2 }}
              className="bg-black/20 rounded-lg p-6 flex flex-col justify-between border border-white/10 shadow-xl backdrop-blur-sm select-none"
              role="listitem"
              aria-labelledby="health-clinic-name"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="relative w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center">
                  <Icon name="HeartPulse" size={24} className="text-white" />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-gray-400 rounded-full border-2 border-black" aria-label="Offline status"></span>
                </div>
                <span className="text-white font-medium text-lg" id="health-clinic-name">Centro Médico Bienestar</span>
              </div>
              <p className="text-white/70 text-base mb-4">"Los pacientes preguntan sobre resultados de exámenes y horarios de médicos. Necesitamos un asistente para FAQs y envío de información."</p>
              <span className="text-homero-purpleLight text-sm mt-auto">Automatizado: Información de Pacientes y FAQs</span>
            </motion.div>

            {/* Card 3: Clínica (ejemplo de optimización de agenda) */}
            <motion.div
              whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)" }}
              transition={{ duration: 0.2 }}
              className="bg-black/20 rounded-lg p-6 flex flex-col justify-between border border-white/10 shadow-xl backdrop-blur-sm select-none"
              role="listitem"
              aria-labelledby="clinic-optimization-name"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="relative w-10 h-10 rounded-full bg-rose-600 flex items-center justify-center">
                  <Icon name="CalendarCheck" size={24} className="text-white" />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-homero-purpleLight rounded-full border-2 border-black" aria-label="Away status"></span>
                </div>
                <span className="text-white font-medium text-lg" id="clinic-optimization-name">Consultorio Dr. Hernández</span>
              </div>
              <p className="text-white/70 text-base mb-4">"Mi asistente dedica horas a reorganizar la agenda por cambios de última hora. ¿Homero AI puede optimizar la gestión de cupos?"</p>
              <span className="text-homero-purpleLight text-sm mt-auto">Automatizado: Optimización de Agenda y Reorganización</span>
            </motion.div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function DashboardVisualMobile() {
  return (
    <div className="w-full max-w-md mx-auto bg-homero-purpleDark/60 rounded-xl shadow-xl p-6 flex flex-col items-center text-center border border-white/10">
      <img src={hologo} alt="Homero AI Logo" className="h-10 mb-4" />
      <h3 className="text-lg font-bold text-white mb-2">Automatiza tu clínica con IA</h3>
      <p className="text-white/80 text-sm mb-2">Gestiona pacientes, agenda y comunicaciones desde tu celular.</p>
      <ul className="text-white/70 text-sm flex flex-col gap-1 mb-2">
        <li>✔️ Recordatorios automáticos</li>
        <li>✔️ Confirmaciones por WhatsApp/SMS</li>
        <li>✔️ Agenda digital 24/7</li>
        <li>✔️ Asistente de preguntas frecuentes</li>
      </ul>
      <span className="text-homero-purpleLight text-xs mt-2">Vista simplificada para móviles</span>
    </div>
  );
} 