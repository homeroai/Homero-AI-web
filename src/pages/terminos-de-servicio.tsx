import LegalLayout from "@/components/LegalLayout";

export default function TerminosDeServicio() {
  return (
    <LegalLayout>
      <h1 className="text-3xl font-bold mb-6">Términos de Servicio</h1>

      <p>
        Estos Términos de Servicio regulan el uso de la plataforma Homero AI SpA (“nosotros”, “la
        Empresa”) por parte de clínicas y centros de salud. Al utilizar nuestros servicios, aceptas
        estos términos en su totalidad.
      </p>

      <h2 className="text-xl font-bold mt-6 mb-4">1. Descripción del servicio</h2>
      <p>
        Homero AI ofrece automatización de agendamientos, recordatorios, flujos de atención, y
        asistencia conversacional a clínicas dentales y de salud.
      </p>

      <h2 className="text-xl font-bold mt-6 mb-4">2. Uso adecuado</h2>
      <p>
        Te comprometes a utilizar la plataforma de manera lícita, sin dañar sistemas, suplantar
        identidades ni vulnerar datos de terceros.
      </p>

      <h2 className="text-xl font-bold mt-6 mb-4">3. Propiedad intelectual</h2>
      <p>
        Todo el contenido generado por Homero AI, incluyendo software, scripts, diseños y flujos,
        son propiedad exclusiva de la Empresa, salvo que se indique lo contrario.
      </p>

      <h2 className="text-xl font-bold mt-6 mb-4">4. Cancelación de cuenta</h2>
      <p>
        Puedes solicitar la eliminación de tu cuenta en cualquier momento escribiendo a{" "}
        <a href="mailto:contacto@homero.ai" className="font-bold underline">
          contacto@homero.ai
        </a>
        . Nos reservamos el derecho de suspender cuentas por mal uso o incumplimiento de estos
        términos.
      </p>

      <h2 className="text-xl font-bold mt-6 mb-4">5. Limitación de responsabilidad</h2>
      <p>
        Homero AI no será responsable por pérdidas de datos, ingresos o interrupciones del servicio
        derivadas de causas externas, fuerza mayor o mal uso de la plataforma.
      </p>

      <h2 className="text-xl font-bold mt-6 mb-4">6. Legislación aplicable</h2>
      <p>
        Estos términos se rigen por las leyes de la República de Chile. Cualquier conflicto será
        resuelto por tribunales chilenos.
      </p>
    </LegalLayout>
  );
}
  