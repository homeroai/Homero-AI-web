import LegalLayout from "@/components/LegalLayout";
import { Icon } from '@/components/ui/Icon';

export default function PoliticaPrivacidad() {
  return (
    <LegalLayout>
      <div className="flex items-center justify-start mb-8">
        <a href="/" className="flex items-center gap-2 bg-black hover:bg-gray-900 text-white font-bold py-2 px-5 rounded-full shadow-lg transition-all duration-300">
          <Icon name="Home" size={22} />
          Regresar a Homero
        </a>
      </div>

      <h1 className="text-3xl font-bold mb-2">Política de Privacidad – Homero AI SpA</h1>
      <p className="text-white/70 mb-6">Última actualización: 8 de agosto de 2025</p>

      <p className="mb-4">
        En Homero AI SpA ("Homero AI", "nosotros", "nuestro" o "la Empresa"), valoramos y respetamos tu privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos, protegemos y compartimos tus datos personales al utilizar nuestros servicios.
      </p>

      <h2 className="text-xl font-bold mt-6 mb-3">1. Responsable del tratamiento</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>Nombre legal: Homero AI SpA</li>
        <li>Correo: <a href="mailto:homeroagent@gmail.com" className="underline">homeroagent@gmail.com</a></li>
      </ul>

      <h2 className="text-xl font-bold mt-6 mb-3">2. Datos que recopilamos</h2>
      <p className="mb-2">Podemos recopilar las siguientes categorías de información:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-semibold">Datos de identificación y contacto:</span> nombre, apellido, correo electrónico, teléfono, nombre de la empresa o negocio.
        </li>
        <li>
          <span className="font-semibold">Datos de uso del servicio:</span> mensajes enviados y recibidos, datos de agendamiento o reservas, preferencias de contacto.
        </li>
        <li>
          <span className="font-semibold">Datos técnicos:</span> dirección IP, navegador, dispositivo, sistema operativo, páginas visitadas, cookies.
        </li>
        <li>
          <span className="font-semibold">Datos sensibles (si aplica):</span> información que el usuario proporcione voluntariamente (p. ej., motivos de una reserva o información de salud si el negocio lo requiere).
        </li>
      </ul>

      <h2 className="text-xl font-bold mt-6 mb-3">3. Finalidad del tratamiento</h2>
      <p className="mb-2">Usamos tus datos para:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Prestar nuestros servicios de automatización, agendamiento/reservas y comunicación.</li>
        <li>Enviar recordatorios y notificaciones automáticas.</li>
        <li>Mejorar y personalizar tu experiencia.</li>
        <li>Cumplir con obligaciones legales y normativas.</li>
        <li>Realizar análisis estadísticos internos.</li>
      </ul>

      <h2 className="text-xl font-bold mt-6 mb-3">4. Base legal</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>Consentimiento (para envíos comerciales y tratamiento de datos sensibles).</li>
        <li>Ejecución de contrato (para prestar el servicio solicitado).</li>
        <li>Obligación legal (para cumplir normativas aplicables).</li>
        <li>Interés legítimo (mejora del servicio y prevención de fraude).</li>
      </ul>

      <h2 className="text-xl font-bold mt-6 mb-3">5. Cesión y acceso por terceros</h2>
      <p className="mb-2">Podemos compartir datos con:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Proveedores tecnológicos (p. ej., Twilio, Meta/Facebook, Google, HubSpot, OpenAI, plataformas de hosting).</li>
        <li>Colaboradores y subcontratistas que necesiten acceso para prestar el servicio.</li>
        <li>Autoridades, cuando sea requerido por ley.</li>
      </ul>
      <p className="mt-2">
        <span className="font-semibold">Transferencias internacionales:</span> Algunos proveedores pueden almacenar datos fuera de Chile. Garantizamos que dichas transferencias cumplen con estándares de protección como el RGPD.
      </p>

      <h2 className="text-xl font-bold mt-6 mb-3">6. Cookies y tecnologías similares</h2>
      <p className="mb-2">Usamos cookies para:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Analítica y medición de uso (p. ej., Google Analytics).</li>
        <li>Personalización de contenido.</li>
        <li>Funcionalidad del chat y formularios.</li>
      </ul>
      <p className="mt-2">Puedes configurar tu navegador para rechazarlas o borrarlas, pero algunas funciones pueden verse afectadas.</p>

      <h2 className="text-xl font-bold mt-6 mb-3">7. Conservación de datos</h2>
      <p>Guardamos tus datos mientras tengas una cuenta activa y hasta 5 años después de la última interacción, salvo obligación legal de conservarlos por más tiempo.</p>

      <h2 className="text-xl font-bold mt-6 mb-3">8. Seguridad</h2>
      <p>Aplicamos medidas técnicas y organizativas como cifrado, control de accesos, auditorías y copias de seguridad para proteger tu información.</p>

      <h2 className="text-xl font-bold mt-6 mb-3">9. Derechos del usuario</h2>
      <p className="mb-2">Puedes:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Acceder, rectificar o eliminar tus datos.</li>
        <li>Limitar u oponerte al tratamiento.</li>
        <li>Solicitar portabilidad de datos.</li>
      </ul>
      <p className="mt-2">
        Para ejercer estos derechos, escribe a <a href="mailto:homeroagent@gmail.com" className="underline">homeroagent@gmail.com</a> indicando tu solicitud y acreditando tu identidad.
      </p>

      <h2 className="text-xl font-bold mt-6 mb-3">10. Cambios en la política</h2>
      <p>Podemos actualizar esta política y publicaremos la nueva versión en nuestra web con la fecha de última modificación.</p>
    </LegalLayout>
  );
}
  