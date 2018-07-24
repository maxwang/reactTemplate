import * as types from '../constants/types';
const initialState = {
    count: 5
};

export function counter(state = initialState, action) {
    switch(action.type) {
        case types.count.INCREMENT:
            return Object.assign({}, state, {count: state.count + 1});
        default:
            return state;
    }
}