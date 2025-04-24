// src/types/next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: number;
      email?: string | null;
      name?: string | null;
      image?: string | null;
    };
  }

  interface User {
    id: number;
    email: string;
    name?: string | null;
    Password?: string | null;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    name?: string | null;
    email?: string | null;
  }
}
