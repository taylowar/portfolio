'use client';
import React from 'react';
import Image from 'next/image';

import LangSwitch from './language-switch';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu';
import { api } from '~/trpc/react';
import { Button } from '~/components/ui/button';

export default function LangaugeMenu() {
    const a = api.translator.i18n.useQuery();

    if (!a.isLoading) {
        console.log(a.data);
    }

    return (
        !a.isLoading && (
            <DropdownMenu>
                <DropdownMenuTrigger className="fixed bottom-4 right-4">
                    <Button variant="ghost">
                        <Image
                            width={28}
                            height={21}
                            src={`/flags/${a.data?.lang}.svg`}
                            alt={`${a.data?.lang}-svg`}
                        />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem key="en">
                        <LangSwitch lang="en" />
                    </DropdownMenuItem>
                    <DropdownMenuItem key="si">
                        <LangSwitch lang="si" />
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        )
    );
}
