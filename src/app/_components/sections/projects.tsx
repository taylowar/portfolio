'use client'

import React from 'react'

import type { I18n } from '~/server/api/routers/translator'

import SectionHeading from '../section-heading'
import Project from '../project'
import { useSectionInView } from '~/app/_lib/hooks'
import { PROJECT_DATA } from '~/app/_lib/data'

export default function Projects({ i18n }: { i18n: I18n }) {
    const { ref } = useSectionInView('#projects', 0.2);
    
    return (
        <section 
            id="projects"
            className="
                max-w-[53rem]
                text-center
                mb-28
                sm:mb-40
                scroll-mt-28"
            ref={ref}
        >
            <SectionHeading>my projects</SectionHeading>
            <ul className="flex flex-col gap-3 sm:gap-8">
                {
                    PROJECT_DATA.map((project, index) =>(
                        <li key={index} className="group">
                            <Project i18n={i18n} project={project} />
                        </li>
                    )) 
                }
            </ul>
        </section>
    );
}
