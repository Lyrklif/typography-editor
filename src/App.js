import React from 'react';
import './App.css';
import { render } from '@testing-library/react';


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.data;

    this.setGlobalParam = this.setGlobalParam.bind(this);
    this.reset = this.reset.bind(this);
    this.switchEditText = this.switchEditText.bind(this);
    this.setTag = this.setTag.bind(this);
  }

  // установить глобальные настройки
  setGlobalParam(value, inputName) {
    this.setState({ [inputName]: [value] });
  }

  // установить тег
  setTag() {
    console.log('установить тег (надо прописать логику)');
  }

  // сбросить изменения
  reset() {
    this.setState(this.props.data);
  }


  // включить/отключить возможность редактировать текст
  switchEditText() {
    // заменить значение на противоположное
    this.setState({
      editText: !this.state.editText
    });
  }


  render() {

    return (
      <main className="App">

        {/* панель редактирования */}
        <EditorPanel
          param={this.state}
          setGlobalParam={this.setGlobalParam}
          reset={this.reset}
          switchEditText={this.switchEditText}
          eventHandler={this.setTag}
        />

        {/* блок, текст в котором можно редактировать */}
        <ContentEditable param={this.state} />

      </main>
    );
  };
};

class EditorPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = props;

    this.setGlobalParam = props.setGlobalParam;
    this.reset = props.reset;
    this.switchEditText = props.switchEditText;
    this.eventHandler = props.eventHandler;
  }


  setParam(e) {
    this.setGlobalParam(e.target.value, e.target.name);
  }

  reset() {
    this.reset();
  }

  switchEditText() {
    this.switchEditText();
  }

  render() {
    return (
      <div className="editor-panel">
        <h3>
          Панель редактирования
        </h3>
        {/* основные настройки */}
        <MainSettingsPanel
          param={this.props.param}
          classes="editor-panel__inner"
          eventHandler={this.setGlobalParam}
        />


        {/* настройка тегов */}
        <TagsPanel
          param={this.props.param}
          classes="editor-panel__inner"
          setGlobalParam={this.setGlobalParam}
          eventHandler={this.eventHandler}
        />


        {/* панель с нопками */}
        <ButtonsPanel
          param={this.props.param}
          classes="editor-panel__inner editor-panel__buttons"
          setGlobalParam={this.setGlobalParam}
          reset={this.reset}
          switchEditText={this.switchEditText}
        />
      </div>
    );
  }
};

// настройка тегов
class TagsPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.param;

    this.eventHandler = props.eventHandler;
  }

  render() {
    // преобразовать объект в массив, чтобы его мог считать .map    
    let tagsArray = Object.values(this.state.tags);

    let tagList = tagsArray.map((elem, index) => {
      return (
        <Tag
          key={index}
          param={this.state}
          eventHandler={this.eventHandler}
          text={elem}
          classes="tag"
        />
      )
    });

    return (
      <div
        className={this.props.classes}
      >
        {tagList}

      </div>
    )
  }
}

class Tag extends React.Component {
  constructor(props) {
    super(props);

    this.state = props;

    this.eventHandler = props.eventHandler;
  }

  render() {
    return (
      <button
        onClick={this.eventHandler}
        className={this.props.classes}
      >
        {this.props.text}
      </button>
    )
  }
}




// панель с кнопками
class ButtonsPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.param;

    this.setGlobalParam = props.setGlobalParam;
    this.reset = props.reset;
    this.switchEditText = props.switchEditText;
  }


  setParam(e) {
    this.setGlobalParam(e.target.value, e.target.name);
  }

  reset() {
    this.reset();
  }

  switchEditText() {
    this.switchEditText();
  }

  render() {
    return (
      <div className={this.props.classes}>

        {/* КНОПКА Режим редактирования текста */}
        <Button
          param={this.props.param}
          on_off='true'
          on_off_status={this.props.param.editText}
          clickEvent={this.switchEditText}
          text={this.props.param.buttons.edit}
        />

        {/* КНОПКА Вернуть стандартные настройки */}
        <Button
          param={this.props.param}
          clickEvent={this.reset}
          text={this.props.param.buttons.reset}
        />
      </div>
    )
  }
}


