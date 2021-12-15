import * as ActionTypes from './ActionTypes';
import suggestions from '../../shared/Suggestions.json';
export const suggestionsLoading = (searchTerm) => {
    return {
        type: ActionTypes.SUGGESTIONS_LOADING,
        payload: searchTerm
    }
}
  
export const addSuggestions = (suggestions) => {
    return {
        type: ActionTypes.ADD_SUGGESTIONS,
        payload: suggestions
    }
}
  
export const SuggestionsError = (message) => {
    return {
        type: ActionTypes.SUGGESTIONS_FAILED,
        payload: message
    }
}


export const fetchSuggestions = (searchTerm) => (dispatch) => {
    console.log(suggestions);
    dispatch(suggestionsLoading(searchTerm));

    searchTerm = searchTerm.trim().toLowerCase();
    const inputLength = searchTerm.length;

    if(inputLength == 0) {
        dispatch(SuggestionsError("Enter Something to Search"));
    }

    var suggestion = suggestions.filter(suggestion => {
        if(suggestion.toLowerCase().slice(0, inputLength) === searchTerm)
        return suggestion
    });

    if(suggestion.length>5)
    suggestion=suggestion.slice(0,5);

    dispatch(addSuggestions(suggestion));
}
