import * as ActionTypes from './ActionTypes';

export const Suggestions = (state = {
        isLoading: false,
        errMess: null,
        searchTerm: null,
        suggestions: []
    }, action) => {
    switch(action.type) {
        case ActionTypes.SUGGESTIONS_LOADING:
            return {...state, isLoading: true, errMess: null, searchTerm:action.payload, suggestions: []};

        case ActionTypes.ADD_SUGGESTIONS:
            return {...state, isLoading: false, errMess: null, suggestions: action.payload};

        case ActionTypes.SUGGESTIONS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, suggestions: []};

        default:
            return state;
    }
}