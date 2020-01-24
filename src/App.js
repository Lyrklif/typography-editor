// React
import React from "react";
import sanitizeHtml from "sanitize-html";

// Мои компоненты
import EditorPanel from "./components/editorPanel";
import ContentEditable from "./components/contentEditable";
import HTMLeditable from "./components/htmlEditable";
import TabContainer from "./components/tabContainer";

// Стили
import "./App.css";
import "./sprite.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.data;

    console.log("*** Начальные данные ***\n", this.state);

    this.setGlobalParam = this.setGlobalParam.bind(this);
    this.switchEditText = this.switchEditText.bind(this);
    // this.reset = this.reset.bind(this);
    this.sanitize = this.sanitize.bind(this);
  }

  // установить глобальные настройки
  setGlobalParam(e) {
    let inputName = e.target.name;
    let value = e.target.value;

    this.setState(state => ({
      styles: {
        ...state.styles,
        [inputName]: [value]
      }
    }));
  }

  // сбросить изменения параметров текста
  // reset() {
  //   this.setState({
  //     styles: {
  //       fontSize: this.props.data.styles.fontSize,
  //       lineHeight: this.props.data.styles.lineHeight,
  //     }
  //   });
  // }

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
  tabSwitch = e => {
    this.sanitize(); // записать новый текст, удалив неразрешённые теги

    let index = e.target.name;

    this.setState(state => ({
      states: {
        ...state.states,
        tabActive: index
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
          // reset={this.reset}
        />

        <TabContainer show={this.state.states.tabActive}>
          {/* блок, ТЕКСТ в котором можно редактировать */}
          <ContentEditable param={this.state} />

          {/* блок, ТЕГИ в котором можно редактировать */}
          <HTMLeditable param={this.state} />
          <div>Тут будет отображаться css</div>
        </TabContainer>
      </main>
    );
  }
}
