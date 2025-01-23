import { createStore, combineReducers } from 'redux';
import { gameReducer } from './reducers/game-reducer';

const reducer = combineReducers({ game: gameReducer });

export const store = createStore(reducer);
