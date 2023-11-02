import '~/styles/globals.css';
import 'react-vertical-timeline-component/style.min.css';

import { Anonymous_Pro } from 'next/font/google';
import { headers } from 'next/headers';

import { TRPCReactProvider } from '~/trpc/react';
import Navbar from './_components/navbar';
import SectionContextProvider from './_context/section-context';
import { Toaster } from 'react-hot-toast';
import Footer from './_components/footer';

const anonpro = Anonymous_Pro({
    weight: '700',
    subsets: ['latin'],
    variable: '--font-anon'
});

export const metadata = {
title: 'Tilen Okretič',
       description: 'Website dedicated to showcase Tilen Okretič',
       icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

// TODO: move the section context provider functionality inside the TRPC !
export default function RootLayout({
        children,
        }: {
children: React.ReactNode;
}) {
    return (
            <html lang="en" className="!scroll-smooth">
                <body className={`font-sans ${anonpro.variable} bg-gray text-gray-950 relative h-screen`}>
                    <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
                    <div className="bg-[#00ffaaff] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[60rem] rounded-full blur-[10rem] sm:w-[80rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
                    <SectionContextProvider>
                        <Navbar />
                        <TRPCReactProvider headers={headers()}>{children}</TRPCReactProvider>
                        <Toaster />
                        <Footer />
                    </SectionContextProvider>
                </body>
            </html>
    );
}
