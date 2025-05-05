import { NextResponse } from 'next/server';

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(req: Request) {
  const body = await req.json()
  const { title, description, location } = body

  const job = await prisma.job.create({
    data: { title, description, location },
  })

  return NextResponse.json(job)
}

export async function GET() {
    const jobs = await prisma.job.findMany({
      orderBy: { createdAt: 'desc' },
    });
  
    return NextResponse.json(jobs);
  }
