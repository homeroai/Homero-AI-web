import { Icon } from '@/components/ui/Icon';
import React from 'react';

export default function Footer() {
  return (
    <footer className="py-10 px-6 bg-black/60 border-t border-homero-purple/30 relative z-10 text-white text-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm text-white/70">
          &copy; {new Date().getFullYear()} Homero AI. Plataforma para clínicas dentales y de salud. Todos los derechos reservados.
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-white/70 hover:text-homero-purpleLight transition-colors"><Icon name="Facebook" size={24} /></a>
          <a href="#" className="text-white/70 hover:text-homero-purpleLight transition-colors"><Icon name="Twitter" size={24} /></a>
          <a href="#" className="text-white/70 hover:text-homero-purpleLight transition-colors"><Icon name="Linkedin" size={24} /></a>
          <a href="#" className="text-white/70 hover:text-homero-purpleLight transition-colors"><Icon name="Instagram" size={24} /></a>
        </div>

        <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-sm">
          <a href="#" className="text-white/70 hover:text-homero-purpleLight transition-colors">Política de Privacidad</a>
          <a href="#" className="text-white/70 hover:text-homero-purpleLight transition-colors">Términos de Servicio</a>
        </div>
      </div>
    </footer>
  );
} 