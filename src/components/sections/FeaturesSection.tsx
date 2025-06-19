import { cn } from "@/lib/utils";
import React from "react";
import { Icon } from '@/components/ui/Icon'; // Importar el componente Icon

export function FeaturesSection() {
  const features = [
    {
      title: "Agendamiento Inteligente",
      description:
        "Automatiza citas, confirmaciones y recordatorios por WhatsApp y SMS, reduciendo drásticamente los 'no-shows' en tu clínica.",
      icon: <Icon name="CalendarCheck" className="text-white" />,
    },
    {
      title: "Comunicación Omnicanal",
      description:
        "Mantén una conexión fluida con tus pacientes a través de WhatsApp, SMS y otros canales, centralizando todas las conversaciones.",
      icon: <Icon name="MessagesSquare" className="text-white" />,
    },
    {
      title: "Atención 24/7 con Agentes IA",
      description:
        "Resuelve dudas frecuentes, da información sobre servicios y redirige consultas complejas, liberando a tu personal administrativo.",
      icon: <Icon name="Bot" className="text-white" />,
    },
    {
      title: "Gestión Proactiva de Pacientes",
      description:
        "Automatiza el seguimiento post-consulta, encuestas de satisfacción y la recuperación de pacientes inactivos, mejorando la fidelización.",
      icon: <Icon name="Users" className="text-white" />,
    },
    {
      title: "Informes y Métricas Clave",
      description:
        "Obtén datos claros sobre la eficiencia de tu agenda, la efectividad de tus recordatorios y la satisfacción de tus pacientes.",
      icon: <Icon name="BarChart3" className="text-white" />,
    },
    {
      title: "Optimización de Flujos Clínicos",
      description:
        "Simplifica y automatiza procesos internos, desde la bienvenida del paciente hasta la gestión de consentimientos informados.",
      icon: <Icon name="Workflow" className="text-white" />,
    },
    {
      title: "Integración sin Esfuerzo",
      description:
        "Conecta Homero AI con tu software de gestión de clínicas y calendarios actuales para un ecosistema digital unificado.",
      icon: <Icon name="Plug" className="text-white" />,
    },
    {
      title: "Seguridad y Privacidad de Datos",
      description:
        "Garantiza la protección de la información sensible de tus pacientes con los más altos estándares de seguridad y cumplimiento (HIPAA, RGPD).",
      icon: <Icon name="ShieldCheck" className="text-white" />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-neutral-800",
        (index === 0 || index === 4) ? "lg:border-l border-neutral-800" : undefined,
        index < 4 ? "lg:border-b border-neutral-800" : undefined
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-transparent via-transparent to-black pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-transparent via-transparent to-black pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-homero-purpleLight group-hover/feature:bg-homero-purple transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
}; 