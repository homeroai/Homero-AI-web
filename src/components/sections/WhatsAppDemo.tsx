import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@/components/ui/Icon';

interface MessageData {
  sender: 'patient' | 'ai';
  text: string;
  timestamp?: string;
}

const conversation: MessageData[] = [
  { 
    sender: 'patient', 
    text: 'Hola, buenas tardes',
    timestamp: '09:15'
  },
  { 
    sender: 'ai', 
    text: '¡Hola! 😊 ¿En qué puedo ayudarte hoy?',
    timestamp: '09:16'
  },
  { 
    sender: 'patient', 
    text: 'Me gustaría agendar una cita para una limpieza dental',
    timestamp: '09:17'
  },
  { 
    sender: 'ai', 
    text: '¡Claro! Para agendar tu cita, necesito que me proporciones tu nombre completo y tu RUT, por favor.',
    timestamp: '09:18'
  },
  { 
    sender: 'patient', 
    text: 'Me llamo Daniel, Rut 21.111.111-1',
    timestamp: '09:19'
  },
  { 
    sender: 'ai', 
    text: 'Gracias, Daniel. ¿Qué día prefieres para tu limpieza dental? ¿Te gustaría en la mañana o en la tarde?',
    timestamp: '09:20'
  },
  { 
    sender: 'patient', 
    text: 'Tienen disponible el 29 a las 13?',
    timestamp: '09:21'
  },
  { 
    sender: 'ai', 
    text: 'El 29 de julio a las 13:00 no está disponible. Pero tenemos horarios libres a las 08:00, 09:00, 10:00, 11:00, 12:00, 14:00, 15:00, 16:00 o 17:00.\n\n¿Cuál te gustaría elegir?',
    timestamp: '09:22'
  },
  { 
    sender: 'patient', 
    text: 'A las 10 esta bien gracias',
    timestamp: '09:23'
  },
  { 
    sender: 'ai', 
    text: '✅ ¡Perfecto! Tu cita ha sido agendada exitosamente.\n\n📅 Limpieza Dental - Daniel\n🕐 Martes, 29 de julio de 2025 a las 10:00\n📍 Clínica DentIA\n\nSi necesitas reagendar o cancelar, contáctanos con tu RUT: 21.111.111-1. ¡Te esperamos! 😊',
    timestamp: '09:24'
  },
  { 
    sender: 'patient', 
    text: 'La puedes cancelar por favor, se me olvido que tengo un evento',
    timestamp: '09:25'
  },
  { 
    sender: 'ai', 
    text: '✅ La cita de limpieza dental para ti, Daniel, ha sido cancelada exitosamente.\n\nSi necesitas agendar una nueva cita o cualquier otra cosa, no dudes en decírmelo. ¡Estoy aquí para ayudarte! 😊',
    timestamp: '09:26'
  },
  { 
    sender: 'patient', 
    text: 'Me la puedes agendar el 29 a las 15?',
    timestamp: '09:27'
  },
  { 
    sender: 'ai', 
    text: '✅ ¡Perfecto! Tu cita ha sido agendada exitosamente.\n\n📅 Limpieza Dental - Daniel\n🕐 Martes, 29 de julio de 2025 a las 15:00\n📍 Clínica DentIA\n\nSi necesitas reagendar o cancelar, contáctanos con tu RUT: 21.111.111-1. ¡Te esperamos! 😊',
    timestamp: '09:28'
  },
];

const Message = ({ msg }: { msg: MessageData }) => (
  <div
    className={`w-fit max-w-[85%] rounded-2xl px-4 py-3 text-sm md:text-base ${
      msg.sender === 'patient'
        ? 'self-end bg-[#dcf8c6] text-black ml-auto'
        : 'self-start bg-white text-black'
    }`}
  >
    <div className="flex flex-col">
      <span className="whitespace-pre-wrap">{msg.text}</span>
      {msg.timestamp && (
        <span className={`text-xs mt-1 ${
          msg.sender === 'patient' ? 'text-gray-600' : 'text-gray-500'
        }`}>
          {msg.timestamp}
        </span>
      )}
    </div>
  </div>
);

const TypingIndicator = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    className="self-start bg-white rounded-2xl px-4 py-3 text-black"
  >
    <div className="flex space-x-1">
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
        className="w-2 h-2 bg-gray-400 rounded-full"
      />
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
        className="w-2 h-2 bg-gray-400 rounded-full"
      />
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
        className="w-2 h-2 bg-gray-400 rounded-full"
      />
    </div>
  </motion.div>
);

