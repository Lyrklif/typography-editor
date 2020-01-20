import React from 'react';
import { render } from '@testing-library/react';

import Button from './button';

// настройка тегов
export default class ButtonsPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.param;

    this.setGlobalParam = props.setGlobalParam;
    this.reset = props.reset;
    this.switchEditText = props.switchEditText;
  }

  render() {
    return (
      <div className={this.props.classes}>

        {/* КНОПКА Режим редактирования текста */}
        <Button
          param={this.props.param}
          on_off='true'
          on_off_status={this.props.param.editText}
          clickEvent={this.switchEditText}
          text={this.props.param.buttons.edit}
        />


      </div>
    )
  }
}