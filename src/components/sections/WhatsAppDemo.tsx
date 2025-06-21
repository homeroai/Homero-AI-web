import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Icon } from '@/components/ui/Icon';
import Typewriter from '@/components/ui/Typewriter';

interface MessageData {
  sender: 'patient' | 'ai';
  text: string;
}

const conversation: MessageData[] = [
  { sender: 'patient', text: 'Hola, ¿puedo agendar una limpieza dental?' },
  { sender: 'ai', text: '¡Hola! Claro 😊 Tengo horas este jueves a las 10:00 y viernes a las 15:00. ¿Cuál prefieres?' },
  { sender: 'patient', text: 'El viernes a las 15:00, por favor.' },
  { sender: 'ai', text: 'Perfecto, te agendé para el viernes 15:00. Recibirás un recordatorio. ¿Algo más?' },
  { sender: 'patient', text: 'No, gracias. ¡Muy amable!' },
];

const Message = ({ msg, onComplete }: { msg: MessageData; onComplete: () => void }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.8, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ duration: 0.3, type: 'spring' }}
    className={`w-fit max-w-[80%] rounded-2xl px-3 py-2 text-sm md:text-base ${
      msg.sender === 'patient'
        ? 'self-end bg-[#dcf8c6] text-black'
        : 'self-start bg-white text-black'
    }`}
  >
    <Typewriter text={msg.text} onComplete={onComplete} />
  </motion.div>
);

export default function WhatsAppDemo() {
  const [messages, setMessages] = useState<MessageData[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.4 });

  useEffect(() => {
    if (isInView && messages.length < conversation.length && !isTyping) {
      setIsTyping(true);
      const timer = setTimeout(() => {
        setMessages(prev => [...prev, conversation[messages.length]]);
      }, messages.length === 0 ? 1000 : 1800);

      return () => clearTimeout(timer);
    }
  }, [isInView, messages, isTyping]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleTypingComplete = () => {
    setIsTyping(false);
  };

  return (
    <section ref={sectionRef} id="demo" className="py-16 sm:py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-5xl font-extrabold text-white mb-4"
        >
          Así de fácil es con Homero
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-12"
        >
          Nuestro asistente de IA se encarga de agendar, confirmar y responder, para que tu equipo se enfoque en lo que más importa: los pacientes.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-sm mx-auto bg-gray-900 border-4 border-gray-700 rounded-[2.5rem] shadow-2xl p-2"
        >
          <div className="bg-white rounded-[2rem] overflow-hidden">
            {/* Header del chat */}
            <div className="bg-gray-100 px-4 py-2 flex items-center gap-3 border-b">
              <div className="w-10 h-10 rounded-full bg-homero-purple flex items-center justify-center">
                <Icon name="Stethoscope" className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-black text-sm">Clínica Dental Familiar</h3>
                <p className="text-xs text-green-600">en línea</p>
              </div>
            </div>

            {/* Cuerpo del chat */}
            <div 
              ref={chatContainerRef} 
              className="h-96 bg-cover bg-center p-4 flex flex-col gap-3 overflow-y-auto" 
              style={{ backgroundImage: "url('https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg')"}}
            >
              <AnimatePresence>
                {messages.map((msg, index) => (
                  <Message key={index} msg={msg} onComplete={handleTypingComplete} />
                ))}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 