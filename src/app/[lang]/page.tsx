import Home from './_components/sections/home';
import Devider from './_components/devider';
import About from './_components/sections/about';
import Projects from './_components/sections/projects';
import Skills from './_components/sections/skils';
import Experience from './_components/sections/experience';
import Contact from './_components/sections/contact';
import ParticleContainer from './_components/ParticleContainer';
import { type Locale } from '~/server/i18n.config';

import React from 'react';


export default function Page({lang}:{lang:Locale}) {
    return (
        <main className="flex flex-col items-center px-4">
            <Home lang={lang} />
            <Devider />
            <About lang={lang} />
            <Projects lang={lang} />
            <Skills  />
            <Experience lang={lang} />
            <Contact lang={lang} />
            <ParticleContainer />
        </main>
    );
}

