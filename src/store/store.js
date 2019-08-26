import {createStore, combineReducers, applyMiddleware} from 'redux';
import {bookReducer, booksInitialState} from './reducers/bookReducer';
import logger from 'redux-logger'
import thunk from 'redux-thunk';

const reducers = {
  booksState: bookReducer
};

const initialState = {
  booksState: booksInitialState
};

const rootReducer = combineReducers(reducers);

export const store = createStore(rootReducer, initialState, applyMiddleware(thunk, logger));
