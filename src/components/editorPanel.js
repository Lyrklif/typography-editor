import React from 'react';
import { render } from '@testing-library/react';

import { SketchPicker, SwatchesPicker } from 'react-color';

import Button from './button';
import TagsPanel from './tagsPanel';
import ButtonsPanel from './buttonsPanel';
import MainSettingsPanel from './mainSettingsPanel';


import {
  formatCommand_clear,
  formatCommand_bgcolor,
  formatCommand_color,
  formatCommand_link,
  default_bgcolor,
  default_color,
} from '../vars';


// панель редактирования
export default class EditorPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.param;

    this.setGlobalParam = props.setGlobalParam;
    this.reset = props.reset;
    this.switchEditText = props.switchEditText;

    this.handleChange = this.handleChange.bind(this);
    this.switchShowColorPiper = this.switchShowColorPiper.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }

  // выбор цвета
  handleChange(color) {
    this.setState({
      styles: {
        [this.state.palettePicker.paletteEdit]: color.hex,
      }
    });
  }

  // смена статуса панели
  switchShowColorPiper() {
    this.setState({
      states: {
        colorPicker: !this.state.states.colorPicker
      }
    });
  }


  changeColor(e) {
    let param = e.target.getAttribute('name');

    console.log("имя панели, которую редактируем", param);

    this.setState({
      palettePicker: {
        paletteEdit: param
      }
    });

    this.switchShowColorPiper();
  }

  render() {
    return (
      <div>
        <div className="editor-panel">
          <h3 className="editor-panel__title">
            Панель редактирования
        </h3>

          {/* основные настройки */}
          <MainSettingsPanel
            param={this.props.param}
            classes="editor-panel__inner"
            eventHandler={this.setGlobalParam}
            reset={this.reset}
          />


          {/* настройка тегов */}
          <TagsPanel
            param={this.state}
            classes="editor-panel__inner"
            switchShowColorPiper={this.switchShowColorPiper}
          />


          {/* панель с кнопками */}
          <ButtonsPanel
            param={this.props.param}
            classes="editor-panel__inner editor-panel__buttons"
            switchEditText={this.switchEditText}
          />

          <div className="editor-panel__inner">
            {/* Выбор цвета фона */}
            <div
              className="palette"
              name={formatCommand_bgcolor}
              onClick={this.changeColor}
              style={
                {
                  backgroundColor: this.state.styles.bgcolor,
                  fontSize: `${this.props.param.styles.fontSize}px`,
                }
              }
            >
            </div>

            {/* Выбор цвета текста */}
            <div
              className="palette"
              name={formatCommand_color}
              onClick={this.changeColor}
              style={
                {
                  backgroundColor: this.state.styles.color,
                  fontSize: `${this.props.param.styles.fontSize}px`,
                }
              }
            >
            </div>
          </div>
        </div>


        {/* Панель выбора цвета */}
        <div
          className={this.state.states.colorPicker ? 'color-picker-wp open' : 'color-picker-wp'}
        >

          {/* КНОПКА Закрыть */}
          <Button
            param={this.state}
            clickEvent={this.switchShowColorPiper}
            text='X Закрыть'
            classes='color-picker__close'
          />

          <SwatchesPicker
            onChange={this.handleChange}
            color={this.state.styles.bgcolor}
          />
        </div>
      </div>
    );
  }
};