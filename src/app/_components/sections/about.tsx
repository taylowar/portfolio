'use client'

import React from 'react';
import SectionHeading from '../section-heading';
import { motion }  from 'framer-motion';
import { useSectionInView } from '~/app/_lib/hooks';
import { api } from '~/trpc/react';

export default function About({ lang }: { lang: string }) {
    const { ref } = useSectionInView('#about'); 

    const { data } = api.translator.getAll.useQuery({
        lang,
        keys: [
            'about-title',
            'about-how-start',
            'about-q1',
            'about-after-start',
            'about-q2',
            'about-end',
        ]
    });

    return (data &&
        <motion.section
	           id="about"
	           className="        
                    max-w-[50rem]
                    text-center
                    leading-8
                    mb-28
                    sm:mb-40
                    scroll-mt-28
                    text-lg
                    "
	           ref={ref}
	           initial={{y: 100, opacity: 0}}
	           animate={{y: 0, opacity: 1}}
	           transition={{ delay: 0.175 }}
        >
            <SectionHeading>{data.translations[0]}</SectionHeading>
            <p className="mb-3">
                {data.translations[1]}<br />
                <span className="italic border border-black rounded-full px-4 py-1">
                    <q>{data.translations[2]}</q>
                </span>
            </p>
            <p className="mb-3">
                {data.translations[3]}<br />
                <span className="italic border border-black rounded-full px-4 py-1">{data.translations[4]}</span>
            </p>
            <p>{data.translations[5]}</p>
        </motion.section>
    );
}
