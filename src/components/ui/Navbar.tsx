import { motion } from 'framer-motion';
import { Icon } from "./Icon";
import React, { useEffect, useState } from 'react';
import HOLogo from '@/assets/logos/hologo.png';

interface NavbarProps {
  isAnimationComplete: boolean;
}

const Navbar = ({ isAnimationComplete }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: 'Inicio', icon: 'Home' },
    { name: 'Soluciones', icon: 'Stethoscope' },
    { name: 'Casos de Éxito', icon: 'Trophy' },
    { name: 'Contacto', icon: 'Mail' }
  ];

  return (
    <motion.nav 
      className="fixed top-0 w-full z-50 px-4 sm:px-6 py-3 sm:py-4 bg-black/20 backdrop-blur-md border-b border-white/10"
      initial={{ y: -100, opacity: 0 }}
      animate={isAnimationComplete ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
      transition={{ duration: 0.5, delay: isAnimationComplete ? 0.5 : 0 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div 
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img 
            src={HOLogo} 
            alt="Homero AI Logo"
            className="h-12 sm:h-16 filter invert"
          />
          <span className="text-xl sm:text-2xl font-bold text-white">Homero AI</span>
        </motion.div>
        {/* Menú hamburguesa en móvil */}
        <button className="md:hidden flex items-center px-2 py-1 text-white focus:outline-none" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú">
          <Icon name={menuOpen ? 'X' : 'Menu'} size={28} />
        </button>
        {/* Menú horizontal en desktop */}
        <div className="hidden md:flex space-x-8">
          {navItems.map(({ name, icon }) => (
            <motion.a
              key={name}
              href={`#${name.toLowerCase().replace(/ /g, '').replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i').replace(/ó/g, 'o').replace(/ú/g, 'u')}`}
              className="nav-link flex items-center gap-2 text-white/90 hover:text-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon name={icon} className="text-primary" />
              {name}
            </motion.a>
          ))}
        </div>
      </div>
      {/* Menú móvil desplegable */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg absolute left-0 top-full w-full flex flex-col items-center py-4 gap-4 border-b border-white/10 animate-fade-in">
          {navItems.map(({ name, icon }) => (
            <a
              key={name}
              href={`#${name.toLowerCase().replace(/ /g, '').replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i').replace(/ó/g, 'o').replace(/ú/g, 'u')}`}
              className="flex items-center gap-2 text-white/90 hover:text-primary text-lg py-2"
              onClick={() => setMenuOpen(false)}
            >
              <Icon name={icon} className="text-primary" />
              {name}
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar; 