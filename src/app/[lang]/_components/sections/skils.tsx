'use client'

import SectionHeading from '../section-heading';

import { useSectionInView } from '~/app/[lang]/_lib/hooks';
import { SKILL_DATA } from '~/app/[lang]/_lib/data';

import React from 'react'
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
            }
        }
    },
};

export default function Skills() {
    const {ref} = useSectionInView('#skils', 0.2);

    return (
        <section 
            id="skils"
            className="
                max-w-[53rem]
                text-center
                mb-28
                sm:mb-40
                scroll-mt-28"
            ref={ref}
        >
            <SectionHeading>My Skills</SectionHeading>
            <ul
                className="flex flex-wrap gap-2 place-content-center text-lg text-gray-800" 
            >
                {
                    SKILL_DATA.map((skill, index) => (
                        <motion.li 
                            key={index}
                            className="
                                my-border-black
                                dark:my-border-white
                                dark:bg-white/10
                                text-gray-950
                                dark:text-gray-50
                                px-5
                                py-3
                                rounded-lg"
                            variants={fadeInAnimationVar}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: true
                            }}
                            custom={index}
                        >
                            {skill}
                        </motion.li>
                    ))
                }
            </ul>
        </section>
    );
}
