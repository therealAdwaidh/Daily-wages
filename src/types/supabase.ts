export type Database = {
    public: {
      Tables: {
        profiles: {
          Row: {
            id: string;
            full_name: string | null;
            role: 'worker' | 'employer' | null;
            location: string | null;
            skills: string[] | null;
            created_at: string;
          };
          Insert: { /* ... */ };
          Update: { /* ... */ };
        };
        // Add other tables...
      };
    };
  };
  