import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

const challenges = [
  {
    key: "no-show",
    label: "Muchos no-show",
    solutionIdx: 0,
    benefit: "+35% reducción de inasistencias en Clínica Dental Vida",
  },
  {
    key: "agenda",
    label: "Agenda desordenada",
    solutionIdx: 1,
    benefit: "Agenda 100% digital y sin errores en Centro Médico Bienestar",
  },
  {
    key: "comunicacion",
    label: "Comunicación ineficiente",
    solutionIdx: 2,
    benefit: "Respuestas automáticas y pacientes informados 24/7",
  },
  {
    key: "inactivos",
    label: "Pacientes inactivos",
    solutionIdx: 3,
    benefit: "Reactivación de +120 pacientes en Consultorio Dr. Hernández",
  },
];

const solutions = [
  {
    title: "Gestión de No-Shows y Reactivación",
    desc: "Reduce inasistencias y reactiva pacientes automáticamente con recordatorios inteligentes y mensajes personalizados.",
    icon: "CalendarCheck",
    color: "from-homero-purple to-blue-500",
  },
  {
    title: "Agenda Digital Inteligente",
    desc: "Organiza tu agenda, evita dobles reservas y permite a tus pacientes agendar online 24/7.",
    icon: "CalendarDays",
    color: "from-blue-500 to-homero-purpleLight",
  },
  {
    title: "Comunicación Omnicanal",
    desc: "Centraliza WhatsApp, SMS y email. Responde dudas y confirma citas con IA, sin saturar a tu equipo.",
    icon: "MessageCircle",
    color: "from-homero-purpleLight to-blue-400",
  },
  {
    title: "Reactivación de Pacientes",
    desc: "Identifica y contacta pacientes inactivos automáticamente para llenar tu agenda y aumentar ingresos.",
    icon: "UserCheck",
    color: "from-blue-400 to-homero-purple",
  },
];

export default function SolutionsSection() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="py-12 sm:py-20 px-2 sm:px-4 bg-transparent">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Selector de desafío */}
        <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-white mb-4 text-center">
          ¿Cuál es el principal desafío de tu clínica hoy?
        </h2>
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-10 justify-center">
          {challenges.map((ch, idx) => (
            <button
              key={ch.key}
              onClick={() => setSelected(ch.solutionIdx)}
              className={`px-4 sm:px-5 py-2 rounded-full font-semibold text-xs sm:text-sm transition-all duration-200 border
                ${
                  selected === ch.solutionIdx
                    ? "bg-homero-purpleLight text-white border-homero-purpleLight shadow-lg scale-105"
                    : "bg-black/40 text-white/80 border-white/20 hover:bg-homero-purple/60"
                }`}
              aria-pressed={selected === ch.solutionIdx}
            >
              {ch.label}
            </button>
          ))}
        </div>

        {/* Cards de soluciones */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 w-full">
          {solutions.map((sol, idx) => (
            <motion.div
              key={sol.title}
              layout
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className={`relative rounded-2xl p-5 sm:p-7 flex flex-col items-center text-center bg-gradient-to-br ${sol.color} shadow-xl border-2 transition-all duration-300 cursor-pointer
                ${
                  selected === idx
                    ? "scale-105 border-white/80 z-10 shadow-2xl ring-4 ring-homero-purpleLight"
                    : "opacity-80 hover:scale-102 hover:z-10 hover:shadow-2xl border-transparent"
                }`}
              onClick={() => setSelected(idx)}
              tabIndex={0}
              aria-selected={selected === idx}
            >
              <div
                className={`mb-4 rounded-full bg-black/30 p-3 sm:p-4 border-2 border-white/20 shadow-lg transition-all duration-300 ${
                  selected === idx ? "scale-110 border-white/60" : ""
                }`}
              >
                <Icon name={sol.icon} size={28} className="sm:text-[36px] text-white" />
              </div>
              <h3 className="text-base sm:text-xl font-bold text-white mb-2">{sol.title}</h3>
              <p className="text-white/90 text-sm sm:text-base">{sol.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Mensaje de beneficio/caso de éxito */}
        {/* Eliminado según solicitud */}
      </div>
    </section>
  );
} 