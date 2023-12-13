'use client';

import { faLightbulb as regularBulb } from '@fortawesome/free-regular-svg-icons';
import { faLightbulb as solidBulb } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { useThemeContext } from '../_context/theme-context';

export default function ThemeSwitch() {
    const { theme, themeSwitch } = useThemeContext();

    return (
        <button
            className="
                text-md
                fixed
                bottom-5
                right-5
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-md
                border-2
                border-black
                shadow-2xl
                outline-none
                backdrop-blur-[0.5rem]
                transition-all
                dark:border-gray-50
                dark:border-opacity-40
                dark:text-gray-50
                dark:text-opacity-40
                "
            onClick={themeSwitch}
        >
            {theme === 'dark' ? (
                <>
                    <FontAwesomeIcon icon={regularBulb} />
                </>
            ) : (
                <>
                    <FontAwesomeIcon icon={solidBulb} />
                </>
            )}
        </button>
    );
}
