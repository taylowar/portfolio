
import React from 'react'
import SectionHeading from '../section-heading'
import { PROJECT_DATA } from '~/app/lib/data'
import Project from '../project'

export default function Projects() {
  return (
    <section
        id="projects"
        className='text-center scroll-mt-28'
    >
        <SectionHeading>my projects</SectionHeading>
        <ul className='flex flex-col gap-3 sm:gap-8'>
        {
           PROJECT_DATA.map((project, index) =>(
                <li key={index} className='group'>
                    <Project {...project} />
                </li>
            )) 
        }
        </ul>
    </section>
  )
}
