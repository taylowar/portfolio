'use client';

import SectionHeading from '../section-heading';

import { useSectionInView } from '~/app/[lang]/_lib/hooks';
import { SKILL_DATA } from '~/app/[lang]/_lib/data';

import React from 'react';
import { motion } from 'framer-motion';

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
            <SectionHeading>My Skills</SectionHeading>
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
        </section>
    );
}
