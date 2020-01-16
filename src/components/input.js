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
        {this.props.text}
        <input
          type={this.props.type}
          name={this.props.name}
          value={this.props.param}
          step={this.props.step}
          onChange={e => this.eventHandler(e.target.value, e.target.name)}
        />
      </label>
    )
  }
}