'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

export type Theme = 'light' | 'dark';

type Props = {
    children: React.ReactNode;
};

export type ThemeContext = {
    theme: Theme,
    setTheme: React.Dispatch<React.SetStateAction<Theme>>,
    updateTheme: (theme: Theme) => void; 
    themeSwitch: () => void;
};

const ThemeContext = createContext<ThemeContext | null>(null);

export function useThemeContext() {
    const ctx = useContext(ThemeContext);
    
    if (ctx === null) {
        throw new Error('Section context lost! You shoud access useThemeContext whitin ThemeContextProvider!')

    }

    return ctx; 
}

export default function ThemeContextProvider({children}: Props) {
    const [theme, setTheme] = useState<Theme>('dark');

    const updateTheme = (theme: Theme) => {
        setTheme(theme);
        window.localStorage.setItem('theme', theme);
        if (theme === 'dark') {
            document.documentElement.classList.add(theme);
        } else {
            document.documentElement.classList.remove('dark');
        }
    }

    const themeSwitch = () => {
        if (theme === 'light') {
            updateTheme('dark');
        } else {
            updateTheme('light');
        }
    };

    useEffect(() => {
        setTheme('dark');
        document.documentElement.classList.add('dark');
        /**
        ---------------------------------------------------------
                      Light mode support stopped
        ---------------------------------------------------------
        const stored_theme = window.localStorage.getItem('theme') as Theme | null; 
        if (stored_theme !== null) {
            setTheme(stored_theme);
            if (stored_theme === 'dark') {
                document.documentElement.classList.add(stored_theme);
            }
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
            document.documentElement.classList.add('dark');
        }
        */
    }, [])

    return (
        <ThemeContext.Provider value={{
            theme,
            setTheme,
            updateTheme,
            themeSwitch,
        }}
        >{children}</ThemeContext.Provider>
    );
}
