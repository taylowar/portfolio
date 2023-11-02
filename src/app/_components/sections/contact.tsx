'use client'

import React from 'react'
import SectionHeading from '../section-heading'
import { useSectionInView } from '~/app/_lib/hooks'
import { motion } from 'framer-motion'
import { processEmail } from '~/app/_lib/actions'
import toast from 'react-hot-toast'
import { SubmitButton } from '../submit-button'

export default function Contact() {
    const { ref } = useSectionInView('#contact');

    return (
        <motion.section
            id="contact"
            className="scroll-mt-28 mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
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
            <SectionHeading>Contact Me</SectionHeading>
            <p
                className="text-gray-700 -mt-6"
            >
                    Please contatct me directly at <a className="underline" href="mailto:example@gmail.com">example@gmail.com</a> or through this form:
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
                    className="h-14 rounded-lg my-border-black px-4"
                    placeholder="example@example.com"
                />
                <textarea 
                    name="message"
                    className="h-52 my-3 rounded-lg my-border-black p-4"
                    placeholder="your message"
                    maxLength={512}
                />
                <SubmitButton />
            </form>
        </motion.section>
    )
}

