import '~/styles/globals.css';
import 'react-vertical-timeline-component/style.min.css';

import SectionContextProvider from './_context/section-context';
import ThemeContextProvider from './_context/theme-context';
import Navbar from './_components/navbar';
import Footer from './_components/footer';

import { TRPCReactProvider } from '~/trpc/react';
import { DefaultLocale, type Locale } from '~/server/i18n.config';
import { api } from '~/trpc/server';

import { Toaster } from 'react-hot-toast';
import { headers } from 'next/headers';
import { Anonymous_Pro } from 'next/font/google';

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
export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { lang: Locale };
}) {
    await api.translator.setI18n.query({ locale: params.lang });

    return (
        <html lang={params.lang ?? DefaultLocale} className="!scroll-smooth">
            <body
                className={`
                ${anonpro.className}
                relative
                bg-[#020202]
                `}
            >
                <ThemeContextProvider>
                    <SectionContextProvider>
                        <Navbar />
                        <TRPCReactProvider headers={headers()}>
                            {children}
                        </TRPCReactProvider>
                        <Toaster />
                        <Footer />
                        {/**<ThemeSwitch />*/}
                    </SectionContextProvider>
                </ThemeContextProvider>
            </body>
        </html>
    );
}
