import { Icon } from '@/components/ui/Icon';
import React from 'react';

export default function Footer() {
  return (
    <footer className="py-8 sm:py-10 px-3 sm:px-6 bg-black/60 border-t border-homero-purple/30 relative z-10 text-white text-center">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-5 sm:gap-6">
        <div className="flex flex-col items-center gap-2 text-xs sm:text-sm text-white/70">
          <div className="flex items-center gap-2">
            <Icon name="MapPin" size={16} />
            <span>Santiago, Chile</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Mail" size={16} />
            <a href="mailto:contacto@homero.ai" className="hover:text-homero-purpleLight transition-colors break-all">contacto@homero.ai</a>
          </div>
        </div>

        <div className="text-xs sm:text-sm text-white/70 leading-tight">
          &copy; {new Date().getFullYear()} Homero AI. Automatización inteligente para clínicas modernas. Todos los derechos reservados.
        </div>

        <div className="flex gap-4 sm:gap-6 justify-center">
          <a href="https://www.facebook.com/profile.php?id=61576748128510" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-homero-purpleLight transition-colors"><Icon name="Facebook" size={22} /></a>
          <a href="https://www.instagram.com/homeroai/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-homero-purpleLight transition-colors"><Icon name="Instagram" size={22} /></a>
        </div>

        <div className="flex flex-col sm:flex-row gap-1 sm:gap-6 text-xs sm:text-sm">
          <a href="/politica-de-privacidad" className="text-white/70 hover:text-homero-purpleLight transition-colors">Política de Privacidad</a>
          <a href="/terminos-de-servicio" className="text-white/70 hover:text-homero-purpleLight transition-colors">Términos de Servicio</a>
        </div>
      </div>
    </footer>
  );
} 