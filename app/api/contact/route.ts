import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    console.log('=== Contact Form Submission Started ===');
    const { name, email, subject, message } = await req.json();
    console.log('Form data received:', { name, email, subject, message: message.substring(0, 50) + '...' });

    // Validate required fields
    if (!name || !email || !subject || !message) {
      console.log('Validation failed: Missing required fields');
      return NextResponse.json(
        { success: false, error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('Validation failed: Invalid email format');
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Get recipient email from environment variable or use default
    const recipientEmail = process.env.CONTACT_EMAIL || process.env.GMAIL_USER;
    console.log('Recipient email:', recipientEmail);
    console.log('Environment variables check:', {
      GMAIL_USER: process.env.GMAIL_USER ? 'Set' : 'Not set',
      GMAIL_PASS: process.env.GMAIL_PASS ? 'Set' : 'Not set',
      RESEND_API_KEY: process.env.RESEND_API_KEY ? 'Set' : 'Not set'
    });

    // Try Gmail first, then fallback to Resend
    let emailSent = false;
    let errorMessage = '';

    // Try Gmail if credentials are available
    if (process.env.GMAIL_USER && process.env.GMAIL_PASS) {
      console.log('Attempting to send via Gmail...');
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS,
          },
        });

        const mailOptions = {
          from: `"${process.env.GMAIL_USER}" <${process.env.GMAIL_USER}>`,
          to: recipientEmail,
          subject: `Contact Form: ${subject}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
              <div style="background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                <h2 style="color: #1a365d; margin-bottom: 20px; border-bottom: 2px solid #d69e2e; padding-bottom: 10px;">
                  New Contact Form Submission
                </h2>
                
                <div style="margin-bottom: 20px;">
                  <h3 style="color: #2d3748; margin-bottom: 10px;">Contact Details:</h3>
                  <p><strong>Name:</strong> ${name}</p>
                  <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #d69e2e;">${email}</a></p>
                  <p><strong>Subject:</strong> ${subject}</p>
                </div>
                
                <div style="margin-bottom: 20px;">
                  <h3 style="color: #2d3748; margin-bottom: 10px;">Message:</h3>
                  <div style="background-color: #f7fafc; padding: 15px; border-radius: 5px; border-left: 4px solid #d69e2e;">
                    ${message.replace(/\n/g, '<br>')}
                  </div>
                </div>
                
                <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #718096;">
                  <p>This message was sent from the contact form on your website.</p>
                  <p>Submitted on: ${new Date().toLocaleString()}</p>
                </div>
              </div>
            </div>
          `,
          text: `
Contact Form Submission

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
Sent from your website contact form on ${new Date().toLocaleString()}
          `,
        };

        await transporter.sendMail(mailOptions);
        emailSent = true;
        console.log('✅ Email sent successfully via Gmail');
      } catch (gmailError: any) {
        console.error('❌ Gmail sending failed:', gmailError.message);
        errorMessage = `Gmail failed: ${gmailError.message}`;
      }
    } else {
      console.log('⚠️ Gmail credentials not available, skipping Gmail');
    }

    // If Gmail failed, try Resend
    if (!emailSent && process.env.RESEND_API_KEY) {
      console.log('Attempting to send via Resend...');
      try {
        const resendApiKey = process.env.RESEND_API_KEY.replace(/"/g, ''); // Remove quotes if present
        
        // Try to send to the actual recipient email
        const resendResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'onboarding@resend.dev', // Use Resend's default sender
            to: recipientEmail, // Send to the actual recipient (25botw@gmail.com)
            subject: `Contact Form: ${subject}`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
                <div style="background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                  <h2 style="color: #1a365d; margin-bottom: 20px; border-bottom: 2px solid #d69e2e; padding-bottom: 10px;">
                    New Contact Form Submission
                  </h2>
                  
                  <div style="margin-bottom: 20px;">
                    <h3 style="color: #2d3748; margin-bottom: 10px;">Contact Details:</h3>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #d69e2e;">${email}</a></p>
                    <p><strong>Subject:</strong> ${subject}</p>
                  </div>
                  
                  <div style="margin-bottom: 20px;">
                    <h3 style="color: #2d3748; margin-bottom: 10px;">Message:</h3>
                    <div style="background-color: #f7fafc; padding: 15px; border-radius: 5px; border-left: 4px solid #d69e2e;">
                      ${message.replace(/\n/g, '<br>')}
                    </div>
                  </div>
                  
                  <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #718096;">
                    <p>This message was sent from the contact form on your website via Resend (Gmail failed).</p>
                    <p>Submitted on: ${new Date().toLocaleString()}</p>
                  </div>
                </div>
              </div>
            `,
          }),
        });

        console.log('Resend response status:', resendResponse.status);
        
        if (resendResponse.ok) {
          const result = await resendResponse.json();
          emailSent = true;
          console.log('✅ Email sent successfully via Resend:', result);
        } else {
          const resendError = await resendResponse.text();
          console.error('❌ Resend sending failed:', resendError);
          
          // If Resend fails due to domain verification, try with test email
          if (resendError.includes('domain') || resendError.includes('verification')) {
            console.log('🔄 Trying Resend with test email...');
            const testResponse = await fetch('https://api.resend.com/emails', {
              method: 'POST',
              headers: {
                'Authorization': `Bearer ${resendApiKey}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                from: 'onboarding@resend.dev',
                to: 'services@communitytechnet.com', // Fallback to test email
                subject: `Contact Form: ${subject} (FORWARDED)`,
                html: `
                  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
                    <div style="background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                      <h2 style="color: #1a365d; margin-bottom: 20px; border-bottom: 2px solid #d69e2e; padding-bottom: 10px;">
                        Contact Form Submission (FORWARDED)
                      </h2>
                      
                      <div style="margin-bottom: 20px;">
                        <h3 style="color: #2d3748; margin-bottom: 10px;">Contact Details:</h3>
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #d69e2e;">${email}</a></p>
                        <p><strong>Subject:</strong> ${subject}</p>
                        <p><strong>Original Recipient:</strong> ${recipientEmail}</p>
                      </div>
                      
                      <div style="margin-bottom: 20px;">
                        <h3 style="color: #2d3748; margin-bottom: 10px;">Message:</h3>
                        <div style="background-color: #f7fafc; padding: 15px; border-radius: 5px; border-left: 4px solid #d69e2e;">
                          ${message.replace(/\n/g, '<br>')}
                        </div>
                      </div>
                      
                      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #718096;">
                        <p>This message was forwarded because domain verification is required to send to ${recipientEmail}.</p>
                        <p>Submitted on: ${new Date().toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                `,
              }),
            });
            
            if (testResponse.ok) {
              const testResult = await testResponse.json();
              emailSent = true;
              console.log('✅ Email sent successfully via Resend (test email):', testResult);
            } else {
              const testError = await testResponse.text();
              console.error('❌ Resend test email failed:', testError);
              errorMessage += ` | Resend test failed: ${testError}`;
            }
          } else {
            errorMessage += ` | Resend failed: ${resendError}`;
          }
        }
      } catch (resendError: any) {
        console.error('❌ Resend error:', resendError.message);
        errorMessage += ` | Resend error: ${resendError.message}`;
      }
    } else if (!emailSent) {
      console.log('⚠️ Resend API key not available, skipping Resend');
    }

    if (emailSent) {
      console.log('🎉 Email sent successfully!');
      return NextResponse.json({ 
        success: true, 
        message: 'Email sent successfully' 
      });
    } else {
      console.error('💥 All email services failed:', errorMessage);
      return NextResponse.json(
        { 
          success: false, 
          error: 'Failed to send email. Please try again later.' 
        },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('💥 Email sending error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to send email. Please try again later.' 
      },
      { status: 500 }
    );
  }
} 