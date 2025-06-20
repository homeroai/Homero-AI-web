import LegalLayout from "@/components/LegalLayout";

export default function PoliticaPrivacidad() {
  return (
    <LegalLayout>
      <h1 className="text-3xl font-bold mb-6">Política de Privacidad</h1>
      <p>
        En Homero AI SpA (“nosotros”, “nuestro” o “la Empresa”), valoramos y respetamos tu privacidad.
        Esta Política de Privacidad describe cómo recopilamos, usamos y protegemos tus datos personales
        cuando utilizas nuestros servicios en Chile.
      </p>

      <h2 className="text-xl font-bold mt-6 mb-4">1. Información que recopilamos</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>Nombre, correo electrónico, número de teléfono y nombre de la clínica.</li>
        <li>Datos de agendamiento, preferencias de contacto y mensajes enviados.</li>
        <li>Información técnica como IP, navegador y páginas visitadas.</li>
      </ul>

      <h2 className="text-xl font-bold mt-6 mb-4">2. Cómo usamos tus datos</h2>
      <p>Usamos tus datos para:</p>
      <ul className="list-disc pl-5 space-y-2 mt-2">
        <li>Agendar citas y enviar recordatorios automáticos.</li>
        <li>Mejorar la experiencia de los usuarios y optimizar nuestras automatizaciones.</li>
        <li>Comunicarnos contigo sobre actualizaciones o novedades.</li>
      </ul>

      <h2 className="text-xl font-bold mt-6 mb-4">3. Compartir información</h2>
      <p>
        No vendemos ni compartimos tu información personal con terceros, salvo cuando sea
        estrictamente necesario para prestar el servicio (ej: proveedores tecnológicos) o requerido
        por ley.
      </p>

      <h2 className="text-xl font-bold mt-6 mb-4">4. Seguridad</h2>
      <p>
        Protegemos tus datos con medidas técnicas y organizativas apropiadas para evitar accesos no
        autorizados.
      </p>

      <h2 className="text-xl font-bold mt-6 mb-4">5. Tus derechos</h2>
      <p>
        Puedes solicitar en cualquier momento acceso, rectificación o eliminación de tus datos
        enviando un correo a{" "}
        <a href="mailto:contacto@homero.ai" className="font-bold underline">
          contacto@homero.ai
        </a>
        .
      </p>

      <h2 className="text-xl font-bold mt-6 mb-4">6. Cambios a esta política</h2>
      <p>
        Podemos actualizar esta política ocasionalmente. Te notificaremos por correo electrónico o
        en nuestro sitio web.
      </p>
    </LegalLayout>
  );
}
  