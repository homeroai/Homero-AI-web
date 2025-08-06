// src/components/dashboard/ConversationsList.tsx
import React, { useState } from 'react';
import { Conversation } from '../../hooks/useConversations';

interface ConversationsListProps {
  conversations: Conversation[];
  selectedConversation: Conversation | null;
  onSelectConversation: (conversation: Conversation) => void;
}

export const ConversationsList = ({ 
  conversations, 
  selectedConversation, 
  onSelectConversation 
}: ConversationsListProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'all' | 'active' | 'pending' | 'resolved'>('all');

  // Filtrar conversaciones
  const filteredConversations = conversations.filter(conversation => {
    const matchesSearch = conversation.patient_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         conversation.patient_phone.includes(searchTerm);
    const matchesFilter = filter === 'all' || conversation.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="h-[500px] flex flex-col">
      {/* Barra de búsqueda y filtros */}
      <div className="p-4 border-b space-y-3">
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar por nombre o teléfono..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
                          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        
        <div className="flex space-x-2">
          {['all', 'active', 'pending', 'resolved'].map((filterOption) => (
            <button
              key={filterOption}
              onClick={() => setFilter(filterOption as any)}
              className={`px-3 py-1 text-xs rounded-full transition-colors ${
                filter === filterOption
                  ? 'bg-gray-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {filterOption === 'all' ? 'Todas' : 
               filterOption === 'active' ? 'Activas' :
               filterOption === 'pending' ? 'Pendientes' : 'Resueltas'}
            </button>
          ))}
        </div>
      </div>

      {/* Lista de conversaciones */}
      <div className="flex-1 overflow-y-auto divide-y divide-gray-200">
        {filteredConversations.length === 0 ? (
          <div className="p-8 text-center">
            <div className="text-gray-400 text-4xl mb-4">🔍</div>
            <p className="text-gray-500">
              {searchTerm ? 'No se encontraron conversaciones' : 'No hay conversaciones'}
            </p>
          </div>
        ) : (
          filteredConversations.map((conversation) => (
            <ConversationItem
              key={conversation.id}
              conversation={conversation}
              isSelected={selectedConversation?.id === conversation.id}
              onClick={() => onSelectConversation(conversation)}
            />
          ))
        )}
      </div>
    </div>
  );
};

// Componente individual de conversación
const ConversationItem = ({ 
  conversation, 
  isSelected, 
  onClick 
}: {
  conversation: Conversation;
  isSelected: boolean;
  onClick: () => void;
}) => {
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

  const formatTimeAgo = (dateString: string) => {
    const now = new Date();
    const messageDate = new Date(dateString);
    const diffInMinutes = Math.floor((now.getTime() - messageDate.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Ahora';
    if (diffInMinutes < 60) return `${diffInMinutes}m`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h`;
    return `${Math.floor(diffInMinutes / 1440)}d`;
  };

  const truncateMessage = (message: string, maxLength: number = 50) => {
    return message.length > maxLength ? `${message.substring(0, maxLength)}...` : message;
  };

  return (
    <div
      onClick={onClick}
      className={`p-4 cursor-pointer transition-colors hover:bg-gray-50 ${
                        isSelected ? 'bg-gray-50 border-r-4 border-gray-500' : ''
      }`}
    >
      <div className="flex items-start space-x-3">
        {/* Avatar con ícono de plataforma */}
        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg flex-shrink-0 ${getPlatformColor(conversation.platform)}`}>
          {getPlatformIcon(conversation.platform)}
        </div>
        
        <div className="flex-1 min-w-0">
          {/* Header: Nombre y tiempo */}
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-sm font-semibold text-gray-900 truncate">
              {conversation.patient_name}
            </h3>
            <span className="text-xs text-gray-500 flex-shrink-0">
              {formatTimeAgo(conversation.last_message_at)}
            </span>
          </div>
          
          {/* Info del paciente */}
          <div className="flex items-center space-x-2 mb-1">
            <span className="text-xs text-gray-500 truncate">
              {conversation.patient_phone}
            </span>
            <span className={`px-2 py-0.5 rounded-full text-xs ${
              conversation.status === 'active' 
                ? 'bg-green-100 text-green-800' 
                : conversation.status === 'pending'
                ? 'bg-yellow-100 text-yellow-800'
                : 'bg-gray-100 text-gray-800'
            }`}>
              {conversation.status}
            </span>
          </div>
          
          {/* Último mensaje */}
          <p className="text-sm text-gray-600 truncate">
            {truncateMessage(conversation.last_message)}
          </p>
          
          {/* Badge de mensajes no leídos */}
          {conversation.unread_count > 0 && (
            <div className="mt-2">
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                {conversation.unread_count} nuevo{conversation.unread_count > 1 ? 's' : ''}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};