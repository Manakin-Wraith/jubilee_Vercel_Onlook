import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface Body {
  email: string;
}

export async function POST(req: NextRequest) {
  try {
    const { email } = (await req.json()) as Body;

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT) || 465,
      secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `Jubilee Waitlist <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // send to ourselves
      subject: 'New Jubilee waitlist signup',
      text: `New signup email: ${email}`,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Error sending email', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
