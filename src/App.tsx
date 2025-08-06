import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import BackgroundBlobs from "./components/ui/BackgroundBlobs";
import IndexPage from "./pages/index";
import PoliticaPrivacidad from "./pages/politica-de-privacidad";
import TerminosDeServicio from "./pages/terminos-de-servicio";
import Login from "./pages/Login";
import AuthGuard from "./components/AuthGuard";
import Dashboard from "./components/dashboard/Dashboard";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <div className="relative min-h-screen w-full overflow-x-hidden">
        <div className="fixed inset-0 -z-10 w-full h-full">
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-black via-gray-900 to-gray-800" />
          <BackgroundBlobs />
        </div>
        <Suspense fallback={
          <div className="min-h-screen bg-black text-white flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
              <p>Cargando...</p>
            </div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={
              <AuthGuard>
                <Dashboard />
              </AuthGuard>
            } />
            <Route path="/politica-de-privacidad" element={<PoliticaPrivacidad />} />
            <Route path="/terminos-de-servicio" element={<TerminosDeServicio />} />
          </Routes>
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}

export default App; 