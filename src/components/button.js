import React from 'react';
import { render } from '@testing-library/react';




// button
export default class Button extends React.Component {
  constructor(props) {
    super(props);

    this.clickEvent = props.clickEvent;
  }

  render() {
    // если это кнопка on/off
    if (this.props.on_off && this.props.icon) {
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
          {/* {this.props.text || 'Button'} */}
          <span
            className={"sprite " + this.props.icon}>
          </span>
        </button >
      )
    }
    // если это кнопка on/off
    else if (this.props.on_off) {
      return (
        <button
          className={this.props.on_off_status ? 'on' : 'off'}
          onClick={this.clickEvent}
          name={this.props.name}
        >
          <b className="uppercase">
            {this.props.on_off_status ? 'on' : 'off'}
          </b>
          {this.props.text || 'Button'}
        </button >
      )
    }
    // если это кнопка с иконкой
    else if (this.props.icon) {
      return (
        <button
          onClick={this.clickEvent}
          className={this.props.classes}
          name={this.props.name}
          title={this.props.text}
        >
          <span
            className={"sprite " + this.props.icon}>
          </span>
        </button >
      )

      // иначе вернуть обычную кнопку
    } else {
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
}