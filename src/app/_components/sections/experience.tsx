'use client'

import React from 'react'
import type { I18n } from '~/server/api/routers/translator';

import { useSectionInView } from '~/app/_lib/hooks';
import SectionHeading from '../section-heading';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { EXPERIENCE_DATA } from '~/app/_lib/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useThemeContext } from '~/app/_context/theme-context';

function getTranslation(i18n: I18n, key: string) {
    const out = i18n[key];
    if (out === undefined) {
        console.error(`i18n for '${key}' is undefined`);
        return '';
    }
    return out;
}

function ExperienceItem({i18n, item}: {i18n: I18n, item: (typeof EXPERIENCE_DATA)[number]}) {
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
                    borderRight: theme === 'light' ? '0.4rem solid #18181860' : '0.4rem solid #ffffff80' 
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
                    {getTranslation(i18n, `experience-${item.id}-title`)}
                </h3>
                <p className="font-normal !mt-0">
                    {getTranslation(i18n, `experience-${item.id}-location`)}
                </p>
                <p className="!mt-1 !font-normal text-gray-700 dark:text-gray-50">
                    {getTranslation(i18n, `experience-${item.id}-description`)}
                </p>
            </VerticalTimelineElement>
        </div>
    )
}


export default function Experience({ i18n }: { i18n: I18n }) {
    const { ref } = useSectionInView('#experience', 0.2);
    // const { theme } = useThemeContext(); 

    return (
        <section
            id="experience"
            ref={ref}
            className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
        >
            <SectionHeading>
                {getTranslation(i18n, 'experience-title')}
            </SectionHeading>
            <VerticalTimeline lineColor={''} animate={true}>
                {EXPERIENCE_DATA.map((exp, index) => (
                    <ExperienceItem i18n={i18n} item={exp} key={index} />
                ))}   
            </VerticalTimeline>
        </section>
    );
}
