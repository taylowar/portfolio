'use client'

import React from 'react'
import SectionHeading from '../section-heading'
import { useSectionInView } from '~/app/_lib/hooks'
import { motion } from 'framer-motion'
import { processEmail } from '~/app/_lib/actions'
import toast from 'react-hot-toast'
import { SubmitButton } from '../submit-button'
import { type I18n } from '~/server/api/routers/translator'

function getTranslation(i18n: I18n, key: string) {
    const out = i18n[key];
    if (out === undefined) {
        console.error(`i18n for '${key}' is undefined`);
        return '';
    }
    return out;
}

export default function Contact({i18n}: {i18n: I18n}) {
    const { ref } = useSectionInView('#contact');

    return (
        <motion.section
            id="contact"
            className="
                scroll-mt-28
                mb-20
                sm:mb-28
                w-[min(100%,38rem)]
                text-center"
            ref={ref}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
                duration: 0.5 
            }}
            viewport={{
                once: true
            }}
        >
            <SectionHeading>{getTranslation(i18n, 'contact-title')}</SectionHeading>
            <p className="text-gray-700 dark:text-green-50 -mt-6" >
                {getTranslation(i18n, 'contact-direct-1')} <a className="underline" href="mailto:tilen.okretic@gmail.com">tilen.okretic@gmail.com</a> {getTranslation(i18n, 'contact-direct-2')}  
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
                        h-14
                        dark:bg-white/10
                        rounded-lg
                        my-border-black
                        px-4"
                    placeholder="example@example.com"
                />
                <textarea 
                    name="message"
                    className="
                        h-52
                        dark:bg-white/10
                        my-3
                        rounded-lg
                        my-border-black
                        p-4"
                    placeholder={getTranslation(i18n, "contact-message-placeholder")}
                    maxLength={512}
                />
                <SubmitButton />
            </form>
        </motion.section>
    )
}

