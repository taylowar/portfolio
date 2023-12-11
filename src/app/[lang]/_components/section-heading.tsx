import React from 'react'


type Props = {
    children: React.ReactNode,
};

export default function SectionHeading({ children }: Props) {
    return (
        <h2
            className="text-3xl mb-8 font-medium capitalize"
        >{children}</h2>
    )
}
