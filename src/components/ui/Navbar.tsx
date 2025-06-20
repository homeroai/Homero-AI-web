import { motion } from 'framer-motion';
import { Icon } from "./Icon";
import React, { useEffect, useState } from 'react';
import hologo from '@/assets/logos/hologo.png';

interface NavbarProps {
  isAnimationComplete: boolean;
}

function NavbarMobile() {
  return (
    <nav className="fixed top-0 w-full z-50 px-3 py-2 bg-black/90 backdrop-blur-md border-b border-white/10 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img src={hologo} alt="Homero AI Logo" className="h-10" />
        <span className="text-lg font-bold text-white">Homero AI</span>
      </div>
      <a href="#contact" className="bg-homero-purpleLight text-white rounded-full px-4 py-2 text-sm font-semibold shadow hover:bg-homero-purple transition-colors">Contacto</a>
    </nav>
  );
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
    <>
      {/* Desktop/Tablet Navbar */}
      <div className="hidden sm:block">
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
                src={hologo} 
                alt="Homero AI Logo"
                className="h-12 sm:h-16"
              />
              <span className="text-xl sm:text-2xl font-bold text-white">Homero AI</span>
            </motion.div>
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
        </motion.nav>
      </div>
      {/* Mobile Navbar */}
      <div className="block sm:hidden">
        <NavbarMobile />
      </div>
    </>
  );
};

export default Navbar; 