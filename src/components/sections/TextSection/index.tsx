import classNames from 'classnames';
import Markdown from 'markdown-to-jsx';

import { mapStylesToClassNames as mapStyles } from '@/utils/map-styles-to-class-names';
import Section from '../Section';

export default function TextSection(props) {
    const { elementId, colors, variant = 'variant-a', styles = {}, ...rest } = props;
    const sectionAlign = styles.self?.textAlign ?? 'left';
    return (
        <Section elementId={elementId} colors={colors} styles={styles.self}>
            {variant === 'variant-b' ? (
                <TextTwoCol {...rest} align={sectionAlign} />
            ) : (
                <TextOneCol {...rest} align={sectionAlign} />
            )}
        </Section>
    );
}

function TextOneCol(props) {
    const { title, subtitle, text, align } = props;
    return (
        <div className={classNames(mapStyles({ textAlign: align }), 'space-y-6')}>
            {title && (
                <h2 className="text-4xl sm:text-5xl font-bold leading-tight transition-all duration-500 hover:text-shadow-lg">
                    {title}
                </h2>
            )}
            {subtitle && (
                <p
                    className={classNames(
                        'text-xl sm:text-2xl opacity-90 leading-relaxed transition-all duration-500',
                        { 'mt-4': title }
                    )}
                >
                    {subtitle}
                </p>
            )}
            {text && (
                <Markdown
                    options={{ forceBlock: true, forceWrapper: true }}
                    className={classNames(
                        'max-w-none prose sm:prose-lg prose-headings:transition-all prose-headings:duration-300 prose-a:transition-all prose-a:duration-300',
                        {
                            'mt-8': title || subtitle
                        }
                    )}
                >
                    {text}
                </Markdown>
            )}
        </div>
    );
}

function TextTwoCol(props) {
    const { title, subtitle, text, align } = props;
    return (
        <div className={classNames('flex flex-wrap gap-8 lg:gap-12', mapStyles({ textAlign: align }))}>
            {(title || subtitle) && (
                <div className={classNames('w-full', { 'lg:flex-1': text })}>
                    {title && (
                        <h2 className="text-4xl sm:text-5xl font-bold leading-tight transition-all duration-500 hover:text-shadow-lg">
                            {title}
                        </h2>
                    )}
                    {subtitle && (
                        <p
                            className={classNames(
                                'text-xl sm:text-2xl opacity-90 leading-relaxed transition-all duration-500',
                                { 'mt-4': title }
                            )}
                        >
                            {subtitle}
                        </p>
                    )}
                </div>
            )}
            {text && (
                <div className={classNames('w-full', { 'lg:flex-2': title || subtitle })}>
                    <Markdown
                        options={{ forceBlock: true, forceWrapper: true }}
                        className="prose max-w-none sm:prose-lg prose-headings:transition-all prose-headings:duration-300 prose-a:transition-all prose-a:duration-300"
                    >
                        {text}
                    </Markdown>
                </div>
            )}
        </div>
    );
}
