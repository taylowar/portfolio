import React from 'react';
import boatConfiguratorPng from '../../../public/alfastreet_boat_configurator.png'
import rackConfiguratorPng from '../../../public/kingsbox_rack_configurator.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBeer, faGraduationCap, faMedal, faRocket } from '@fortawesome/free-solid-svg-icons';

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
        tags: ['yacht', 'react', 'NodeJs', 'Docker', 'alfstreet', 'fullstack'],
        imageUrl: boatConfiguratorPng,
    },
    {
        title: 'Rack Configurator',
        description: 'I worked on this project for 2 years. Users can create and purchase their rack configurations.',
            tags: ['react', 'NextJs', 'Node', 'Docker', 'rack', 'kingsbox', 'fullstack'],
        imageUrl: rackConfiguratorPng,
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
    'Python'
] as const;

export const EXPERIENCE_DATA = [
    {
        title: "Minecraft modding",
        location: "Slovenia",
        description: "I started to learn Java - my first programing language. I was learning from youtube and other free internet resoures.",
        icon: faRocket,
        date: '2014'
    },
    {
        title: "Gone viral",
        location: "The internet",
        description: `I was claborating with some friends I met online on a minecraft mod called "Roots". After about a year of development the project went viral and has reached over 5 milion downloads.`,
        icon: faMedal,
        date: '2017'
    },
    {
        title: "Graduated High School",
        location: "Slovenia",
        description: "I graduated from my tehnical school lol",
        icon: faGraduationCap, 
        date: '2019'
    }
] as const;
