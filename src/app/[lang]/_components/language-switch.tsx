'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import { type Locale } from '~/server/i18n.config';

type Props = {
    lang: Locale;
};

export default function LangSwitch({ lang }: Props) {
    const r = useRouter();

    const langc = () => {
        if (lang === 'en') {
            r.replace('/');
        } else {
            r.replace(`/${lang}`);
            r.refresh();
        }
    };

    return (
        <button
            id="lang-btn"
            className="flex items-center gap-2"
            onClick={langc}
        >
            <Image
                width={28}
                height={21}
                src={`/flags/${lang}.svg`}
                alt="si-flag"
            />
            {lang}
        </button>
    );
}