// Componente para las conexiones y logos flotantes
const IntegrationConnections = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Partículas flotantes */}
    <motion.div
      animate={{ 
        y: [0, -15, 0],
        opacity: [0.3, 0.7, 0.3]
      }}
      transition={{ 
        duration: 4, 
        repeat: Infinity,
        ease: "easeInOut"
      }}
                    className="absolute top-[35%] left-[35%] w-2 h-2 bg-gray-400 rounded-full"
    />
    <motion.div
      animate={{ 
        y: [0, -12, 0],
        opacity: [0.2, 0.5, 0.2]
      }}
      transition={{ 
        duration: 5, 
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }}
      className="absolute top-[65%] left-[30%] w-1 h-1 bg-red-400 rounded-full"
    />
  </div>
);

export default function WhatsAppDemo() {
  const [messages, setMessages] = useState<MessageData[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Función simple para agregar el siguiente mensaje
  const addNextMessage = () => {
    if (currentMessageIndex < conversation.length) {
      setMessages(prev => [...prev, conversation[currentMessageIndex]]);
      setCurrentMessageIndex(prev => prev + 1);
    }
  };

  // Efecto simple para iniciar la conversación
  useEffect(() => {
    if (messages.length === 0 && currentMessageIndex === 0) {
      const timer = setTimeout(() => {
        setIsTyping(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [messages, currentMessageIndex]);

  // Efecto simple para manejar los mensajes
  useEffect(() => {
    if (isTyping && currentMessageIndex < conversation.length) {
      const timer = setTimeout(() => {
        addNextMessage();
        setIsTyping(false);

        if (currentMessageIndex + 1 < conversation.length) {
          setTimeout(() => {
            setIsTyping(true);
          }, 1000);
        } else {
          // Al final de la conversación, reiniciar tras 5 segundos
          setTimeout(() => {
            setMessages([]);
            setCurrentMessageIndex(0);
            setIsTyping(true);
          }, 5000);
        }
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isTyping, currentMessageIndex]);

  // Scroll automático
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  return (
          <section id="demo" className="py-16 sm:py-24 bg-gradient-to-br from-gray-900 to-gray-800 min-h-[700px] md:min-h-[800px] overflow-hidden relative">
      {/* Fondo con conexiones */}
      <IntegrationConnections />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Columna izquierda - Texto y descripción */}
          <div className="text-left md:text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-5xl font-extrabold text-white mb-6"
            >
              Responde, agenda y <span className="text-gray-400">automatiza</span> tus citas
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-white/80 mb-8"
            > Mantén el toque humano mientras optimizas tu tiempo. Nuestra IA entiende el contexto médico, 
              responde con empatía y asegura que cada paciente se sienta cuidado y escuchado.
              
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base text-white/70 mb-8 max-w-2xl"
            >
              
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3 md:justify-center">
                <div className="bg-white/10 p-2 rounded-full">
                  <Icon name="Calendar" className="text-white w-5 h-5" />
                </div>
                <p className="text-white/90">Integración con sistemas de agenda</p>
              </div>
              
              <div className="flex items-center space-x-3 md:justify-center">
                <div className="bg-white/10 p-2 rounded-full">
                  <Icon name="Mail" className="text-white w-5 h-5" />
                </div>
                <p className="text-white/90">Notificaciones automáticas por email</p>
              </div>
              
              <div className="flex items-center space-x-3 md:justify-center">
                <div className="bg-white/10 p-2 rounded-full">
                  <Icon name="MessageSquare" className="text-white w-5 h-5" />
                </div>
                <p className="text-white/90">Comunicación fluida por WhatsApp</p>
              </div>
            </motion.div>
          </div>
          
          {/* Columna derecha - WhatsApp Demo */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="w-full max-w-[350px] mx-auto bg-gray-900 border-4 border-gray-700 rounded-[2.5rem] shadow-2xl p-2 overflow-hidden relative z-20"
            style={{ height: '600px', minHeight: '600px', maxHeight: '600px', display: 'flex', alignItems: 'stretch' }}
          >
            <div className="bg-white rounded-[2rem] overflow-hidden flex flex-col h-full w-full">
              {/* Header del chat */}
              <div className="bg-gray-100 px-4 py-3 flex items-center gap-3 border-b">
                <div className="w-10 h-10 rounded-full bg-homero-purple flex items-center justify-center">
                  <Icon name="Stethoscope" className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-green-600 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    en línea
                  </p>
                </div>
              </div>

              {/* Cuerpo del chat */}
              <div 
                ref={chatContainerRef} 
                className="flex-1 bg-cover bg-center p-4 flex flex-col gap-3 overflow-y-auto w-full"
                style={{ backgroundImage: "url('https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg')"}}
              >
                <AnimatePresence>
                  {messages.map((msg, index) => (
                    <Message 
                      key={index} 
                      msg={msg} 
                    />
                  ))}
                  {isTyping && <TypingIndicator />}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 