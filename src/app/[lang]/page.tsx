import React from 'react';

import Home from './_components/sections/home';
import Devider from './_components/devider';
import About from './_components/sections/about';
import Projects from './_components/sections/projects';
import Skills from './_components/sections/skils';
import Experience from './_components/sections/experience';
import Contact from './_components/sections/contact';
import ParticleContainer from './_components/ParticleContainer';
import LanguageMenu from './_components/langauge-menu';

import { type Locale } from '~/server/i18n.config';

export default function Page({ params }: { params: { lang: Locale } }) {
    return (
        <main className="flex flex-col items-center px-4">
            <LanguageMenu lang={params.lang} />
            <ParticleContainer />
            <Home lang={params.lang} />
            <Devider />
            <About lang={params.lang} />
            <Projects lang={params.lang} />
            <Skills lang={params.lang} />
            <Experience lang={params.lang} />
            <Contact lang={params.lang} />
        </main>
    );
}
