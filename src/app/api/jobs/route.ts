import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  const body = await req.json();

  const job = await prisma.job.create({
    data: {
      ...body,
      createdById: 1, // temporary user ID
    },
  });

  return NextResponse.json(job);
}

export async function GET() {
    const jobs = await prisma.job.findMany({
      orderBy: { createdAt: 'desc' },
    });
  
    return NextResponse.json(jobs);
  }
