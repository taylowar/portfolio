'use client'

import React from 'react'
import SectionHeading from '../section-heading';
import { useSectionInView } from '~/app/_lib/hooks';
import { SKILL_DATA } from '~/app/_lib/data';
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
  
  const {ref} = useSectionInView('#skils', 0.5);

  return (
    <section 
        id="skils"
        className='
            max-w-[53rem]
            text-center
            mb-28
            sm:mb-40
            scroll-mt-28'
            ref={ref}
        >
        <SectionHeading>My Skills</SectionHeading>
        <ul
            className='flex flex-wrap gap-2 place-content-center text-lg text-gray-800' 
        >
        {
            SKILL_DATA.map((skill, index) => (
                <motion.li 
                    key={index}
                    className='border-2 border-black/[0.1] px-5 py-3 rounded-lg'
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
}2
