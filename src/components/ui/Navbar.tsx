import { motion } from 'framer-motion';
import { Icon } from "./Icon";
import React, { useEffect, useState } from 'react';
import hologo from '@/assets/logos/hologo.png';

interface NavbarProps {
  isAnimationComplete: boolean;
}

interface NavItem {
  name: string;
  icon: string;
  href: string;
}

interface NavbarMobileProps {
  navItems: NavItem[];
}

function NavbarMobile({ navItems }: NavbarMobileProps) {
  const contactItem = navItems.find(item => item.name === 'Contacto');

  return (
    <nav className="fixed top-0 w-full z-50 px-3 py-2 bg-black/90 backdrop-blur-md border-b border-white/10 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img src={hologo} alt="Homero AI Logo" className="h-10" />
        <span className="text-lg font-bold text-white">Homero AI</span>
      </div>
      {contactItem && (
         <a href={contactItem.href} className="bg-homero-purpleLight text-white rounded-full px-4 py-2 text-sm font-semibold shadow hover:bg-homero-purple transition-colors">
          {contactItem.name}
         </a>
      )}
    </nav>
  );
}

const Navbar = ({ isAnimationComplete }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: 'Inicio', icon: 'Home', href: '#' },
    { name: 'Soluciones', icon: 'Stethoscope', href: '#solutions' },
    { name: 'Contacto', icon: 'Mail', href: '#contact' }
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
              {navItems.map(({ name, icon, href }) => (
                <motion.a
                  key={name}
                  href={href}
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
        <NavbarMobile navItems={navItems} />
      </div>
    </>
  );
};

export default Navbar; 