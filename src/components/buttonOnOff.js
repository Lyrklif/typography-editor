// buttonOnOff

import React from 'react';
import { render } from '@testing-library/react';


// Кнопка со сменой статуса
export default class ButtonIconOnOff extends React.Component {
  constructor(props) {
    super(props);

    this.clickEvent = props.clickEvent;
  }

  render() {
    return (
      <button
        className={this.props.on_off_status ? 'on' : 'off'}
        onClick={this.clickEvent}
        name={this.props.name}
        title={this.props.text}
      >
        <b className="uppercase">
          {this.props.on_off_status ? 'on' : 'off'}
        </b>
        {/* Если есть иконка, то добавить её класс. Если нет, то просто текст */}
        {this.props.icon ?
          <span
            className={"sprite " + this.props.icon}>
          </span>
          :
          <span>
            {this.props.text}
          </span>
        }
      </button >
    )
  }
}