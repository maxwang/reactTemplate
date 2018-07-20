import { combineReducers } from 'redux';
import { counter } from './Count'

const rootReducer = combineReducers({
    counter
});

export default rootReducer;