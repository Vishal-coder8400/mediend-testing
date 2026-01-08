import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../lib/prisma/db';

export async function POST(request: NextRequest) {
  try {
    // Input validation
    const body = await request.json();
    const { name, phone, disease } = body;

    if (!name || !phone || !disease) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create consultation
    const consultation = await prisma.consultation.create({
      data: {
        name,
        phone,
        disease,
      },
    });

    return NextResponse.json(
      { message: 'Consultation created successfully', consultation },
      { status: 201 }
    );
  } catch (error) {
    console.error('Consultation creation error:', error);
    
    // Check if it's a Prisma error
    if (error instanceof Error) {
      return NextResponse.json(
        { message: 'Failed to create consultation', error: error.message },
        { status: 500 }
      );
    }

    // Generic error response
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}