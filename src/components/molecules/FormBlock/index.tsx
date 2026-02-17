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
        const formDataObj = Object.fromEntries(data.entries());

        try {
            const response = await fetch('/api/submit-form', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formDataObj)
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
                <div
                    className={classNames(
                        className,
                        'p-8 border-2 border-current rounded-lg backdrop-blur-sm bg-white/10 shadow-lg'
                    )}
                >
                    <p className="text-2xl font-medium">✅ Takk for meldingen!</p>
                    <p className="mt-3 text-lg opacity-90">Jeg svarer så fort jeg kan.</p>
                    <button
                        onClick={() => setSubmitted(false)}
                        className="mt-6 text-base underline hover:no-underline transition-all hover:translate-x-1"
                    >
                        Send en ny melding →
                    </button>
                </div>
            </Annotated>
        );
    }

    return (
        <Annotated content={props}>
            <form className={className} name={elementId} id={elementId} onSubmit={handleSubmit} ref={formRef}>
                <div className="grid gap-6 sm:grid-cols-2">
                    <input type="hidden" name="form-name" value={elementId} />
                    {fields.map((field, index) => {
                        return <DynamicComponent key={index} {...field} />;
                    })}
                </div>
                {error && (
                    <div className="mt-6 p-5 border-2 border-red-400 bg-red-900/20 text-red-100 rounded-lg backdrop-blur-sm">
                        {error}
                    </div>
                )}
                <div className={classNames('mt-10', mapStyles({ textAlign: styles.self?.textAlign ?? 'left' }))}>
                    <button
                        type="submit"
                        disabled={submitting}
                        className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium transition-all duration-300 border-2 border-current hover:bottom-shadow-8 hover:-translate-y-2 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:bottom-shadow-0 shadow-lg"
                    >
                        {submitting ? 'Sender...' : submitLabel}
                    </button>
                </div>
            </form>
        </Annotated>
    );
}
