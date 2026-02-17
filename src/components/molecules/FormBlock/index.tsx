import classNames from 'classnames';
import * as React from 'react';

import { Annotated } from '@/components/Annotated';
import { DynamicComponent } from '@/components/components-registry';
import { mapStylesToClassNames as mapStyles } from '@/utils/map-styles-to-class-names';

export default function FormBlock(props) {
    const formRef = React.createRef<HTMLFormElement>();
    const { elementId, className, fields = [], submitLabel, styles = {} } = props;
    const [submitting, setSubmitting] = React.useState(false);
    const [submitted, setSubmitted] = React.useState(false);
    const [error, setError] = React.useState<string | null>(null);

    if (fields.length === 0) {
        return null;
    }

    async function handleSubmit(event) {
        event.preventDefault();
        setSubmitting(true);
        setError(null);

        const form = formRef.current;
        const data = new FormData(form);

        try {
            const response = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(data as any).toString()
            });

            if (response.ok) {
                setSubmitted(true);
                form.reset();
            } else {
                throw new Error('Form submission failed');
            }
        } catch (err) {
            setError('Noe gikk galt. Prøv igjen eller send e-post direkt til stefanbringaker@gmail.com');
        } finally {
            setSubmitting(false);
        }
    }

    if (submitted) {
        return (
            <Annotated content={props}>
                <div className={classNames(className, 'p-6 border-2 border-current')}>
                    <p className="text-lg font-medium">✅ Takk for meldingen!</p>
                    <p className="mt-2">Jeg svarer så fort jeg kan.</p>
                    <button onClick={() => setSubmitted(false)} className="mt-4 text-sm underline hover:no-underline">
                        Send en ny melding
                    </button>
                </div>
            </Annotated>
        );
    }

    return (
        <Annotated content={props}>
            <form
                className={className}
                name={elementId}
                id={elementId}
                onSubmit={handleSubmit}
                ref={formRef}
                data-netlify="true"
                data-netlify-honeypot="bot-field"
            >
                <div className="grid gap-6 sm:grid-cols-2">
                    <input type="hidden" name="form-name" value={elementId} />
                    <input type="hidden" name="bot-field" />
                    {fields.map((field, index) => {
                        return <DynamicComponent key={index} {...field} />;
                    })}
                </div>
                {error && <div className="mt-4 p-4 border-2 border-red-500 text-red-500">{error}</div>}
                <div className={classNames('mt-8', mapStyles({ textAlign: styles.self?.textAlign ?? 'left' }))}>
                    <button
                        type="submit"
                        disabled={submitting}
                        className="inline-flex items-center justify-center px-5 py-4 text-lg transition border-2 border-current hover:bottom-shadow-6 hover:-translate-y-1.5 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {submitting ? 'Sender...' : submitLabel}
                    </button>
                </div>
            </form>
        </Annotated>
    );
}
