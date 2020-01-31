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


// Стили
import "./App.css";


export default class App extends React.Component {
  constructor(props) {
    super(props);

    let localData = localStorage.getItem('param');
    let localDataParam = JSON.parse(localData);

    if (localData) {
      this.state = localDataParam;
    } else {
      this.state = props.data;
    }

    // this.state = props.data;


    console.log("*** Начальные данные ***\n", this.state);
    console.log("*** Пользовательская тема ***\n", MyTheme);

    this.setGlobalParam = this.setGlobalParam.bind(this);
    this.switchEditText = this.switchEditText.bind(this);
    this.sanitize = this.sanitize.bind(this);
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
  }

  // вернуть стандартные настройки
  returnDefaultSettings = () => {
    this.clearLocalStorage();

    this.setState(state => ({
      ...this.props.data,
    }));
  }

  // очистить localStorage
  clearLocalStorage = () => {
    localStorage.removeItem('param');
  }

  // обновить this.state.states
  // если newValue не передан, то значение изменится на противоположное
  // [stateName] - название параметра
  // [newValue]  - новое значение параметра
  updStates = (stateName, newValue) => {
    // если параметр передан
    if (newValue != undefined) {
      this.setState(state => ({
        states: {
          ...state.states,
          // заменить значение на противоположное
          [stateName]: newValue
        }
      }));
    } else {
      this.setState(state => ({
        states: {
          ...state.states,
          // заменить значение на противоположное
          [stateName]: !this.state.states[stateName]
        }
      }));
    }
  }

  // установить глобальные настройки
  setGlobalParam(inputName, e) {
    let value = e.target.value;

    let isSelected = getSelection().toString();

    // если есть выделенный текст и изменяется fontSize
    if (isSelected && inputName === 'fontSize') {
      setAttributeForSelectedText(7, 'font-size', `${value}px`); // установить размер выделенного текста

      // если текст не выделен изменить глобальные параметры
    } else {
      this.setState(state => ({
        styles: {
          ...state.styles,
          [inputName]: [value]
        }
      }));
    }
  }

  // изменить отображаемые теги
  changeDisplayedTags = (newTagsParam) => {
    this.setState(state => ({
      tagParameters: newTagsParam
    }));
  }

  // вкл/откл возможность редактировать текст
  switchEditText() {
    this.updStates('editText');

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
      this.setState({
        html: newValue
      });
    }
  }

  // записать новый текст, удалив неразрешённые теги
  sanitize() {
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
    this.updStates('tabActive', newValue);
  };

  render() {
    return (
      <MuiThemeProvider theme={MyTheme}>
        <Box component="main" className="App" >
          {/* панель редактирования */}
          <EditorPanel
            param={this.state}
            setGlobalParam={this.setGlobalParam}
            switchEditText={this.switchEditText}
            tabSwitch={this.tabSwitch}
            dialogLink={this.switchDialogLink}
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
          updStates={this.updStates}
          save={this.updLocalStorage}
        />

        <SettingsTagsPanel
          param={this.state}
          saveChange={this.changeDisplayedTags}
          updStates={this.updStates}
        />

        <SettingsPanel
          param={this.state}
          saveChange={this.changeDisplayedTags}
          updStates={this.updStates}
          reset={this.returnDefaultSettings}
        />

      </MuiThemeProvider>
    );
  }
}