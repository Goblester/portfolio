const initialState: InitialStateType = {
    scrollBelow: false
}


export const appReducer = (state = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case 'portfolio/app/CHANGE-SCROLL-BELOW':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state

    }
};

//actions

export const changeScrollBelow = (scrollBelow: boolean) =>({
    type: 'portfolio/app/CHANGE-SCROLL-BELOW',
    payload: {
        scrollBelow
    }
} as const )

//types

type AppActionsType = ReturnType<typeof changeScrollBelow>

export type ProjectType = {
    description: string
    title: string
    backgroundImage: string
}

type SkillsStateType = Array<ProjectType>

type InitialStateType = {
    scrollBelow: boolean
}

