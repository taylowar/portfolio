import { write } from 'fs'
import boatConfiguratorPng from '../../../public/alfastreet_boat_configurator.png'
import rackConfiguratorPng from '../../../public/kingsbox_rack_configurator.png'
import pdfbPng from '../../../public/PDFb-logo.png'
import pppPng from '../../../public/PpP-logo.png'
import tspGaPng from '../../../public/TSP-GA.png'
import zenchatPng from '../../../public/zenchat-logo.png'
import { faGraduationCap, faMedal, faRocket } from '@fortawesome/free-solid-svg-icons';

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
        title: 'Boat Configurator',
        description: 'I worked on this project for 1 year and a half. Users can create their own yacht configuration and send it as an inquiry.',
        tags: ['React', 'NodeJs', 'Docker', 'fullstack'],
        imageUrl: boatConfiguratorPng,
    },
    {
        title: 'Rack Configurator',
        description: 'I worked on this project for 2 years. Users can create and purchase their rack configurations.',
        tags: ['React', 'NextJs', 'Node', 'Docker', 'fullstack'],
        imageUrl: rackConfiguratorPng,
    },
    {
        title: 'PDFB',
        description: 'A library that can be used for generating pdf files.',
        tags: ['NodeJs', 'NPM Library'],
        imageUrl: pdfbPng,
    },
    {
        title: 'Pdf PreProcessor',
        description: 'An stb style header only libraray that can be used as a tool for extracting and parsing content from pdf files into different data formats.',
        tags: ['C', 'CLI'],
        imageUrl: pppPng,
    },
    {
        title: 'ZenChat.app',
        description: 'A simple web based chat application that allows people to write and send messages.',
        tags: ['Vue 2.x', 'Docker', 'fullstack', 'MongoDB', 'Node', 'FeathersJS', 'JavaScript'],
        imageUrl: zenchatPng
    },
    {
        title: 'Genetic Alghoritems',
        description: 'As a school project I implemented sequential, paralel and distributed solutions for the traveling salesman problem using generic alghoritems.',
        tags: ['java'],
        imageUrl: tspGaPng,
    }
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
    'Python'
] as const;

export const EXPERIENCE_DATA = [
    {
        title: 'Minecraft modding',
        location: 'Slovenia',
        description: 'I started to learn Java - my first programing language. I was learning from youtube and other free internet resoures.',
        icon: faRocket,
        date: '2014'
    },
    {
        title: 'Gone viral',
        location: 'The internet',
        description: 'I was claborating with some friends I met online on a minecraft mod called "Roots". After about a year of development the project went viral and has reached over 5 milion downloads.',
        icon: faMedal,
        date: '2017'
    },
    {
        title: 'Graduated High School',
        location: 'Slovenia',
        description: 'I graduated from my tehnical school lol',
        icon: faGraduationCap, 
        date: '2019'
    }
] as const;
