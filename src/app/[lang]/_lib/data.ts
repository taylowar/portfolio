import {
    faGraduationCap,
    faMedal,
    faRocket,
} from '@fortawesome/free-solid-svg-icons';

import boatConfiguratorPng from '../../../../public/alfastreet_boat_configurator.png';
import rackConfiguratorPng from '../../../../public/kingsbox_rack_configurator.png';
import pdfbPng from '../../../../public/PDFb-logo.png';
import pppPng from '../../../../public/PpP-logo.png';
import tspGaPng from '../../../../public/TSP-GA.png';
import zenchatPng from '../../../../public/zenchat-logo.png';

export const LINKS = [
    {
        name: 'Home',
        hash: '#home',
    },
    {
        name: 'About',
        hash: '#about',
    },
    {
        name: 'Projects',
        hash: '#projects',
    },
    {
        name: 'Skils',
        hash: '#skils',
    },
    {
        name: 'Experience',
        hash: '#experience',
    },
    {
        name: 'Contact',
        hash: '#contact',
    },
] as const;

export const PROJECT_DATA = [
    {
        id: 'boat',
        gh: '',
        tags: ['react', 'nodeJs', 'docker', 'fullstack'],
        imageUrl: boatConfiguratorPng,
    },
    {
        id: 'rack',
        gh: '',
        tags: ['react', 'nextJs', 'node', 'docker', 'fullstack'],
        imageUrl: rackConfiguratorPng,
    },
    {
        id: 'pdfb',
        gh: 'https://github.com/pwnker/pdfb',
        tags: ['nodeJs', 'npm library'],
        imageUrl: pdfbPng,
    },
    {
        id: 'ppp',
        gh: 'https://github.com/pwnker/pdf-pre-processor',
        tags: ['C'],
        imageUrl: pppPng,
    },
    {
        id: 'zenc',
        gh: 'http://github.com/pwnker/zenchat.app',
        tags: [
            'vue 2.x',
            'docker',
            'fullstack',
            'mongoDB',
            'node',
            'feathersJS',
            'javaScript',
        ],
        imageUrl: zenchatPng,
    },
    {
        id: 'gena',
        gh: 'https://github.com/pwnker/GeneticAlgorithms',
        tags: ['java'],
        imageUrl: tspGaPng,
    },
] as const;

export const SKILL_DATA = [
    'Assembly',
    'HTML',
    'JavaScript',
    'TypeScript',
    'CSS',
    'Tailwind',
    'Next.js',
    'Node.js',
    'Express',
    'Git',
    'SQL',
    'Java',
    'C',
    'Docker',
    'Python',
] as const;

export const EXPERIENCE_DATA = [
    {
        id: 'minmod',
        icon: faRocket,
        date: '2014',
    },
    {
        id: 'govir',
        icon: faMedal,
        date: '2017',
    },
    {
        id: 'ghs',
        icon: faGraduationCap,
        date: '2019',
    },
] as const;
