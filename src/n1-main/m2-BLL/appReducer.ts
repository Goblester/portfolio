import {contactAPI, MessageDataType} from '../../api/contactAPI';
import {ThunkAction} from 'redux-thunk';
import {AppStoreType} from './Store';

const initialState: InitialStateType = {
    scrollBelow: false,
    status: 'idle'
}


export const appReducer = (state = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case 'portfolio/app/CHANGE-SCROLL-BELOW':
        case 'portfolio/app/CHANGE-APP-STATUS':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state

    }
};

//actions

export const changeScrollBelow = (scrollBelow: boolean) => ({
    type: 'portfolio/app/CHANGE-SCROLL-BELOW',
    payload: {
        scrollBelow
    }
} as const)

export const changeAppStatus = (status: StatusType) => ({
    type: 'portfolio/app/CHANGE-APP-STATUS',
    payload: {
        status
    }
} as const)


//thunk creators

export const sendMessage = (data: MessageDataType): ThunkAction<void, AppStoreType, undefined, AppActionsType> => {
    return async (dispatch) => {
        dispatch(changeAppStatus('loading'))
        try {
            const response = await contactAPI.sendMessage(data);
            dispatch(changeAppStatus('success'));
        } catch (e) {
            dispatch(changeAppStatus('fail'))
        }
    }
}


//types

type AppActionsType = ReturnType<typeof changeScrollBelow> | ReturnType<typeof changeAppStatus>

type InitialStateType = {
    scrollBelow: boolean
    status: StatusType
}

export type StatusType = 'loading' | 'fail' | 'idle' | 'success'