'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

import SectionHeading from '../section-heading';
import { SubmitButton } from '../submit-button';

import { type LocaleStruct, type Locale } from '~/server/i18n.config';
import { api } from '~/trpc/react';
import { processEmail } from '~/app/[lang]/_lib/actions';
import { useSectionInView } from '~/app/[lang]/_lib/hooks';
import { Skeleton } from '~/components/ui/skeleton';

export default function Contact({ lang }: { lang: Locale }) {
    const { ref } = useSectionInView('#contact');
    type i18nT = LocaleStruct;
    const [i18n, setI18n] = useState<i18nT>();

    const p = api.translator.i18n.useQuery({ locale: lang });
    useEffect(() => {
        setI18n(p.data);
    }, [lang, i18n, p.data]);

    return (
        <motion.section
            id="contact"
            className="
                mb-20
                w-[min(100%,38rem)]
                scroll-mt-28
                text-center
                sm:mb-28"
            ref={ref}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
                duration: 0.5,
            }}
            viewport={{
                once: true,
            }}
        >
            <SectionHeading>
                <Skeleton
                    hasLoaded={!p.isLoading}
                    className="ml-0 mr-0 h-[3.715rem] w-[32rem] rounded-lg"
                >
                    {i18n?.contact.title}
                </Skeleton>
            </SectionHeading>
            <Skeleton hasLoaded={!p.isLoading} className="w-100 rounded-lg">
                <p className="-mt-6 text-gray-700 dark:text-green-50">
                    {i18n?.contact['direct-1']}{' '}
                    <a
                        className="underline"
                        href="mailto:tilen.okretic@gmail.com"
                    >
                        tilen.okretic@gmail.com
                    </a>{' '}
                    {i18n?.contact['direct-2']}
                </p>
            </Skeleton>
            <form
                className="mt-10 flex flex-col items-center"
                action={async (formData) => {
                    const result = await processEmail(formData);
                    if (!result.ok) {
                        toast.error(result.message);
                    } else {
                        toast.success(result.message);
                    }
                }}
            >
                <Skeleton
                    hasLoaded={!p.isLoading}
                    className="h-[3.75rem] w-[38rem] rounded-lg"
                >
                    <input
                        type="email"
                        name="email"
                        required={true}
                        maxLength={128}
                        className="
                        my-border-black
                        h-14
                        w-full
                        rounded-lg
                        px-4
                        dark:bg-white/10"
                        placeholder="example@example.com"
                    />
                </Skeleton>
                <Skeleton
                    hasLoaded={!p.isLoading}
                    className="mt-4 h-[14rem] w-[38rem] rounded-lg"
                >
                    <textarea
                        name="message"
                        className="
                        my-border-black
                        my-3
                        h-52
                        w-full
                        rounded-lg
                        p-4
                        dark:bg-white/10"
                        placeholder={i18n?.contact['message-placeholder']}
                        maxLength={512}
                    />
                </Skeleton>
                <Skeleton
                    hasLoaded={!p.isLoading}
                    className="mt-4 h-[3rem] w-[8rem] rounded-lg"
                >
                    <SubmitButton textContent={i18n?.contact['submit-btn']} />
                </Skeleton>
            </form>
        </motion.section>
    );
}
