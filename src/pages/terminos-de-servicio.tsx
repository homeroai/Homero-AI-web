import LegalLayout from "@/components/LegalLayout";
import { Icon } from '@/components/ui/Icon';

export default function TerminosDeServicio() {
  return (
    <LegalLayout>
      <div className="flex items-center justify-start mb-8">
        <a href="/" className="flex items-center gap-2 bg-black hover:bg-gray-900 text-white font-bold py-2 px-5 rounded-full shadow-lg transition-all duration-300">
          <Icon name="Home" size={22} />
          Regresar a Homero
        </a>
      </div>

      <h1 className="text-3xl font-bold mb-2">Términos de Servicio – Homero AI SpA</h1>
      <p className="text-white/70 mb-6">Última actualización: 8 de agosto de 2025</p>

      <p>
        Estos Términos regulan el uso de la plataforma de Homero AI SpA por parte de negocios y empresas. Al acceder o usar el servicio, aceptas estos Términos en su totalidad.
      </p>

      <h2 className="text-xl font-bold mt-6 mb-3">1. Descripción del servicio</h2>
      <p>
        Homero AI ofrece automatización de agendamientos y reservas, recordatorios, flujos de atención, asistencia conversacional multicanal (WhatsApp, Instagram, Facebook, Telegram, Email) e integraciones con CRM y calendarios.
      </p>

      <h2 className="text-xl font-bold mt-6 mb-3">2. Requisitos para el uso</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>Ser mayor de edad y contar con capacidad legal para contratar.</li>
        <li>Proporcionar información veraz al registrarte.</li>
        <li>Usar el servicio únicamente con fines legales.</li>
      </ul>

      <h2 className="text-xl font-bold mt-6 mb-3">3. Uso permitido y prohibido</h2>
      <p className="mb-2">El usuario NO puede:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Usar la plataforma para spam, fraude o actividades ilegales.</li>
        <li>Suplantar identidades.</li>
        <li>Introducir malware o dañar sistemas.</li>
      </ul>

      <h2 className="text-xl font-bold mt-6 mb-3">4. Propiedad intelectual</h2>
      <p>
        Todo software, scripts, flujos, diseños y contenido de la plataforma son propiedad exclusiva de Homero AI, salvo indicación contraria. No se permite su copia, distribución o uso sin autorización.
      </p>

      <h2 className="text-xl font-bold mt-6 mb-3">5. Precios y pagos</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>Las tarifas y planes se indican en la web.</li>
        <li>Los pagos son mensuales o anuales, por adelantado.</li>
        <li>No se realizan reembolsos salvo disposición legal.</li>
      </ul>

      <h2 className="text-xl font-bold mt-6 mb-3">6. Limitación de responsabilidad</h2>
      <p>
        Homero AI no será responsable por fallos causados por proveedores externos o fuerza mayor, pérdida de datos o interrupciones fuera de nuestro control, ni por resultados comerciales específicos.
      </p>

      <h2 className="text-xl font-bold mt-6 mb-3">7. Indemnización</h2>
      <p>
        El usuario indemnizará a Homero AI por daños, reclamaciones o gastos derivados del uso indebido del servicio.
      </p>

      <h2 className="text-xl font-bold mt-6 mb-3">8. Cancelación y suspensión</h2>
      <p>
        Puedes cancelar tu cuenta en cualquier momento escribiendo a <a href="mailto:contacto@homero.ai" className="underline">contacto@homero.ai</a>. Nos reservamos el derecho a suspender o cancelar cuentas por incumplimiento de estos Términos.
      </p>

      <h2 className="text-xl font-bold mt-6 mb-3">9. Cambios en los Términos</h2>
      <p>
        Podemos modificar estos Términos, notificando por email y/o publicando la nueva versión en la web. El uso continuado implica aceptación.
      </p>

      <h2 className="text-xl font-bold mt-6 mb-3">10. Legislación y jurisdicción</h2>
      <p>
        Estos Términos se rigen por la ley chilena. Cualquier disputa será resuelta en tribunales de Santiago, Chile.
      </p>
    </LegalLayout>
  );
}
  