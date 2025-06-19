import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Typography, Box, LinearProgress } from '@mui/material';

const CustomerCommunicationDemo = () => {
  const [stage, setStage] = useState('initial'); // Stages: 'initial', 'query', 'processing', 'response'
  const [query, setQuery] = useState('');
  const [aiResponse, setAiResponse] = useState('');

  const customerQuery = "Hola, estoy teniendo problemas para configurar mi cuenta, ¿pueden ayudarme?";
  const aiGeneratedResponse = "¡Hola! Claro que sí, puedo ayudarte con la configuración de tu cuenta. Por favor, describe qué pasos has seguido hasta ahora y dónde te has quedado atascado. También puedes visitar nuestra sección de ayuda [enlace a la FAQ] para encontrar guías paso a paso.";

  // Simulate the interaction flow
  useEffect(() => {
    const timer = setTimeout(() => {
      if (stage === 'initial') {
        setQuery(customerQuery);
        setStage('query');
      } else if (stage === 'query') {
        setStage('processing');
      } else if (stage === 'processing') {
        setAiResponse(aiGeneratedResponse);
        setStage('response');
      }
    }, stage === 'initial' ? 1000 : stage === 'query' ? 2000 : 2500); // Delays for simulation

    return () => clearTimeout(timer);
  }, [stage]);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.5 }}
      className="mt-16"
    >
      <Typography variant="h4" component="h2" className="text-center mb-8">
        IA Mejorando la Comunicación con Clientes
      </Typography>
      
      <Card className="w-full max-w-2xl mx-auto p-6">
        <CardHeader>
          <CardTitle>Demostración de Eficiencia</CardTitle>
          <CardDescription>Observa cómo la IA responde rápidamente a una consulta común.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <AnimatePresence mode="wait">
            {stage === 'initial' && (
              <motion.div
                key="initial"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={variants}
                className="text-center text-secondary"
              >
                <Typography>La demostración comenzará en breve...</Typography>
              </motion.div>
            )}
            {stage === 'query' && (
              <motion.div
                key="query"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={variants}
              >
                 <Typography variant="h6" className="font-bold mb-2">Consulta del Cliente:</Typography>
                 <Box className="bg-gray-100 p-4 rounded-md">
                    <Typography>{query}</Typography>
                 </Box>
              </motion.div>
            )}
            {stage === 'processing' && (
                <motion.div
                    key="processing"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={variants}
                    className="space-y-4"
                >
                    <Typography variant="h6" className="font-bold">Procesando con IA...</Typography>
                    <LinearProgress />
                </motion.div>
            )}
            {stage === 'response' && (
              <motion.div
                key="response"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={variants}
                className="space-y-4"
              >
                <Typography variant="h6" className="font-bold mb-2">Respuesta Rápida de la IA:</Typography>
                <Box className="bg-green-100 text-green-800 p-4 rounded-md">
                    <Typography>{aiResponse}</Typography>
                </Box>
                <Typography variant="body2" className="text-center text-secondary mt-4">
                    Esta es una demostración simplificada. Las IAs reales pueden manejar consultas más complejas al instante.
                </Typography>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CustomerCommunicationDemo; 