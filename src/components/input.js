import React from 'react';
import { render } from '@testing-library/react';


// Поле ввода
export default class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.param
    };

    this.eventHandler = props.eventHandler;
  }

  render() {
    return (
      <label title={this.props.text || 'input'}>
        {this.props.icon ?
          <span className={this.props.icon}></span>
          :
          <span>{this.props.text || 'input'}</span>
        }
        <input
          type={this.props.type || 'text'}
          name={this.props.name || 'input'}
          // value={this.props.param || this.state.value} // в этом случае сбрасывается значение
          value={this.props.param} // в этом случае в консоли ошибка
          step={this.props.step && this.props.step}
          onChange={this.eventHandler}
        />
      </label>
    )
  }
}