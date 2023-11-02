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
            <body className={`
                font-sans
                ${anonpro.variable}
                bg-gray
                dark:bg-gray-900
                text-gray-950
                dark:text-gray-50
                dark:text-opacity-80
                relative
                h-screen`}
            >
                <div className="
                    bg-[#fbe2e3]
                    absolute
                    right-[11rem]
                    top-[-6rem]
                    -z-10
                    w-[61.25rem]
                    h-[41.25rem]
                    rounded-full
                    blur-[10rem]
                    sm:w-[68.75rem]
                    dark:bg-[#946263]"
                />
                <div className="
                        bg-[#00ffaaff]
                        dark:bg-[#00ffaabb]
                        absolute
                        left-[-35rem]
                        top-[-1rem]
                        -z-10
                        w-[61.25rem]
                        h-[41.25rem]
                        rounded-full
                        blur-[10rem]
                        sm:w-[68.75rem]
                        md:left-[-33rem]
                        lg:left-[-28rem]
                        xl:left-[-15rem]
                        2xl:left-[-5rem]"
                />
                <ThemeContextProvider>
                    <SectionContextProvider>
                        <Navbar />
                        <TRPCReactProvider headers={headers()}>{children}</TRPCReactProvider>
                        <Toaster />
                        <Footer />
                        <ThemeSwitch />
                    </SectionContextProvider>
                </ThemeContextProvider>
            </body>
        </html>
    );
}
