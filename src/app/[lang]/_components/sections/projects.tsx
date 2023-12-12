'use client';

import SectionHeading from '../section-heading';
import Project from '../project';

import { useSectionInView } from '~/app/[lang]/_lib/hooks';
import { PROJECT_DATA } from '~/app/[lang]/_lib/data';
import { type LocaleStruct, type Locale } from '~/server/i18n.config';
import { api } from '~/trpc/react';
import { Skeleton } from '~/components/ui/skeleton';

import React, { useEffect, useState } from 'react';

export default function Projects({ lang }: { lang: Locale }) {
    const { ref } = useSectionInView('#projects', 0.2);
    type i18nT = LocaleStruct;
    const [i18n, setI18n] = useState<i18nT>();

    const p = api.translator.i18n.useQuery({ locale: lang });
    useEffect(() => {
        setI18n(p.data);
    }, [lang, i18n, p.data]);

    return (
        <section
            id="projects"
            className="
                mb-28
                max-w-[53rem]
                scroll-mt-28
                text-center
                sm:mb-40"
            ref={ref}
        >
            <SectionHeading>
                <Skeleton
                    hasLoaded={!p.isLoading}
                    className="ml-0 mr-0 h-[3.715rem] w-[32rem] rounded-lg"
                >
                    {i18n?.project.title}
                </Skeleton>
            </SectionHeading>
            <ul className="flex flex-col gap-3 sm:gap-8">
                {PROJECT_DATA.map((project, index) => (
                    <li key={index} className="group">
                        <Skeleton
                            hasLoaded={!p.isLoading}
                            className="h-[16rem] w-[42rem] rounded-lg"
                        >
                            <Project i18n={i18n} project={project} />
                        </Skeleton>
                    </li>
                ))}
            </ul>
        </section>
    );
}
