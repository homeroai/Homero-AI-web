import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@/components/ui/Icon';

const faqData = [
  {
    question: "¿Qué es Homero?",
    answer: "Homero es un asistente digital que atiende por tu negocio 24/7 en WhatsApp, Instagram, Facebook o Telegram. Toma pedidos, gestiona reservas, responde dudas y hace seguimiento automáticamente."
  },
  {
    question: "¿Qué diferencia a Homero de un chatbot común?",
    answer: "Homero se adapta a las necesidades de cada negocio. Nosotros lo entrenamos con tus productos o servicios, precios, horarios, políticas, procesos y tono de marca. No copia-pega respuestas: contesta como si fuera parte de tu equipo."
  },
  {
    question: "¿Cómo funciona Homero?",
    answer: "Conectas tus canales (como WhatsApp) y Homero comienza a responder a tus clientes en tu nombre. Automatiza pedidos, reservas y preguntas frecuentes; si la consulta es compleja, la deriva a tu equipo sin interrumpir la conversación."
  },
  {
    question: "¿En qué canales puede atender?",
    answer: "Homero puede atender en WhatsApp Business, Instagram, Facebook Messenger y Telegram. Puedes activarlo en todos los canales o solo en los que uses."
  },
  {
    question: "¿Homero reemplaza a mi equipo?",
    answer: "No, lo complementa. Homero responde rápido a quienes escriben online a cualquier hora, y tu equipo se enfoca en tareas de mayor valor."
  },
  {
    question: "¿Cómo ayuda a reducir los no‑shows y el abandono?",
    answer: "Homero envía recordatorios, permite confirmar o reprogramar, y hace seguimiento automático. También recupera carritos e interesados para aumentar conversiones."
  },
  {
    question: "¿Puede gestionar reservas automáticamente?",
    answer: "Sí. Homero agenda, reprograma o cancela según disponibilidad y reglas del negocio. Incluso puede priorizar urgencias si aplica."
  },
  {
    question: "¿Qué tipo de preguntas puede responder?",
    answer: "Horarios, precios, stock, ubicación, tiempos de entrega, medios de pago, políticas, promociones, etc. Lo entrenamos con tus propias respuestas para que sea 100% preciso."
  },
  {
    question: "¿Homero puede hablar como una persona?",
    answer: "Sí. Homero usa lenguaje humano, cercano y profesional. La mayoría de los clientes no nota que es un asistente digital."
  },
  {
    question: "¿Qué pasa si un cliente pide hablar con una persona?",
    answer: "Homero detecta automáticamente esa intención y deriva a tu equipo sin interrumpir la conversación."
  },
  {
    question: "¿Necesito instalar algo?",
    answer: "No. Solo necesitamos acceso a tus canales y un formulario inicial. El resto lo hacemos nosotros."
  },
  {
    question: "¿En cuánto tiempo puedo tenerlo funcionando?",
    answer: "Depende de las necesidades de tu negocio, generalmente en menos de 10 días. Cargamos tu información, entrenamos a Homero y, cuando todo está listo, empieza a funcionar de inmediato."
  },
  {
    question: "¿Qué tan seguro es?",
    answer: "La seguridad de los datos es prioridad. Usamos la infraestructura de OpenAI y buenas prácticas de seguridad y privacidad (como RGPD). Si trabajas en salud, podemos cumplir requisitos como HIPAA."
  },
  {
    question: "¿Funciona en mi país?",
    answer: "Homero está disponible en Chile, Perú, Argentina, México y Colombia. También podemos adaptarlo a otros países de habla hispana."
  },
  {
    question: "¿Cuánto cuesta Homero?",
    answer: "El precio depende del tamaño y necesidades de tu negocio. Contáctanos para una cotización personalizada."
  },
  {
    question: "¿Hay alguna demo disponible?",
    answer: "Sí. Puedes agendar una demo y ver cómo Homero respondería a tus clientes."
  },
  {
    question: "¿Puedo personalizar las respuestas?",
    answer: "Sí. Definimos juntos el tono, la información clave y los protocolos. Nosotros entrenamos a Homero con todo lo que necesita para atender como tu marca."
  },
  {
    question: "¿Qué negocios pueden usar Homero?",
    answer: "E‑commerce, restaurantes, clínicas y centros de salud, ferreterías, gimnasios, tiendas locales, educación y más. Si tus clientes escriben por WhatsApp o redes, Homero puede ayudarte."
  },
  {
    question: "¿Qué necesito para empezar?",
    answer: "Compartir la información base de tu negocio (catálogo o servicios, precios, horarios, políticas, procesos y FAQs) y acceso a los canales. Nosotros entrenamos a Homero y lo dejamos listo."
  },
  {
    question: "¿Por qué debería confiar en Homero?",
    answer: "Porque responde como tú, sin errores ni demoras. Mientras descansas, Homero atiende a tus clientes y convierte conversaciones en ventas o reservas."
  }
];

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/20">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-6"
      >
        <span className="text-lg font-semibold text-white">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Icon name="ChevronDown" className="text-white/70" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-white/80 pb-6 whitespace-pre-line">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FaqSection() {
  const [showAll, setShowAll] = useState(false);
  
  const firstColumn = faqData.slice(0, Math.ceil(faqData.length / 2));
  const secondColumn = faqData.slice(Math.ceil(faqData.length / 2));
  
  const initialFirstColumn = firstColumn.slice(0, 4);
  const initialSecondColumn = secondColumn.slice(0, 4);
  
  const remainingFirstColumn = firstColumn.slice(4);
  const remainingSecondColumn = secondColumn.slice(4);

  return (
    <section id="faqs" className="py-10 sm:py-20 px-2 sm:px-4 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white text-center mb-8 sm:mb-12">
          Preguntas Frecuentes
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-12">
          <div className="space-y-2 sm:space-y-4">
            {initialFirstColumn.map((faq, index) => (
              <FaqItem key={index} question={faq.question} answer={faq.answer} />
            ))}
            <AnimatePresence>
              {showAll && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="space-y-2 sm:space-y-4 overflow-hidden"
                >
                  {remainingFirstColumn.map((faq, index) => (
                    <FaqItem key={index + 4} question={faq.question} answer={faq.answer} />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="space-y-2 sm:space-y-4">
            {initialSecondColumn.map((faq, index) => (
              <FaqItem key={index + Math.ceil(faqData.length / 2)} question={faq.question} answer={faq.answer} />
            ))}
            <AnimatePresence>
              {showAll && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="space-y-2 sm:space-y-4 overflow-hidden"
                >
                  {remainingSecondColumn.map((faq, index) => (
                    <FaqItem key={index + Math.ceil(faqData.length / 2) + 4} question={faq.question} answer={faq.answer} />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        
        <div className="flex justify-center mt-8 sm:mt-12">
          <motion.button
            onClick={() => setShowAll(!showAll)}
            className="group bg-gray-700 hover:bg-gray-800 text-white font-bold py-3 px-6 sm:px-8 rounded-full shadow-lg hover:shadow-gray-500/50 hover:scale-105 transition-all duration-300 flex items-center gap-3 text-base sm:text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>{showAll ? 'Ver menos' : 'Ver más'}</span>
            <motion.div
              animate={{ rotate: showAll ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <Icon name="ChevronDown" size={20} className="group-hover:scale-110 transition-transform" />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </section>
  );
} 