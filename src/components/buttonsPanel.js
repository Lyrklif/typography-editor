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
    this.redo = props.redo;
    this.undo = props.undo;
  }

  render() {
    return (
      <div className={this.props.classes}>

        {/* КНОПКА Отменить */}
        <Button
          param={this.props.param}
          clickEvent={this.undo}
          text={this.props.param.buttons.undo}
        />

        {/* КНОПКА Повторить */}
        <Button
          param={this.props.param}
          clickEvent={this.redo}
          text={this.props.param.buttons.redo}
        />

        {/* КНОПКА Режим редактирования текста */}
        <Button
          param={this.props.param}
          on_off='true'
          on_off_status={this.props.param.states.editText}
          clickEvent={this.switchEditText}
          text={this.props.param.buttons.edit}
        />


      </div>
    )
  }
}