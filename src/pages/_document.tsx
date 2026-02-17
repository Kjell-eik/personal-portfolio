import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head />
            <body>
                {/* Hidden form for Netlify Forms detection */}
                <form name="sign-up-form" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
                    <input type="hidden" name="form-name" value="sign-up-form" />
                    <input type="hidden" name="bot-field" />
                    <input type="text" name="firstName" />
                    <input type="text" name="lastName" />
                    <input type="email" name="email" />
                    <input type="text" name="address" />
                </form>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
