'use client';

import SectionHeading from '../section-heading';
import { SubmitButton } from '../submit-button';

import { type Locale, type LocaleKey } from '~/server/i18n.config';
import { api } from '~/trpc/react';
import { processEmail } from '~/app/[lang]/_lib/actions';
import { useSectionInView } from '~/app/[lang]/_lib/hooks';
import { Skeleton } from '~/components/ui/skeleton';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

export default function Contact({ lang }: { lang: Locale }) {
    const { ref } = useSectionInView('#contact');
    type i18nT = Record<LocaleKey, string>;
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
            {!i18n ? (
                <Skeleton className="w-100 rounded-lg">
                    <div className="w-100 bg-default-300 h-6" />
                </Skeleton>
            ) : (
                <SectionHeading>{i18n?.['contact-title']}</SectionHeading>
            )}
            <p className="-mt-6 text-gray-700 dark:text-green-50">
                {i18n?.['contact-direct-1']}{' '}
                <a className="underline" href="mailto:tilen.okretic@gmail.com">
                    tilen.okretic@gmail.com
                </a>{' '}
                {i18n?.['contact-direct-2']}
            </p>
            <form
                className="mt-10 flex flex-col"
                action={async (formData) => {
                    const result = await processEmail(formData);
                    if (!result.ok) {
                        toast.error(result.message);
                    } else {
                        toast.success(result.message);
                    }
                }}
            >
                <input
                    type="email"
                    name="email"
                    required={true}
                    maxLength={128}
                    className="
                        my-border-black
                        h-14
                        rounded-lg
                        px-4
                        dark:bg-white/10"
                    placeholder="example@example.com"
                />
                <textarea
                    name="message"
                    className="
                        my-border-black
                        my-3
                        h-52
                        rounded-lg
                        p-4
                        dark:bg-white/10"
                    placeholder={i18n?.['contact-message-placeholder']}
                    maxLength={512}
                />
                <SubmitButton />
            </form>
        </motion.section>
    );
}
