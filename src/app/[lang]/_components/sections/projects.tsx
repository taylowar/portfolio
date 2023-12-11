'use client'


import SectionHeading from '../section-heading'
import Project from '../project'

import { useSectionInView } from '~/app/[lang]/_lib/hooks'
import { PROJECT_DATA } from '~/app/[lang]/_lib/data'
import { type Locale, type LocaleKey } from '~/server/i18n.config'
import { api } from '~/trpc/react'

import React, { useEffect, useState } from 'react'


export default function Projects({lang}:{lang:Locale}) {
    const { ref } = useSectionInView('#projects', 0.2);
    type i18nT = Record<LocaleKey, string>;
    const [i18n, setI18n] = useState<i18nT>();

    const p = api.translator.i18n.useQuery({locale: lang});
    useEffect(() => {
        setI18n(p.data);
    }, [lang, i18n, p.data]);
    
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
