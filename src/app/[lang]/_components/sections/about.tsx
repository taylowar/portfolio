'use client';

import SectionHeading from '../section-heading';

import { type Locale, type LocaleKey } from '~/server/i18n.config';
import { api } from '~/trpc/react';
import { useSectionInView } from '~/app/[lang]/_lib/hooks';
import { Skeleton } from '~/components/ui/skeleton';

import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

export default function About({ lang }: { lang: Locale }) {
    const { ref } = useSectionInView('#about');
    type i18nT = Record<LocaleKey, string>;
    const [i18n, setI18n] = useState<i18nT>();

    const p = api.translator.i18n.useQuery({ locale: lang });
    useEffect(() => {
        setI18n(p.data);
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
            {p.isLoading ? (
                <Skeleton className="w-100 rounded-lg">
                    <div className="w-100 bg-default-300 h-6" />
                </Skeleton>
            ) : (
                <SectionHeading>{i18n?.['about-title']}</SectionHeading>
            )}
            <p className="mb-3">
                {i18n?.['about-how-start']}
                <br />
                <br />
                <span className="rounded-md px-4 py-1 italic sm:border sm:border-gray-200">
                    <q>{i18n?.['about-q1']}</q>
                </span>
            </p>
            <br />
            <p className="mb-3">
                {i18n?.['about-after-start']}
                <br />
                <br />
                <span className="rounded-md px-4 py-1 italic md:border md:border-gray-200">
                    {i18n?.['about-q2']}
                </span>
                <br />
                <br />
                <span className="rounded-md px-4 py-1 italic md:border md:border-gray-200">
                    {i18n?.['about-end']}
                </span>
            </p>
            <br />
            <span>༻❁༺</span>
            <br />
            <br />
            <p>
                Music is also a passion of mine. I am a selfthaught guitarirst
                and bass player, I hope one day I will also ackwire the skill of
                playing piano as it is one of my favorite instruments.
                <br />
                <br />I am intrested in exploring <b>
                    musical visualization
                </b>{' '}
                using computers in hope of achiving a now form of art expression
                through music and video.
                <br />
                <br />
                In my free time I also like to write poetry. I find my muse in
                romanticism and post-modern styles of poetry.
            </p>
        </motion.section>
    );
}
