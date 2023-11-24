import '~/styles/globals.css';
import 'react-vertical-timeline-component/style.min.css';

import { Anonymous_Pro } from 'next/font/google';
import { headers } from 'next/headers';

import { TRPCReactProvider } from '~/trpc/react';
import Navbar from './_components/navbar';
import SectionContextProvider from './_context/section-context';
import { Toaster } from 'react-hot-toast';
import Footer from './_components/footer';
import ThemeSwitch from './_components/theme-switch';
import ThemeContextProvider from './_context/theme-context';

const anonpro = Anonymous_Pro({
    weight: '400',
    subsets: ['latin'],
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
            <body className={`
                ${anonpro.className}
                bg-gray
                dark:bg-gray-900
                text-gray-950
                dark:text-gray-50
                dark:text-opacity-80
                relative
                h-screen`}
            >
                <ThemeContextProvider>
                    <SectionContextProvider>
                        <Navbar />
                        <TRPCReactProvider headers={headers()}>{children}</TRPCReactProvider>
                        <Toaster />
                        <Footer />
                        {/**<ThemeSwitch />*/}
                    </SectionContextProvider>
                </ThemeContextProvider>
            </body>
        </html>
    );
}
