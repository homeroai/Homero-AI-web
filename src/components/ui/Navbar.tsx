import { motion } from 'framer-motion';
import { Icon } from "./Icon";
import HOLogo from '@/assets/logos/HOLogo.png';

interface NavbarProps {
  isAnimationComplete: boolean;
}

const Navbar = ({ isAnimationComplete }: NavbarProps) => {
  const navItems = [
    { name: 'Inicio', icon: 'Home' },
    { name: 'Soluciones', icon: 'Stethoscope' },
    { name: 'Casos de Éxito', icon: 'Trophy' },
    { name: 'Contacto', icon: 'Mail' }
  ];

  return (
    <motion.nav 
      className="fixed top-0 w-full z-50 px-6 py-4 bg-black/20 backdrop-blur-md border-b border-white/10"
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
            className="h-16 filter invert(100%)"
          />
          <span className="text-2xl font-bold text-white">Homero AI</span>
        </motion.div>
        
        <div className="flex space-x-8">
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
  );
};

export default Navbar; 