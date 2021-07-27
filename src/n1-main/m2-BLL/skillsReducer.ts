import atom from './../../assets/photo/atom.png';
import redux from './../../assets/photo/redux.png';
import typescript from './../../assets/photo/typescript.png';
import design from './../../assets/photo/design.png';
import testing from './../../assets/photo/testing.png';
import html from './../../assets/photo/html-coding.png';

const initialState : Array<SkillType> = [
    {
        title: 'React',
        logo: atom,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        title: 'Redux',
        logo: redux,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        title: 'TypeScript',
        logo: typescript,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        title: 'Material UI',
        logo: design,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {

        title: 'Unit testing',logo: testing,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        title: 'HTML&CSS',
        logo: html,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
]


export const skillsReducer = (state = initialState, action: any): SkillsStateType => {
    switch (action.type) {

        default:
            return state

    }
};

//types

export type SkillType = {
    title: string
    logo: string
    description: string
}

type SkillsStateType = Array<SkillType>

