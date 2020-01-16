import React from 'react';
import { render } from '@testing-library/react';




// button
export default class Button extends React.Component {
  constructor(props) {
    super(props);

    // this.state = props;

    this.clickEvent = props.clickEvent;
  }

  render() {
    // если это кнопка on/off
    if (this.props.on_off) {
      return (
        <button
          className={this.props.on_off_status ? 'on' : 'off'}
          onClick={this.clickEvent}
        >
          <b className="uppercase">
            {this.props.on_off_status ? 'on' : 'off'}
          </b>
          {this.props.text || 'Button'}
        </button >
      )

      // иначе вернуть обычную кнопку
    } else {
      return (
        <button onClick={this.clickEvent} >
          {this.props.text || 'Button'}
        </button >
      )
    }
  }
}