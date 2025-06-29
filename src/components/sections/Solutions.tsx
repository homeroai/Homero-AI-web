import React, { useEffect, useRef, useState } from "react";

const nodes = {
  whatsapp: { x: 600, y: 80 }, // Nodo de entrada: Paciente (WhatsApp)
  homero: { x: 600, y: 310 },
  "base-datos": { x: 250, y: 200 },
  calendario: { x: 950, y: 200 },
  openai: { x: 350, y: 520 },
  google: { x: 850, y: 520 },
  email: { x: 600, y: 600 },
} as const;
type NodeKey = keyof typeof nodes;

const nodeLogos: Partial<Record<NodeKey, string>> = {
  homero: "/src/assets/logos/hologo.png",
  whatsapp: "/src/assets/logos_4_homero/WhatsApp/whatsapp-icon-seeklogo.png",
  email: "/src/assets/logos_4_homero/Gmail/Gmail_idrA5FDGTH_1.png",
  openai: "/src/assets/logos_4_homero/OpenAI/OpenAI_Symbol_0.svg",
  google: "/src/assets/logos_4_homero/GoogleCalendar/google-calendar-seeklogo.png",
};

const flow = [
  {
    from: "whatsapp",
    to: "homero",
    text: "🗣️",
    bubble: '👋 "Hola, me gustaría agendar una limpieza dental para mañana a las 14:00"',
    thinking: "Solicitud de cita dental...",
  },
  {
    from: "homero",
    to: "base-datos",
    text: "🔍",
    bubble: "🏥 Consultando información del dentista y tipos de limpieza",
    thinking: "Verificando disponibilidad dental",
  },
  {
    from: "base-datos",
    to: "homero",
    text: "📊",
    bubble: "✅ Dr. Morales disponible - Limpieza profiláctica 60 min",
    thinking: "Datos del dentista obtenidos",
  },
  {
    from: "homero",
    to: "openai",
    text: "🧠",
    bubble: "🤖 Procesando: Limpieza dental rutinaria - VERDE (no urgente)",
    thinking: "Clasificando tipo de consulta",
  },
  {
    from: "openai",
    to: "homero",
    text: "💡",
    bubble: "⚡ Recomendación: Cita regular, confirmar horario solicitado",
    thinking: "Perfecto, es cita de rutina",
  },
  {
    from: "homero",
    to: "calendario",
    text: "📋",
    bubble: "📅 Verificando disponibilidad mañana 14:00 Dr. Morales",
    thinking: "Consultando agenda dental",
  },
  {
    from: "calendario",
    to: "homero",
    text: "⏰",
    bubble: "✓ Disponible: Mañana 14:00-15:00 Dr. Morales (Consultorio 3)",
    thinking: "Horario libre confirmado",
  },
  {
    from: "homero",
    to: "google",
    text: "📅",
    bubble: "🗓️ Agendando: Limpieza dental mañana 14:00 Dr. Morales",
    thinking: "Bloqueando el horario",
  },
  {
    from: "google",
    to: "homero",
    text: "✅",
    bubble: "🎯 Cita confirmada en agenda del Dr. Morales",
    thinking: "Agenda actualizada exitosamente",
  },
  {
    from: "homero",
    to: "email",
    text: "✉️",
    bubble: "📧 Preparación: No comer 2h antes, traer cédula y carnet",
    thinking: "Enviando instrucciones preparatorias",
  },
  {
    from: "homero",
    to: "whatsapp",
    text: "💬",
    bubble: '📱 "Confirmado: Limpieza dental mañana 14:00 Dr. Morales"',
    thinking: "Enviando confirmación al paciente",
  },
  {
    from: "homero",
    to: "whatsapp",
    text: "✨",
    bubble: '🎉 "¡Listo! Tu limpieza dental está agendada mañana 14:00"',
    thinking: "Cita dental agendada perfectamente",
  },
] as const;

const connections: [NodeKey, NodeKey][] = [
  ["whatsapp", "homero"],
  ["homero", "base-datos"],
  ["base-datos", "homero"],
  ["homero", "openai"],
  ["openai", "homero"],
  ["homero", "calendario"],
  ["calendario", "homero"],
  ["homero", "google"],
  ["google", "homero"],
  ["homero", "email"],
  ["homero", "whatsapp"],
];

