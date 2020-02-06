// React
import React from "react";

// Мои компоненты
import EditorPanel from "./components/EditorPanel";
import ContentEditable from "./components/ContentEditable";
import HTMLeditable from "./components/HTMLeditable";
import TabContainer from "./components/TabContainer";
import TabSwitches from "./components/TabSwitches";
import Settings from "./components/Settings";
import SettingsTagsPanel from "./components/SettingsTagsPanel";
import SettingsPanel from "./components/SettingsPanel";



import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import { MuiThemeProvider } from '@material-ui/core/styles';

import MyTheme from './MyTheme';

import { getSelection } from './functions/getSelection';
import { setAttributeForSelectedText } from './functions/setAttributeForSelectedText';

import sanitizeHtml from "sanitize-html";
import pretty from 'pretty';


import mainStore from './store/mainStore';
import reducer from './reducers/reducer';
import { createStore } from "redux";
import { connect, Provider } from "react-redux";

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

  // обновить значения в localStorage
  updLocalStorage = () => {
    this.sanitize(); // записать новый текст, удалив неразрешённые теги

    this.setState(state => ({
      ...state,
    }),
      this.setNewValueLocalStorage // записать в localStorage после обновления
    );
  }

  // перезаписать localStorage
  setNewValueLocalStorage = () => {
    localStorage.setItem('param', JSON.stringify(this.state));
    localStorage.setItem('text', JSON.stringify(this.state.html));
  }

  // вернуть стандартные настройки
  returnDefaultSettings = () => {
    this.clearLocalStorage();

    this.setState(state => ({
      ...this.props.data,
      html: this.state.html
    }));
  }

  // очистить localStorage
  clearLocalStorage = () => {
    localStorage.removeItem('param');
  }

  // обновить this.state
  // если newValue не передан, то значение изменится на противоположное
  // [group] - название группы параметров
  // [stateName] - название параметра
  // [newValue]  - новое значение параметра
  updMainStates = (group, stateName, newValue) => {
    // если параметр передан
    if (newValue != undefined) {
      this.setState(state => ({
        [group]: {
          ...state[group],
          // заменить значение на противоположное
          [stateName]: newValue
        }
      }));
    } else {
      this.setState(state => ({
        [group]: {
          ...state[group],
          // заменить значение на противоположное
          [stateName]: !this.state[group][stateName]
        }
      }));
    }
  }

  // установить глобальные настройки
  setGlobalParam = (inputName, e) => {
    let value = e.target.value;

    let isSelected = getSelection().toString();

    // если есть выделенный текст и изменяется fontSize
    if (isSelected && inputName === 'fontSize') {
      setAttributeForSelectedText(7, 'font-size', `${value}px`); // установить размер выделенного текста

      // если текст не выделен изменить глобальные параметры
    } else {
      this.updMainStates('styles', inputName, value);
    }
  }

  // изменить отображаемые теги
  changeDisplayedTags = (newTagsParam) => {
    this.setState({ tagParameters: newTagsParam });
  }

  // вкл/откл возможность редактировать текст
  switchEditText = () => {
    this.updMainStates('states', 'editText');

    // если режим редактирования выключен
    if (this.state.states.editText) {
      this.sanitize(); // записать новый текст, удалив неразрешённые теги
    }
  }

  // записать новый текст
  setNewText = (newValue) => {
    // если в качестве параметра передан новый текст
    if (newValue && newValue !== this.state.html) {
      // записать новую версию текста
      this.setState({ html: newValue });
    }
  }

  // записать новый текст, удалив неразрешённые теги
  sanitize = () => {
    let editableBlock = document.querySelector(".content"); // блок, текст в котором можно редактировать
    let text = editableBlock.innerHTML; // текст вместе с тегами

    // если текст изменился
    if (text !== this.state.html) {
      let prettyText = pretty(text); // beautifying HTML

      // записать новую версию текста, применив настройки (удалить пустые теги, заменить символы и пр.)
      this.setState({
        html: sanitizeHtml(prettyText, this.state.sanitizeParam)
      });
    }
  }

  // переключить активный таб
  tabSwitch = (e, newValue) => {
    this.sanitize(); // записать новый текст, удалив неразрешённые теги
    this.updMainStates('states', 'tabActive', newValue);
  };

  render() {
    const store = createStore(reducer, mainStore.getState());

    return (
      <MuiThemeProvider theme={MyTheme}>
        <Provider store={store}>
          <Box component="main" className="App" >
            {/* панель редактирования */}
            <EditorPanel
              param={this.state}
              setGlobalParam={this.setGlobalParam}
              switchEditText={this.switchEditText}
              tabSwitch={this.tabSwitch}
              dialogLink={this.switchDialogLink}
              setNewColor={this.updMainStates}
            />



            <Grid container spacing={0} alignItems="center" justify="center" className="tabs-wrap">
              <Grid item xs={12} md={10} lg={8}>

                {/* Переключатель вкладок */}
                <TabSwitches
                  value={this.state.states.tabActive}
                  onChange={this.tabSwitch}
                />

                {/* Вкладка №1 */}
                <TabContainer
                  value={this.state.states.tabActive}
                  index={0}
                  h2={"Редактируемый текст"}>
                  <ContentEditable param={this.state} />
                </TabContainer>

                {/* Вкладка №2 */}
                <TabContainer
                  value={this.state.states.tabActive}
                  index={1}
                  h2={"Редактируемый html"}>
                  <HTMLeditable
                    param={this.state}
                    onChange={this.setNewText}
                  />
                </TabContainer>

                {/* Вкладка №3 */}
                <TabContainer
                  value={this.state.states.tabActive}
                  index={2}
                  h2={"Редактируемые стили"}>
                  <p>Тут будет отображаться css</p>
                </TabContainer>

              </Grid>
            </Grid>
          </Box>

          <Settings
            param={this.state}
            updStates={this.updMainStates}
            save={this.updLocalStorage}
          />

          <SettingsTagsPanel
            param={this.state}
            saveChange={this.changeDisplayedTags}
            updStates={this.updMainStates}
          />

          <SettingsPanel
            param={this.state}
            saveChange={this.changeDisplayedTags}
            updStates={this.updMainStates}
            reset={this.returnDefaultSettings}
          />

        </Provider>
      </MuiThemeProvider>
    );
  }
}