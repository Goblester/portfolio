import social from './../../assets/photo/portfolio-1.jpg';
import todo from './../../assets/photo/portfolio-2.png';
import cards from './../../assets/photo/portfolio-3.png';
import test from './../../assets/photo/portfolio-4.png';
import counter from './../../assets/photo/portfolio-5.jpg';
import wedding from './../../assets/photo/wedding.jpg';
import dota2 from './../../assets/photo/dota2.jpg';

const initialState: Array<ProjectType> = [
    {
        title: 'My wedding website',
        backgroundImage: wedding,
        description: 'created with svelte js',
        demoLink: 'https://daniilolgawedding.online',
        codeLink: 'https://github.com/Goblester/dota-statistics',
        backgroundColor: '#a1a1a1',
    },
    {
        title: 'Dota 2 statistics',
        backgroundImage: dota2,
        description: 'Next JS and React 18 server/client components api. Eslint and Prettier test',
        demoLink: 'https://dapper-medovik-0946d5.netlify.app/',
        codeLink: 'https://github.com/Goblester/wedding',
        backgroundColor: '#000000',
    },
    {
        title: 'Social Website',
        backgroundImage: social,
        description: 'class components, HOCs',
        demoLink: 'https://Goblester.github.io/social-website',
        codeLink: 'https://github.com/Goblester/social-website',
        backgroundColor: '#85817a',
    },
    {
        title: 'Todo-List',
        backgroundImage: todo,
        description: 'React hooks, Redux-toolKit',
        demoLink: 'https://Goblester.github.io/todo-list',
        codeLink: 'https://github.com/Goblester/todo-list',
        backgroundColor: '#2d2d2d',
    },
    {
        title: 'Cards-app',
        backgroundImage: cards,
        description: 'React, Redux, TypeScript',
        demoLink: 'https://Goblester.github.io/cards-app',
        codeLink: 'https://github.com/Goblester/todo-list',
        backgroundColor: '#c4bda4',
    },
    {
        title: 'Test components',
        backgroundImage: test,
        description: 'simple tasks',
        demoLink: 'https://Goblester.github.io/test-components',
        codeLink: 'https://github.com/Goblester/tests-components',
        backgroundColor: '#3a3a3a',
    },
    {
        title: 'Counter',
        backgroundImage: counter,
        description: 'Local storage training',
        demoLink: 'https://Goblester.github.io/counter',
        codeLink: 'https://github.com/Goblester/counter',
        backgroundColor: '#6e6e6e',
    },
]


export const projectsReducer = (state = initialState, action: any): SkillsStateType => {
    switch (action.type) {
        default:
            return state

    }
};

//types

export type ProjectType = {
    description: string
    title: string
    backgroundImage: string
    demoLink: string
    codeLink: string
    backgroundColor: string
}

type SkillsStateType = Array<ProjectType>

