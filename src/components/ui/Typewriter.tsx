import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface TypewriterProps {
  text: string;
  delay?: number;
  onComplete?: () => void;
}

export default function Typewriter({ text, delay = 0, onComplete }: TypewriterProps) {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayText(prev => prev + text.charAt(i));
          i++;
        } else {
          clearInterval(interval);
          if (onComplete) onComplete();
        }
      }, 50); // Speed of typing
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay, onComplete]);

  return <p>{displayText}</p>;
} 