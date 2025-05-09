import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

// Initialize Resend
// Ensure RESEND_API_KEY is set in your environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

// Define the expected shape of the request body using Zod
const ContactFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(5, 'Message must be at least 5 characters long'),
});

export async function POST(request: NextRequest) {
  let formData;
  try {
    // Parse the request body
    const body = await request.json();
    
    // Validate the body against the schema
    const validationResult = ContactFormSchema.safeParse(body);

    if (!validationResult.success) {
      // If validation fails, return detailed errors
      console.error("Validation Errors:", validationResult.error.flatten());
      return NextResponse.json(
        { 
          message: 'Invalid form data',
          errors: validationResult.error.flatten().fieldErrors 
        },
        { status: 400 }
      );
    }

    formData = validationResult.data;

    // Send the email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Magical Stories Contact <hello@magical-stories.fun>', // Use your verified domain email
      to: ['hello@magical-stories.fun'], // Send to your team
      subject: `New Contact Form Submission: ${formData.subject}`,
      replyTo: formData.email, // User's email for reply
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Subject:</strong> ${formData.subject}</p>
        <hr>
        <p><strong>Message:</strong></p>
        <p>${formData.message.replace(/\n/g, '<br>')}</p> // Replace newlines with <br> for HTML
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return NextResponse.json({ message: 'Error sending email', error: error.message }, { status: 500 });
    }

    console.log('Email sent successfully:', data);
    return NextResponse.json({ message: 'Email sent successfully!', data }, { status: 200 });

  } catch (error: unknown) {
    console.error('API Route Error:', error);
    let errorMessage = 'Internal Server Error';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    // Handle JSON parsing errors or other unexpected errors
    if (error instanceof SyntaxError) {
      errorMessage = 'Invalid JSON in request body';
      return NextResponse.json({ message: errorMessage }, { status: 400 });
    }

    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
} 