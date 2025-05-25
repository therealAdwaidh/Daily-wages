'use client';

import { createContext, useContext, useState } from 'react';
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'; // ✅ updated
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import type { Database } from '@/types/supabase';

const SupabaseContext = createContext(null);

export const SupabaseProvider = ({ children }: { children: React.ReactNode }) => {
  const [supabaseClient] = useState(() =>
    createPagesBrowserClient<Database>() // ✅ updated
  );

  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      {children}
    </SessionContextProvider>
  );
};
