'use client';

import SectionHeading from '../section-heading';

import { type LocaleStruct, type Locale } from '~/server/i18n.config';
import { api } from '~/trpc/react';
import { useSectionInView } from '~/app/[lang]/_lib/hooks';
import { Skeleton } from '~/components/ui/skeleton';

import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

export default function About({ lang }: { lang: Locale }) {
    const { ref } = useSectionInView('#about');
    type i18nT = LocaleStruct; 
    const [i18n, setI18n] = useState<i18nT>();

    const p = api.translator.i18n.useQuery({ locale: lang });
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setI18n(p.data);
        setTimeout(() => {
            setIsLoading(false);
        }, 3000)
    }, [lang, i18n, p.data]);

    return (
        <motion.section
            id="about"
            className="mb-28 max-w-[50rem] scroll-mt-28 text-center text-xl leading-8 sm:mb-40 "
            ref={ref}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.175 }}
        >
            <SectionHeading>
                <Skeleton hasLoaded={!isLoading} className="w-64 h-14 rounded-lg">
                    {i18n?.about.title}
                </Skeleton>
            </SectionHeading>
            <Skeleton hasLoaded={!isLoading} className="w-[50rem] h-56 rounded-lg">
                <p className="mb-3 flex flex-col place-content-center gap-8">
                    {i18n?.about['how-start']}
                    <span className="rounded-md px-4 py-1 italic sm:border sm:border-gray-200">
                        <q>{i18n?.about.q1}</q>
                    </span>
                </p>
            </Skeleton>
            <br />
            <Skeleton hasLoaded={!isLoading} className="w-[50rem] h-52 rounded-lg">
                <p className="mb-3 flex flex-col place-content-center gap-8">
                    {i18n?.about['after-start']}
                    <span className="rounded-md px-4 py-1 italic md:border md:border-gray-200">
                        {i18n?.about.q2}
                    </span>
                </p>
            </Skeleton>
            <br />
            <Skeleton hasLoaded={!isLoading} className="w-[50rem] h-[3.715rem] rounded-lg">
                <p className="mb-3 flex flex-col place-content-center gap-8">
                    <span className="rounded-md px-4 py-1 italic md:border md:border-gray-200">
                        {i18n?.about.end}
                    </span>
                </p>
            </Skeleton>
            <br />
            <span>༻❁༺</span>
            <br />
            <br />
            <Skeleton hasLoaded={!isLoading} className="w-[50rem] h-[3.715rem] rounded-lg">
                <p>
                    <span>{i18n?.about['music-p1-s']}</span>
                </p>
            </Skeleton>
            <Skeleton hasLoaded={!isLoading} className="w-[50rem] h-[3.715rem] rounded-lg">
                <p>
                    <span>{i18n?.about['music-p2-s1']}</span>
                    {' '}<b>{i18n?.about['music-p2-sb']}</b>{' '}
                    <span>{i18n?.about['music-p2-s2']}</span>
                </p>
            </Skeleton>
            <br />
            <Skeleton hasLoaded={!isLoading} className="w-[50rem] h-[3.715rem] rounded-lg">
                <p>{i18n?.about['music-p3']}</p>
            </Skeleton>
        </motion.section>
    );
}
