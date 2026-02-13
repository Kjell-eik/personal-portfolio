import classNames from 'classnames';
import dayjs from 'dayjs';
import Markdown from 'markdown-to-jsx';
import * as React from 'react';

import { Annotated } from '@/components/Annotated';
import Link from '@/components/atoms/Link';
import { DynamicComponent } from '@/components/components-registry';
import ImageBlock from '@/components/molecules/ImageBlock';
import { PageComponentProps, ProjectLayout } from '@/types';
import HighlightedPreBlock from '@/utils/highlighted-markdown';
import BaseLayout from '../BaseLayout';

type ComponentProps = PageComponentProps &
    ProjectLayout & {
        prevProject?: ProjectLayout;
        nextProject?: ProjectLayout;
    };

const Component: React.FC<ComponentProps> = (props) => {
    const {
        title,
        date,
        client,
        description,
        markdownContent,
        media,
        prevProject,
        nextProject,
        bottomSections = []
    } = props;
    const dateTimeAttr = dayjs(date).format('YYYY-MM-DD HH:mm:ss');
    const formattedDate = dayjs(date).format('YYYY-MM-DD');

    return (
        <BaseLayout {...props}>
            <section data-theme="colors-f" className="content-surface">
                <article className="px-4 py-14 lg:py-20">
                    <header className="max-w-5xl mx-auto mb-10 sm:mb-14">
                        <div className="flex flex-wrap items-center gap-3 text-sm opacity-80">
                            {client && <span className="uppercase tracking-widest">{client}</span>}
                            <span className="hidden sm:inline">•</span>
                            <time className="uppercase tracking-widest" dateTime={dateTimeAttr}>
                                {formattedDate}
                            </time>
                        </div>
                        <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl md:max-w-3xl leading-tight">{title}</h1>
                    </header>
                    {description && (
                        <div className="max-w-3xl mx-auto mb-10 text-lg uppercase sm:text-xl sm:mb-14">
                            {description}
                        </div>
                    )}
                    {media && (
                        <figure className="max-w-5xl mx-auto mb-10 sm:mb-14">
                            <ProjectMedia media={media} />
                        </figure>
                    )}
                    {markdownContent && (
                        <Markdown
                            options={{ forceBlock: true, overrides: { pre: HighlightedPreBlock } }}
                            className="max-w-3xl mx-auto prose sm:prose-lg"
                        >
                            {markdownContent}
                        </Markdown>
                    )}
                </article>
                {(prevProject || nextProject) && (
                    <nav className="px-4 mt-12 mb-20">
                        <div className="max-w-5xl mx-auto mb-6">
                            <h2 className="text-xl uppercase tracking-[0.2em]">Andre prosjekter</h2>
                        </div>
                        <div className="grid max-w-5xl mx-auto gap-x-6 gap-y-10 sm:grid-cols-2 lg:gap-x-8">
                            {prevProject && <ProjectNavItem project={prevProject} className={undefined} />}
                            {nextProject && (
                                <ProjectNavItem project={nextProject} className="sm:items-end sm:col-start-2" />
                            )}
                        </div>
                    </nav>
                )}
            </section>
            {bottomSections?.map((section, index) => {
                return <DynamicComponent key={index} {...section} />;
            })}
        </BaseLayout>
    );
};
export default Component;

function ProjectMedia({ media }) {
    return <DynamicComponent {...media} className={classNames({ 'w-full': media.type === 'ImageBlock' })} />;
}

function ProjectNavItem({ project, className }) {
    return (
        <Annotated content={project}>
            <Link
                className={classNames(
                    'group flex flex-col gap-4 items-start rounded-xl border border-white/10 p-4 bg-black/20 hover:bg-black/30 transition',
                    className
                )}
                href={project}
            >
                {project.featuredImage && (
                    <div className="w-full overflow-hidden aspect-3/2">
                        <ImageBlock
                            {...project.featuredImage}
                            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                )}
                <span className="text-base leading-tight uppercase tracking-wider transition bottom-shadow-1 group-hover:bottom-shadow-5">
                    {project.title}
                </span>
            </Link>
        </Annotated>
    );
}
