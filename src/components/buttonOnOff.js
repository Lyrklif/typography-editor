// buttonOnOff

import React from 'react';
import { render } from '@testing-library/react';


// Кнопка со сменой статуса
export default class ButtonOnOff extends React.Component {
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
      >
        <b className="uppercase">
          {this.props.on_off_status ? 'on' : 'off'}
        </b>
        {this.props.text || 'Button'}
      </button >
    )
  }
}