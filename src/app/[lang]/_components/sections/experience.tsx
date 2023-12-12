'use client';

import SectionHeading from '../section-heading';

import { type LocaleStruct, type Locale } from '~/server/i18n.config';
import { api } from '~/trpc/react';
import { useThemeContext } from '~/app/[lang]/_context/theme-context';
import { EXPERIENCE_DATA } from '~/app/[lang]/_lib/data';
import { useSectionInView } from '~/app/[lang]/_lib/hooks';

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

function ExperienceItem({
    i18n,
    item,
}: {
    i18n: LocaleStruct;
    item: (typeof EXPERIENCE_DATA)[number];
}) {
    const { ref, inView } = useSectionInView('#experience', 0.2);
    const { theme } = useThemeContext();

    return (
        <div ref={ref} className="vertical-timeline-element">
            <VerticalTimelineElement
                visible={inView}
                contentStyle={{
                    background: theme === 'light' ? '#f3f4f6' : '#ffffff20',
                    boxShadow: 'none',
                    border: `1px solid #ffffff20`,
                    textAlign: 'left',
                    padding: '1.3rem 2rem',
                }}
                contentArrowStyle={{
                    borderRight:
                        theme === 'light'
                            ? '0.4rem solid #18181860'
                            : '0.4rem solid #ffffff80',
                }}
                date={item.date}
                icon={<FontAwesomeIcon icon={item.icon} />}
                iconStyle={{
                    background: theme === 'light' ? 'white' : '#ffffff28',
                    borderColor: theme === 'light' ? 'white' : '#ffffffef',
                    fontSize: '1.5rem',
                }}
            >
                <h3 className="font-semibold capitalize">
                    {i18n.experience[`${item.id}-title`]}
                </h3>
                <p className="!mt-0 font-normal">
                    {i18n.experience[`${item.id}-location`]}
                </p>
                <p className="!mt-1 !font-normal text-gray-700 dark:text-gray-50">
                    {i18n.experience[`${item.id}-description`]}
                </p>
            </VerticalTimelineElement>
        </div>
    );
}

export default function Experience({ lang }: { lang: Locale }) {
    const { ref } = useSectionInView('#experience', 0.2);
    type i18nT = LocaleStruct; 
    const [i18n, setI18n] = useState<i18nT>();

    const p = api.translator.i18n.useQuery({ locale: lang });
    useEffect(() => {
        setI18n(p.data);
    }, [lang, i18n, p.data]);

    return (
        i18n && (
            <section
                id="experience"
                ref={ref}
                className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
            >
                <SectionHeading>{i18n.experience.title}</SectionHeading>
                <VerticalTimeline lineColor={''} animate={true}>
                    {EXPERIENCE_DATA.map((exp, index) => (
                        <ExperienceItem i18n={i18n} item={exp} key={index} />
                    ))}
                </VerticalTimeline>
            </section>
        )
    );
}
