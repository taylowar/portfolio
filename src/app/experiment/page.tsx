'use client'
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react';
import React from 'react';

export default function Experiment() {
    
    return (
        <Dropdown>
            <DropdownTrigger>
                <Button 
                    variant="bordered" 
                >
        Open Menu
                </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="new">New file</DropdownItem>
                <DropdownItem key="copy">Copy link</DropdownItem>
                <DropdownItem key="edit">Edit file</DropdownItem>
                <DropdownItem key="delete" className="text-danger" color="danger">
        Delete file
                </DropdownItem>
            </DropdownMenu>
        </Dropdown> 
    );     
}
