import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import BackgroundBlobs from "./components/ui/BackgroundBlobs";
import IndexPage from "./pages/index";
import PoliticaPrivacidad from "./pages/politica-de-privacidad";
import TerminosDeServicio from "./pages/terminos-de-servicio";

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <div className="fixed inset-0 -z-10 w-full h-full">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-black via-blue-900 to-blue-600" />
        <BackgroundBlobs />
      </div>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/politica-de-privacidad" element={<PoliticaPrivacidad />} />
          <Route path="/terminos-de-servicio" element={<TerminosDeServicio />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App; 