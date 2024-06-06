// pages/api/sendEmail.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { title, subtitle, description } = req.body;
  
      // Use your preferred email sending service (e.g., SendGrid, Nodemailer)
      // This example uses a placeholder function sendEmail
  
      try {
        await sendEmail({
          to: 'chandanhm388@gmail.com',
          subject: 'New Quote Request',
          text: `Product: ${title}\nSubtitle: ${subtitle}\nDescription: ${description}`,
        });
        res.status(200).json({ message: 'Email sent successfully' });
      } catch (error) {
        res.status(500).json({ error: 'Failed to send email' });
      }
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
}
  
async function sendEmail({ to, subject, text }) {
    // Placeholder function to simulate sending email
    console.log(`Sending email to ${to} with subject "${subject}" and text "${text}"`);
    return Promise.resolve();
}
  