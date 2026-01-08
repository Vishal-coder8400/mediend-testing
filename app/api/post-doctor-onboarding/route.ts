import { NextResponse } from 'next/server';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import prisma from '../../../lib/prisma/db';

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function POST(req: Request) {
  try {
    const { name, email, phone, specialization, degree, experienceBeforePG, experienceAfterPG, cvFile } = await req.json();

    // Upload the CV file to S3
    const fileKey = `cv/${Date.now()}-${cvFile.name}`;
    const uploadParams = {
      Bucket: process.env.AWS_BUCKET_NAME!,
      Key: fileKey,
      Body: Buffer.from(cvFile.data, 'base64'),
      ContentType: cvFile.type,
    };

    await s3Client.send(new PutObjectCommand(uploadParams));

    // Create a new document in the database
    const doctorOnboarding = await prisma.doctorOnboarding.create({
      data: {
        name,
        email,
        phone,
        specialization,
        degree,
        experienceBeforePG,
        experienceAfterPG,
        cvUrl: `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileKey}`,
      },
    });

    return NextResponse.json({ message: 'Doctor onboarding created successfully', doctorOnboarding }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Failed to create doctor onboarding' }, { status: 500 });
  }
}

export function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
}
