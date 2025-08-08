import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@/components/ui/Icon';

export default function BeforeAfterSection() {
  const beforeProblems = [
    { text: "Tiempo perdido respondiendo mensajes", icon: 'Clock' },
    { text: "Clientes esperando por respuesta", icon: 'Users' },
    { text: "Mensajes ignorados fuera del horario laboral", icon: 'MessageSquare' },
    { text: "Oportunidades de venta perdidas por demoras", icon: 'Calendar' },
    { text: "Gestión manual de pedidos y reservas", icon: 'Clock' },
  ];

  const afterBenefits = [
    { text: "Consultas resueltas en segundos", icon: 'Zap' },
    { text: "Clientes atendidos 24/7", icon: 'Users' },
    { text: "Tu negocio siempre disponible", icon: 'Heart' },
    { text: "Ventas y reservas en piloto automático", icon: 'Calendar' },
    { text: "Procesos automatizados sin esfuerzo manual", icon: 'Zap' },
  ];

  const beforeMessages = [
    { 
      name: "Carlos Mendoza", 
      message: "Llevo horas sin respuesta", 
      emoji: "😠😠",
      app: "whatsapp",
      appColor: "bg-green-500"
    },
    { 
      name: "Sofía Rojas", 
      message: "¿Alguien me puede atender?", 
      emoji: "😰",
      app: "instagram", 
      appColor: "bg-orange-500"
    },
    { 
      name: "Roberto Silva", 
      message: "Estoy esperando por una respuesta", 
      emoji: "⌛️",
      app: "messenger",
      appColor: "bg-gray-600"
    },
  ];

  const afterMessages = [
    { 
      name: "María González", 
      message: "Gracias por la aclaración", 
      emoji: "😊",
      app: "whatsapp",
      appColor: "bg-green-500"
    },
    { 
      name: "Fernando Herrera", 
      message: "Gracias por la respuesta", 
      emoji: "✅",
      app: "whatsapp",
      appColor: "bg-green-500"
    },
    { 
      name: "Patricia Vega", 
      message: "Excelente atención, volveré.", 
      emoji: "🙌",
      app: "whatsapp",
      appColor: "bg-green-500"
    },
  ];

  return (
    <section className="pt-24 pb-8 sm:pt-32 sm:pb-12 relative z-10 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Título principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-wider mb-4">
            ANTES Y DESPUÉS
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
            Descubre cómo Homero AI transforma la gestión de tu negocio
          </p>
        </motion.div>

        {/* Contenedor principal de comparación */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          
          {/* Panel ANTES */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-red-500/10 to-red-600/20 backdrop-blur-sm border border-red-500/30 rounded-2xl p-5 h-full">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-red-400 mb-1">Sin Homero AI</h3>
                <p className="text-red-300/80 text-sm"></p>
              </div>

              {/* Lista de problemas */}
              <div className="space-y-3 mb-6 flex flex-col items-start">
                {beforeProblems.map((problem, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-2 justify-start w-full"
                  >
                    <div className="flex-shrink-0 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                      <Icon name="X" className="w-2 h-2 text-white" />
                    </div>
                    <span className="text-white/90 text-lg">{problem.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* iPhone con notificaciones */}
              <div className="flex justify-center">
                <div className="relative">
                  {/* Frame del iPhone */}
                  <div className="w-72 h-[500px] bg-black rounded-[3rem] p-2 shadow-2xl">
                    {/* Pantalla del iPhone */}
                    <div className="w-full h-full bg-gradient-to-b from-gray-600 via-gray-500 to-gray-400 rounded-[2.5rem] overflow-hidden relative">
                      {/* Dynamic Island */}
                      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-24 h-8 bg-black rounded-full z-20"></div>
                      
                      {/* Título del centro de notificaciones */}
                      <div className="pt-16 pb-6 text-center">
                        <span className="text-gray-800/80 text-lg font-medium">Centro de notificaciones</span>
                      </div>
                      
                      {/* Notificaciones */}
                      <div className="px-4 space-y-3">
                        {beforeMessages.map((msg, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-2xl p-4 shadow-lg"
                          >
                            <div className="flex items-start space-x-3">
                              {/* Foto de perfil con ícono de app */}
                              <div className="relative flex-shrink-0">
                                <div className="w-12 h-12 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center">
                                  <span className="text-gray-600 text-lg font-bold">{msg.name.charAt(0)}</span>
                                </div>
                                <div className={`absolute -bottom-1 -right-1 w-6 h-6 ${msg.appColor} rounded-full flex items-center justify-center`}>
                                  {msg.app === 'whatsapp' && <div className="w-2 h-2 bg-white rounded-full"></div>}
                                  {msg.app === 'instagram' && <div className="w-2 h-2 bg-white rounded-sm"></div>}
                                  {msg.app === 'messenger' && <div className="w-2 h-2 bg-white rounded-sm"></div>}
                                </div>
                              </div>
                              
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between mb-1">
                                  <span className="text-black text-sm font-bold">{msg.name}</span>
                                  <span className="text-gray-500 text-xs">ahora</span>
                                </div>
                                <div className="text-gray-700 text-sm leading-relaxed">
                                  {msg.message} {msg.emoji}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Panel DESPUÉS */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-green-500/10 to-green-600/20 backdrop-blur-sm border border-green-500/30 rounded-2xl p-5 h-full">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-green-400 mb-1">Con Homero AI</h3>
                <p className="text-green-300/80 text-sm"></p>
              </div>

              {/* Lista de beneficios */}
              <div className="space-y-3 mb-6 flex flex-col items-start">
                {afterBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-2 justify-start w-full"
                  >
                    <div className="flex-shrink-0 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                      <Icon name="Check" className="w-2 h-2 text-white" />
                    </div>
                    <span className="text-white/90 text-lg">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* iPhone con notificaciones */}
              <div className="flex justify-center">
                <div className="relative">
                  {/* Frame del iPhone */}
                  <div className="w-72 h-[500px] bg-black rounded-[3rem] p-2 shadow-2xl">
                    {/* Pantalla del iPhone */}
                    <div className="w-full h-full bg-gradient-to-b from-gray-600 via-gray-500 to-gray-400 rounded-[2.5rem] overflow-hidden relative">
                      {/* Dynamic Island */}
                      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-24 h-8 bg-black rounded-full z-20"></div>
                      

                      
                      {/* Título del centro de notificaciones */}
                      <div className="pt-16 pb-6 text-center">
                        <span className="text-gray-800/80 text-lg font-medium">Centro de notificaciones</span>
                      </div>
                      
                      {/* Notificaciones */}
                      <div className="px-4 space-y-3">
                        {afterMessages.map((msg, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-2xl p-4 shadow-lg"
                          >
                            <div className="flex items-start space-x-3">
                              {/* Foto de perfil con ícono de app */}
                              <div className="relative flex-shrink-0">
                                <div className="w-12 h-12 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center">
                                  <span className="text-gray-600 text-lg font-bold">{msg.name.charAt(0)}</span>
                                </div>
                                <div className={`absolute -bottom-1 -right-1 w-6 h-6 ${msg.appColor} rounded-full flex items-center justify-center`}>
                                  {msg.app === 'whatsapp' && <div className="w-2 h-2 bg-white rounded-full"></div>}
                                  {msg.app === 'instagram' && <div className="w-2 h-2 bg-white rounded-sm"></div>}
                                  {msg.app === 'messenger' && <div className="w-2 h-2 bg-white rounded-sm"></div>}
                                </div>
                              </div>
                              
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between mb-1">
                                  <span className="text-black text-sm font-bold">{msg.name}</span>
                                  <span className="text-gray-500 text-xs">ahora</span>
                                </div>
                                <div className="text-gray-700 text-sm leading-relaxed">
                                  {msg.message} {msg.emoji}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-xl text-white/90 mb-6">
            Reduce costos operativos, mejora el servicio y acelera el crecimiento de tu negocio
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-gray-700 to-gray-800 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Comenzar con Homero AI
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 