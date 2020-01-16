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
  }


  setParam(e) {
    this.eventHandler(e.target.value, e.target.name);
  }

  render() {
    return (
      <div className={this.props.classes}>

          {/* КНОПКА Вернуть стандартные настройки */}
          <Button
            param={this.props.param}
            clickEvent={this.reset}
            text={this.props.param.buttons.reset}
          />

        {/* Размер шрифта */}
        <Input
          param={this.props.param.styles.fontSize}
          eventHandler={this.eventHandler}
          type="number"
          name="fontSize"
          text="Размер шрифта"
        />


        {/* Высота строки */}
        <Input
          param={this.props.param.styles.lineHeight}
          eventHandler={this.eventHandler}
          type="number"
          name="lineHeight"
          step="0.1"
          text="Высота строки"
        />


      </div>
    )
  }
}