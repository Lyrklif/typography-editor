// React
import React from "react";

// Мои компоненты
import EditorPanel from "./components/EditorPanel";
import ContentEditable from "./components/ContentEditable";
import HTMLeditable from "./components/HTMLeditable";
import TabWp from "./components/TabWp";
import TabSwitches from "./components/TabSwitches";
import Settings from "./components/Settings";
import SettingsTagsPanel from "./components/SettingsTagsPanel";
import SettingsPanel from "./components/SettingsPanel";
import ColorPickerModal from "./components/ColorPickerModal";
import DialogLink from "./components/DialogLink";

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { MuiThemeProvider } from '@material-ui/core/styles';

import MyTheme from './MyTheme';

import { getSelection } from './functions/getSelection';
import { setAttributeForSelectedText } from './functions/setAttributeForSelectedText';

import sanitizeHtml from "sanitize-html";
import pretty from 'pretty';

import mainStore from './store/mainStore';

// Стили
import "./App.css";


export default class App extends React.Component {
  constructor(props) {
    super(props);

    let localData = localStorage.getItem('param');
    let localText = localStorage.getItem('text');
    let localDataParam = JSON.parse(localData);
    let localTextParam = JSON.parse(localText);

    // если сохранены и настройки, и текст
    if (localData && localText) {
      this.state = {
        ...localDataParam,
        html: localTextParam
      };
    }

    // если сохранены только настройки
    else if (localData) {
      this.state = localDataParam;
    }

    // если сохранен только текст
    else if (localText) {
      this.state = {
        ...props.data,
        html: localTextParam
      };
    }

    // если нет сохранения
    else {
      this.state = props.data;
    }

    console.log("*** Начальные данные ***\n", this.state);
    console.log("*** Пользовательская тема ***\n", MyTheme);
  }


  render() {
    const titleTab_0 = mainStore.getState().text.tabText_Title;
    const titleTab_1 = mainStore.getState().text.tabHTML_Title;

    return (
      <MuiThemeProvider theme={MyTheme}>
        <Box component="main" className="App" >
          <EditorPanel /> {/* панель редактирования */}

          <TabSwitches /> {/* Переключатель вкладок */}
          <TabWp index={0} h2={titleTab_0}><ContentEditable /></TabWp> {/* Вкладка #0 */}
          <TabWp index={1} h2={titleTab_1}><HTMLeditable /></TabWp> {/* Вкладка #1 */}

        </Box>

        <SettingsTagsPanel />{/* Modal настроек тегов */}
        <SettingsPanel /> {/* Modal основных настроек */}
        <ColorPickerModal /> {/* modal выбора цвета */}
        <DialogLink /> {/* modal ввода href для ссылки */}

      </MuiThemeProvider>
    );
  }
}