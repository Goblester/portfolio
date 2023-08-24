import social from './../../assets/photo/portfolio-1.jpg';
import todo from './../../assets/photo/portfolio-2.png';
import cards from './../../assets/photo/portfolio-3.png';
import test from './../../assets/photo/portfolio-4.png';
import counter from './../../assets/photo/portfolio-5.jpg';
import wedding from './../../assets/photo/wedding.jpg';

const initialState: Array<ProjectType> = [
    {
        title: 'My wedding website',
        backgroundImage: wedding,
        description: 'created with svelte js',
        demoLink: 'https://daniilolgawedding.online',
        codeLink: 'https://github.com/Goblester/wedding'
    },
    {
        title: 'Social Website',
        backgroundImage: social,
        description: 'class components, HOCs',
        demoLink: 'https://Goblester.github.io/social-website',
        codeLink: 'https://github.com/Goblester/social-website'
    },
    {
        title: 'Todo-List',
        backgroundImage: todo,
        description: 'React hooks, Redux-toolKit',
        demoLink: 'https://Goblester.github.io/todo-list',
        codeLink: 'https://github.com/Goblester/todo-list'
    },
    {
        title: 'Cards-app',
        backgroundImage: cards,
        description: 'React, Redux, TypeScript',
        demoLink: 'https://Goblester.github.io/cards-app',
        codeLink: 'https://github.com/Goblester/todo-list'
    },
    {
        title: 'Test components',
        backgroundImage: test,
        description: 'simple tasks',
        demoLink: 'https://Goblester.github.io/test-components',
        codeLink: 'https://github.com/Goblester/tests-components'
    },
    {
        title: 'Counter',
        backgroundImage: counter,
        description: 'Local storage training',
        demoLink: 'https://Goblester.github.io/counter',
        codeLink: 'https://github.com/Goblester/counter'
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
}

type SkillsStateType = Array<ProjectType>

