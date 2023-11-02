'use client'

import { faLightbulb as regularBulb } from '@fortawesome/free-regular-svg-icons'
import { faLightbulb as solidBulb } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {  useThemeContext } from '../_context/theme-context'

export default function ThemeSwitch() {
    const {theme, themeSwitch } = useThemeContext();

    return (
        <button 
            className="
                fixed
                w-8
                text-md
                h-8
                backdrop-blur-[0.5rem]
                bottom-5
                right-5
                border-2
                border-black
                dark:border-gray-50
                dark:text-gray-50
                dark:text-opacity-40
                dark:border-opacity-40
                outline-none
                rounded-md
                shadow-2xl
                flex
                justify-center
                items-center
                transition-all
                "
            onClick={themeSwitch}
        >{theme === 'dark' ? (
                <><FontAwesomeIcon icon={regularBulb}/></>
            ) : (
                <><FontAwesomeIcon icon={solidBulb}/></>
            )
            }
        </button>
    )
}
