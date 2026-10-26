import classNames from 'classnames';

import Section from '../Section';

type Skill = {
    name: string;
    detail?: string;
};

type InfoGroup = {
    title: string;
    organization?: string;
    dates?: string;
    description?: string;
    skills?: Skill[];
};

type InfoGroupsSectionProps = {
    colors?: 'colors-a' | 'colors-b' | 'colors-c' | 'colors-d' | 'colors-e' | 'colors-f';
    elementId?: string;
    groupType: 'skills' | 'experience';
    groups?: InfoGroup[];
    styles?: {
        self?: Record<string, unknown>;
    };
    title?: string;
};

export default function InfoGroupsSection(props: InfoGroupsSectionProps) {
    const { colors, elementId, groupType, groups = [], styles = {}, title } = props;
    const isExperience = groupType === 'experience';

    return (
        <Section elementId={elementId} colors={colors} styles={styles.self}>
            {title && (
                <h2 id={`${elementId}-heading`} className="text-4xl leading-tight sm:text-5xl">
                    {title}
                </h2>
            )}
            {groups.length > 0 && (
                <div
                    aria-labelledby={title ? `${elementId}-heading` : undefined}
                    className={classNames('mt-8 grid items-stretch gap-4 sm:mt-10 sm:gap-6 md:grid-cols-2 lg:grid-cols-3', {
                        'info-experience-grid': isExperience,
                        'info-skills-grid': !isExperience
                    })}
                >
                    {groups.map((group, index) => (
                        <article
                            key={`${group.title}-${group.organization ?? index}`}
                            className="flex h-full flex-col rounded-xl border border-white/15 bg-[#1a1b12]/85 p-5 shadow-lg shadow-black/20 sm:p-6"
                        >
                            {isExperience ? (
                                <>
                                    <p className="text-sm font-medium uppercase tracking-[0.12em] text-[#e7d5ac]">
                                        {group.dates}
                                    </p>
                                    <h3 className="mt-3 text-2xl leading-snug">{group.title}</h3>
                                    {group.organization && (
                                        <p className="mt-1 text-base font-medium leading-relaxed text-white/85">
                                            {group.organization}
                                        </p>
                                    )}
                                    {group.description && (
                                        <p className="mt-4 border-t border-white/10 pt-4 text-base leading-relaxed text-white/90">
                                            {group.description}
                                        </p>
                                    )}
                                </>
                            ) : (
                                <>
                                    <h3 className="text-xl leading-snug text-[#e7d5ac] sm:text-2xl">{group.title}</h3>
                                    {group.skills && (
                                        <ul className="mt-4 divide-y divide-white/10">
                                            {group.skills.map((skill) => (
                                                <li key={skill.name} className="py-3 first:pt-0 last:pb-0">
                                                    <p className="text-base font-medium leading-snug">{skill.name}</p>
                                                    {skill.detail && (
                                                        <p className="mt-1 text-sm leading-relaxed text-white/75">
                                                            {skill.detail}
                                                        </p>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </>
                            )}
                        </article>
                    ))}
                </div>
            )}
        </Section>
    );
}
