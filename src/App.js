// React
import React from "react";
import sanitizeHtml from "sanitize-html";

// Мои компоненты
import EditorPanel from "./components/editorPanel";
import ContentEditable from "./components/contentEditable";

import HTMLeditable from "./components/htmlEditable";

import AppBar from '@material-ui/core/AppBar';

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabContainer from "./components/tabContainer";

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


import * as IconsLib from "@material-ui/icons";

import Paper from "@material-ui/core/Paper";

import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

// Стили
import "./App.css";
import "./sprite.css";





function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};




export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.data;

    console.log("*** Начальные данные ***\n", this.state);

    this.setGlobalParam = this.setGlobalParam.bind(this);
    this.switchEditText = this.switchEditText.bind(this);
    this.sanitize = this.sanitize.bind(this);
  }

  // установить глобальные настройки
  setGlobalParam(inputName, e) {
    let value = e.target.value;

    this.setState(state => ({
      styles: {
        ...state.styles,
        [inputName]: [value]
      }
    }));
  }

  // вкл/откл возможность редактировать текст
  switchEditText() {
    this.setState(state => ({
      states: {
        ...state.states,
        // заменить значение на противоположное
        editText: !this.state.states.editText
      }
    }));

    // если режим редактирования выключен
    if (this.state.states.editText) {
      this.sanitize(); // записать новый текст, удалив неразрешённые теги
    }
  }

  // записать новый текст, удалив неразрешённые теги
  sanitize() {
    let editableBlock = document.querySelectorAll(".content"); // блок, текст в котором можно редактировать

    editableBlock.forEach(elem => {
      let text = elem.tagName !== "CODE" ? elem.innerHTML : elem.innerText; // текст внутри блока

      // если текст изменился
      if (text !== this.state.html) {
        // записать новую версию текста, применив настройки (удалить пустые теги, заменить символы и пр.)
        this.setState({
          html: sanitizeHtml(text, this.state.sanitizeParam)
        });
      }
    });
  }

  // переключить активный таб
  tabSwitch = (e, newValue) => {
    this.sanitize(); // записать новый текст, удалив неразрешённые теги

    this.setState(state => ({
      states: {
        ...state.states,
        tabActive: newValue
      }
    }));
  };

  render() {
    return (
      <main className="App">
        {/* панель редактирования */}
        <EditorPanel
          param={this.state}
          setGlobalParam={this.setGlobalParam}
          switchEditText={this.switchEditText}
          tabSwitch={this.tabSwitch}
        />

        <Paper >
          <Tabs
            value={this.state.states.tabActive}
            onChange={this.tabSwitch}
            aria-label="simple tabs example"
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            centered
          >
            <Tab
              icon={<IconsLib.Subject />}
              aria-label="Режим просмотра текста"
              title="Режим просмотра текста" />
            <Tab
              icon={<IconsLib.SettingsEthernet />}
              aria-label="Режим просмотра HTML"
              title="Режим просмотра HTML" />
            <Tab
              icon={<IconsLib.Texture />}
              aria-label="Режим просмотра CSS"
              title="Режим просмотра CSS"
            />
          </Tabs>
        </Paper>

        <TabPanel
          value={this.state.states.tabActive}
          index={0}>
          <ContentEditable param={this.state} />
        </TabPanel>

        <TabPanel
          value={this.state.states.tabActive}
          index={1}>
          <HTMLeditable param={this.state} />
        </TabPanel>

        <TabPanel
          value={this.state.states.tabActive}
          index={2}>
          <p>Тут будет отображаться css</p>
        </TabPanel>

      </main>
    );
  }
}