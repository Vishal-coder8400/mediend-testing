import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma/db';

export async function POST(req: Request) {
  try {
    const { name, hospitalName, phone, city } = await req.json();

    const hospitalOnboarding = await prisma.hospitalOnboarding.create({
      data: {
        name,
        hospitalName,
        phone,
        city,
      },
    });

    return NextResponse.json({
      message: 'Hospital onboarding created successfully',
      hospitalOnboarding,
    }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Failed to create hospital onboarding' }, { status: 500 });
  }
}

export function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
}
