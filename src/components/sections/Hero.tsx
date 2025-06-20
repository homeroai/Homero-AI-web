import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Icon } from '@/components/ui/Icon';
import AnimatedShapeBlur from '@/components/ui/AnimatedShapeBlur';
import TechBackground from '@/components/ui/TechBackground';
import GradientText from '../reactbits/GradientText';

// Hook para efecto typewriter con parte fija y parte variable
function useTypewriterAlternating(
  fixed: string,
  variants: string[],
  speed = 20,
  pauseBeforeDelete = 1500,
  pauseBeforeType = 1500
) {
  const [displayed, setDisplayed] = useState(fixed);
  const [variantIdx, setVariantIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [phase, setPhase] = useState<'typing'|'pausing'|'deleting'|'waiting'>('typing');

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentVariant = variants[variantIdx];
    if (phase === 'typing') {
      if (charIdx < currentVariant.length) {
        timeout = setTimeout(() => {
          setDisplayed(fixed + currentVariant.slice(0, charIdx + 1));
          setCharIdx(charIdx + 1);
        }, speed);
      } else {
        setPhase('pausing');
      }
    } else if (phase === 'pausing') {
      timeout = setTimeout(() => {
        setPhase('deleting');
      }, pauseBeforeDelete);
    } else if (phase === 'deleting') {
      if (charIdx > 0) {
        timeout = setTimeout(() => {
          setDisplayed(fixed + currentVariant.slice(0, charIdx - 1));
          setCharIdx(charIdx - 1);
        }, speed);
      } else {
        setPhase('waiting');
      }
    } else if (phase === 'waiting') {
      timeout = setTimeout(() => {
        setVariantIdx((variantIdx + 1) % variants.length);
        setPhase('typing');
      }, pauseBeforeType);
    }
    return () => clearTimeout(timeout);
  }, [charIdx, phase, variantIdx, fixed, variants, speed, pauseBeforeDelete, pauseBeforeType]);

  // Inicializa el texto fijo al principio
  useEffect(() => {
    setDisplayed(fixed);
    setCharIdx(0);
    setPhase('typing');
  }, [fixed]);

  return displayed;
}

