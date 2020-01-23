import React from 'react';
import { render } from '@testing-library/react';




// button
export default class Button extends React.Component {
  constructor(props) {
    super(props);

    this.clickEvent = props.clickEvent;
  }

  render() {
    return (
      <button
        onClick={this.clickEvent}
        className={this.props.classes}
        name={this.props.name}
      >
        {this.props.text || 'Button'}
      </button >
    )
  }
}