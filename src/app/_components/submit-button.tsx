'use client'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import React from 'react'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'

export const SubmitButton = () => {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            className={clsx(`
                    flex
                    justify-center
                    items-center
                    gap-2
                    h-[3rem]
                    w-[8rem]
                    bg-gray-900
                    text-white
                    rounded-lg
                    outline-none
                    place-self-center
                    transition-all
                    focus:scale-105
                    active:scale-100`,
                    !pending && `group hover:scale-105 hover:bg-gray-950`)
            }
            disabled={pending}
        >{pending ? (
            <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white' />
        ) : (
            <>
            Submit
            <FontAwesomeIcon
                icon={faPaperPlane}
                className="
                text-xs
                opacity-70
                transition-all
                group-hover:scale-105
                group-hover:translate-x-1
                group-hover:-translate-y-1"
            />
            </>
        )}
        </button>
    )
}
