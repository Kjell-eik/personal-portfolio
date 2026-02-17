import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const formData = req.body;
        const { firstName, lastName, email, address } = formData;

        // Send email using Resend
        await resend.emails.send({
            from: 'Portfolio Contact Form <onboarding@resend.dev>',
            to: 'stefanbringaker@gmail.com',
            replyTo: email,
            subject: `New contact form submission from ${firstName} ${lastName || ''}`.trim(),
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${firstName} ${lastName || ''}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${address}</p>
            `
        });

        return res.status(200).json({ message: 'Success' });
    } catch (error) {
        console.error('Form submission error:', error);
        return res.status(500).json({ message: 'Form submission failed' });
    }
}
