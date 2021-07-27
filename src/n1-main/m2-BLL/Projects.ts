import socialWebSite from './../../assets/photo/portfolio-7.jpg';

const initialState : Array<ProjectType> = [
    {
        title: 'Social Website',
        backgroundImage: socialWebSite,
        description: 'Web Development'
    },
    {
        title: 'Social Website',
        backgroundImage: socialWebSite,
        description: 'Web Development'
    },
    {
        title: 'Social Website',
        backgroundImage: socialWebSite,
        description: 'Web Development'
    },
    {
        title: 'Social Website',
        backgroundImage: socialWebSite,
        description: 'Web Development'
    },
    {
        title: 'Social Website',
        backgroundImage: socialWebSite,
        description: 'Web Development'
    },
    {
        title: 'Social Website',
        backgroundImage: socialWebSite,
        description: 'Web Development'
    }
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
}

type SkillsStateType = Array<ProjectType>