// кнопка
class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.param;

    this.clickEvent = props.clickEvent;
  }

  render() {
    // если это кнопка on/off
    if (this.props.on_off) {
      return (
        <button
          className={this.props.on_off_status ? 'on' : 'off'}
          onClick={this.clickEvent}
        >
          <b className="uppercase">
            {this.props.on_off_status ? 'on' : 'off'}
          </b>
          {this.props.text}
        </button >
      )

      // иначе вернуть обычную кнопку
    } else {
      return (
        <button onClick={this.clickEvent} >
          {this.props.text}
        </button >
      )
    }
  }
}


// основные настройки
class MainSettingsPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.param;

    this.eventHandler = props.eventHandler;
  }


  setParam(e) {
    this.eventHandler(e.target.value, e.target.name);
  }

  render() {
    return (
      <div className={this.props.classes}>

        {/* Размер шрифта */}
        <Input
          param={this.props.param.fontSize}
          eventHandler={this.eventHandler}
          type="number"
          name="fontSize"
          text="Размер шрифта"
        />


        {/* Высота строки */}
        <Input
          param={this.props.param.lineHeight}
          eventHandler={this.eventHandler}
          type="number"
          name="lineHeight"
          step="0.1"
          text="Высота строки"
        />

      </div>
    )
  }
}

// Поле ввода
class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.param;

    this.eventHandler = props.eventHandler;
  }

  setParam(e) {
    this.eventHandler(e.target.value, e.target.name);
  }

  render() {
    return (
      <label>
        {this.props.text}
        <input
          type={this.props.type}
          name={this.props.name}
          value={this.props.param}
          step={this.props.step}
          onChange={e => this.setParam(e)}
        />
      </label>
    )
  }
}


class ContentEditable extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.param;
  }

  render() {
    return (
      <div
        contentEditable={this.props.param.editText ? 'true' : 'false'}
        // чтобы убрать в консоли предупреждение о contentEditable
        suppressContentEditableWarning={true}
        style={
          {
            fontSize: `${this.props.param.fontSize}px`,
            lineHeight: `${this.props.param.lineHeight}em`
          }
        }
        className={this.props.param.editText ? 'content edit' : 'content'}
      >
        <h1>Блок с текстом</h1>
        <p>Текст и его стили можно изменять, нажав на кнопку
          <b>
            "Режим редактирования текста"
          </b>
        </p>

        <hr />
        <h2>Заголовок второго уровня h2</h2>
        <p>Аксиома силлогизма, по определению, представляет собой неоднозначный предмет деятельности. Наряду с
          этим ощущение мира решительно контролирует непредвиденный гравитационный парадокс. Созерцание
          непредсказуемо. Смысл жизни, следовательно, творит данный закон внешнего мира. Апостериори,
          гравитационный парадокс амбивалентно понимает</p>
        <h3>Заголовок третьего уровня h3</h3>
        <p>Сомнение рефлектирует естественный закон исключённого третьего.. Структурализм абстрактен.
          Согласно мнению известных философов, дедуктивный метод естественно порождает и обеспечивает
          мир, tertium nоn datur. Структурализм абстрактен. Отсюда естественно следует, что
          автоматизация дискредитирует предмет деятельности.</p>
        <h4>Заголовок четвёртого уровня h4</h4>
        <p>Надстройка нетривиальна. Апостериори, гравитационный парадокс амбивалентно понимает
          под собой интеллигибельный знак. Структурализм абстрактен. Сомнение рефлектирует
          естественный закон исключённого третьего. Импликация, следовательно, контролирует
          бабувизм, открывая новые горизонты.</p>
        <h5>Заголовок пятого уровня h5</h5>
        <p>Дедуктивный метод решительно представляет собой бабувизм. Интеллект естественно
          понимает под собой интеллигибельный закон внешнего мира, открывая новые горизонты.
          Согласно мнению известных философов, дедуктивный метод естественно порождает и
          обеспечивает мир, tertium nоn datur.</p>
        <h6>Заголовок шестого уровня h6</h6>
        <p>Наряду с этим ощущение мира решительно контролирует непредвиденный гравитационный
          парадокс. Дискретность амбивалентно транспонирует гравитационный парадокс.
          Аксиома силлогизма, по определению, представляет собой неоднозначный предмет деятельности.</p>
        <button>Кнопка обычная</button>
        <p>
          <button className="primary">Кнопка яркая</button>
        </p>
        <p>
          <a href="#">Ссылка обычная</a>
        </p>
        <p>
          <a className="primary" href="#">Ссылка, похожая на кнопку</a>
        </p>
        <p>
          <a className="primary" href="#">Ссылка, похожая на яркую кнопку</a>
        </p>
      </div>
    );
  }
};