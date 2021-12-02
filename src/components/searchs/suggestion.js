import React from 'react';
import autoBind from 'react-autobind';

class Suggestion extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this, 'handleClick', 'handleMouseMove');
  }

  handleClick() {
    this.props.onClick(this.props.suggestion);
  }

  handleMouseMove(event) {
    this.props.onMouseMove(event, this.props.index);
  }

  render() {
    const { props } = this;

    return (
      <li
        className={props.className}
        key={props.suggestion}
        ref={ref => (this.item = ref)}
        onClick={this.handleClick}
        onMouseMove={this.handleMouseMove}
      >
        {props.suggestionRenderer(props.suggestion, props.searchTerm)}
      </li>
    );
  }
}

export default Suggestion;
