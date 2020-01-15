import React from 'react';
import './App.css';
import { render } from '@testing-library/react';


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.data;

    // this.state = {
    //   fontSize: props.data.fontSize,
    //   lineHeight: props.data.lineHeight,

    //   editText: props.data.editText
    // };

    this.setGlobalParam = this.setGlobalParam.bind(this);
    this.reset = this.reset.bind(this);
    this.switchEditText = this.switchEditText.bind(this);
  }

  setGlobalParam(value, inputName) {
    this.setState({ [inputName]: [value] });
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
      <div className="editor-panel">
        <h3>
          Панель редактирования
        </h3>
        {/* основные настройки */}
        <MainSettingsPanel
          param={this.props.param}
          classes="editor-panel__inner"
          setGlobalParam={this.setGlobalParam}
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

// панель с нопками
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
        <button
          className={this.props.param.editText ? 'on' : 'off'}
          onClick={this.switchEditText}
        >
          <b
            className="uppercase"
          >{this.props.param.editText ? 'on' : 'off'} </b>
          Режим редактирования текста
        </button>
        <button
          onClick={this.reset}
        >
          Вернуть стандартные настройки
        </button>
      </div>
    )
  }
}

// основные настройки
class MainSettingsPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.param;

    this.setGlobalParam = props.setGlobalParam;
    this.switchEditText = props.switchEditText;
  }


  setParam(e) {
    this.setGlobalParam(e.target.value, e.target.name);
  }

  render() {
    return (
      <div className={this.props.classes}>
        <p>
          <label>
            Размер шрифта
        <input
              type="number"
              name='fontSize'
              value={this.props.param.fontSize}
              onChange={e => this.setParam(e)}
            />
          </label>
        </p>

        <p>
          <label>
            Высота строки
        <input
              type="number"
              name='lineHeight'
              step="0.1"
              value={this.props.param.lineHeight}
              onChange={e => this.setParam(e)}
            />
          </label>
        </p>
      </div>
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
        <p>Текст и его стили можно изменять</p>
        <p>Нормального дизайна и мобильной версии ещё нет</p>

        <hr />
        <h2>Заголовок второго уровня h2</h2>
        <p>Созерцание непредсказуемо. Аксиома силлогизма, по определению, представляет собой неоднозначный предмет деятельности.
          Отсюда естественно следует, что автоматизация дискредитирует предмет деятельности. undefined. Дедуктивный метод
          решительно представляет собой бабувизм. Дедуктивный метод решительно представляет собой бабувизм.</p>
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









// ********************

// class Handle extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = { ...props };
//   }

//   mouseDown = (e) => {
//     let handle = this.refs.handle;

//     handle.style.zIndex = 1000;
//     this.moveAt(handle, handle.pageX);

//   }

//   move = (e) => {
//     this.mouseDown();
//   }

//   moveAt = (elem, x) => {
//     // elem.style.left = x - elem.offsetWidth / 2 + 'px';
//     elem.style.left = '50%';
//   }

//   render() {
//     return (
//       <div
//         className="handle-wp"
//         onMouseMove={this.move}
//       >
//         <div
//           ref="handle"
//           className="handle"
//           onMouseDown={this.mouseDown}
//         ></div>
//       </div>
//     );
//   }
// };



// class Slider extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = { ...props };
//   }

//   render() {
//     return (
//       <div className="slider">
//         <Handle />
//       </div>
//     );
//   }
// };
