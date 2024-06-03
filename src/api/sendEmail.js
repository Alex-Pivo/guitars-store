export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer re_as6Dd7ky_NzJiwQYq35fUx4tWyqDsNTPS`, // убедитесь, что ключ API хранится в .env файле
        },
        body: JSON.stringify({
          from: "pivoshenckoalexsey@gmail.com",
          to: email,
          subject: "Hello World",
          html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
        }),
      });

      if (response.ok) {
        res.status(200).json({ message: 'Email sent successfully' });
      } else {
        const error = await response.json();
        res.status(response.status).json({ message: 'Error sending email', error });
      }
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
