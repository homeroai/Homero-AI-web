import { cn } from "@/lib/utils"; 
import React from "react";
import { Icon } from '@/components/ui/Icon'; // Importar el componente Icon

export function FeaturesSection() {
  const features = [
    {
      title: "Citas Automáticas",
      description:
        "Homero agenda, confirma y reprograma citas solo. Tus pacientes reciben recordatorios por WhatsApp, Correos o SMS, y tú dejas de perder tiempo y dinero por inasistencias.",
      icon: <Icon name="CalendarCheck" className="text-white" />,
    },
    {
      title: "Respuestas por Todos los Canales",
      description:
        "Pacientes te escriben por WhatsApp, Instagram o SMS. Homero responde al tiro, sin que tengas que estar pegado al celular.",
      icon: <Icon name="MessagesSquare" className="text-white" />,
    },
    {
      title: "Atención 24/7 con IA",
      description:
        "Homero contesta dudas frecuentes de tus pacientes sobre precios, horarios o servicios a cada minuto del dia, Homero no duerme. Si es algo complejo, se lo deriva a tu equipo. Siempre hay alguien respondiendo.",
      icon: <Icon name="Bot" className="text-white" />,
    },
    {
      title: "Seguimiento Automático",
      description:
        "Después de la consulta, Homero se encarga del seguimiento. Manda encuestas, recuerda controles y ayuda a que tus pacientes vuelvan solos.",
      icon: <Icon name="Users" className="text-white" />,
    },
    {
      title: "Métricas Claras",
      description:
        "Sabrás cuántas citas se concretan, cuántos pacientes confirman, y si tus mensajes están funcionando. Todo en simple y sin Excel.",
      icon: <Icon name="BarChart3" className="text-white" />,
    },
    {
      title: "Flujos Internos Simplificados",
      description:
        "Homero automatiza cosas como dar la bienvenida, pedir consentimientos o actualizar datos del paciente. Menos papeleo, más tiempo para atender.",
      icon: <Icon name="Workflow" className="text-white" />,
    },
    {
      title: "Se Conecta con Todo",
      description:
        "Homero se integra fácil con tu agenda (Google Calendar, Calendly) y tu base de datos. Todo queda conectado y funcionando sin enredos.",
      icon: <Icon name="Plug" className="text-white" />,
    },
    {
      title: "Tus datos están 100% protegidos",
      description:
        "Homero funciona con tecnología de OpenAI, una de las más seguras del mundo. Todos los datos de tus pacientes se procesan con los más altos estándares de privacidad y cumplimiento (como HIPAA y RGPD). Tu clínica, y tus pacientes, están en buenas manos.",
      icon: <Icon name="ShieldCheck" className="text-white" />,
    },
  ];
  return (
    <div id="features" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative z-10 py-8 sm:py-10 max-w-7xl mx-auto gap-4 sm:gap-6 px-2 sm:px-0">
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
        "flex flex-col bg-black/30 rounded-xl border border-neutral-800 py-6 px-4 sm:px-8 relative group/feature min-h-[180px] sm:min-h-[220px]",
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
      <div className="mb-3 sm:mb-4 relative z-10 px-2 sm:px-10 text-neutral-400 flex items-center justify-center text-3xl sm:text-4xl">
        {icon}
      </div>
      <div className="text-base sm:text-lg font-bold mb-1 sm:mb-2 relative z-10 px-2 sm:px-10">
        <div className="absolute left-0 inset-y-0 h-5 sm:h-6 group-hover/feature:h-7 sm:group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-homero-purpleLight group-hover/feature:bg-homero-purple transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white">
          {title}
        </span>
      </div>
      <p className="text-xs sm:text-sm text-neutral-300 max-w-xs relative z-10 px-2 sm:px-10">
        {description}
      </p>
    </div>
  );
}; 