import Home from './_components/sections/home';
import Devider from './_components/devider';
import About from './_components/sections/about';
import Projects from './_components/sections/projects';
import Skills from './_components/sections/skils';
import Experience from './_components/sections/experience';
import Contact from './_components/sections/contact';
import ParticleContainer from './_components/ParticleContainer';

import React from 'react';

export default function Page() { 

    return (
        <main className="flex flex-col items-center px-4">
            <ParticleContainer />
            <Home lang={'en'} />
            <Devider />
            <About lang={'en'} />
            <Projects lang={'en'} />
            <Skills  />
            <Experience lang={'en'} />
            <Contact lang={'en'} />
        </main>
    );
}

