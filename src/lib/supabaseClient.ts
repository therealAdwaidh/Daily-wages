import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/types/supabase';

export const createSupabaseBrowserClient = () =>
  createPagesBrowserClient<Database>();
