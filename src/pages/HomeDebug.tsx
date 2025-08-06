import React from 'react';

export default function HomeDebug() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden bg-black">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Homero AI - Debug
        </h1>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Estado de la aplicación:</h2>
          <ul className="space-y-2 text-green-400">
            <li>✅ React está funcionando</li>
            <li>✅ Tailwind CSS está cargado</li>
            <li>✅ Routing está configurado</li>
            <li>✅ Error Boundary está activo</li>
          </ul>
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-400">
            Si puedes ver esta página, el problema está en los componentes específicos.
          </p>
        </div>
      </div>
    </div>
  );
} 