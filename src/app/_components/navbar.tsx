'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { LINKS } from '../_lib/data';
import clsx from 'clsx';
import { useSectionContext } from '../_context/section-context';

export default function Navbar() {

    const { active, setActive, setLastClickTime } = useSectionContext();

    return (
        <header className="z-[999] relative">
            <motion.div
                className="fixed
                top-0
                left-1/2
                -translate-x-1/2
                h-[4.5rem]
                w-full
                rounded-none
                border
                border-white
                border-opacity-40
                bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-xl"
                initial={{ y: -100, x: '-50%', opacity: 0 }}
                animate={{ y: 0, x: '-50%', opacity: 1 }}
            ></motion.div>r
            <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
                <ul className="flex w-[22rem] flex-wrap items-center place-content-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
                    {LINKS.map((link) => (
                        <motion.li key={link.hash}
                            className="relative h-3/4 flex items-center jusify-center" 
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}>
                            <Link href={link.hash}
                                className={clsx('flex w-full relative  place-content-center p-3 hover:text-gray-950 transition', { 'text-gray-950': active == link.hash })}
                                onClick={()=>{
                                    setActive(link.hash);
                                    setLastClickTime(Date.now());
                                }}
                            >
                                {link.name}
                                { active === link.hash && (
                                    <motion.span 
                                        className={clsx('absolute bg-green-200 rounded-xl inset-0 -z-10')}
                                        layoutId="activeSpan"
                                        transition={{
                                            type: 'spring',
                                            stiffness: 380,
                                            damping: 30,
                                        }}
                                    />)}
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};
