import { createTRPCRouter, publicProcedure } from '../trpc';

import { type Locale, i18n, type LocaleStruct } from '~/server/i18n.config';

import { z } from 'zod';

const LocaleDictionary: Record<Locale, Promise<LocaleStruct>> = {
    en: import('~/locales/en.json'),
    sl: import('~/locales/sl.json'),
};

async function getI18n(lang: Locale) {
    const olng = await LocaleDictionary[lang];
    if (olng === undefined) {
        console.warn(`[404]: i18n for '${lang}' does not exist!`);
        return await LocaleDictionary[i18n.defaultLocale];
    }
    return olng;
}

let l: Locale = 'en';

export const translatorRouter = createTRPCRouter({
    i18n: publicProcedure
        .input(z.object({ locale: z.custom<Locale>() }))
        .query(async () => {
            const ld = await getI18n(l);
            return ld;
        }),
    setI18n: publicProcedure
        .input(z.object({ locale: z.custom<Locale>() }))
        .query(({ input }) => {
            l = input.locale;
            return l;
        }),
});
