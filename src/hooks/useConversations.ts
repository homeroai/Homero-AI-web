// src/hooks/useConversations.ts
import { useState, useEffect } from 'react';
import { supabase, isSupabaseAvailable } from '../lib/supabase';

export interface Message {
  id: string;
  conversation_id: string;
  content: string;
  sender_type: 'patient' | 'bot' | 'agent';
  sender_name: string;
  platform: string;
  created_at: string;
}

export interface Conversation {
  id: string;
  clinic_id: string;
  patient_name: string;
  patient_phone: string;
  patient_rut?: string;
  platform: 'webchat' | 'whatsapp' | 'instagram' | 'telegram' | 'facebook';
  last_message: string;
  last_message_at: string;
  status: 'active' | 'resolved' | 'pending' | 'archived';
  unread_count: number;
  created_at: string;
  updated_at: string;
}

export const useConversations = () => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Si Supabase no está disponible, usar datos de demo
    if (!isSupabaseAvailable()) {
      setConversations([
        {
          id: '1',
          clinic_id: 'demo',
          patient_name: 'María González',
          patient_phone: '+56912345678',
          platform: 'whatsapp',
          last_message: 'Hola, necesito agendar una cita',
          last_message_at: new Date().toISOString(),
          status: 'active',
          unread_count: 1,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }
      ]);
      setLoading(false);
      return;
    }

    fetchConversations();
    
    // Suscripción en tiempo real para nuevas conversaciones
    const conversationsSubscription = supabase!
      .channel('conversations-changes')
      .on('postgres_changes', 
        { 
          event: '*', 
          schema: 'public', 
          table: 'conversations'
        }, 
        (payload) => {
          console.log('Conversation change:', payload);
          handleConversationChange(payload);
        }
      )
      .subscribe();

    // Suscripción para nuevos mensajes (para actualizar last_message)
    const messagesSubscription = supabase!
      .channel('messages-changes')
      .on('postgres_changes',
        {
          event: 'INSERT',
          schema: 'public', 
          table: 'messages'
        },
        (payload) => {
          console.log('New message:', payload);
          handleNewMessage(payload.new as Message);
        }
      )
      .subscribe();

    return () => {
      conversationsSubscription.unsubscribe();
      messagesSubscription.unsubscribe();
    };
  }, []);

  const fetchConversations = async () => {
    if (!isSupabaseAvailable()) return;
    
    try {
      setLoading(true);
      
      const { data, error } = await supabase!
        .from('conversations')
        .select('*')
        .order('last_message_at', { ascending: false });

      if (error) throw error;
      
      setConversations(data || []);
    } catch (err) {
      console.error('Error fetching conversations:', err);
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  const handleConversationChange = (payload: any) => {
    const { eventType, new: newRecord, old: oldRecord } = payload;
    
    switch (eventType) {
      case 'INSERT':
        setConversations(prev => [newRecord, ...prev]);
        break;
      case 'UPDATE':
        setConversations(prev => 
          prev.map(conv => 
            conv.id === newRecord.id ? newRecord : conv
          ).sort((a, b) => 
            new Date(b.last_message_at).getTime() - new Date(a.last_message_at).getTime()
          )
        );
        break;
      case 'DELETE':
        setConversations(prev => 
          prev.filter(conv => conv.id !== oldRecord.id)
        );
        break;
    }
  };

  const handleNewMessage = (message: Message) => {
    // Actualizar la conversación correspondiente
    setConversations(prev => 
      prev.map(conv => {
        if (conv.id === message.conversation_id) {
          return {
            ...conv,
            last_message: message.content,
            last_message_at: message.created_at,
            unread_count: message.sender_type === 'patient' ? conv.unread_count + 1 : conv.unread_count
          };
        }
        return conv;
      }).sort((a, b) => 
        new Date(b.last_message_at).getTime() - new Date(a.last_message_at).getTime()
      )
    );
  };

  return {
    conversations,
    loading,
    error,
    refetch: fetchConversations
  };
};

// Hook para mensajes de una conversación específica
export const useMessages = (conversationId: string | null) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!conversationId) {
      setMessages([]);
      return;
    }

    fetchMessages();
    
    // Suscripción en tiempo real para nuevos mensajes
    const subscription = supabase!
      .channel(`messages-${conversationId}`)
      .on('postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'messages',
          filter: `conversation_id=eq.${conversationId}`
        },
        (payload) => {
          console.log('New message in conversation:', payload);
          setMessages(prev => [...prev, payload.new as Message]);
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, [conversationId]);

  const fetchMessages = async () => {
    if (!conversationId || !isSupabaseAvailable()) return;
    
    try {
      setLoading(true);
      
      const { data, error } = await supabase!
        .from('messages')
        .select('*')
        .eq('conversation_id', conversationId)
        .order('created_at', { ascending: true }); // Orden cronológico

      if (error) throw error;
      
      setMessages(data || []);
    } catch (err) {
      console.error('Error fetching messages:', err);
    } finally {
      setLoading(false);
    }
  };

  return {
    messages,
    loading
  };
};

// Hook para estadísticas del dashboard
export const useDashboardStats = () => {
  const [stats, setStats] = useState({
    totalConversations: 0,
    activeConversations: 0,
    todayMessages: 0,
    avgResponseTime: '2m'
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    if (!isSupabaseAvailable()) return;
    
    try {
      // Obtener conversaciones
      const { data: conversations } = await supabase!
        .from('conversations')
        .select('status, created_at');

      // Obtener mensajes de hoy
      const today = new Date().toISOString().split('T')[0];
      const { data: todayMessages } = await supabase!
        .from('messages')
        .select('id')
        .gte('created_at', `${today}T00:00:00.000Z`)
        .lt('created_at', `${today}T23:59:59.999Z`);

      if (conversations) {
        setStats({
          totalConversations: conversations.length,
          activeConversations: conversations.filter(c => c.status === 'active').length,
          todayMessages: todayMessages?.length || 0,
          avgResponseTime: '2m' // Calcular esto dinámicamente si es necesario
        });
      }
    } catch (err) {
      console.error('Error fetching stats:', err);
    }
  };

  return stats;
};