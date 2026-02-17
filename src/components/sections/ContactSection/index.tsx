import classNames from 'classnames';
import Markdown from 'markdown-to-jsx';

import { DynamicComponent } from '@/components/components-registry';
import FormBlock from '@/components/molecules/FormBlock';
import { mapStylesToClassNames as mapStyles } from '@/utils/map-styles-to-class-names';
import Section from '../Section';

export default function ContactSection(props) {
    const { elementId, colors, backgroundSize, title, text, form, media, styles = {} } = props;
    const sectionAlign = styles.self?.textAlign ?? 'left';
    return (
        <Section elementId={elementId} colors={colors} backgroundSize={backgroundSize} styles={styles.self}>
            <div
                className={classNames(
                    'flex gap-12 lg:gap-16',
                    mapFlexDirectionStyles(styles.self?.flexDirection ?? 'row')
                )}
            >
                <div className="flex-1 w-full space-y-8">
                    {title && (
                        <h2
                            className={classNames(
                                'text-4xl sm:text-5xl font-bold leading-tight transition-all duration-500',
                                mapStyles({ textAlign: sectionAlign })
                            )}
                        >
                            {title}
                        </h2>
                    )}
                    {text && (
                        <Markdown
                            options={{ forceBlock: true, forceWrapper: true }}
                            className={classNames(
                                'max-w-none prose sm:prose-lg opacity-90 leading-relaxed prose-headings:transition-all prose-headings:duration-300',
                                mapStyles({ textAlign: sectionAlign }),
                                {
                                    'mt-6': title
                                }
                            )}
                        >
                            {text}
                        </Markdown>
                    )}
                    {form && <FormBlock {...form} className={classNames('mt-12', { 'mt-16': title || text })} />}
                </div>
                {media && (
                    <div
                        className={classNames('flex flex-1 w-full transition-all duration-500', {
                            'justify-center': sectionAlign === 'center',
                            'justify-end': sectionAlign === 'right'
                        })}
                    >
                        <ContactMedia media={media} />
                    </div>
                )}
            </div>
        </Section>
    );
}

function ContactMedia({ media }) {
    return <DynamicComponent {...media} />;
}

function mapFlexDirectionStyles(flexDirection?: 'row' | 'row-reverse' | 'col' | 'col-reverse') {
    switch (flexDirection) {
        case 'row-reverse':
            return 'flex-col-reverse lg:flex-row-reverse lg:items-center';
        case 'col':
            return 'flex-col';
        case 'col-reverse':
            return 'flex-col-reverse';
        default:
            return 'flex-col lg:flex-row lg:items-center';
    }
}
