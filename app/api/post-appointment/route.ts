import prisma from '../../../lib/prisma/db';
import { NextRequest, NextResponse } from 'next/server';



export async function POST(req:NextRequest) {
  const { name, phone, disease, city, countryCode } = await req.json();

  try {
    const appointment = await prisma.appointment.create({
      data: {
        name,
        phone,
        disease,
        city,
        countryCode,
      },
    });

    return NextResponse.json(
      { message: 'Appointment created successfully', appointment },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Failed to create appointment' },
      { status: 500 }
    );
  }
}
