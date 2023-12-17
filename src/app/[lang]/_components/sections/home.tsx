'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

import logo from '../../../../../public/logo.svg';

import { Skeleton } from '~/components/ui/skeleton';
import { type LocaleStruct, type Locale } from '~/server/i18n.config';
import { api } from '~/trpc/react';
import { useSectionContext } from '~/app/[lang]/_context/section-context';
import { useSectionInView } from '~/app/[lang]/_lib/hooks';

function LogoImage() {
    return (
        <div className="flex place-content-center">
            <div className="relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        type: 'tween',
                        duration: 0.25,
                    }}
                >
                    <Image
                        src={logo as string}
                        width="256"
                        height="256"
                        alt="profile-pic"
                        quality={95}
                        property="true"
                        className="
                            rounded-2xl
                            object-cover
                        "
                    />
                </motion.div>
                <motion.span
                    className="absolute bottom-0 right-0 text-4xl"
                    style={{
                        rotate: '-15deg',
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                        type: 'spring',
                        stiffness: 128,
                        delay: 0.1,
                        duration: 0.64,
                    }}
                ></motion.span>
            </div>
        </div>
    );
}

function QuickAboutMe({
    data,
    isLoading,
}: {
    isLoading: boolean;
    data: string[] | undefined;
}) {
    return (
        <>
            <motion.h1
                className="
                   my-10
                   px-4
                   text-2xl
                   font-medium
                   !leading-[1.5]
                   text-gray-950
                   dark:text-gray-100
                   sm:w-full
                   sm:text-4xl"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            >
                <div className="flex flex-col items-center space-y-2">
                    <Skeleton
                        hasLoaded={!isLoading}
                        className="
                            h-[3.375rem]
                            w-[31rem]
                            max-w-full
                            rounded-b-none
                            rounded-t-lg"
                    >
                        <span>
                            {data?.[0]} <b className="underline">{data?.[1]}</b>
                        </span>
                    </Skeleton>
                    <Skeleton
                        hasLoaded={!isLoading}
                        className="h-[7.25rem] w-[74.75rem] max-w-full rounded-lg"
                    >
                        <span>
                            {data?.[2]} <b className="underline">{data?.[3]}</b>{' '}
                            {data?.[4]} <b className="underline">{data?.[5]}</b>
                            .
                        </span>
                    </Skeleton>
                    <Skeleton
                        hasLoaded={!isLoading}
                        className="h-[3.375rem] w-[45.25rem] max-w-full rounded-lg"
                    >
                        <span>
                            {data?.[6]} <i>{data?.[7]}</i>.
                        </span>
                    </Skeleton>
                </div>
            </motion.h1>
        </>
    );
}

export default function Home({ lang }: { lang: Locale }) {
    const { setActive, setLastClickTime } = useSectionContext();
    const { ref } = useSectionInView('#home', 0.5);

    type i18nT = LocaleStruct;
    const [i18n, setI18n] = useState<i18nT>();

    const p = api.translator.i18n.useQuery();
    useEffect(() => {
        setI18n(p.data);
    }, [lang, i18n, p.data]);

    return (
        <section
            className="
                mb-28
                mt-28
                max-w-full
                scroll-mt-28
                text-center
                sm:mb-0
            "
            ref={ref}
        >
            <LogoImage />
            <QuickAboutMe
                isLoading={p.isLoading}
                data={
                    i18n
                        ? [
                              i18n.home['text-ima'],
                              i18n.home['text-software-engineer'],
                              i18n.home['text-with'],
                              i18n.home['text-exp'],
                              i18n.home['text-joy'],
                              i18n.home['text-mmrp'],
                              i18n.home['text-fcs'],
                              i18n.home['text-react'],
                          ]
                        : undefined
                }
            />
            <motion.div
                className="
                    flex
                    flex-col
                    place-content-center
                    gap-6
                    px-4
                    text-lg
                    font-medium
                    sm:flex-row
                "
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    delay: 0.1,
                }}
            >
                <Skeleton
                    hasLoaded={!p.isLoading}
                    className="h-[3.75rem] w-44 rounded-lg"
                >
                    <Link
                        href="#contact"
                        className="
                        group
                        flex
                        items-center
                        gap-2
                        rounded-xl
                        border
                        border-gray-200
                        bg-gray-900
                        px-7
                        py-3
                        uppercase
                        text-white
                        outline-none
                        transition
                        hover:scale-105
                        hover:bg-gray-950
                        focus:scale-105
                        active:scale-100
                        dark:bg-gray-950"
                        onClick={() => {
                            setActive('#contact');
                            setLastClickTime(Date.now());
                        }}
                    >
                        {i18n?.home['contact-me']}
                        <FontAwesomeIcon
                            icon={faPaperPlane}
                            className="group-hover:scale-120 opacity-70 transition group-hover:-translate-y-[0.15rem] group-hover:translate-x-[0.15rem]"
                        />
                    </Link>
                </Skeleton>
                <Skeleton
                    hasLoaded={!p.isLoading}
                    className="h-[3.75rem] w-44 rounded-lg"
                >
                    <a
                        className="
                            group
                            flex
                            items-center
                            gap-2
                            rounded-xl
                            border
                            border-gray-200
                            bg-white
                            px-7
                            py-3
                            text-center
                            uppercase
                            outline-none
                            transition
                            hover:scale-105
                            hover:cursor-pointer
                            focus:scale-105
                            active:scale-100
                            dark:bg-gray-950/80
                            dark:text-gray-200
                        "
                        href="/CV.pdf"
                        download={true}
                    >
                        {i18n?.home['download-cv']}
                        <FontAwesomeIcon
                            icon={faDownload}
                            className="opacity-60 transition group-hover:translate-y-[0.15rem]"
                        />
                    </a>
                </Skeleton>
                <a
                    href="https://github.com/pwnker"
                    target="_blank"
                    title="github"
                    className="
                        group
                        flex
                        items-center
                        gap-2
                        rounded-xl
                        text-3xl
                        outline-none
                        transition
                        hover:scale-110
                        hover:cursor-pointer
                        focus:scale-105
                    "
                >
                    <FontAwesomeIcon
                        icon={faGithub}
                        className="
                                opacity-75
                                transition
                                group-hover:scale-110"
                    />
                </a>
            </motion.div>
        </section>
    );
}
