import React from 'react';
import Home from '../_components/sections/home';
import Devider from '../_components/devider';
import About from '../_components/sections/about';
import Projects from '../_components/sections/projects';
import Skills from '../_components/sections/skils';
import Experience from '../_components/sections/experience';
import Contact from '../_components/sections/contact';
import ParticleContainer from '../_components/ParticleContainer';
import TranslationContextProvider from '../_context/translation-context';
import { api } from '~/trpc/server';

export default async function Page() {
    const i18n = await api.translator.i18n.query({lang: 'si'});

    return (
        <TranslationContextProvider i18n={i18n}>
            <main className="flex flex-col items-center px-4">
                <ParticleContainer />
                <Home />
                <Devider />
                <About />
                <Projects />
                <Skills />
                <Experience />
                <Contact />
            </main>
        </TranslationContextProvider>
    );
}

