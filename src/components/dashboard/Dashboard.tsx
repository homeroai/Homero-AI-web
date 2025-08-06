// src/components/dashboard/Dashboard.tsx
import React, { useState } from 'react';
import { useConversations, useMessages, useDashboardStats, Conversation } from '../../hooks/useConversations';
import { ConversationsList } from './ConversationsList';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

const Dashboard = () => {
  const { conversations, loading, error } = useConversations();
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  const { messages, loading: messagesLoading } = useMessages(selectedConversation?.id || null);
  const stats = useDashboardStats();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando conversaciones...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600">Error: {error}</p>
          <button 
            onClick={() => window.location.reload()} 
                          className="mt-4 px-4 py-2 bg-gray-700 text-white rounded-lg"
          >
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header principal */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Homero Dashboard</h1>
                <p className="text-sm text-gray-500">Clínica Dental ABC</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">
                {format(new Date(), "EEEE, d 'de' MMMM", { locale: es })}
              </span>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">En línea</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <StatCard
            title="Conversaciones Activas"
            value={stats.activeConversations}
            icon="💬"
                            color="text-gray-600 bg-gray-100"
          />
          <StatCard
            title="Total Conversaciones"
            value={stats.totalConversations}
            icon="📊"
            color="text-green-600 bg-green-100"
          />
          <StatCard
            title="Mensajes Hoy"
            value={stats.todayMessages}
            icon="📝"
                          color="text-gray-600 bg-gray-100"
          />
          <StatCard
            title="Tiempo Respuesta"
            value={stats.avgResponseTime}
            icon="⏱️"
            color="text-yellow-600 bg-yellow-100"
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Lista de conversaciones */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow border">
              <div className="p-4 border-b">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-medium text-gray-900">Conversaciones</h2>
                  <span className="text-sm text-gray-500">{conversations.length} total</span>
                </div>
              </div>
              <ConversationsList 
                conversations={conversations}
                selectedConversation={selectedConversation}
                onSelectConversation={setSelectedConversation}
              />
            </div>
          </div>
          
          {/* Chat view */}
          <div className="lg:col-span-2">
            {selectedConversation ? (
              <div className="bg-white rounded-lg shadow border h-[600px] flex flex-col">
                {/* Header de la conversación */}
                <ChatHeader conversation={selectedConversation} />
                
                {/* Lista de mensajes */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messagesLoading ? (
                    <div className="flex justify-center items-center h-full">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-600"></div>
                    </div>
                  ) : messages.length === 0 ? (
                    <div className="flex justify-center items-center h-full text-gray-500">
                      No hay mensajes en esta conversación
                    </div>
                  ) : (
                    messages.map((message) => (
                      <MessageBubble key={message.id} message={message} />
                    ))
                  )}
                </div>
                
                {/* Footer informativo */}
                <div className="p-4 border-t bg-gray-50 rounded-b-lg">
                  <p className="text-xs text-gray-500 text-center">
                    💡 Las respuestas son automáticas vía Homero AI
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow border h-[600px] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💬</span>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Selecciona una conversación</h3>
                  <p className="text-gray-500">Elige una conversación de la lista para ver los mensajes</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

// Componente para las tarjetas de estadísticas
const StatCard = ({ title, value, icon, color }: {
  title: string;
  value: number | string;
  icon: string;
  color: string;
}) => (
  <div className="bg-white p-4 rounded-lg shadow border">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
      </div>
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl ${color}`}>
        {icon}
      </div>
    </div>
  </div>
);

// Componente para el header del chat
const ChatHeader = ({ conversation }: { conversation: Conversation }) => {
  const getPlatformIcon = (platform: string) => {
    const icons = {
      whatsapp: '💬',
      instagram: '📷',
      telegram: '✈️',
      webchat: '🌐',
      facebook: '👥'
    };
    return icons[platform as keyof typeof icons] || '💬';
  };

  const getPlatformColor = (platform: string) => {
    const colors = {
      whatsapp: 'text-green-600 bg-green-100',
      instagram: 'text-pink-600 bg-pink-100', 
              telegram: 'text-gray-600 bg-gray-100',
      webchat: 'text-gray-600 bg-gray-100',
              facebook: 'text-gray-600 bg-gray-100'
    };
    return colors[platform as keyof typeof colors] || 'text-gray-600 bg-gray-100';
  };

  return (
    <div className="p-4 border-b bg-gray-50 rounded-t-lg">
      <div className="flex items-center space-x-3">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg ${getPlatformColor(conversation.platform)}`}>
          {getPlatformIcon(conversation.platform)}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">{conversation.patient_name}</h3>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <span>{conversation.patient_phone}</span>
            <span className="capitalize">{conversation.platform}</span>
            <span className={`px-2 py-1 rounded-full text-xs ${
              conversation.status === 'active' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-gray-100 text-gray-800'
            }`}>
              {conversation.status}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Componente para las burbujas de mensaje
const MessageBubble = ({ message }: { message: any }) => {
  const isFromPatient = message.sender_type === 'patient';
  const isFromBot = message.sender_type === 'bot';
  
  return (
    <div className={`flex ${isFromPatient ? 'justify-start' : 'justify-end'}`}>
      <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
        isFromPatient
          ? 'bg-gray-100 text-gray-900'
          : isFromBot
                          ? 'bg-gray-600 text-white'
          : 'bg-green-500 text-white'
      }`}>
        <div className="text-xs font-medium mb-1 opacity-75">
          {message.sender_name}
        </div>
        <div className="text-sm whitespace-pre-wrap">
          {message.content}
        </div>
        <div className={`text-xs mt-1 ${
          isFromPatient ? 'text-gray-500' : 'text-white opacity-75'
        }`}>
          {format(new Date(message.created_at), 'HH:mm', { locale: es })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;