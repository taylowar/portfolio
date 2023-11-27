'use client'

import React from 'react'
import { useSectionInView } from '~/app/_lib/hooks';
import SectionHeading from '../section-heading';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import { EXPERIENCE_DATA } from '~/app/_lib/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useInView } from 'react-intersection-observer';
import { useThemeContext } from '~/app/_context/theme-context';

function ExperienceItem({item}: {item: (typeof EXPERIENCE_DATA)[number]}) {
    const { ref, inView } = useSectionInView("#experience", 0.75);

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
                <h3 className="font-semibold capitalize">{item.title}</h3>
                <p className="font-normal !mt-0">{item.location}</p>
                <p className="
                    !mt-1
                    !font-normal
                    text-gray-700
                    dark:text-gray-50
                    "
                >
                    {item.description}
                </p>
            </VerticalTimelineElement>
        </div>
    )
}

export default function Experience() {
    const { ref } = useSectionInView('#experience', 0.2);
    const { theme } = useThemeContext(); 

    return (
        <section
            id="experience"
            ref={ref}
            className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
        >
            <SectionHeading>
                    My Experience
            </SectionHeading>
            <VerticalTimeline lineColor={theme === 'light' ? '#18181880':'#ffffff20'} animate={true}>
                {EXPERIENCE_DATA.map((exp, index) => (
                    <ExperienceItem item={exp} key={index} />
                ))}   
            </VerticalTimeline>
        </section>
    );
}
