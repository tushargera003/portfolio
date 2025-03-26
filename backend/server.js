const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const projectRoutes = require('./routes/projectRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
const logger = require('./middleware/loggerMiddleware');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const Contact = require('./models/Contact');

const corsOptions = {
  origin: [
    'https://portfolio-git-main-tushar-geras-projects.vercel.app',
    'http://localhost:5173',
    'https://portfolio-tushar-geras-projects.vercel.app'
  ],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions));
app.use(logger);

app.use('/api/projects', projectRoutes);

// Improved transporter configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: true
  }
});

// Contact Form Endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Save to database
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // Additional headers for better deliverability
    const additionalHeaders = {
      "List-Unsubscribe": `<mailto:${process.env.EMAIL_USER}>`
      // Uncomment the lines below if you want to mark the email as high priority:
      // "X-Priority": "1",
      // "X-MSMail-Priority": "High",
      // "Importance": "High"
    };

    // Updated adminMailOptions with improved HTML design
    const adminMailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.YOUR_EMAIL, // Your receiving email
      subject: 'New Contact Form Submission',
      text: `New Contact Form Submission

Name: ${name}
Email: ${email}
Message:
${message}

This email was automatically generated.`,
      html: `
        <div style="max-width:600px; margin:0 auto; font-family: Arial, sans-serif; color: #333; border: 1px solid #ddd; padding: 20px; border-radius: 8px;">
          <div style="background: #4CAF50; padding: 10px; border-radius: 6px 6px 0 0;">
            <h2 style="color: #fff; text-align: center; margin: 0;">New Contact Submission</h2>
          </div>
          <div style="padding: 20px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p style="background: #f9f9f9; padding: 10px; border-radius: 4px;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          <div style="border-top: 1px solid #ddd; padding-top: 10px; text-align: center; font-size: 12px; color: #777;">
            This email was automatically generated.
          </div>
        </div>
      `,
      headers: additionalHeaders
    };

    // Updated userMailOptions with improved HTML design
    const userMailOptions = {
      from: `"Tushar Gera" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Thank You for Contacting Tushar Gera',
      text: `Hello ${name},

Thank you for reaching out. We have received your message and our team will get back to you as soon as possible.

Your Message:
${message}

Best Regards,
Tushar Gera`,
      html: `
        <div style="max-width:600px; margin:0 auto; font-family: Arial, sans-serif; color: #333; border: 1px solid #ddd; padding: 20px; border-radius: 8px;">
          <div style="background: #2196F3; padding: 10px; border-radius: 6px 6px 0 0;">
            <h2 style="color: #fff; text-align: center; margin: 0;">Thank You for Contacting Us</h2>
          </div>
          <div style="padding: 20px;">
            <p>Hello ${name},</p>
            <p>Thank you for reaching out. We have received your message and our team will get back to you soon.</p>
            <p><strong>Your Message:</strong></p>
            <p style="background: #f9f9f9; padding: 10px; border-radius: 4px;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          <div style="border-top: 1px solid #ddd; padding-top: 10px; text-align: center; font-size: 12px; color: #777;">
            Best Regards,<br>
            <strong>Tushar Gera</strong>
          </div>
        </div>
      `,
      headers: additionalHeaders
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Something went wrong. Please try again later.' });
  }
});

app.get('/', (req, res) => {
  res.send('backend is running...');
});

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
