'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import clsx from 'clsx';

import { useSectionContext } from '../_context/section-context';
import { LINKS } from '../_lib/data';

export default function Navbar() {
    const { active, setActive, setLastClickTime } = useSectionContext();

    return (
        <header className="relative z-[999] flex w-full place-content-center">
            <motion.div
                className="
                    bg-gray
                    fixed
                    top-0
                    h-[6.5rem]
                    w-full
                    rounded-none
                    border
                    border-white
                    border-opacity-40
                    bg-opacity-80
                    shadow-lg
                    shadow-black/[0.03]
                    backdrop-blur-[0.5rem]
                    dark:border-gray-400 
                    dark:border-opacity-40
                    dark:bg-[#101010]
                    dark:bg-opacity-80
                    sm:top-6
                    sm:h-[3.25rem]
                    sm:w-[42rem]
                    sm:rounded-xl
                "
                initial={{ y: -100, x: '0%', opacity: 0 }}
                animate={{ y: 0, x: '0%', opacity: 1 }}
            ></motion.div>
            <nav
                className="
                    fixed
                    top-[1rem]
                    flex
                    h-16
                    py-2
                    sm:top-[1.475rem]
                    sm:h-[initial]
                    sm:py-0"
            >
                <ul
                    className="
                        flex
                        w-[22rem]
                        flex-wrap
                        place-content-center
                        items-center
                        gap-y-2
                        text-lg
                        font-medium
                        text-gray-200
                        dark:text-gray-400
                        sm:w-[initial]
                        sm:flex-nowrap
                        sm:gap-5"
                >
                    {LINKS.map((link) => (
                        <motion.li
                            key={link.hash}
                            className="jusify-center relative flex h-3/4 items-center"
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                        >
                            <Link
                                href={link.hash}
                                className={clsx(
                                    `
                                    relative
                                    flex
                                    w-full
                                    place-content-center
                                    p-3
                                    transition`,
                                    {
                                        'text-gray-950': active == link.hash,
                                        'hover:text-gray-950':
                                            active != link.hash,
                                        'dark:hover:text-gray-50':
                                            active != link.hash,
                                    },
                                )}
                                onClick={() => {
                                    setActive(link.hash);
                                    setLastClickTime(Date.now());
                                }}
                            >
                                {link.name}
                                {active === link.hash && (
                                    <motion.span
                                        className="
                                            absolute
                                            inset-1
                                            inset-y-1.5
                                            -z-10
                                            rounded-xl
                                            bg-green-300
                                            dark:bg-green-600"
                                        layoutId="activeSpan"
                                        transition={{
                                            type: 'spring',
                                            stiffness: 380,
                                            damping: 30,
                                        }}
                                    />
                                )}
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
