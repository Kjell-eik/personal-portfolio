import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const formData = req.body;
        const formName = formData['form-name'] || 'sign-up-form';

        // Encode form data for Netlify
        const encode = (data: Record<string, string>) => {
            return Object.keys(data)
                .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
                .join('&');
        };

        // Submit to Netlify Forms endpoint
        const netlifyFormEndpoint = (process.env.URL as string) || 'https://stefanjahren.no';
        const response = await fetch(netlifyFormEndpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': formName,
                ...formData
            })
        });

        if (!response.ok) {
            throw new Error('Form submission failed');
        }

        return res.status(200).json({ message: 'Success' });
    } catch (error) {
        console.error('Form submission error:', error);
        return res.status(500).json({ message: 'Form submission failed' });
    }
}
