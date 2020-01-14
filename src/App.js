import React from 'react';
import './App.css';
import { render } from '@testing-library/react';


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fontSize: 16
    };


    this.setGlobalFontSize = this.setGlobalFontSize.bind(this);
  }

  setGlobalFontSize(value) {
    this.state.fontSize = value;
    this.setState({ fontSize: this.state.fontSize });
  }


  render() {

    return (
      <main className="App">
        <EditorPanel param={this.state} setGlobalFontSize={this.setGlobalFontSize} />
        <BasicElements param={this.state} />
      </main>
    );
  };
};

class EditorPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fontSize: props.param.fontSize
    };
    // this.state = props;

    this.setGlobalFontSize = props.setGlobalFontSize;
  }


  setFontSize(e) {
    this.setGlobalFontSize(e.target.value);
  }

  render() {
    return (
      <div className="editor-panel">
        <h3>
          Панель редактирования
        </h3>
        <label>
          Размер шрифта
        <input
            type="number"
            defaultValue={this.state.fontSize}
            onInput={e => this.setFontSize(e)}
          />
        </label>
        {/* <Slider /> */}
      </div>
    );
  }
};



class BasicElements extends React.Component {
  constructor(props) {
    super(props);

    // this.state = this.props.param;
    this.state = { ...props };
  }

  render() {
    return (
      <div
        style={{ fontSize: `${this.props.param.fontSize}px` }}
        className="content">
        <h1>Заданные параметры</h1>
        <p>
          <strong>
            font-size:
          </strong>
          {this.props.param.fontSize}
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
