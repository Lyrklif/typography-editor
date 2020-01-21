import React from 'react';
import { render } from '@testing-library/react';

import TagsPanel from './tagsPanel';
import ButtonsPanel from './buttonsPanel';
import MainSettingsPanel from './mainSettingsPanel';

// панель редактирования
export default class EditorPanel extends React.Component {
  constructor(props) {
    super(props);

    this.setGlobalParam = props.setGlobalParam;
    this.reset = props.reset;
    this.switchEditText = props.switchEditText;
  }

  render() {
    return (
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
    );
  }
};