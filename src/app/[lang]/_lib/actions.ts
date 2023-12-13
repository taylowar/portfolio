'use server';

import React from 'react';
import { Resend } from 'resend';
import { z } from 'zod';

import ContactEmail from '../_components/email/contact-email';

import { env } from '~/env.mjs';

// Do this tRpc
export const processEmail = async (formData: FormData) => {
    const parsed = z
        .object({
            email: z.string().email().max(50),
            message: z.string().max(512),
        })
        .safeParse({
            email: formData.get('email'),
            message: formData.get('message'),
        });

    if (!parsed.success) {
        let message = '';
        parsed.error.issues.forEach((issue) => {
            message += `${issue.message}.\nEmail should be of form: example@domain.com`;
        });
        return {
            ok: false,
            message,
        };
    }

    const resend = new Resend(env.RESNED_API_KEY);
    const res = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'tilen.okretic@gmail.com',
        subject: `Message from contact over at ${parsed.data.email}`,
        react: React.createElement(ContactEmail, {
            message: parsed.data.message,
            email: parsed.data.email,
        }),
    });

    if (res.error != null) {
        return {
            ok: false,
            message: `${res.error.name}: ${res.error.message}`,
        };
    }

    return {
        ok: true,
        message: 'Your email was successfully sent',
    };
};
