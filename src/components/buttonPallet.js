import React from 'react';
import { render } from '@testing-library/react';




// button
export default class ButtonPallet extends React.Component {
  constructor(props) {
    super(props);

    this.clickEvent = props.clickEvent;
  }

  render() {
    return (
      <button
        onClick={this.clickEvent}
        className={"button-pallet"}
        name={this.props.name}
        title={this.props.text}
      >
        <span
          className={"sprite " + this.props.icon}>
        </span>
        <span
          className={"button-pallet__color"}
          style={{ backgroundColor: this.props.style }}
        >
        </span>
      </button >
    )
  }
}