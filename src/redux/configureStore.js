import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Suggestions } from './suggestions/Suggestions';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            suggestions: Suggestions
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}