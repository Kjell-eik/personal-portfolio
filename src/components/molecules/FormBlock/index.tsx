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

            const responseData = await response.json().catch(() => null);

            if (response.ok) {
                setSubmitted(true);
                form.reset();
            } else {
                throw new Error(responseData?.message || 'Form submission failed');
            }
        } catch (err) {
            const message = err instanceof Error ? err.message : 'Noe gikk galt. Prøv igjen eller send e-post direkt til stefanbringaker@gmail.com';
            setError(message);
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
                        'contact-form-success rounded-xl border border-white/20 bg-black/20 p-6 shadow-lg sm:p-8'
                    )}
                    role="status"
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
            <form
                className={classNames('contact-form-fields', className)}
                name={elementId}
                id={elementId}
                onSubmit={handleSubmit}
                ref={formRef}
            >
                <div className="grid gap-6 sm:grid-cols-2">
                    <input type="hidden" name="form-name" value={elementId} />
                    {fields.map((field, index) => {
                        return <DynamicComponent key={index} {...field} />;
                    })}
                </div>
                {error && (
                    <div className="mt-6 rounded-lg border border-red-300 bg-red-950/40 p-4 text-red-100" role="alert">
                        {error}
                    </div>
                )}
                <div className={classNames('mt-8 sm:mt-10', mapStyles({ textAlign: styles.self?.textAlign ?? 'left' }))}>
                    <button
                        type="submit"
                        disabled={submitting}
                        className="contact-submit-button inline-flex min-h-14 w-full items-center justify-center rounded-lg border border-[#e7d5ac] bg-[#e7d5ac] px-8 py-4 text-base font-bold text-[#211d14] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#f0e2c2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e7d5ac] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 sm:w-auto sm:text-lg"
                    >
                        {submitting ? 'Sender...' : submitLabel}
                    </button>
                </div>
            </form>
        </Annotated>
    );
}
