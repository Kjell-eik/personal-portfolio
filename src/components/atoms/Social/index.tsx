import classNames from 'classnames';

import { Annotated } from '@/components/Annotated';
import { iconMap } from '@/components/svgs';
import Link from '../Link';

export default function Social(props) {
    const { elementId, className, label, altText, url, icon = 'facebook' } = props;
    const IconComponent = iconMap[icon];

    return (
        <Annotated content={props}>
            <Link
                href={url}
                aria-label={altText}
                id={elementId || null}
                className={classNames(
                    'inline-flex items-center justify-center no-underline',
                    'transform transition-all duration-300 ease-out',
                    'hover:scale-110 hover:-translate-y-1',
                    'active:scale-95',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-current',
                    className
                )}
            >
                {label && <span className="sr-only">{label}</span>}
                {IconComponent && (
                    <IconComponent className="fill-current w-icon h-icon transition-all duration-300 hover:drop-shadow-glow" />
                )}
            </Link>
        </Annotated>
    );
}
