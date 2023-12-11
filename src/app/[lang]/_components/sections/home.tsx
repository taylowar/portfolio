'use client'
import logo from '../../../../../public/logo.svg';

import { useSectionInView } from '~/app/[lang]/_lib/hooks';
import { useSectionContext } from '~/app/[lang]/_context/section-context';
import { api } from '~/trpc/react';
import { type Locale, type LocaleKey } from '~/server/i18n.config';

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import { Card, Skeleton } from '@nextui-org/react';

function LogoImage() {
    return (
        <div className="flex place-content-center">
            <div className="relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}  
                    animate={{ opacity: 1, scale: 1 }}  
                    transition={{
                        type: 'tween',
                        duration: 0.25
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
                            object-cover
                            rounded-2xl
                        "
                    />
                </motion.div>
                <motion.span
                    className="absolute text-4xl bottom-0 right-0"
                    style={{
                        rotate: '-15deg'
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                        type: 'spring',
                        stiffness: 128,
                        delay: 0.1,
                        duration: 0.64,
                    }}
                >
                
                </motion.span>
            </div>
        </div> 
    );
}

function QuickAboutMe({ data, isLoading }: { isLoading: boolean, data: string[] | undefined }) {
    return (
        <>
            <motion.h1
                className="
                   my-10
                   px-4
                   text-2xl
                   font-medium
                   text-gray-950
                   dark:text-gray-100
                   !leading-[1.5]
                   sm:text-4xl
                   sm:w-full"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            >

                {isLoading ? (
                    <Card className="flex flex-col gap-2">
                        <Skeleton isLoaded={!isLoading} className="w-100 rounded-lg">
                            <div className="w-100 h-6 bg-default-300"/>
                        </Skeleton>
                        <Skeleton className="w-100 rounded-lg">
                            <div className="w-100 h-6 bg-default-300"/>
                        </Skeleton>
                        <Skeleton className="w-100 rounded-lg">
                            <div className="w-100 h-6 bg-default-300"/>
                        </Skeleton>
                        <Skeleton className="w-100 rounded-lg">
                            <div className="w-100 h-6 bg-default-300"/>
                        </Skeleton>
                    </Card>
                ) : (<>
                    <span>{data?.[0]} <b className="underline">{data?.[1]}</b>.</span><br />
                    <span>{data?.[2]} <b className="underline">{data?.[3]}</b> {data?.[4]} <b className="underline">{data?.[5]}</b>.</span><br />
                    <span>{data?.[6]} <i>{data?.[7]}</i>.</span><br />
                    <span>{data?.[8]} <b className="underline">{data?.[9]}</b>.</span><br />
                </>)}
            </motion.h1>
        </>
    )
}

export default function Home({lang}: {lang:Locale}) {
    const { setActive, setLastClickTime } = useSectionContext();
    const { ref } = useSectionInView('#home', 0.5);

    type i18nT = Record<LocaleKey, string>;
    const [i18n, setI18n] = useState<i18nT>();

    const p = api.translator.i18n.useQuery({locale: lang});
    useEffect(() => {
        setI18n(p.data);
    }, [lang, i18n, p.data]);

    return (
        <section
            className="
                    mt-28
                    mb-28
                    max-w-full
                    text-center
                    sm:mb-0
                    scroll-mt-28"
            ref={ref}
        >
            <LogoImage />
            <QuickAboutMe isLoading={p.isLoading} data={i18n ? [
                i18n['home-text-ima'],
                i18n['home-text-software-engineer'],
                i18n['home-text-with'],
                i18n['home-text-exp'],
                i18n['home-text-joy'],
                i18n['home-text-mmrp'],
                i18n['home-text-fcs'],
                i18n['home-text-react'],
            ]:undefined}/> 
            <motion.div
                className="flex flex-col sm:flex-row place-content-center gap-2 px-4 text-lg font-medium" 
                initial={{y: 100, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{
                    delay: 0.1
                }}
            >
                <Link
                    href="#contact"
                    className="
                        group
                        flex
                        border
                        text-white
                        uppercase
                        px-7
                        py-3
                        items-center
                        gap-2
                        rounded-xl
                        outline-none
                        border-gray-200
                        bg-gray-900
                        dark:bg-gray-950
                        focus:scale-105
                        hover:scale-105
                        hover:bg-gray-950
                        active:scale-100
                        transition"
                    onClick={() => {
                        setActive('#contact');
                        setLastClickTime(Date.now());
                    }}
                >{
                        p.isLoading ? 
                            (
                                <>
                                    <Skeleton isLoaded={!p.isLoading} className="w-100 rounded-lg">
                                        <div className="w-100 h-6 bg-default-300"/>
                                    </Skeleton>
                                </>
                            ) : (
                                <>
                                    {i18n?.['contact-me']}
                                    <FontAwesomeIcon
                                        icon={faPaperPlane}
                                        className="opacity-70 group-hover:translate-x-[0.15rem] group-hover:-translate-y-[0.15rem] group-hover:scale-120 transition"
                                    />
                                </>)
                    }
                </Link>
                <a 
                    className="group
                      flex
                      bg-white
                      dark:bg-gray-950/80
                      px-7
                      py-3
                      items-center
                      text-center
                      dark:text-gray-200
                      gap-2
                      border
                      border-gray-200
                      rounded-xl
                      outline-none
                      focus:scale-105
                      hover:cursor-pointer
                      hover:scale-105
                      active:scale-100
                      transition
                      uppercase"
                    href="/CV.pdf"
                    download={true}
                >{p.isLoading ? (
                        <>
                            <Skeleton isLoaded={!p.isLoading} className="w-100 rounded-lg">
                                <div className="w-100 h-6 bg-default-300"/>
                            </Skeleton>
                        </>):
                        (<>
                            {i18n?.['download-cv']}
                            <FontAwesomeIcon 
                                icon={faDownload}
                                className="opacity-60 group-hover:translate-y-[0.15rem] transition"
                            />
                        </>)
                    }
                </a>
                <a
                    href="https://github.com/pwnker"
                    target="_blank"
                    title="github"
                    className="
                            group
                            text-3xl
                            gap-2
                            items-center
                            flex
                            rounded-xl
                            outline-none
                            focus:scale-105
                            hover:cursor-pointer
                            hover:scale-110
                            transition
                            "
                >
                    <FontAwesomeIcon
                        icon={faGithub}
                        className="
                                opacity-75
                                group-hover:scale-110
                                transition"
                    />
                </a>
            </motion.div>
        </section>
    )
}

