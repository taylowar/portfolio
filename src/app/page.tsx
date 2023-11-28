import React from 'react';

import Home from './_components/sections/home';
import Devider from './_components/devider';
import About from './_components/sections/about';
import Projects from './_components/sections/projects';
import Skills from './_components/sections/skils';
import Experience from './_components/sections/experience';
import Contact from './_components/sections/contact';
import ParticleContainer from './_components/ParticleContainer';
import { api } from '~/trpc/server';

export default async function Page() {
    const lang = 'en';

    const i18n = await api.translator.i18n.query({lang});

    return (
        <main className="flex flex-col items-center px-4">
            <ParticleContainer />
            <Home i18n={i18n} />
            <Devider />
            <About i18n={i18n} />
            <Projects i18n={i18n} />
            <Skills />
            <Experience i18n={i18n} />
            <Contact i18n={i18n} />
        </main>
    );
}

