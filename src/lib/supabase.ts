import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Solo crear el cliente si las variables de entorno están disponibles
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Función helper para verificar si Supabase está disponible
export const isSupabaseAvailable = () => {
  return supabase !== null;
}; 