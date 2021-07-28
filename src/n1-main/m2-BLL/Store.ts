import {combineReducers, createStore} from 'redux';
import {skillsReducer} from './skillsReducer';
import {projectsReducer} from './projectsReducer';
import {appReducer} from './appReducer';


const reducers = combineReducers({
    skills: skillsReducer,
    projects: projectsReducer,
    app: appReducer
})


export const store = createStore(reducers)

export type AppStoreType = ReturnType<typeof reducers>