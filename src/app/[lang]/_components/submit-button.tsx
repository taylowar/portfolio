'use client';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React from 'react';

export const SubmitButton = ({textContent}: {textContent: string | undefined}) => {
    const { pending } = { pending: false };

    return (
        <button
            type="submit"
            className={clsx(
                `
                    flex
                    h-[3rem]
                    w-[8rem]
                    items-center
                    justify-center
                    gap-2
                    place-self-center
                    rounded-lg
                    bg-gray-900
                    text-white
                    outline-none
                    transition-all
                    focus:scale-105
                    active:scale-100
                    dark:bg-white/10`,
                !pending && `group hover:scale-105 hover:bg-gray-950`,
            )}
            disabled={pending}
        >
            {pending ? (
                <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white" />
            ) : (
                <>
                    <span className="uppercase">{textContent}</span>
                    <FontAwesomeIcon
                        icon={faPaperPlane}
                        className="
                text-xs
                opacity-70
                transition-all
                group-hover:-translate-y-1
                group-hover:translate-x-1
                group-hover:scale-105"
                    />
                </>
            )}
        </button>
    );
};
