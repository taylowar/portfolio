
'use client'

import React, { useState, createContext, useContext} from 'react'
import { type I18n } from '~/server/api/routers/translator';

type Props = {
    i18n: I18n,
    children: React.ReactNode;
};

export type TranslationContextType = {
    i18n: I18n,
    setI18n: React.Dispatch<React.SetStateAction<I18n>>,
    getTranslation: (key: string) => string,
}

const TranslationContext = createContext<TranslationContextType | null>(null);

export function useTranslationContext() {
    const ctx = useContext(TranslationContext);
    
    if (ctx === null) {
        throw new Error('Translation context lost! You shoudl access useTranslationContext whitin TranslationContextProvide!')
    }

    return ctx; 
}


export default function TranslationContextProvider({i18n, children}: Props) {
    const [ i17n, setI18n ] = useState<I18n>(i18n);

    let getTranslation = (key: string) => {
        const out = i18n[key];
        if (out === undefined) {
            console.error(`i18n for '${key}' is undefined`);
            return '';
        }
        return out;
    }
    
    return (
        <TranslationContext.Provider value={{
            i18n: i17n,
            setI18n,
            getTranslation,
        }}>
            {children}
        </TranslationContext.Provider>
    ) 
}

