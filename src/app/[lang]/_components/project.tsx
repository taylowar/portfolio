'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { type LocaleStruct } from '~/server/i18n.config';

import type { PROJECT_DATA } from '../_lib/data';

type ProjectProps = {
    i18n: LocaleStruct | undefined;
    project: (typeof PROJECT_DATA)[number];
};

export default function Project({
    i18n,
    project: { id, gh, tags, imageUrl },
}: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0 1', '1.33 1'],
    });

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.65, 1]);

    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }}
            className="sm:group-even:pl-4"
        >
            <section
                className="
		          relative
		          max-w-[42rem]
		          overflow-hidden
                  rounded-lg
		          border
		          border-black/5 bg-gray-100
                  text-left
		          transition
		          hover:bg-gray-200
		          dark:bg-white/10
		          dark:hover:bg-white/20
		          sm:h-[20rem]		
                  sm:pr-8"
            >
                <div
                    className="
		              flex
		              h-full
		              flex-col
		              px-5
		              pb-7
		              pt-4
		              sm:max-w-[50%]
		              sm:pb-4
		              sm:pl-10
		              sm:pr-0
		              sm:pt-4
		              sm:group-even:ml-[18rem]"
                >
                    <h3 className="text-2xl font-semibold">
                        {i18n?.project[`${id}-title`]}
                    </h3>
                    {gh !== '' && (
                        <span className="text-xl text-white sm:mt-2">
                            <a href={gh} target="_blank" className="">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </span>
                    )}
                    <p
                        className="
                        mt-2
                        leading-relaxed
                        text-gray-700
                        dark:text-gray-50"
                    >
                        {i18n?.project[`${id}-description`]}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
                        {tags.map((tag, index) => (
                            <li
                                key={index}
                                className="rounded-full bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white "
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>
                <Image
                    src={imageUrl}
                    alt={`project-${id}-title`}
                    quality={95}
                    className="
                       absolute
                       -right-40
                       top-8
                       hidden
                       w-[28.25rem]
                       rounded-t-lg
                       shadow-2xl
                       transition
                       group-even:-left-40
                       group-even:right-[initial]
                       group-hover:-translate-x-3
                       group-hover:-translate-y-3
                       group-hover:rotate-2
                       group-hover:scale-105
                       group-even:group-hover:translate-x-3
                       group-even:group-hover:translate-y-3
                       sm:block"
                />
            </section>
        </motion.div>
    );
}
