import {combineReducers, createStore} from 'redux';
import {skillsReducer} from './skillsReducer';


const reducers = combineReducers({
    skills: skillsReducer
})


export const store = createStore(reducers)

export type AppStoreType = ReturnType<typeof reducers>