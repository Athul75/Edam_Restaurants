# Edam Restaurants Website

Learn how to create a stunning restaurant website from scratch using HTML, CSS, and JavaScript!

## Contact Form Setup

The contact form uses EmailJS to send emails. To set it up:

1. **Sign up for EmailJS**: Go to [emailjs.com](https://www.emailjs.com/) and create a free account.

2. **Create an Email Service**:
   - Go to Email Services in your dashboard
   - Add a new service (Gmail, Outlook, etc.)
   - Connect your email account (edamtaliparamba@gmail.com)

3. **Create an Email Template**:
   - Go to Email Templates
   - Create a new template with these variables:
     - `{{from_name}}` - Customer's name
     - `{{from_email}}` - Customer's email
     - `{{phone}}` - Customer's phone
     - `{{subject}}` - Message subject
     - `{{message}}` - Message content
     - `{{to_email}}` - Your email (edamtaliparamba@gmail.com)

4. **Get your IDs**:
   - Service ID: Found in Email Services
   - Template ID: Found in Email Templates
   - Public Key: Found in Account settings

5. **Update the code**:
   - In `index.html`, replace `YOUR_PUBLIC_KEY` with your public key
   - In `main.js`, replace `YOUR_SERVICE_ID` and `YOUR_TEMPLATE_ID` with your IDs

## Features

- Responsive design
- Contact form with email functionality
- Smooth scrolling animations
- Mobile-friendly navigation
