import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedShapeBlur() {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="w-[800px] h-[800px] rounded-[100px] bg-gradient-to-br from-homero-purple/20 to-homero-purpleDark/20 backdrop-blur-3xl"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-[80px] bg-gradient-to-tr from-homero-purpleLight/10 to-homero-purple/10 backdrop-blur-2xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
    </motion.div>
  );
} 