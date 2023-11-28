'use client'

import React from 'react';

import type { I18n } from '~/server/api/routers/translator';

import SectionHeading from '../section-heading';
import { motion }  from 'framer-motion';
import { useSectionInView } from '~/app/_lib/hooks';

function getTranslation(i18n: I18n, key: string) {
    const out = i18n[key];
    if (out === undefined) {
        console.error(`i18n for '${key}' is undefined`);
        return '';
    }
    return out;
}

export default function About({ i18n }: { i18n: I18n }) {
    const { ref } = useSectionInView('#about'); 

    return (
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
            <SectionHeading>{getTranslation(i18n, 'about-title')}</SectionHeading>
            <p className="mb-3">
                {getTranslation(i18n, 'about-how-start')}<br /><br />
                <span className="italic sm:border sm:border-gray-200 rounded-md px-4 py-1">
                    <q>{getTranslation(i18n, 'about-q1')}</q>
                </span>
            </p>
            <br />
            <p className="mb-3">
                {getTranslation(i18n, 'about-after-start')}<br /><br />
                <span className="italic md:border md:border-gray-200 rounded-md px-4 py-1">
                    {getTranslation(i18n, 'about-q2')}
                </span>
                <br />
                <br />
                <span className="italic md:border md:border-gray-200 rounded-md px-4 py-1">{getTranslation(i18n, 'about-end')}</span>
            </p>
            <br />
            <span>༻❁༺</span>
            <br />
            <br />
            <p>
                Music is also a passion of mine. I am a selfthaught guitarirst and bass player, I hope one day I will also ackwire the skill of playing piano as it is one of my favorite instruments.
                <br />
                <br />
                I am intrested in exploring <b>musical visualization</b> using computers in hope of achiving a now form of art expression through music and video. 
                <br />
                <br />
                In my free time I also like to write poetry. I find my muse in romanticism and post-modern styles of poetry.
            </p>
        </motion.section>
    );
}
