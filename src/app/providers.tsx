'use client'
import { NextUIProvider } from '@nextui-org/react'
import React,{ type ReactNode }  from 'react'


export default function Providers({children}: {children: ReactNode})
{
    return(
        <NextUIProvider>
            {children}
        </NextUIProvider>
    )
}
