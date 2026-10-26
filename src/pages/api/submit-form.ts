import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

function normalizeText(value: unknown) {
    return typeof value === 'string' ? value.trim() : '';
}

function escapeHtml(value: string) {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function parseRequestBody(body: unknown) {
    if (!body) {
        return {};
    }

    if (typeof body === 'string') {
        try {
            return JSON.parse(body);
        } catch {
            return {};
        }
    }

    return body;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const formData = parseRequestBody(req.body);
    if (!formData || typeof formData !== 'object' || Array.isArray(formData)) {
        return res.status(400).json({ message: 'Invalid form payload.' });
    }

    const firstName = normalizeText((formData as Record<string, unknown>).firstName);
    const lastName = normalizeText((formData as Record<string, unknown>).lastName);
    const email = normalizeText((formData as Record<string, unknown>).email);
    const address = normalizeText((formData as Record<string, unknown>).address);

    if (!firstName || !email || !address) {
        return res.status(400).json({ message: 'Please provide your name, email, and message.' });
    }

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!validEmail) {
        return res.status(400).json({ message: 'Please provide a valid email address.' });
    }

    if (!process.env.RESEND_API_KEY) {
        return res.status(503).json({ message: 'Email delivery is not configured yet.' });
    }

    try {
        const name = `${firstName} ${lastName}`.trim();
        const safeName = escapeHtml(name);
        const safeEmail = escapeHtml(email);
        const safeAddress = escapeHtml(address).replace(/\r?\n/g, '<br />');

        await resend.emails.send({
            from: 'Portfolio Contact Form <onboarding@resend.dev>',
            to: 'stefanbringaker@gmail.com',
            replyTo: email,
            subject: `New contact form submission from ${safeName}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${safeName}</p>
                <p><strong>Email:</strong> ${safeEmail}</p>
                <p><strong>Message:</strong></p>
                <p>${safeAddress}</p>
            `
        });

        return res.status(200).json({ message: 'Success' });
    } catch (error) {
        console.error('Form submission error:', error);
        return res.status(500).json({ message: 'Form submission failed' });
    }
}
