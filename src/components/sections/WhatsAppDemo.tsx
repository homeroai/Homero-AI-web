import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@/components/ui/Icon';

interface MessageData {
  sender: 'customer' | 'ai';
  text: string;
  timestamp?: string;
}

const conversation: MessageData[] = [
  {
    sender: 'customer',
    text: 'Hola, aun tienen la camiseta Basic en negro?',
    timestamp: '14:15'
  },
  {
    sender: 'ai',
    text: '¡Hola! 😊 Claro que si, que talla estas buscando?',
    timestamp: '14:16'
  },
  {
    sender: 'customer',
    text: 'M',
    timestamp: '14:16'
  },
  {
    sender: 'ai',
    text: 'Sí, tenemos M en negro. Precio $14.990. ¿Compras o reservo?',
    timestamp: '14:17'
  },
  {
    sender: 'customer',
    text: 'Comprar',
    timestamp: '14:17'
  },
  {
    sender: 'ai',
    text: 'Listo. Link de pago: https://mitienda.com/camiseta-basic-negra',
    timestamp: '14:18'
  }
];

const Message = ({ msg }: { msg: MessageData }) => (
  <div
    className={`w-fit max-w-[85%] rounded-2xl px-4 py-3 text-sm md:text-base ${
      msg.sender === 'customer'
        ? 'self-end bg-[#dcf8c6] text-black ml-auto'
        : 'self-start bg-white text-black'
    }`}
  >
    <div className="flex flex-col">
      <span className="whitespace-pre-wrap">{msg.text}</span>
      {msg.timestamp && (
        <span className={`text-xs mt-1 ${
          msg.sender === 'customer' ? 'text-gray-600' : 'text-gray-500'
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
        transition={{ duration: 0.5, repeat: Infinity, delay: 0 }}
        className="w-2 h-2 bg-gray-400 rounded-full"
      />
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, delay: 0.15 }}
        className="w-2 h-2 bg-gray-400 rounded-full"
      />
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, delay: 0.3 }}
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

  // Efecto simple para iniciar la conversación (más rápido)
  useEffect(() => {
    if (messages.length === 0 && currentMessageIndex === 0) {
      const timer = setTimeout(() => {
        setIsTyping(true);
      }, 600);

      return () => clearTimeout(timer);
    }
  }, [messages, currentMessageIndex]);

  // Efecto simple para manejar los mensajes (más rápido)
  useEffect(() => {
    if (isTyping && currentMessageIndex < conversation.length) {
      const timer = setTimeout(() => {
        addNextMessage();
        setIsTyping(false);

        if (currentMessageIndex + 1 < conversation.length) {
          setTimeout(() => {
            setIsTyping(true);
          }, 600);
        } else {
          // Al final de la conversación, reiniciar más rápido
          setTimeout(() => {
            setMessages([]);
            setCurrentMessageIndex(0);
            setIsTyping(true);
          }, 3000);
        }
      }, 1200);

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
              Atiende, vende y <span className="text-gray-400">automatiza</span> tu negocio
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-white/80 mb-8"
            > 
              Mantén el toque humano mientras optimizas tu tiempo. Nuestra IA entiende tu negocio, 
              responde con empatía y asegura que cada cliente se sienta atendido y valorado.
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
                  <Icon name="ShoppingCart" className="text-white w-5 h-5" />
                </div>
                <p className="text-white/90">Vende a todas horas del día</p>
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
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                  <Icon name="Store" className="text-white" />
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