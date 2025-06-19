import { useState } from 'react';
import { Paper, TextField, IconButton, Typography, Box } from '@mui/material';
import { Send as SendIcon } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([{
    id: Date.now(),
    text: "Hola, ¿cómo puedo ayudarte hoy?",
    isUser: false
  }]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      const newMessage: Message = {
        id: Date.now(),
        text: input,
        isUser: true,
      };
      setMessages([...messages, newMessage]);
      setInput('');
      
      // Simular respuesta del AI
      setTimeout(() => {
        const aiResponse: Message = {
          id: Date.now() + 1,
          text: 'Esta es una respuesta simulada del AI. En una implementación real, esto vendría de tu backend.',
          isUser: false,
        };
        setMessages(prev => [...prev, aiResponse]);
      }, 1000);
    }
  };

  return (
    <Box className="h-[calc(100vh-200px)] flex flex-col">
      <Paper className="flex-grow p-4 mb-4 overflow-y-auto">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`mb-4 ${message.isUser ? 'text-right' : 'text-left'}`}
            >
              <Paper
                elevation={1}
                className={`inline-block p-3 ${
                  message.isUser ? 'bg-primary text-white' : 'bg-gray-100'
                }`}
              >
                <Typography>{message.text}</Typography>
              </Paper>
            </motion.div>
          ))}
        </AnimatePresence>
      </Paper>
      <Box className="flex gap-2">
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Escribe tu mensaje..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <IconButton
          color="primary"
          onClick={handleSend}
          className="bg-primary text-white hover:bg-primary-dark"
        >
          <SendIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Chat; 