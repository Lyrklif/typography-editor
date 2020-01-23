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
        title={this.props.text}
      >
        {/* Если есть иконка, то добавить её класс. Если нет, то просто текст */}
        {this.props.icon ?
          <span
            className={"sprite " + this.props.icon}>
          </span>
          :
          <span>
            {this.props.text || 'Button'}
          </span>
        }



      </button >
    )
  }
}