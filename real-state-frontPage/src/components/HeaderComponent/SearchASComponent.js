import React from 'react';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import { fetchSuggestions } from '../../redux/suggestions/ActionCreator';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    suggestions: state.suggestions
  }
}

const mapDispatchToProps = (dispatch) => ({
fetchSuggestions: (searchTerm) => dispatch(fetchSuggestions(searchTerm))
});



class SearchAS extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
    };
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };


  onSuggestionsFetchRequested = ({ value }) => {
    this.props.fetchSuggestions(value);
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  getSuggestionValue= (suggestion) => {
    return suggestion;
  }

  renderSuggestion= (suggestion, { query }) => {
    const suggestionText = suggestion;
    const matches = match(suggestionText, query);
    const parts = parse(suggestionText, matches);
  
    return (
        <span className="suggestion-content">
          <span className="name">
            {
              parts.map((part, index) => {
                const className = part.highlight ? 'highlight' : null;
                return (
                  <span className={className} key={index}>{part.text}</span>
                );
              })
            }
          </span>
        </span>      
      
    );
  }


  render() {
    const { value } = this.state;
    const inputProps = {
      placeholder: "Search",
      value,
      onChange: this.onChange
    };

    const renderInputComponent = inputProps => (
      <div>
        <input {...inputProps} 
          onKeyPress={this.handleKeyDown}
        />
      </div>
    );


    return (
      <React.Fragment>
          <Autosuggest 
        suggestions={this.props.suggestions.suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps} 
        renderInputComponent={renderInputComponent}
        />
      </React.Fragment>
      
      
    );
  }
}
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchAS));
