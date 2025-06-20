import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import routes from "~react-pages";
import BackgroundBlobs from "./components/ui/BackgroundBlobs";

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <div className="fixed inset-0 -z-10 w-full h-full">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-black via-blue-900 to-blue-600" />
        <BackgroundBlobs />
      </div>
      <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>
    </div>
  );
}

export default App; 