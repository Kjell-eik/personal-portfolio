import classNames from 'classnames';

import { Annotated } from '@/components/Annotated';
import { iconMap } from '@/components/svgs';
import Link from '../Link';

export default function Action(props) {
    const {
        type,
        elementId,
        className,
        label,
        altText,
        url,
        showIcon,
        icon,
        iconPosition = 'right',
        style = 'primary'
    } = props;
    const IconComponent = icon ? iconMap[icon] : null;

    const baseClasses = [
        'relative inline-flex items-center justify-center gap-1.5 text-center text-lg leading-tight no-underline transition-all duration-300 ease-out lg:whitespace-nowrap'
    ];
    if (type === 'Button') {
        label ? baseClasses.push('py-4 px-6') : baseClasses.push('p-4');
        style === 'secondary' && baseClasses.push('rounded-full');
        baseClasses.push(
            'border-2 border-current hover:bottom-shadow-8 hover:-translate-y-2 active:translate-y-0 active:bottom-shadow-2'
        );
    } else {
        baseClasses.push('uppercase bottom-shadow-1 hover:bottom-shadow-6');
    }

    return (
        <Annotated content={props}>
            <Link href={url} aria-label={altText} id={elementId || null} className={classNames(baseClasses, className)}>
                {showIcon && IconComponent && iconPosition === 'left' && (
                    <IconComponent className="fill-current h-icon w-icon" />
                )}
                {label}
                {showIcon && IconComponent && iconPosition === 'right' && (
                    <IconComponent className="fill-current h-icon w-icon" />
                )}
            </Link>
        </Annotated>
    );
}
