'use client';

import { LINKS } from '../_lib/data';

import React, { useState, createContext, useContext } from 'react';

type SectionHash = (typeof LINKS)[number]['hash'];

type Props = {
    children: React.ReactNode;
};

export type SectionContextType = {
    active: SectionHash;
    setActive: React.Dispatch<React.SetStateAction<SectionHash>>;
    lastClickTime: number;
    setLastClickTime: React.Dispatch<React.SetStateAction<number>>;
};

const SectionContext = createContext<SectionContextType | null>(null);

export function useSectionContext() {
    const ctx = useContext(SectionContext);

    if (ctx === null) {
        throw new Error(
            'Section context lost! You shoudl access useSectionContext whitin SectionContextProvide!',
        );
    }

    return ctx;
}

export default function SectionContextProvider({ children }: Props) {
    const [active, setActive] = useState<SectionHash>(LINKS[0].hash);
    const [lastClickTime, setLastClickTime] = useState(0);

    return (
        <SectionContext.Provider
            value={{
                active,
                setActive,
                lastClickTime,
                setLastClickTime,
            }}
        >
            {children}
        </SectionContext.Provider>
    );
}
