import { Annotated } from '@/components/Annotated';
import classNames from 'classnames';

export default function ImageBlock(props) {
    const { elementId, className, url, altText = '' } = props;
    if (!url) {
        return null;
    }

    return (
        <Annotated content={props}>
            <img
                id={elementId || null}
                className={classNames(
                    'transition-all duration-500 ease-out',
                    'hover:scale-[1.02] hover:shadow-2xl',
                    className
                )}
                src={url}
                alt={altText}
            />
        </Annotated>
    );
}
