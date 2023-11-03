'use client'

import React from 'react';
import SectionHeading from '../section-heading';
import { motion }  from 'framer-motion';
import { useSectionInView } from '~/app/_lib/hooks';

export default function About() {
    const { ref } = useSectionInView('#about'); 

    return (
        <motion.section
	           id="about"
	           className="        
                    max-w-[45rem]
                    text-center
                    leading-8
                    mb-28
                    sm:mb-40
                    scroll-mt-28"
	           ref={ref}
	           initial={{y: 100, opacity: 0}}
	           animate={{y: 0, opacity: 1}}
	           transition={{ delay: 0.175 }}
        >
            <SectionHeading>About me</SectionHeading>
            <p className="mb-3">
                    My programming adventure started when I was 14 and I got my first laptop. I had only one wish: playing Minecraft. I was not able to buy myself a copy of the game, but lucky for me, I saw a post on the Minecraft forum website that stated that Minecraft modders that post their mods on said forum get a chance to acquire a copy of the game as a gift.<br />
                <span className="italic border border-black rounded-full px-4 py-1">
                    <q>Why not? Programming in Java cannot be that hard, can it?</q>
                </span>
            </p>
            <p className="mb-3">
                    Right thereafter, I started studying at a technical gymnasium with selective courses in programming. After graduating high school and having moderate success within the Minecraft modding scene, I found programming to be my passion. I enjoy problem-solving using computers and math. {'I\'m'} in love with creating new and useful solutions to problems I encounter on a day-to-day basis.<br />
                <span className="italic border border-black rounded-full px-4 py-1">
                        Exploring the realm of computer science and techonlogy is my lifelong dream!
                </span>
            </p>
            <p>
                    At the moment {'I\'m'} finishing my college degree in computer science.
            </p>
        </motion.section>
    );
}
