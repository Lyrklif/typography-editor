// buttonIcon

import React from 'react';
import { render } from '@testing-library/react';




// Кнопка с иконкой
export default class ButtonIcon extends React.Component {
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
        <span
          className={"sprite " + this.props.icon}>
        </span>
      </button >
    )
  }
}