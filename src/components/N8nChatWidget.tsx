import { useEffect } from 'react';
import '@n8n/chat/style.css';
import '../styles/n8n-chat-custom.css';
import { createChat } from '@n8n/chat';
import hologo from '../assets/logos/hologo.png';

const N8nChatWidget = () => {
  useEffect(() => {
    console.log('Logo importado:', hologo);
    
    createChat({
      webhookUrl: 'https://n8n-production-0964.up.railway.app/webhook/90d7deed-596e-4d7d-8dcd-bd82f85c9926/chat',
      defaultLanguage: 'en',
      i18n: {
        en: {
          title: '¡Hola! 👋',
          subtitle: 'Inicia un chat. Estamos aquí para ayudarte.',
          footer: '',
          getStarted: 'Nueva conversación',
          inputPlaceholder: 'Escribe tu pregunta...',
          closeButtonTooltip: 'Cerrar chat',
        },
      },
      initialMessages: [
        '¡Hola! 👋',
        '¿En qué puedo ayudarte hoy?',
      ],
    });

    // Inyectar el logo después de que el chat se monte
    const interval = setInterval(() => {
      const header = document.querySelector('.n8n-chat__header');
      const chatContainer = document.querySelector('.n8n-chat');
      const toggleButton = document.querySelector('.n8n-chat__toggle');
      
      console.log('Buscando elementos:', {
        header: !!header,
        chatContainer: !!chatContainer,
        toggleButton: !!toggleButton,
        logoUrl: hologo
      });
      
      if (header && !header.querySelector('.homero-logo')) {
        console.log('Header encontrado, inyectando logo...');
        const img = document.createElement('img');
        img.src = hologo;
        img.alt = 'HomeroAI Logo';
        img.className = 'homero-logo';
        img.style.width = '56px';
        img.style.height = '56px';
        img.style.borderRadius = '50%';
        img.style.background = '#fff';
        img.style.boxShadow = '0 2px 8px rgba(20,33,61,0.2)';
        img.style.objectFit = 'contain';
        img.style.display = 'block';
        img.style.margin = '0 auto';
        img.style.position = 'relative';
        img.style.zIndex = '10';
        
        // Limpiar el header y agregar el logo
        header.innerHTML = '';
        header.appendChild(img);
        console.log('Logo de HomeroAI inyectado en el header del chat');
        
        // Verificar que la imagen se cargó
        img.onload = () => console.log('Logo cargado correctamente');
        img.onerror = () => console.error('Error cargando el logo:', hologo);
      }
      
      // Si encontramos el chat container, continuar buscando el header
      if (chatContainer && !header) {
        console.log('Chat container encontrado, pero no header aún...');
      }
    }, 2000); // Aumentar el intervalo a 2 segundos

    return () => clearInterval(interval);
  }, []);

  return null;
};

export default N8nChatWidget; 