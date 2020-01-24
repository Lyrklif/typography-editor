import React from 'react';


import { SwatchesPicker } from 'react-color';

import Button from './button';
import ButtonPallet from './buttonPallet';
import TagsPanel from './tagsPanel';
import TabSwitches from './tabSwitches';
import ButtonsPanel from './buttonsPanel';
import MainSettingsPanel from './mainSettingsPanel';


import {
  // formatCommand_clear,
  formatCommand_bgcolor,
  formatCommand_color,
  // formatCommand_link,
  // default_bgcolor,
  // default_color,
} from '../vars';


// панель редактирования
export default class EditorPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.param;

    this.setGlobalParam = props.setGlobalParam;
    this.switchEditText = props.switchEditText;
    this.tabSwitch = props.tabSwitch;
    // this.reset = props.reset;

    this.handleChange = this.handleChange.bind(this);
    this.switchShowColorPiper = this.switchShowColorPiper.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }

  // при изменении выбранного цвета в палитре
  handleChange(color) {
    this.setState((state) => ({
      styles: {
        ...state.styles,
        [state.states.paletteEdit]: color.hex, // изменить цвет для палитры
      }
    }));
  }

  // смена статуса панели выбора цвета [показать/скрыть]
  switchShowColorPiper() {
    this.setState((state) => ({
      states: {
        ...state.states,
        colorPicker: !state.states.colorPicker
      }
    }));
  }


  // при открытии панели выбора цвета, нажатием на палитру
  changeColor(e) {
    let param = e.target.getAttribute('name');

    this.setState((state) => ({
      states: {
        ...state.states,
        paletteEdit: param // изменить палитру, которую сейчас редактируем
      }
    }));

    this.switchShowColorPiper();
  }

  render() {
    return (
      <div>
        <div className="editor-panel">
          <h3 className="editor-panel__title">Панель редактирования</h3>

          <div className="editor-panel__inner editor-panel__scroll">
            {/* основные настройки */}
            <MainSettingsPanel
              param={this.props.param}
              classes="editor-panel__inner"
              eventHandler={this.setGlobalParam}
              reset={this.reset}
              switchEditText={this.switchEditText}
            />

            {/* панель с кнопками */}
            <ButtonsPanel
              param={this.props.param}
              classes="editor-panel__inner"
            // switchEditText={this.switchEditText}
            />


            {/* Выбор цвета */}
            <div className="editor-panel__inner">
              {/* Выбор цвета фона */}
              <ButtonPallet
                text="Установить цвет фона"
                icon="icon-format_paint_white"
                name={formatCommand_bgcolor}
                clickEvent={this.changeColor}
                style={this.state.styles.bgcolor}
              />

              {/* Выбор цвета текста */}
              <ButtonPallet
                text="Установить цвет текста"
                icon="icon-color_lens_white"
                name={formatCommand_color}
                clickEvent={this.changeColor}
                style={this.state.styles.color}
              />
            </div>

            <TabSwitches
              param={this.props.param}
              classes="editor-panel__inner editor-panel__right"
              clickEvent={this.tabSwitch}
            />
          </div>

          {/* настройка тегов */}
          <TagsPanel
            param={this.state}
            editAllowed={this.props.param.states.tabActive === '0' ? true : false}
            classes="editor-panel__inner editor-panel__scroll"
            switchShowColorPiper={this.switchShowColorPiper}
          />
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