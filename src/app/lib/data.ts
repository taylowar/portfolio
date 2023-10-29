import { warn } from 'console';
import boatConfiguratorPng from '../../../public/alfastreet_boat_configurator.png'
import rackConfiguratorPng from '../../../public/kingsbox_rack_configurator.png'

export const LINKS = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skils",
        hash: "#skils",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const PROJECT_DATA = [
    {
        title: 'Boat Configurator',
        description: 'I worked on this project for 1 year and a half. Users can create their own yacht configuration and send it as an inquiry.',
        tags: ["yacht", "react", "NodeJs", "Docker", "alfstreet", "fullstack"],
        imageUrl: boatConfiguratorPng,
    },
    {
        title: 'Rack Configurator',
        description: 'I worked on this project for 2 years. Users can create and purchase their rack configurations.',
            tags: ["react", "NextJs", "Node", "Docker", "rack", "kingsbox", "fullstack"],
        imageUrl: rackConfiguratorPng,
    },
] as const;
