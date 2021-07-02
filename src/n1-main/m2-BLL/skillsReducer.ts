import atom from './../../assets/photo/atom.png';

const initialState : Array<SkillType> = [
    {
        title: 'React',
        logo: atom,
        description: 'lorem, ipsum'
    },
    {
        title: 'Redux',
        logo: '',
        description: 'lorem, ipsum'
    },
    {
        title: 'TypeScript',
        logo: '',
        description: 'lorem, ipsum'
    },
    {
        title: 'Thunk',
        logo: '',
        description: 'lorem, ipsum'
    },
    {
        title: 'Unit testing',
        logo: '',
        description: 'lorem, ipsum'
    },
    {
        title: 'HTML&CSS',
        logo: '',
        description: 'lorem, ipsum'
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

