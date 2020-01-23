import React from 'react';
import { render } from '@testing-library/react';

import Input from './input';
import Button from './button';

// настройка тегов
export default class MainSettingsPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.param;

    this.eventHandler = props.eventHandler;
    this.reset = props.reset;
  }

  render() {
    return (
      <div className={this.props.classes}>

        {/* КНОПКА Вернуть стандартные настройки */}
        {/* <Button
          param={this.props.param}
          clickEvent={this.reset}
          text={this.props.param.buttons.reset}
          icon="icon-clear"
          /> */}


        {/* Размер шрифта */}
        <Input
          param={this.props.param.styles.fontSize}
          eventHandler={this.eventHandler}
          type="number"
          name="fontSize"
          text="Шрифт"
          icon="sprite icon-format_size_white"
          />


        {/* Высота строки */}
        <Input
          param={this.props.param.styles.lineHeight}
          eventHandler={this.eventHandler}
          type="number"
          name="lineHeight"
          step="0.1"
          text="Высота строки"
          icon="sprite icon-line_height_white"
        />


      </div>
    )
  }
}