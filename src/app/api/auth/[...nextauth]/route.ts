// app/api/register/route.js (or .ts if using TypeScript)
import { NextResponse } from 'next/server';
import { hash } from 'bcrypt';
import { prisma } from '@/lib/prisma';
import { NextRequest } from 'next/server';
import { registerUser } from '@/lib/auth/registerUser';

export async function POST(request: NextRequest) {
  try {
    const { name, email, password } = await request.json();
    const user = await registerUser({ name, email, password });

    return NextResponse.json(user);
  } 
  catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
  
    return NextResponse.json({ error: 'Unknown error occurred' }, { status: 400 });
  }
}