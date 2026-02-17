import classNames from 'classnames';
import Markdown from 'markdown-to-jsx';

import { Action } from '@/components/atoms';

export default function Footer(props) {
    const { primaryLinks = [], contacts, copyrightText, styles = {} } = props;
    const footerWidth = styles.self?.width ?? 'narrow';
    return (
        <footer className={classNames('relative backdrop-blur-md', styles.self?.padding ?? 'py-16 px-4')}>
            <div
                className={classNames('border-t-2 border-white/15 pt-8 relative', {
                    'max-w-7xl mx-auto': footerWidth === 'narrow',
                    'max-w-8xl mx-auto': footerWidth === 'wide'
                })}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
                <div className="flex flex-col gap-x-12 gap-y-12 md:gap-y-32 md:flex-row md:flex-wrap md:justify-between relative z-10">
                    {primaryLinks.length > 0 && (
                        <div className={classNames(contacts ? 'w-full' : 'md:mr-auto')}>
                            <ul className="flex flex-wrap max-w-5xl text-lg gap-x-8 gap-y-4">
                                {primaryLinks.map((link, index) => (
                                    <li key={index} className="transition-transform duration-300 hover:translate-x-1">
                                        <Action {...link} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {contacts && <Contacts {...contacts} />}
                    {/* Please keep this attribution up if you're using Stackbit's free plan. */}
                    {copyrightText && (
                        <div className={classNames(primaryLinks.length > 0 || contacts ? 'md:self-end' : null)}>
                            <Markdown
                                options={{ forceInline: true, forceWrapper: true, wrapper: 'p' }}
                                className="tracking-widest prose-sm prose uppercase"
                            >
                                {copyrightText}
                            </Markdown>
                        </div>
                    )}
                </div>
            </div>
        </footer>
    );
}

function Contacts(props) {
    const { phoneNumber, phoneAltText, email, emailAltText, address, addressAltText, elementId } = props;
    return (
        <div id={elementId || null} className="max-w-3xl prose sm:prose-lg">
            {phoneNumber && (
                <p>
                    <a href={`tel:${phoneNumber}`} aria-label={phoneAltText}>
                        {phoneNumber}
                    </a>
                </p>
            )}
            {email && (
                <p>
                    <a href={`mailto:${email}`} aria-label={emailAltText}>
                        {email}
                    </a>
                </p>
            )}
            {address && (
                <p>
                    <a
                        href={`https://www.google.com/maps/search/${encodeURIComponent(address)}`}
                        aria-label={addressAltText}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {address}
                    </a>
                </p>
            )}
        </div>
    );
}
