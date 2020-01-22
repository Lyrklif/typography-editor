import React from 'react';
import { render } from '@testing-library/react';

import { SketchPicker } from 'react-color';

import TagsPanel from './tagsPanel';
import ButtonsPanel from './buttonsPanel';
import MainSettingsPanel from './mainSettingsPanel';


// панель редактирования
export default class EditorPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.param;

    this.setGlobalParam = props.setGlobalParam;
    this.reset = props.reset;
    this.switchEditText = props.switchEditText;

    this.handleChange = this.handleChange.bind(this);
    this.handleSwitchStatuses = this.handleSwitchStatuses.bind(this);
  }

  // выбор цвета
  handleChange(e) {
    console.log('color: ', e.hex);
  }

  // смена статуса панели
  handleSwitchStatuses(e) {
    console.log(this.state);

    this.setState({
      states: {
        colorPicker: !this.state.states.colorPicker
      }
    });
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
            param={this.props.param}
            classes="editor-panel__inner"
          />


          {/* панель с кнопками */}
          <ButtonsPanel
            param={this.props.param}
            classes="editor-panel__inner editor-panel__buttons"
            switchEditText={this.switchEditText}
          />
        </div>


        <div
          className={this.state.states.colorPicker ? 'color-picker-wp open' : 'color-picker-wp'}
          onClick={this.handleSwitchStatuses}
        >
          <SketchPicker
            color={this.state.styles.bgcolor}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
};