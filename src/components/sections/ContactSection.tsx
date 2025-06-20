import { motion } from 'framer-motion';
import { Icon } from '@/components/ui/Icon';
import React, { useState } from 'react';

export default function ContactSection() {
  const [form, setForm] = useState({ nombre: '', email: '', numero: '', problema: '' });
  const [errors, setErrors] = useState({ nombre: '', email: '', numero: '', problema: '' });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const countryOptions = [
    // América del Norte
    { code: '+1', name: 'USA', flag: '🇺🇸' },
    { code: '+1', name: 'Canadá', flag: '🇨🇦' },
    { code: '+52', name: 'México', flag: '🇲🇽' },
    // América Central y Caribe
    { code: '+501', name: 'Belice', flag: '🇧🇿' },
    { code: '+506', name: 'Costa Rica', flag: '🇨🇷' },
    { code: '+503', name: 'El Salvador', flag: '🇸🇻' },
    { code: '+502', name: 'Guatemala', flag: '🇬🇹' },
    { code: '+504', name: 'Honduras', flag: '🇭🇳' },
    { code: '+505', name: 'Nicaragua', flag: '🇳🇮' },
    { code: '+507', name: 'Panamá', flag: '🇵🇦' },
    { code: '+1-268', name: 'Antigua y Barbuda', flag: '🇦🇬' },
    { code: '+1-242', name: 'Bahamas', flag: '🇧🇸' },
    { code: '+1-246', name: 'Barbados', flag: '🇧🇧' },
    { code: '+53', name: 'Cuba', flag: '🇨🇺' },
    { code: '+1-767', name: 'Dominica', flag: '🇩🇲' },
    { code: '+1-809', name: 'Rep. Dominicana', flag: '🇩🇴' },
    { code: '+1-473', name: 'Granada', flag: '🇬🇩' },
    { code: '+509', name: 'Haití', flag: '🇭🇹' },
    { code: '+1-876', name: 'Jamaica', flag: '🇯🇲' },
    { code: '+1-869', name: 'San Cristóbal y Nieves', flag: '🇰🇳' },
    { code: '+1-758', name: 'Santa Lucía', flag: '🇱🇨' },
    { code: '+1-784', name: 'San Vicente y las Granadinas', flag: '🇻🇨' },
    { code: '+1-868', name: 'Trinidad y Tobago', flag: '🇹🇹' },
    // América del Sur
    { code: '+54', name: 'Argentina', flag: '🇦🇷' },
    { code: '+591', name: 'Bolivia', flag: '🇧🇴' },
    { code: '+55', name: 'Brasil', flag: '🇧🇷' },
    { code: '+56', name: 'Chile', flag: '🇨🇱' },
    { code: '+57', name: 'Colombia', flag: '🇨🇴' },
    { code: '+593', name: 'Ecuador', flag: '🇪🇨' },
    { code: '+592', name: 'Guyana', flag: '🇬🇾' },
    { code: '+595', name: 'Paraguay', flag: '🇵🇾' },
    { code: '+51', name: 'Perú', flag: '🇵🇪' },
    { code: '+597', name: 'Surinam', flag: '🇸🇷' },
    { code: '+598', name: 'Uruguay', flag: '🇺🇾' },
    { code: '+58', name: 'Venezuela', flag: '🇻🇪' },
    // Otros
    { code: '+34', name: 'España', flag: '🇪🇸' },
  ];
  const [country, setCountry] = useState(countryOptions.find(c => c.name === 'Chile') || countryOptions[0]);
  const [localNumber, setLocalNumber] = useState('');

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
          setForm({ nombre: '', email: '', numero: '', problema: '' });
          setLocalNumber('');
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

  if (submitStatus === 'success') {
    return (
      <section id="contact" className="py-20 px-4 flex items-center justify-center min-h-[600px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-homero-purpleDark p-8 rounded-2xl shadow-2xl w-full max-w-md flex flex-col items-center border border-homero-purpleLight/30 text-center"
        >
          <Icon name="CheckCircle" size={48} className="text-green-400 mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">¡Gracias por tu mensaje!</h3>
          <p className="text-white/80 mb-6">Nos pondremos en contacto contigo pronto.</p>
          <button 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg" 
            onClick={() => setSubmitStatus('idle')}
          >
            Enviar otro mensaje
          </button>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-12 sm:py-20 px-2 sm:px-6 relative z-10 bg-transparent">
      <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-5xl md:text-6xl font-extrabold text-white mb-2 sm:mb-4"
        >
          Agenda una Demostración para tu Clínica
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg text-white/80 max-w-xs sm:max-w-3xl mx-auto"
        >
          ¿Listo para optimizar la gestión de tu clínica? Contáctanos para una demostración personalizada.
        </motion.p>
      </div>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-xl sm:max-w-2xl mx-auto bg-black/40 border border-homero-purple/30 rounded-lg p-6 sm:p-8 shadow-lg flex flex-col gap-5"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="nombre-contact" className="text-left text-white/80 font-medium">Nombre completo</label>
          <input
            id="nombre-contact"
            name="nombre"
            type="text"
            className="rounded-lg px-4 py-2 bg-black/30 border border-homero-purpleLight/30 text-white focus:outline-none focus:ring-2 focus:ring-homero-purpleLight"
            value={form.nombre}
            onChange={handleChange}
            autoComplete="name"
          />
          {errors.nombre && <span className="text-red-400 text-xs text-left">{errors.nombre}</span>}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email-contact" className="text-left text-white/80 font-medium">Email</label>
          <input
            id="email-contact"
            name="email"
            type="email"
            className="rounded-lg px-4 py-2 bg-black/30 border border-homero-purpleLight/30 text-white focus:outline-none focus:ring-2 focus:ring-homero-purpleLight"
            value={form.email}
            onChange={handleChange}
            autoComplete="email"
          />
          {errors.email && <span className="text-red-400 text-xs text-left">{errors.email}</span>}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="numero-contact" className="text-left text-white/80 font-medium">Número de Teléfono</label>
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
              id="numero-contact"
              name="numero"
              type="tel"
              className="flex-1 rounded-lg px-4 py-2 bg-black/30 border border-homero-purpleLight/30 text-white focus:outline-none focus:ring-2 focus:ring-homero-purpleLight"
              value={localNumber}
              onChange={e => setLocalNumber(e.target.value)}
              autoComplete="tel"
              placeholder="Ej: 912345678"
            />
          </div>
          {errors.numero && <span className="text-red-400 text-xs text-left">{errors.numero}</span>}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="problema-contact" className="text-left text-white/80 font-medium">¿Cuál es su problema o consulta?</label>
          <textarea
            id="problema-contact"
            name="problema"
            rows={4}
            className="rounded-lg px-4 py-2 bg-black/30 border border-homero-purpleLight/30 text-white focus:outline-none focus:ring-2 focus:ring-homero-purpleLight resize-none"
            value={form.problema}
            onChange={handleChange}
          />
          {errors.problema && <span className="text-red-400 text-xs text-left">{errors.problema}</span>}
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
        >
          Enviar Mensaje
        </button>
        {submitStatus === 'error' && (
          <span className="text-red-400 text-sm mt-2">Hubo un error al enviar el formulario. Intenta nuevamente.</span>
        )}
      </motion.form>
    </section>
  );
} 