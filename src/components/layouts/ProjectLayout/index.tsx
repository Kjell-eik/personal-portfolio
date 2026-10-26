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
    Omit<ProjectLayout, 'date'> & {
        prevProject?: ProjectLayout;
        nextProject?: ProjectLayout;
        date?: string;
        status?: string;
        technologies?: string[];
    };

const Component: React.FC<ComponentProps> = (props) => {
    const {
        title,
        date,
        client,
        status,
        description,
        markdownContent,
        media,
        prevProject,
        nextProject,
        technologies = [],
        bottomSections = []
    } = props;
    const projectDate = date ? dayjs(date) : undefined;
    const dateTimeAttr = projectDate?.isValid() ? projectDate.format('YYYY-MM-DD') : undefined;

    return (
        <BaseLayout {...props}>
            <section data-theme="colors-f" className="content-surface">
                <article className="project-detail-article px-4">
                    <nav className="project-breadcrumb mx-auto max-w-6xl" aria-label="Brødsmulesti">
                        <ol className="flex flex-wrap items-center gap-2 text-sm">
                            <li>
                                <Link href="/projects/" className="underline underline-offset-4 hover:no-underline">
                                    Prosjekter
                                </Link>
                            </li>
                            <li aria-hidden="true">/</li>
                            <li aria-current="page" className="font-medium">
                                {title}
                            </li>
                        </ol>
                    </nav>
                    <div className="project-detail-header mx-auto mb-8 max-w-6xl sm:mb-12">
                        {(client || date) && (
                            <div className="flex flex-wrap items-center gap-3 text-sm text-white/75">
                                {client && <span className="uppercase tracking-widest">{client}</span>}
                                {client && date && <span aria-hidden="true">•</span>}
                                {date && (
                                    <time className="uppercase tracking-widest" dateTime={dateTimeAttr}>
                                        {date}
                                    </time>
                                )}
                            </div>
                        )}
                        {status && (
                            <span className="project-status-badge mt-4" aria-label={`Prosjektstatus: ${status}`}>
                                {status}
                            </span>
                        )}
                        <h1 className="mt-4 max-w-4xl text-4xl leading-tight sm:text-5xl md:text-6xl">{title}</h1>
                    </div>
                    {description && (
                        <p className="project-detail-description mx-auto mb-8 max-w-4xl text-lg leading-relaxed sm:mb-12 sm:text-xl">
                            {description}
                        </p>
                    )}
                    {media && (
                        <figure className="project-detail-media mx-auto mb-10 max-w-6xl sm:mb-14">
                            <ProjectMedia media={media} />
                        </figure>
                    )}
                    {technologies.length > 0 && (
                        <section
                            className="project-technologies mx-auto mb-10 max-w-6xl sm:mb-14"
                            aria-labelledby="project-technologies-heading"
                        >
                            <h2 id="project-technologies-heading" className="text-2xl sm:text-3xl">
                                Teknologier og konsepter
                            </h2>
                            <ul
                                aria-label="Teknologier og konsepter brukt i prosjektet"
                                className="project-technology-list mt-5"
                            >
                                {technologies.map((technology) => (
                                    <li key={technology} className="project-technology-badge">
                                        {technology}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}
                    {markdownContent && (
                        <ProjectContent markdownContent={markdownContent} />
                    )}
                </article>
                {(prevProject || nextProject) && (
                    <nav className="project-pagination mx-auto mb-16 mt-10 max-w-6xl px-4 sm:mb-20" aria-label="Prosjektnavigasjon">
                        <div className="mb-6">
                            <h2 className="text-xl uppercase tracking-[0.12em] sm:text-2xl">Andre prosjekter</h2>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                            {prevProject && <ProjectNavItem project={prevProject} direction="previous" />}
                            {nextProject && (
                                <ProjectNavItem project={nextProject} direction="next" />
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

type ProjectContentProps = {
    markdownContent: string;
};

function ProjectContent({ markdownContent }: ProjectContentProps) {
    const sections = markdownContent
        .split(/^(?=##\s+)/m)
        .map((section) => section.trim())
        .filter(Boolean)
        .map((section) => {
            const heading = section.match(/^##\s+(.+?)(?:\r?\n|$)/);
            return heading
                ? { title: heading[1], content: section.slice(heading[0].length).trim() }
                : { title: 'Prosjektdetaljer', content: section };
        });

    return (
        <div className="project-detail-copy mx-auto grid max-w-6xl gap-4 sm:gap-6 md:grid-cols-2">
            {sections.map(({ title, content }, index) => (
                <section
                    key={`${title}-${index}`}
                    aria-labelledby={`project-detail-section-${index}`}
                    className={classNames('project-info-card', index === 0 && 'project-info-card--intro')}
                >
                    <div className="project-info-card-heading">
                        <h2 id={`project-detail-section-${index}`}>{title}</h2>
                        {title === 'På robot-siden' && <RobotClosureSymbol />}
                    </div>
                    <Markdown options={{ forceBlock: true, overrides: { pre: HighlightedPreBlock } }}>
                        {content}
                    </Markdown>
                </section>
            ))}
        </div>
    );
}

function ProjectMedia({ media }: { media: NonNullable<ProjectLayout['media']> }) {
    return (
        <div
            className={classNames('project-detail-media-frame', {
                'project-detail-media-frame--portrait': media.url?.endsWith('robot-demo.jpg')
            })}
        >
            {media.type === 'ImageBlock' ? (
                <ImageBlock {...media} className="project-detail-image w-full" />
            ) : (
                <DynamicComponent {...media} />
            )}
        </div>
    );
}

function ProjectNavItem({ project, direction }: { project: ProjectLayout; direction: 'next' | 'previous' }) {
    const isPrevious = direction === 'previous';

    return (
        <Annotated content={project}>
            <Link
                aria-label={`${isPrevious ? 'Forrige' : 'Neste'} prosjekt: ${project.title}`}
                className={classNames('project-pagination-link group', {
                    'sm:items-end sm:text-right': !isPrevious
                })}
                href={project}
            >
                {project.featuredImage && (
                    <div className="project-pagination-image">
                        <ImageBlock
                            {...project.featuredImage}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                )}
                <span className="text-sm font-medium uppercase tracking-widest text-[#e7d5ac]">
                    {isPrevious ? '← Forrige prosjekt' : 'Neste prosjekt →'}
                </span>
                <span className="text-lg font-medium leading-snug">{project.title}</span>
            </Link>
        </Annotated>
    );
}

function RobotClosureSymbol() {
    return (
        <svg
            className="robot-closure-symbol"
            role="img"
            aria-label="Robotansikt med åpne kontursegmenter"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M24 10H20C15.6 10 12 13.6 12 18V26M12 38V44C12 48.4 15.6 52 20 52H25M39 52H44C48.4 52 52 48.4 52 44V38M52 26V18C52 13.6 48.4 10 44 10H40"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
            />
            <path d="M32 5V10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            <circle cx="32" cy="4" r="2" fill="currentColor" />
            <circle cx="23" cy="29" r="3" fill="#e7d5ac" />
            <circle cx="41" cy="29" r="3" fill="#e7d5ac" />
            <path d="M24 40H40" stroke="#e7d5ac" strokeWidth="3" strokeLinecap="round" />
        </svg>
    );
}
