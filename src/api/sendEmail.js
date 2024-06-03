import axios from 'axios';

export default async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  const { email } = req.body;

  if (!email) {
    res.status(400).json({ message: 'Email is required' });
    return;
  }

  try {
    const response = await axios.post(
      'https://api.resend.com/v1/emails',
      {
        from: 'pivoshenckoalexsey@gmail.com',
        to: email,
        subject: 'Hello World',
        html: '<p>Congrats on sending your <strong>first email</strong>!</p>',
      },
      {
        headers: {
          'Authorization': `Bearer re_as6Dd7ky_NzJiwQYq35fUx4tWyqDsNTPS`,
          'Content-Type': 'application/json',
        },
      }
    );

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
};
