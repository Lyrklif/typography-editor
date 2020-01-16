import React from 'react';
import { render } from '@testing-library/react';


// Поле ввода
export default class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.param;

    this.eventHandler = props.eventHandler;
  }

  render() {
    return (
      <label>
        {this.props.text || 'Input'}
        <input
          type={this.props.type || 'text'}
          name={this.props.name || 'btn'}
          value={this.props.param || this.state}
          step={this.props.step || ''}
          onChange={e => this.eventHandler(e.target.value, e.target.name)}
        />
      </label>
    )
  }
}