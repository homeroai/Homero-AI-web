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
    text: 'Hola, buenos días. Me gustaría agendar una consulta dental para una limpieza y revisión general.',
    timestamp: '09:15'
  },
  { 
    sender: 'ai', 
    text: '¡Hola! Buenos días 😊 Por supuesto, con gusto te ayudo a agendar tu consulta. ¿Podrías decirme tu nombre completo?',
    timestamp: '09:16'
  },
  { 
    sender: 'patient', 
    text: 'Sí, me llamo María González.',
    timestamp: '09:17'
  },

  { 
    sender: 'ai', 
    text: 'Perfecto María. ¿Eres paciente nueva o ya tienes historial con nosotros?',
    timestamp: '09:18'
  },
  { 
    sender: 'patient', 
    text: 'Soy paciente nueva. Una amiga me recomendó la clínica.',
    timestamp: '09:19'
  },
  { 
    sender: 'ai', 
    text: '¡Excelente! Bienvenida a nuestra clínica. Para agendar tu cita necesito algunos datos. ¿Tienes algún día preferido de la semana?',
    timestamp: '09:20'
  },
  { 
    sender: 'patient', 
    text: 'Preferiría en la tarde, después de las 5 PM, y cualquier día excepto martes.',
    timestamp: '09:21'
  },
  { 
    sender: 'ai', 
    text: 'Perfecto. Tengo disponibles estos horarios: Lunes 17:30, Miércoles 18:00, Jueves 17:00 y Viernes 18:30. ¿Cuál te conviene más?',
    timestamp: '09:22'
  },
  { 
    sender: 'patient', 
    text: 'El miércoles a las 18:00 me viene perfecto.',
    timestamp: '09:23'
  },
  { 
    sender: 'ai', 
    text: '¡Genial! Te agendo para el miércoles 18:00. ¿Podrías confirmarme tu número de teléfono para enviarte el recordatorio?',
    timestamp: '09:24'
  },
  { 
    sender: 'patient', 
    text: 'Sí, es +56 9 1234 5678',
    timestamp: '09:25'
  },
  { 
    sender: 'ai', 
    text: 'Perfecto. Tu cita para el miércoles a las 18:00 está confirmada. Recibirás un recordatorio 24 horas antes. ¿Necesitas algo más?',
    timestamp: '09:26'
  },
  { 
    sender: 'patient', 
    text: 'No, eso es todo. ¡Muchas gracias!',
    timestamp: '09:27'
  },
  { 
    sender: 'ai', 
    text: '¡De nada! Te esperamos. ¡Que tengas un excelente día! 😊',
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

  // Esta función ahora está vacía y no se necesita, pero la mantenemos por si se usa en otro lugar.
  const handleTypingComplete = () => {};

  return (
    <section id="demo" className="py-16 sm:py-24 bg-transparent min-h-[700px] md:min-h-[700px] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-5xl font-extrabold text-white mb-4"
        >
          
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-12"
        >
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-md mx-auto bg-gray-900 border-4 border-gray-700 rounded-[2.5rem] shadow-2xl p-2 overflow-hidden"
          style={{ height: '500px', minHeight: '500px', maxHeight: '500px', display: 'flex', alignItems: 'stretch' }}
        >
          <div className="bg-white rounded-[2rem] overflow-hidden flex flex-col h-full w-full">
            {/* Header del chat */}
            <div className="bg-gray-100 px-4 py-3 flex items-center gap-3 border-b">
              <div className="w-10 h-10 rounded-full bg-homero-purple flex items-center justify-center">
                <Icon name="Stethoscope" className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-black text-sm">Clínica Dental Familiar</h3>
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
      {/* Separador para evitar movimiento de la siguiente sección */}
      <div className="h-12 md:h-20"></div>
    </section>
  );
} 