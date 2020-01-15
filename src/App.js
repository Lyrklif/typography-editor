import React from 'react';
import './App.css';
import { render } from '@testing-library/react';


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fontSize: props.data.fontSize,
      lineHeight: props.data.lineHeight,
    };


    this.setGlobalParam = this.setGlobalParam.bind(this);
    this.reset = this.reset.bind(this);
  }

  setGlobalParam(value, inputName) {
    this.setState({ [inputName]: [value] });
  }


  // сбросить изменения
  reset() {
    this.setState(this.props.data);
  }


  render() {

    return (
      <main className="App">
        <EditorPanel
          param={this.state}
          setGlobalParam={this.setGlobalParam}
          reset={this.reset}
        />
        <BasicElements param={this.state} />
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
  }


  setParam(e) {
    this.setGlobalParam(e.target.value, e.target.name);
  }

  reset() {
    this.reset();
  }

  render() {
    return (
      <div className="editor-panel">
        <h3>
          Панель редактирования
        </h3>
        <p>
          <label>
            Размер шрифта
        <input
              type="number"
              name='fontSize'
              defaultValue={this.state.fontSize}
              onInput={e => this.setParam(e)}
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
              defaultValue={this.state.lineHeight}
              onInput={e => this.setParam(e)}
            />
          </label>
        </p>

        <button
          onClick={this.reset}
        >
          Вернуть стандартные настройки
        </button>
        {/* <Slider /> */}
      </div>
    );
  }
};



class BasicElements extends React.Component {
  constructor(props) {
    super(props);

    // this.state = this.props.param;
    this.state = props.param;
  }

  render() {
    return (
      <div
        style={
          {
            fontSize: `${this.props.param.fontSize}px`,
            lineHeight: `${this.props.param.lineHeight}em`
          }
        }
        className="content">
        <h1>Заданные параметры</h1>
        <p>
          <strong>
            font-size:
          </strong>
          {this.props.param.fontSize}
          px
        </p>
        <p>
          <strong>
            line-height:
          </strong>
          {this.props.param.lineHeight}
          px
        </p>

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
