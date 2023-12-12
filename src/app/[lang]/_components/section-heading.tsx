import React from 'react';

type Props = {
    children: React.ReactNode;
};

export default function SectionHeading({ children }: Props) {
    return (
        <h2 className="mb-8 flex flex-col items-center text-3xl font-medium capitalize">
            {children}
        </h2>
    );
}