export default function Hero() {
  const [showGlow, setShowGlow] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ nombre: '', email: '', numero: '', problema: '' });
  const [errors, setErrors] = useState({ nombre: '', email: '', numero: '', problema: '' });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const controls = useAnimation();

  const countryOptions = [
    { code: '+56', name: 'Chile', flag: '🇨🇱' },
    { code: '+54', name: 'Argentina', flag: '🇦🇷' },
    { code: '+34', name: 'España', flag: '🇪🇸' },
    { code: '+51', name: 'Perú', flag: '🇵🇪' },
    { code: '+57', name: 'Colombia', flag: '🇨🇴' },
    { code: '+1', name: 'USA', flag: '🇺🇸' },
    // Puedes agregar más países aquí
  ];
  const [country, setCountry] = useState(countryOptions[0]);
  const [localNumber, setLocalNumber] = useState('');

  useEffect(() => {
    // Reducir el glow después de 2 segundos
    const timer = setTimeout(() => {
      setShowGlow(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  function validate() {
    const newErrors = { nombre: '', email: '', numero: '', problema: '' };
    if (!form.nombre) newErrors.nombre = 'El nombre es obligatorio';
    if (!form.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) newErrors.email = 'Email inválido';
    if (!localNumber) newErrors.numero = 'El número es obligatorio';
    if (!form.problema) newErrors.problema = 'Describe tu problema';
    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (validate()) {
      try {
        const res = await fetch('https://services.leadconnectorhq.com/hooks/rxWnLO5ufOMOMc6hmdmz/webhook-trigger/4516874f-c292-42a0-99f4-3859573d7811', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            nombre: form.nombre,
            email: form.email,
            numero: `${country.code} ${localNumber}`,
            problema: form.problema
          })
        });
        if (res.ok) {
          setShowModal(false);
          setForm({ nombre: '', email: '', numero: '', problema: '' });
          setErrors({ nombre: '', email: '', numero: '', problema: '' });
          setSubmitStatus('success');
        } else {
          setSubmitStatus('error');
        }
      } catch {
        setSubmitStatus('error');
      }
    }
  }

  const typewriterText = useTypewriterAlternating(
    'Optimiza citas y ',
    ['reduce no-shows', 'mejora la experiencia del paciente', 'mejora tu tasa de asistencia', 'automatiza tus recordatorios'],
    45, // velocidad intermedia para escribir y borrar
    2000, // pausa después de escribir antes de borrar
    2000  // pausa después de borrar antes de volver a escribir
  );

  return (
    <section 
      className="relative min-h-screen w-full flex items-center justify-center overflow-x-hidden"
      role="banner"
      aria-label="Hero section"
    >
      {/* Fondo con efectos */}
      <TechBackground />
      <AnimatedShapeBlur />

      {/* Contenedor principal para el contenido del Hero */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 flex flex-col items-center justify-center text-center">
        <motion.div
          key="content"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col items-center justify-center text-center"
        >
          {/* Badge/Etiqueta superior */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-4 sm:mb-6"
          >
            <GradientText
              className="text-xs sm:text-sm lg:text-base font-bold tracking-wide uppercase"
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              showBorder={true}
            >
                TRANSFORMA TU CLÍNICA CON IA 
            </GradientText>
          </motion.div>

          {/* Título Principal con Glow */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className={`text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight mb-4 sm:mb-6 transition-all duration-1000 ${
              showGlow ? 'drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]' : 'drop-shadow-[0_0_5px_rgba(255,255,255,0.1)]'
            }`}
          >
            Homero AI
          </motion.h1>

          {/* Sub-título/Destacado "Ready for everything" con animación de gradiente */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug mb-6 sm:mb-8 max-w-xs sm:max-w-xl mx-auto text-center"
          >
            <span className="bg-clip-text text-transparent animate-gradient bg-gradient-to-r from-homero-purpleLight via-white to-homero-purpleLight">
              {typewriterText}
              <span className="inline-block w-2 h-6 align-middle bg-white ml-1 animate-pulse" style={{borderRadius:2}}></span>
            </span>
          </motion.h2>

          {/* Botón CTA único */}
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="group bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 sm:px-10 rounded-full text-base sm:text-lg shadow-lg hover:shadow-blue-500/50 hover:scale-105 hover:-translate-y-1 transition-all duration-300 flex items-center justify-between gap-3 min-w-[180px] sm:min-w-[280px] w-full sm:w-auto"
            onClick={() => setShowModal(true)}
            aria-label="Ponte en contacto"
          >
            <span>Ponte en contacto</span>
            <Icon name="Mail" size={20} className="group-hover:scale-110 transition-transform" />
          </motion.button>
        </motion.div>
      </div>

      {/* Modal de contacto */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <motion.form
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="bg-homero-purpleDark p-8 rounded-2xl shadow-2xl w-full max-w-md flex flex-col gap-5 border border-homero-purpleLight/30 relative"
            onSubmit={handleSubmit}
          >
            <button type="button" className="absolute top-4 right-4 text-white/60 hover:text-white text-2xl" onClick={() => setShowModal(false)} aria-label="Cerrar formulario">×</button>
            <h3 className="text-2xl font-bold text-white mb-2">Contáctanos</h3>
            <div className="flex flex-col gap-2">
              <label htmlFor="nombre" className="text-left text-white/80 font-medium">Nombre completo</label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                className="rounded-lg px-4 py-2 bg-black/30 border border-homero-purpleLight/30 text-white focus:outline-none focus:ring-2 focus:ring-homero-purpleLight"
                value={form.nombre}
                onChange={handleChange}
                autoComplete="name"
              />
              {errors.nombre && <span className="text-red-400 text-xs">{errors.nombre}</span>}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-left text-white/80 font-medium">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                className="rounded-lg px-4 py-2 bg-black/30 border border-homero-purpleLight/30 text-white focus:outline-none focus:ring-2 focus:ring-homero-purpleLight"
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
              />
              {errors.email && <span className="text-red-400 text-xs">{errors.email}</span>}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="numero" className="text-left text-white/80 font-medium">Número</label>
              <div className="flex gap-2">
                <select
                  className="rounded-lg px-2 py-2 bg-black/30 border border-homero-purpleLight/30 text-white focus:outline-none focus:ring-2 focus:ring-homero-purpleLight"
                  value={country.code}
                  onChange={e => {
                    const selected = countryOptions.find(c => c.code === e.target.value);
                    if (selected) setCountry(selected);
                  }}
                  style={{ minWidth: 90 }}
                >
                  {countryOptions.map(opt => (
                    <option key={opt.code} value={opt.code}>{opt.flag} {opt.code}</option>
                  ))}
                </select>
                <input
                  id="numero"
                  name="numero"
                  type="tel"
                  className="flex-1 rounded-lg px-4 py-2 bg-black/30 border border-homero-purpleLight/30 text-white focus:outline-none focus:ring-2 focus:ring-homero-purpleLight"
                  value={localNumber}
                  onChange={e => setLocalNumber(e.target.value)}
                  autoComplete="tel"
                  placeholder="Número"
                />
              </div>
              {errors.numero && <span className="text-red-400 text-xs">{errors.numero}</span>}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="problema" className="text-left text-white/80 font-medium">¿Cuál es su problema?</label>
              <textarea
                id="problema"
                name="problema"
                rows={3}
                className="rounded-lg px-4 py-2 bg-black/30 border border-homero-purpleLight/30 text-white focus:outline-none focus:ring-2 focus:ring-homero-purpleLight resize-none"
                value={form.problema}
                onChange={handleChange}
              />
              {errors.problema && <span className="text-red-400 text-xs">{errors.problema}</span>}
            </div>
            <button
              type="submit"
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
            >
              Enviar
            </button>
            {submitStatus === 'error' && (
              <span className="text-red-400 text-sm mt-2">Hubo un error al enviar el formulario. Intenta nuevamente.</span>
            )}
          </motion.form>
        </div>
      )}
      {/* Mensaje de éxito */}
      {submitStatus === 'success' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-homero-purpleDark p-8 rounded-2xl shadow-2xl w-full max-w-md flex flex-col items-center border border-homero-purpleLight/30">
            <Icon name="CheckCircle" size={48} className="text-green-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">¡Gracias por tu mensaje!</h3>
            <p className="text-white/80 mb-2 text-center">Nos pondremos en contacto pronto.</p>
            <button className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg" onClick={() => setSubmitStatus('idle')}>Cerrar</button>
          </div>
        </div>
      )}
    </section>
  );
}
