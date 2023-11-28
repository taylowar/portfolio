import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '../trpc';
import en from '../../_lib/en.json';
import si from '../../_lib/si.json';

const i18n = {
    en,
    si,
} as Record<string, Record<string, string>>; 

export type I18n = typeof i18n[keyof typeof i18n];

function getI18n(lang: string) {
    const olng = i18n[lang];
    if (olng === undefined) {
        throw new Error(`i18n for '${lang}' does not exist`);
    }
    return olng;
}

function getI18nTranslation(i19n: typeof i18n[keyof typeof i18n], key: string) {
    const tlng = i19n[key];
    if (tlng === undefined) {
        throw new Error(`i18n translation for key '${key}' does not exist`);
    }
    return tlng;
}

export const translatorRouter = createTRPCRouter({
    i18n: publicProcedure
        .input(z.object({lang: z.string()}))
        .query(({input}) => {
            return getI18n(input.lang);
        }),
    get: publicProcedure
        .input(z.object({ lang: z.string(), key: z.string()}))
        .query(({ input }) => {
            const i18n = getI18n(input.lang);
            const tlng = getI18nTranslation(i18n, input.key);
            return {
                translation: tlng,
            };
        }),
    getAll: publicProcedure
        .input(z.object({ lang: z.string(), keys: z.string().array() }))
        .query(({input}) => {
            const outs: string[] = [];
            const i18n = getI18n(input.lang);
            input.keys.forEach(key => {
                outs.push(getI18nTranslation(i18n, key));
            });
            return {
                translations: outs,
            }
        })
});
