import React from 'react';
import { render } from '@testing-library/react';

import Input from './input';

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