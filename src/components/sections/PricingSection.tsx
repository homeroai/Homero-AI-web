import React from 'react';
import { Icon } from '@/components/ui/Icon';

const plans = [
  {
    name: 'Esencial',
    price: '$99',
    priceDetail: 'USD/mes',
    description: 'Perfecto para consultorios que están empezando',
    features: [
      'Canal WhatsApp Business',
      'Hasta 700 mensajes/mes',
      'Integración a Calendario',
      'Integración a CRM',
      'Recordatorios simples',
      'Respuestas automáticas FAQ',
      'Horario limitado (Horario de trabajo)',
      'Soporte por WhatsApp',
    ],
    button: 'Ponte en Contacto',
    highlight: false,
    cardStyle: 'bg-black/40 border border-white/10',
    textColor: 'text-white/80',
    priceColor: 'text-white',
            iconColor: 'text-gray-400',
  },
  {
    name: 'Profesional',
    price: '$159',
    priceDetail: 'USD/mes',
    description: 'Para clínicas que quieren crecer sin límites',
    features: [
      'Todo lo del plan Esencial',
      'WhatsApp + Instagram',
      'Hasta 2,000 mensajes/mes',
      'Recordatorios automáticos',
      'Recuperación de pacientes',
      'Horario ilimitado (Atención 24/7)',
      'Soporte prioritario',
    ],
    button: 'Ponte en Contacto',
    highlight: true,
    cardStyle: 'bg-gradient-to-br from-yellow-900/60 via-yellow-800/40 to-black border-2 border-yellow-400/40 shadow-2xl relative',
    textColor: 'text-yellow-200',
    priceColor: 'text-yellow-400',
    iconColor: 'text-yellow-400',
  },
  {
    name: 'Premium',
    price: '$249',
    priceDetail: 'USD/mes',
    description: 'La solución empresarial más poderosa',
    features: [
      'Todo lo del plan Profesional',
      'Canales ilimitados',
      'Hasta 3,500 mensajes/mes',
      'IA personalizada',
      'Agente de Voz',
      'Integraciones CRM avanzadas',
      'API access completo',
      'Analytics avanzados',
      'Soporte dedicado 24/7',
    ],
    button: 'Ponte en Contacto',
    highlight: false,
    cardStyle: 'bg-black/40 border border-white/10',
    textColor: 'text-green-200',
    priceColor: 'text-green-400',
    iconColor: 'text-green-400',
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-16 sm:py-24 px-2 sm:px-4 flex flex-col items-center justify-center bg-transparent z-10">
      {/* Header especial */}
      <div className="max-w-7xl w-full mx-auto flex flex-col items-center mb-10">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white text-center mb-4">Planes y Precios</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
          <span className="flex items-center gap-2 bg-black/60 border border-blue-400/30 rounded-full px-4 py-2 text-blue-300 font-semibold text-base"><Icon name="Gift" className="text-blue-300" size={20}/> 14 días gratis en cualquier plan</span>
          <span className="flex items-center gap-2 bg-black/60 border border-gray-400/30 rounded-full px-4 py-2 text-gray-300 font-semibold text-base"><Icon name="CreditCard" className="text-gray-300" size={20}/> Sin permanencia - cancela cuando quieras</span>
        </div>
        <p className="text-white/70 text-center max-w-2xl mx-auto mb-2 text-lg">Elige el plan que mejor se adapte a tu clínica.</p>
      </div>
      {/* Tarjetas de planes */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 max-w-5xl mx-auto mb-8">
        {plans.map((plan, idx) => (
          <div
            key={plan.name}
            className={`relative flex flex-col items-center rounded-3xl p-8 sm:p-15 w-full max-w-sm ${plan.cardStyle} ${plan.highlight ? 'scale-105 z-10 shadow-yellow-400/30 shadow-2xl border-yellow-400/60' : 'shadow-lg'} transition-all duration-300`}
            style={plan.highlight ? { boxShadow: '0 0 40px 10px rgba(255, 200, 80, 0.15)' } : {}}
          >
            {plan.highlight && (
              <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-xs font-bold px-4 py-1 rounded-full shadow-md border border-yellow-300">MÁS POPULAR</span>
            )}
            <div className="flex flex-col items-center mb-4">
              <div className={`rounded-full w-16 h-16 flex items-center justify-center mb-2 ${plan.highlight ? 'bg-yellow-400/20' : 'bg-white/10'}`}>
                <Icon name="Zap" className={plan.iconColor} size={32} />
              </div>
              <span className={`text-2xl font-bold mb-1 ${plan.highlight ? 'text-yellow-300' : plan.textColor}`}>{plan.name}</span>
            </div>
            <div className="flex flex-row items-end justify-center mb-2">
              <span className={`text-4xl sm:text-5xl font-extrabold ${plan.priceColor}`}>{plan.price}</span>
              {plan.priceDetail && <span className="ml-1 text-lg font-semibold text-white/60">{plan.priceDetail}</span>}
            </div>
            <p className="text-blue-400 text-center mb-2 text-sm font-semibold">✨ 14 días gratis</p>
            <p className="text-white/70 text-center mb-6 text-sm min-h-[48px]">{plan.description}</p>
            <ul className="flex flex-col gap-2 mb-8 w-full">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-white/90 text-base">
                  <Icon name="CheckCircle" className={plan.highlight ? 'text-yellow-300' : plan.iconColor} size={20} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
                              className={`w-full py-3 rounded-xl text-center text-base font-semibold mt-auto bg-gradient-to-r from-gray-700 to-gray-800 text-white hover:scale-105 transition block`}
            >
              {plan.button}
            </a>
          </div>
        ))}
      </div>
      {/* Footer especial de la sección */}
      <div className="flex flex-col items-center gap-3 mt-4">
        <span className="text-white/90 text-base font-semibold">Todas las clínicas empiezan con <span className="text-blue-400 font-bold">14 días completamente gratis</span></span>
        <a href="#contact" className="inline-block bg-gradient-to-r from-gray-600 to-gray-700 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition text-base">¿Tienes dudas? Agenda una demo gratuita</a>
      </div>
    </section>
  );
} 