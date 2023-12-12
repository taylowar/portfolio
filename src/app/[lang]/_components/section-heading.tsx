import React from 'react';

type Props = {
    children: React.ReactNode;
};

export default function SectionHeading({ children }: Props) {
    return <h2 className="mb-8 text-3xl flex flex-col items-center font-medium capitalize">{children}</h2>;

}
