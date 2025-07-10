# Contact Form Setup Guide

Your contact form is now ready to send emails! Here's how to configure it:

## 1. Environment Variables Setup

Create a `.env.local` file in your project root with the following variables:

```env
# Email Configuration for Contact Form
GMAIL_USER=your-email@gmail.com
GMAIL_PASS=your-app-password-here
CONTACT_EMAIL=your-email@gmail.com
```

## 2. Gmail Configuration

### Step 1: Enable 2-Step Verification
1. Go to your [Google Account settings](https://myaccount.google.com/)
2. Navigate to Security
3. Enable 2-Step Verification if not already enabled

### Step 2: Generate an App Password
1. In Google Account settings, go to Security
2. Under "2-Step Verification", click on "App passwords"
3. Select "Mail" as the app and "Other" as the device
4. Click "Generate"
5. Copy the 16-character password (this is your `GMAIL_PASS`)

### Step 3: Configure Environment Variables
- `GMAIL_USER`: Your Gmail address
- `GMAIL_PASS`: The 16-character app password you just generated
- `CONTACT_EMAIL`: The email where you want to receive contact form submissions (optional - defaults to GMAIL_USER)

## 3. Testing the Contact Form

1. Start your development server: `npm run dev`
2. Navigate to your contact form
3. Fill out the form and submit
4. Check your email for the contact form submission

## 4. Features Added

✅ **Enhanced Email Template**: Professional HTML email with your branding colors
✅ **Better Error Handling**: Clear error messages for users
✅ **Form Validation**: Client and server-side validation
✅ **Success Feedback**: Clear confirmation when message is sent
✅ **Loading States**: Visual feedback during submission
✅ **Security**: Environment variable configuration

## 5. Troubleshooting

### Common Issues:

**"Email service not configured"**
- Make sure your `.env.local` file exists and has the correct variables
- Restart your development server after adding environment variables

**"Authentication failed"**
- Double-check your Gmail app password
- Ensure 2-Step Verification is enabled
- Make sure you're using the app password, not your regular password

**"Network error"**
- Check your internet connection
- Verify the API route is working at `/api/contact`

## 6. Production Deployment

When deploying to production:
1. Set the same environment variables in your hosting platform
2. Consider using a service like SendGrid or Resend for better email deliverability
3. Add rate limiting to prevent spam

## 7. Customization

You can customize the email template by editing the HTML in `app/api/contact/route.ts`. The template uses your brand colors:
- Diplomatic Navy: `#1a365d`
- Ambassador Gold: `#d69e2e`
- Soft Charcoal: `#2d3748`

The contact form is now fully functional and ready to receive messages from your website visitors! 