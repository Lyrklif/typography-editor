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
      <label title={this.props.text || 'Input'}>
        <span className={this.props.icon}>
          {/* {this.props.text || 'Input'} */}
        </span>
        <input
          type={this.props.type || 'text'}
          name={this.props.name || 'btn'}
          // value={this.props.param || this.state.value} // в этом случае сбрасывается значение
          value={this.props.param} // в этом случае в консоли ошибка
          step={this.props.step || ''}
          onChange={this.eventHandler}
        />
      </label>
    )
  }
}