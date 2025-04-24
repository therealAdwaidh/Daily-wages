// src/app/api/applications/route.ts
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { jobId, applicant, email } = await request.json();

  // Validate input
  if (!jobId || !applicant || !email) {
    return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
  }

  try {
    // Create application in database
    const newApplication = await prisma.application.create({
      data: {
        applicant,
        email,
        job: {
          connect: { id: jobId }
        },
        user: {
          // You need to provide a way to connect to an existing user
          // If you have the user's ID from the session/auth:
          connect: { id: userId } // You need to get this userId from somewhere
        }
      }
    });

    return NextResponse.json({ message: 'Application submitted successfully', application: newApplication });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Failed to submit application' }, { status: 500 });
  }
}



