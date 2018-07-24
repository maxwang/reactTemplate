import * as types from '../constants/types';

export function incrementCounter() {
    return {
        type: types.count.INCREMENT
    };
};