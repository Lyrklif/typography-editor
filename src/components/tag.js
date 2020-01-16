import React from 'react';
import { render } from '@testing-library/react';


// Поле ввода
export default class Tag extends React.Component {
  constructor(props) {
    super(props);

    // this.state = props;

    this.eventHandler = props.eventHandler;
  }

  render() {
    return (
      <button
        onClick={this.eventHandler}
        className={this.props.classes}
        name={this.props.text}
      >
        {this.props.text || 'Tag'}
      </button>
    )
  }
}