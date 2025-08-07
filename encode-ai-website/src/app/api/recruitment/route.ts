import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      fullName, 
      email, 
      phone, 
      university, 
      year, 
      major, 
      track, 
      position, 
      experience, 
      projects, 
      motivation, 
      availability,
      portfolio,
      github,
      linkedin
    } = body;

    // Basic validation
    if (!fullName || !email || !university || !year || !major || !track || !position || !experience || !motivation || !availability) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // URL validation for optional fields
    const urlFields = { portfolio, github, linkedin };
    for (const [field, value] of Object.entries(urlFields)) {
      if (value && value.trim() !== '') {
        try {
          new URL(value);
        } catch {
          return NextResponse.json(
            { error: `Invalid ${field} URL format` },
            { status: 400 }
          );
        }
      }
    }

    // Here you would typically:
    // 1. Save application to database
    // 2. Send confirmation email to applicant
    // 3. Notify recruitment team
    // 4. Generate application ID
    
    // For now, we'll just log the data
    console.log('Recruitment application submission:', {
      fullName,
      email,
      phone,
      university,
      year,
      major,
      track,
      position,
      experience: experience.substring(0, 100) + '...', // Truncate for logging
      motivation: motivation.substring(0, 100) + '...',
      timestamp: new Date().toISOString(),
    });

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Generate a mock application ID
    const applicationId = 'EA-' + Date.now().toString(36).toUpperCase();

    return NextResponse.json(
      { 
        success: true, 
        applicationId,
        message: 'Thank you for your application! We\'ll review it and get back to you within 3-5 business days.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Recruitment application error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}