'use client'

import React from 'react'
import { useSectionInView } from '~/app/_lib/hooks';
import SectionHeading from '../section-heading';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import { EXPERIENCE_DATA } from '~/app/_lib/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useInView } from 'react-intersection-observer';

function ExperienceItem({item}: {item: (typeof EXPERIENCE_DATA)[number]}) {
  const { ref, inView } = useInView({ threshold: 0 })
    return (
        <div ref={ref} className='vertical-timeline-element'>
            <VerticalTimelineElement
                visible={inView}
                contentStyle={{
                    background: '#f3f4f6',
                    boxShadow: 'none',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                    textAlign: 'left',
                    padding: '1.3rem 2rem',
                }}
                contentArrowStyle={{
                    borderRight: '0.4rem solid #1818186e'
                }}
                date={item.date}
                icon={<FontAwesomeIcon icon={item.icon} />}
                iconStyle={{
                    background: 'white', 
                    fontSize: '1.5rem',
                }}
            >
                <h3 className='font-semibold capitalize'>{item.title}</h3>
                <p className='font-normal !mt-0'>{item.location}</p>
                <p className='!mt-1 !font-normal text-gray-700'>
                    {item.description}
                </p>
            </VerticalTimelineElement>
        </div>
    )
}

export default function Experience() {
    const { ref } = useSectionInView('#experience');

    return (
            <section
                id='experience'
                className='text-center mb-28 sm:mb-40 scroll-mt-28'
                ref={ref}
            >
                <SectionHeading>
                    My Experience
                </SectionHeading>
                <VerticalTimeline lineColor='' animate={true}>
                {
                    EXPERIENCE_DATA.map((exp, index) => (
                        <ExperienceItem item={exp} key={index} />
                    ))
                }   
                </VerticalTimeline>
            </section>
           );
}
