import { createTRPCRouter, publicProcedure } from '../trpc';

import { type Locale, type LocaleKey, i18n } from '~/server/i18n.config';

import { z } from 'zod';

const LocaleDictionary: Record<Locale, Promise<Record<LocaleKey, string>>> = {
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

function getI18nTranslation(locale: Record<LocaleKey, string>, key: LocaleKey) {
    return locale[key];
}

let l:Locale='en';

export const translatorRouter = createTRPCRouter({
    i18n: publicProcedure
        .input(z.object({locale: z.custom<Locale>()}))
        .query(async ({input}) => {
            console.log(l);
            
            const ld = await getI18n(l);
            return ld;
        }),
    setI18n: publicProcedure
        .input(z.object({locale: z.custom<Locale>()}))
        .query(({input}) => {
            l = input.locale; 
            return l;
        }),
    get: publicProcedure
        .input(z.object({ locale: z.custom<Locale>(), key: z.custom<LocaleKey>()}))
        .query(async ({ input }) => {
            const i18n = await getI18n(input.locale);
            const tlng = getI18nTranslation(i18n, input.key);
            return {
                translation: tlng,
            };
        }),
    getAll: publicProcedure
        .input(z.object({ locale: z.custom<Locale>(), keys: z.custom<LocaleKey>().array() }))
        .query(async ({input}) => {
            const outs: string[] = [];
            const i18n = await getI18n(input.locale);
            input.keys.forEach(key => {
                outs.push(getI18nTranslation(i18n, key));
            });
            return {
                translations: outs,
            }
        })
});
