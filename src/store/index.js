import { createStore, compose, applyMiddleware } from 'redux';
import Reducers from '../reducers/index';

const store = createStore(Reducers);


export default store;