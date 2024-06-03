const nodemailer = require('nodemailer');

export default async function sendEmail(req, res) {
  if (req.method === 'POST') {
    const { to, subject, html } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'pivoshenckoalexsey@gmail.com',
        pass: '120pio603A',
      },
    });

    const mailOptions = {
      from: 'pivoshenckoalexsey@gmail.com',
      to,
      subject,
      html,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent:', info.response);
      res.status(200).send('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    }
  } else {
    res.status(405).send({ error: 'Method Not Allowed' });
  }
}

