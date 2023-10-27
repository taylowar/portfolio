'use client'

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
    className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40'
    initial={{y: 100, opacity: 0}}
    animate={{y: 0, opacity: 1}}
    transition={{
        delay: 0.175
    }}
    >
        <SectionHeading>About me</SectionHeading>
        <p className='mb-3'>My progrogramming adventure starts when I was 14 and I got my first laptop. I had only one wish: playing Minecraft. I was not able to buy myself a copy of the game but luckely I saw a post on the Minecraft forum website which stated that minecraft modders that post their mods on said forum get a change of acquiring a copy of the minecraft game as a gift. <q>Why not? Java minecraft modding cannot be that hard, can it?</q></p>
        <p></p>
    </motion.section>
  )
}
