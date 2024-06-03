import { Resend } from '@resend/node';
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

  const resend = new Resend('re_as6Dd7ky_NzJiwQYq35fUx4tWyqDsNTPS');

  try {
    const response = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: [email],
      subject: 'Hello World',
      text: 'It works!',
      attachments: [
        {
          filename: '',
          content: '',
        },
      ],
      headers: {
        'X-Entity-Ref-ID': '123456789',
      },
      tags: [
        {
          name: 'category',
          value: 'confirm_email',
        },
      ],
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
};
