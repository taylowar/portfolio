'use client';
import React from 'react';

import LangSwitch from './language-switch';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu';

export default function LangaugeMenu() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="fixed right-4 top-0">
                <button className="z-30">{'en'}</button>
            </DropdownMenuTrigger>
            <DropdownMenuContent aria-label="Static Actions">
                <DropdownMenuItem key="en">
                    <LangSwitch lang="en" />
                </DropdownMenuItem>
                <DropdownMenuItem key="si">
                    <LangSwitch lang="si" />
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
