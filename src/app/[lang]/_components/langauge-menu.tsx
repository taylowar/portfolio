
'use client'
import LangSwitch from './language-switch';

import { useTranslationContext } from '../_context/translation-context';

import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react';
import React from 'react';


export default function LangaugeMenu() {
    const {i18n} = useTranslationContext();
    
    return (
        <Dropdown>
            <DropdownTrigger className="fixed top-0 right-4">
                <Button 
                    className="z-30"
                    variant="bordered" 
                >
                    {i18n.lang}
                </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="en">
                    <LangSwitch lang="en"/> 
                </DropdownItem>
                <DropdownItem key="si">
                    <LangSwitch lang="si"/> 
                </DropdownItem>
            </DropdownMenu>
        </Dropdown> 
    );     
}
