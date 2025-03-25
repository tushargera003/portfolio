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
    origin: ['https://portfolio-git-main-tushar-geras-projects.vercel.app', 'http://localhost:5173'],
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

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
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

    // Admin notification email (to you)
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.YOUR_EMAIL, // Your email
      subject: 'New Contact Form Submission',
      html: `
        <h2 style="color: #2c3e50;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p style="background: #f8f9fa; padding: 10px; border-radius: 5px;">${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p style="color: #7f8c8d;">This email was automatically generated.</p>
      `
    };

    // User acknowledgment email
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email, // Sending email to the user
      subject: 'Thank You for Contacting Us!',
      html: `
        <div style="font-family: Arial, sans-serif; color: #2c3e50; padding: 20px;">
          <h2 style="color: #2980b9;">Hello ${name},</h2>
          <p>Thank you for reaching out to us. We have received your message and our team will get back to you as soon as possible.</p>
          <p style="background: #ecf0f1; padding: 10px; border-radius: 5px;"><strong>Your Message:</strong> ${message.replace(/\n/g, '<br>')}</p>
          <p>We appreciate your patience and will respond to your inquiry shortly.</p>
          <br>
          <p>Best Regards,</p>
          <p><strong>Tushar Gera</strong></p>
        </div>
      `
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
