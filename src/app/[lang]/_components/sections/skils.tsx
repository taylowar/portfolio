'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import SectionHeading from '../section-heading';

import { useSectionInView } from '~/app/[lang]/_lib/hooks';
import { SKILL_DATA } from '~/app/[lang]/_lib/data';
import { api } from '~/trpc/react';
import { Skeleton } from '~/components/ui/skeleton';
import { type LocaleStruct } from '~/server/i18n.config';

const fadeInAnimationVar = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => {
        return {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.05 * index,
            },
        };
    },
};

export default function Skills() {
    const { ref } = useSectionInView('#skils', 0.2);

    const [i18n, setI18n] = useState<LocaleStruct>();

    const p = api.translator.i18n.useQuery();
    useEffect(() => {
        setI18n(p.data);
    }, [i18n, p.data]);

    return (
        <section
            id="skils"
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
                    {i18n?.skills.title}
                </Skeleton>
            </SectionHeading>
            <Skeleton
                hasLoaded={!p.isLoading}
                className="mr-0, ml-0 h-[6rem] w-[32rem] rounded-lg"
            >
                <ul className="flex flex-wrap place-content-center gap-2 text-lg text-gray-800">
                    {SKILL_DATA.map((skill, index) => (
                        <motion.li
                            key={index}
                            className="
                                my-border-black
                                dark:my-border-white
                                rounded-lg
                                px-5
                                py-3
                                text-gray-950
                                dark:bg-white/10
                                dark:text-gray-50"
                            variants={fadeInAnimationVar}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: true,
                            }}
                            custom={index}
                        >
                            {skill}
                        </motion.li>
                    ))}
                </ul>
            </Skeleton>
        </section>
    );
}
