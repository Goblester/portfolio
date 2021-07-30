import {applyMiddleware, combineReducers, createStore} from 'redux';
import {skillsReducer} from './skillsReducer';
import {projectsReducer} from './projectsReducer';
import {appReducer} from './appReducer';
import thunk from 'redux-thunk';


const reducers = combineReducers({
    skills: skillsReducer,
    projects: projectsReducer,
    app: appReducer
})


export const store = createStore(reducers, applyMiddleware(thunk))

export type AppStoreType = ReturnType<typeof reducers>