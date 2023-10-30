'use client'

import React from 'react'
import { useSectionInView } from '~/app/_lib/hooks';
import SectionHeading from '../section-heading';

export default function Experience() {
    const { ref } = useSectionInView('#experience');

    return (
            <section
            className='text-center mb-28 sm:mb-40 scroll-mt-28'
            id='experience'
            ref={ref}
            >
                <SectionHeading>
                    My Experience
                </SectionHeading>
                <p>In Progress ... </p>

            </section>
    );
}
