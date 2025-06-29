import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@/components/ui/Icon';

const faqData = [
  {
    question: "¿Qué es Homero?",
    answer: "Homero es un asistente digital que responde por tu clínica 24/7 en WhatsApp, Instagram, Facebook o Telegram. Agenda, confirma, responde dudas y recuerda citas automáticamente."
  },
  {
    question: "¿Qué diferencia a Homero de un chatbot común?",
    answer: "A diferencia de un bot genérico, Homero piensa cada respuesta en base a tu clínica específica: tus servicios, precios, horarios, políticas y estilo. No copia-pega respuestas. Responde como si fuera parte real de tu equipo."
  },
  {
    question: "¿Cómo funciona Homero?",
    answer: "Conecta tus canales (como WhatsApp) y Homero empieza a responder pacientes en tu nombre. Agenda, confirma, reprograma y responde dudas sin que tú hagas nada."
  },
  {
    question: "¿En qué canales puede atender?",
    answer: "Homero puede atender en WhatsApp Business, Instagram, Facebook Messenger y Telegram. Puedes activarlo en todos los canales o solo en los que uses."
  },
  {
    question: "¿Homero reemplaza a mi recepcionista?",
    answer: "No, la complementa. Tu recepcionista se enfoca en los pacientes presentes. Homero responde rápido a los que escriben online, a cualquier hora."
  },
  {
    question: "¿Cómo Homero ayuda a reducir los no-shows?",
    answer: "Homero envía recordatorios antes de cada cita, permite que los pacientes confirmen o reprogramen fácilmente, y mantiene la agenda actualizada. Así, más pacientes llegan y menos horas se pierden."
  },
  {
    question: "¿Puede agendar y reagendar citas automáticamente?",
    answer: "Sí. Homero agenda, reprograma o cancela según disponibilidad. Incluso detecta urgencias y las prioriza si está configurado."
  },
  {
    question: "¿Qué tipo de preguntas puede responder?",
    answer: "Horarios, precios, ubicación, formas de pago, doctores, tratamientos, duración de citas, postoperatorios, promociones, etc. Puedes entrenarlo con tus propias respuestas."
  },
  {
    question: "¿Homero puede hablar como una persona?",
    answer: "Sí. Homero usa lenguaje humano, cálido y profesional. La mayoría de los pacientes no nota que es un asistente digital."
  },
  {
    question: "¿Qué pasa si un paciente pide hablar con una persona?",
    answer: "Homero detecta automáticamente esa intención y deriva a tu equipo sin interrumpir la conversación."
  },
  {
    question: "¿Necesito instalar algo?",
    answer: "No. Solo necesitamos acceso a tus canales y un formulario inicial. El resto lo hacemos nosotros."
  },
  {
    question: "¿En cuánto tiempo lo puedo tener funcionando?",
    answer: "En menos de 48 horas. Activamos Homero con tus datos y empieza a funcionar casi de inmediato."
  },
  {
    question: "¿Qué tan seguro es?",
    answer: "La seguridad de sus datos es nuestra prioridad número uno. Como usamos el modelo de OpenAI, aprovechamos su sistema de seguridad de datos para garantizar la máxima protección de la información de sus pacientes."
  },
  {
    question: "¿Funciona en mi país?",
    answer: "Homero está disponible en Chile, Perú, Argentina, México y Colombia. También podemos adaptarlo a otros países de habla hispana."
  },
  {
    question: "¿Cuánto cuesta Homero?",
    answer: "El precio depende de cada clínica y sus necesidades específicas. Te invitamos a ponerte en contacto con nosotros para una cotización personalizada."
  },
  {
    question: "¿Hay alguna demo disponible?",
    answer: "Sí. Puedes agendar una demo y ver cómo Homero respondería con los datos reales de tu clínica."
  },
  {
    question: "¿Puedo personalizar las respuestas?",
    answer: "Sí. Tú decides el tono, la información, los servicios que debe mencionar, e incluso los protocolos si trabajas con seguros o convenios."
  },
  {
    question: "¿Qué clínicas pueden usar Homero?",
    answer: "Clínicas dentales, estéticas, oftalmológicas, kinesiológicas, médicas generales y más. Si tienes pacientes que escriben por WhatsApp o redes, Homero puede ayudarte."
  },
  {
    question: "¿Qué necesito para empezar?",
    answer: "Solo compartir los datos básicos de tu clínica (horarios, precios, especialidades) y acceso a tu canal de WhatsApp o Instagram. Nosotros nos encargamos del resto."
  },
  {
    question: "¿Por qué debería confiar en Homero?",
    answer: "Porque responde como tú, sin errores, sin demoras y sin días libres. Mientras tú descansas, Homero sigue atendiendo pacientes y llenando tu agenda."
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
    <section id="faqs" className="py-12 sm:py-20 px-2 sm:px-4 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-12">
          Preguntas Frecuentes
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-4">
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
                  className="space-y-4 overflow-hidden"
                >
                  {remainingFirstColumn.map((faq, index) => (
                    <FaqItem key={index + 4} question={faq.question} answer={faq.answer} />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="space-y-4">
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
                  className="space-y-4 overflow-hidden"
                >
                  {remainingSecondColumn.map((faq, index) => (
                    <FaqItem key={index + Math.ceil(faqData.length / 2) + 4} question={faq.question} answer={faq.answer} />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        
        <div className="flex justify-center mt-12">
          <motion.button
            onClick={() => setShowAll(!showAll)}
            className="group bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 flex items-center gap-3"
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