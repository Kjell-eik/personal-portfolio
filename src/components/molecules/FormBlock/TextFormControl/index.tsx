import classNames from 'classnames';

export default function TextFormControl(props) {
    const { name, label, hideLabel, placeholder, isRequired, width = 'full' } = props;
    const labelId = `${name}-label`;
    const attr: any = {};
    if (label) {
        attr['aria-labelledby'] = labelId;
    }
    if (isRequired) {
        attr.required = true;
    }
    if (placeholder) {
        attr.placeholder = placeholder;
    }
    return (
        <div className={classNames({ 'sm:col-span-2': width === 'full' })}>
            {label && (
                <label
                    id={labelId}
                    className={classNames('inline-block mb-1 sm:text-xl', { 'sr-only': hideLabel })}
                    htmlFor={name}
                >
                    {label}
                </label>
            )}
            <input
                id={name}
                className="w-full p-4 bg-white/5 backdrop-blur-sm border-2 border-white/30 rounded-md placeholder:text-current placeholder:opacity-60 focus:outline-none focus:border-white/60 focus:bg-white/10 transition-all duration-300 sm:text-xl shadow-sm hover:border-white/40"
                type="text"
                name={name}
                {...attr}
            />
        </div>
    );
}
