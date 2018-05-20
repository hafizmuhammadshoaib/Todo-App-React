import {combineReducers,createStore} from 'redux';
import TodoReducer from './TodoReducer';

const rootReducer = combineReducers({
    TodoReducer:TodoReducer
})
export let store = createStore(rootReducer);