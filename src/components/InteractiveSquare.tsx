import { motion } from 'framer-motion';
import { Icon } from './ui/Icon';

const InteractiveSquare = () => {
  const icons = [
    { name: 'Robot', delay: 0 },
    { name: 'Brain', delay: 0.2 },
    { name: 'Cpu', delay: 0.4 }
  ];

  return (
    <motion.div
      className="w-[200px] h-[200px] bg-black border border-white rounded-lg flex flex-col items-center justify-center p-4"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ 
        scale: 1.1,
        rotate: 5,
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="w-full h-full flex flex-col items-center justify-center gap-4 text-white">
        <motion.div
          className="text-white text-2xl font-bold"
          animate={{
            textShadow: [
              "0 0 5px rgba(255,255,255,0.5)",
              "0 0 20px rgba(255,255,255,0.8)",
              "0 0 5px rgba(255,255,255,0.5)"
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          AI
        </motion.div>
        <div className="flex gap-4 text-white">
          {icons.map(({ name, delay }) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay }}
              whileHover={{ scale: 1.2, rotate: 360 }}
              className=""
            >
              <Icon name={name} size={24} className="text-white" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default InteractiveSquare; 