import React from 'react';


import Input from './input';
import Button from './button';
import ButtonOnOff from './buttonOnOff';

// настройка тегов
export default class MainSettingsPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.param;

    this.eventHandler = props.eventHandler;
    this.reset = props.reset;
    this.switchEditText = props.switchEditText;
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

        {/* КНОПКА Режим редактирования текста */}
        <ButtonOnOff
          param={this.props.param}
          on_off_status={this.props.param.states.editText}
          clickEvent={this.switchEditText}
          text={this.props.param.buttons.edit}
          icon='icon-edit'
        />


        {/* Размер шрифта */}
        <Input
          param={this.props.param.styles.fontSize}
          eventHandler={this.eventHandler}
          type="number"
          name="fontSize"
          text={this.props.param.inputs.fontSize}
          icon="sprite icon-format_size_white"
        />


        {/* Высота строки */}
        <Input
          param={this.props.param.styles.lineHeight}
          eventHandler={this.eventHandler}
          type="number"
          name="lineHeight"
          step="0.1"
          text={this.props.param.inputs.lineHeight}
          icon="sprite icon-line_height_white"
        />


      </div>
    )
  }
}