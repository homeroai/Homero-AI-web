import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@/components/ui/Icon';

interface MessageData {
  sender: 'patient' | 'ai';
  text: string;
}

const conversation: MessageData[] = [
  { sender: 'patient', text: 'Hola, me gustaría agendar una hora para una limpieza dental.' },
  { sender: 'ai', text: '¡Hola! Claro, con gusto. Tenemos disponibilidad mañana a las 10:00 AM y a las 3:00 PM. ¿Te acomoda alguna de esas horas?' },
  { sender: 'patient', text: 'La de las 10:00 AM me viene perfecta.' },
  { sender: 'ai', text: 'Excelente. ¿A nombre de quién agendo la cita?' },
  { sender: 'patient', text: 'Catalina Rojas, por favor.' },
  { sender: 'ai', text: 'Perfecto, Catalina. Tu cita para limpieza dental ha sido agendada para mañana a las 10:00 AM. Recibirás un recordatorio. ¿Necesitas algo más?' },
  { sender: 'patient', text: 'No, eso es todo. ¡Muchas gracias!' },
];

const Message = ({ msg }: { msg: MessageData }) => (
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
    {msg.text}
  </motion.div>
);

export default function WhatsAppDemo() {
  const [messages, setMessages] = useState<MessageData[]>([]);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Reset animation on component mount
    setMessages([]);
    
    let index = 0;
    const interval = setInterval(() => {
      if (index < conversation.length) {
        setMessages(prev => [...prev, conversation[index]]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 2000); // Delay between messages

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <section id="demo" className="py-16 sm:py-24 bg-transparent">
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
                  <Message key={index} msg={msg} />
                ))}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 