function getNodeClass(key: NodeKey) {
  return (
    "canvas-soluciones-nodo " +
    (key === "whatsapp"
      ? "whatsapp paciente"
      : key === "base-datos"
      ? "base-datos"
      : key === "calendario"
      ? "calendario"
      : key === "openai"
      ? "openai"
      : key === "google"
      ? "google"
      : key === "email"
      ? "email"
      : key === "homero"
      ? "central"
      : "")
  );
}

const nodeLabels: Record<NodeKey, { icon: string; label: string }> = {
  whatsapp: { icon: "💬", label: "Paciente (WhatsApp)" },
  "base-datos": { icon: "🏥", label: "Base Médica" },
  calendario: { icon: "📅", label: "Calendario" },
  openai: { icon: "🧠", label: "OpenAI" },
  google: { icon: "📆", label: "Google Calendar" },
  email: { icon: "✉️", label: "Email" },
  homero: { icon: "🤖", label: "HomeroAI" },
};

export default function SolutionsSection() {
  const [step, setStep] = useState(0);
  const [anim, setAnim] = useState(false);
  const msgRef = useRef<HTMLDivElement>(null);
  const bubbleRef = useRef<HTMLDivElement>(null);
  const thinkingRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  // Dibuja las líneas de conexión
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    svg.innerHTML = "";
    connections.forEach(([aKey, bKey], i) => {
      const a = nodes[aKey], b = nodes[bKey];
      const dx = b.x - a.x, dy = b.y - a.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const curvature = Math.min(distance * 0.3, 100);
      const midX = (a.x + b.x) / 2;
      const midY = (a.y + b.y) / 2;
      const perpX = (-dy / distance) * curvature;
      const perpY = (dx / distance) * curvature;
      const controlX = midX + perpX;
      const controlY = midY + perpY;
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute(
        "d",
        `M${a.x},${a.y} Q${controlX},${controlY} ${b.x},${b.y}`
      );
      path.setAttribute("class", "canvas-soluciones-connection-line");
      path.setAttribute("marker-end", "url(#arrow)");
      svg.appendChild(path);
    });
    // Definición de la flecha
    svg.innerHTML += `<defs><marker id=\"arrow\" markerWidth=\"12\" markerHeight=\"12\" refX=\"10\" refY=\"4\" orient=\"auto\" markerUnits=\"strokeWidth\"><path d=\"M0,0 L0,8 L12,4 z\" fill=\"rgba(255,255,255,0.4)\" /></marker></defs>`;
  }, []);

  // Animación del mensaje y burbujas
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let raf: number;
    setAnim(false);
    const { from, to, text, bubble: bubbleText, thinking } = flow[step];
    const a = nodes[from as NodeKey], b = nodes[to as NodeKey];
    const msg = msgRef.current;
    const bubble = bubbleRef.current;
    const thinkingBubble = thinkingRef.current;
    if (!msg || !bubble || !thinkingBubble) return;
    // Pensamiento
    if (from === "homero") {
      thinkingBubble.textContent = thinking;
      thinkingBubble.style.left = a.x - 50 + "px";
      thinkingBubble.style.top = a.y - 100 + "px";
      thinkingBubble.style.opacity = "1";
    } else {
      thinkingBubble.style.opacity = "0";
    }
    // Mensaje
    msg.textContent = text;
    msg.style.left = a.x - 25 + "px";
    msg.style.top = a.y - 25 + "px";
    msg.style.opacity = "1";
    // Burbuja
    bubble.textContent = bubbleText;
    bubble.style.left = a.x + 40 + "px";
    bubble.style.top = a.y - 70 + "px";
    bubble.style.opacity = "1";
    // Animación
    let t = 0;
    const duration = 90;
    function move() {
      t++;
      const progress = t / duration;
      const dx = b.x - a.x,
        dy = b.y - a.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const curvature = Math.min(distance * 0.3, 100);
      const midX = (a.x + b.x) / 2;
      const midY = (a.y + b.y) / 2;
      const perpX = (-dy / distance) * curvature;
      const perpY = (dx / distance) * curvature;
      const controlX = midX + perpX;
      const controlY = midY + perpY;
      const x =
        Math.pow(1 - progress, 2) * a.x +
        2 * (1 - progress) * progress * controlX +
        Math.pow(progress, 2) * b.x;
      const y =
        Math.pow(1 - progress, 2) * a.y +
        2 * (1 - progress) * progress * controlY +
        Math.pow(progress, 2) * b.y;
      if (msg) {
        msg.style.left = x - 25 + "px";
        msg.style.top = y - 25 + "px";
      }
      if (t < duration) {
        raf = requestAnimationFrame(move);
      } else {
        timeout = setTimeout(() => {
          if (msg) msg.style.opacity = "0";
          if (bubble) bubble.style.opacity = "0";
          if (thinkingBubble) thinkingBubble.style.opacity = "0";
          setAnim(true);
          setTimeout(() => {
            setStep((s) => (s + 1) % flow.length);
          }, 1000);
        }, 700);
      }
    }
    move();
    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line
  }, [step]);

  // Inicia animación al montar
  useEffect(() => {
    const timer = setTimeout(() => setAnim(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-0 px-0 bg-transparent flex justify-center items-center min-h-[700px]">
      <div className="canvas-soluciones" id="canvas-soluciones">
        <div className="canvas-soluciones-grid-bg"></div>
        {/* Nodos */}
        {Object.entries(nodes).map(([key, pos]) => {
          const typedKey = key as NodeKey;
          return (
            <div
              key={key}
              className={getNodeClass(typedKey)}
              style={{ left: pos.x - 80, top: pos.y - 42.5 }}
            >
              {nodeLogos[typedKey] ? (
                <img
                  src={nodeLogos[typedKey]}
                  alt={nodeLabels[typedKey].label}
                  className="canvas-soluciones-logo-img"
                />
              ) : (
                <span className="canvas-soluciones-icon">{nodeLabels[typedKey].icon}</span>
              )}
              {nodeLabels[typedKey].label}
            </div>
          );
        })}
        {/* SVG conexiones */}
        <svg ref={svgRef} id="canvas-soluciones-lines"></svg>
        {/* Mensaje animado */}
        <div className="canvas-soluciones-msg" ref={msgRef}></div>
        {/* Burbuja explicativa */}
        <div className="canvas-soluciones-bubble" ref={bubbleRef}></div>
        {/* Pensamientos de HomeroAI */}
        <div className="canvas-soluciones-thinking-bubble" ref={thinkingRef}></div>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
          .canvas-soluciones {
            position: relative;
            width: 1200px;
            height: 700px;
            background: rgba(255, 255, 255, 0.02);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 24px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.1);
            overflow: visible;
            z-index: 2;
          }
          .canvas-soluciones-grid-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0);
            background-size: 40px 40px;
            opacity: 0.4;
            z-index: 0;
          }
          .canvas-soluciones-nodo {
            position: absolute;
            width: 160px;
            height: 85px;
            border-radius: 16px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-weight: 600;
            font-size: 0.9rem;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
            border: 2px solid transparent;
            z-index: 10;
            user-select: none;
          }
          .canvas-soluciones-nodo:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 24px rgba(0,0,0,0.3);
          }
          .canvas-soluciones-icon {
            font-size: 2.2rem;
            margin-bottom: 4px;
            filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
          }
          .canvas-soluciones-logo-img-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 4px;
          }
          .canvas-soluciones-logo-img {
            width: 38px;
            height: 38px;
            object-fit: contain;
            display: block;
            background: transparent;
            border-radius: 0;
            box-shadow: none;
          }
          .canvas-soluciones-nodo.central {
            left: 520px;
            top: 310px;
            background: linear-gradient(135deg, #43a047 0%, #388e3c 100%);
            border: 3px solid rgba(255,255,255,0.2);
            box-shadow: 0 0 60px rgba(67,160,71,0.4), 0 8px 32px rgba(0,0,0,0.3);
            color: #fff;
            font-size: 1rem;
            animation: canvas-soluciones-pulse 3s ease-in-out infinite;
          }
          @keyframes canvas-soluciones-pulse {
            0%,100% { box-shadow: 0 0 60px rgba(67,160,71,0.4), 0 8px 32px rgba(0,0,0,0.3); }
            50% { box-shadow: 0 0 80px rgba(67,160,71,0.6), 0 8px 32px rgba(0,0,0,0.3); }
          }
          .canvas-soluciones-nodo.whatsapp {
            left: 600px;
            top: 80px;
            background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
            color: #fff;
            box-shadow: 0 8px 24px rgba(37,211,102,0.3);
          }
          .canvas-soluciones-nodo.base-datos {
            left: 250px;
            top: 200px;
            background: linear-gradient(135deg, #ea4335 0%, #d93025 100%) !important;
            color: #fff !important;
            box-shadow: 0 8px 24px rgba(234,67,53,0.18);
          }
          .canvas-soluciones-nodo.calendario {
            left: 950px;
            top: 200px;
            background: linear-gradient(135deg, #fbc02d 0%, #f57f17 100%);
            color: #333;
            box-shadow: 0 8px 24px rgba(251,192,45,0.3);
          }
          .canvas-soluciones-nodo.openai {
            left: 350px;
            top: 520px;
            background: linear-gradient(135deg, #000 0%, #333 100%);
            color: #fff;
            box-shadow: 0 8px 24px rgba(0,0,0,0.4);
          }
          .canvas-soluciones-nodo.google {
            left: 850px;
            top: 520px;
            background: linear-gradient(135deg, #4285f4 0%, #34a853 50%, #ea4335 100%);
            color: #fff;
            box-shadow: 0 8px 24px rgba(66,133,244,0.3);
          }
          .canvas-soluciones-nodo.email {
            left: 600px;
            top: 600px;
            background: #f5f5f5 !important;
            color: #333 !important;
            box-shadow: 0 8px 24px rgba(180,180,180,0.18);
          }
          .canvas-soluciones .canvas-soluciones-nodo,
          .canvas-soluciones .canvas-soluciones-msg,
          .canvas-soluciones .canvas-soluciones-bubble,
          .canvas-soluciones .canvas-soluciones-thinking-bubble,
          .canvas-soluciones .canvas-soluciones-grid-bg,
          .canvas-soluciones #canvas-soluciones-lines {
            pointer-events: auto;
          }
          #canvas-soluciones-lines {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
          }
          .canvas-soluciones-connection-line {
            stroke: rgba(255,255,255,0.2);
            stroke-width: 2;
            fill: none;
            filter: drop-shadow(0 0 8px rgba(67,160,71,0.3));
          }
          .canvas-soluciones-msg {
            position: absolute;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: linear-gradient(135deg, #43a047 0%, #66bb6a 100%);
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 0.8rem;
            box-shadow: 0 8px 24px rgba(67,160,71,0.4), 0 0 20px rgba(67,160,71,0.3);
            z-index: 20;
            opacity: 0;
            transition: all 0.3s ease;
            border: 3px solid rgba(255,255,255,0.2);
          }
          .canvas-soluciones-bubble {
            position: absolute;
            background: rgba(255,255,255,0.95);
            backdrop-filter: blur(10px);
            color: #333;
            padding: 12px 18px;
            border-radius: 16px;
            font-size: 0.9rem;
            font-weight: 500;
            box-shadow: 0 8px 32px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.1);
            opacity: 0;
            pointer-events: none;
            z-index: 30;
            transition: all 0.3s ease;
            max-width: 280px;
            line-height: 1.4;
          }
          .canvas-soluciones-bubble::before {
            content: '';
            position: absolute;
            bottom: -8px;
            left: 20px;
            width: 0;
            height: 0;
            border-left: 8px solid transparent;
            border-right: 8px solid transparent;
            border-top: 8px solid rgba(255,255,255,0.95);
          }
          .canvas-soluciones-thinking-bubble {
            position: absolute;
            background: linear-gradient(135deg, #43a047 0%, #66bb6a 100%);
            color: #fff;
            padding: 8px 14px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 500;
            box-shadow: 0 4px 16px rgba(67,160,71,0.3);
            opacity: 0;
            pointer-events: none;
            z-index: 25;
            transition: all 0.3s ease;
            max-width: 200px;
            line-height: 1.3;
            font-style: italic;
          }
          @media (max-width: 1300px) {
            .canvas-soluciones { width: 98vw; }
          }
          @media (max-width: 768px) {
            .canvas-soluciones { width: 95vw; height: 80vh; margin: 0; }
            .canvas-soluciones-nodo { width: 120px; height: 65px; font-size: 0.7rem; }
            .canvas-soluciones-icon { font-size: 1.6rem; }
            .canvas-soluciones-logo-img { width: 28px; height: 28px; }
            .canvas-soluciones-bubble { max-width: 180px; font-size: 0.8rem; }
          }
        `}</style>
      </div>
    </section>
  );
} 