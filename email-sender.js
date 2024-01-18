// email-sender.js
const nodemailer = require('nodemailer');

// Replace these with your actual email credentials
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your.email@gmail.com',
    pass: 'your-email-password',
  },
});

const mailOptions = {
  from: 'your.email@gmail.com',
  to: 'your.email@gmail.com',
  subject: 'Test Email',
  text: 'This is a test email sent from Node.js',
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
