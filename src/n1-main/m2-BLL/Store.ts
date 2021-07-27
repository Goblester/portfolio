import {combineReducers, createStore} from 'redux';
import {skillsReducer} from './skillsReducer';
import {projectsReducer} from './Projects';


const reducers = combineReducers({
    skills: skillsReducer,
    projects: projectsReducer
})


export const store = createStore(reducers)

export type AppStoreType = ReturnType<typeof reducers>