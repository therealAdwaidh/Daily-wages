// lib/auth/registerUser.ts
import { prisma } from '@/lib/prisma';
import { hash } from 'bcrypt';

type RegisterUserInput = {
    name: string;
    email: string;
    password: string;
  };
  
export async function registerUser({ name, email, password }: RegisterUserInput) {
  if (!name || !email || !password) {
    throw new Error('Missing required fields');
  }

  const existingUser = await prisma.user.findUnique({ where: { email } });

  if (existingUser) {
    throw new Error('Email already in use');
  }

  const hashedpassword = await hash(password, 10);

  const user = await prisma.user.create({
    data: { name, email, hashedpassword },
  });

  return {
    id: user.id,
    name: user.name,
    email: user.email,
  };
}
