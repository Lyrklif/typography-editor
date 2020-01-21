import React from 'react';
import { render } from '@testing-library/react';

import Button from './button';

// настройка тегов
export default class TagsPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.param;

    this.setTag = this.setTag.bind(this);
    this.clearFormat = this.clearFormat.bind(this);
  }

  // установить тег (форматирование текста)
  setTag(e) {
    e.preventDefault();

    let tag = e.target.name;
    let commands = this.state.formatСommand[tag];

    // если команда для этого тега существует
    if (commands) {
      // применить все заданные команды из массива
      for (let i = 0; i < commands.length; i++) {
        // *** document.execCommand('Название команды', false, значение (если требуется));
        document.execCommand(commands[i][0], commands[i][1], commands[i][2].toUpperCase());
      }

      // если нужно очистить формат
      if (tag === 'clearFormat') {
        this.clearFormat();
      }

      // если команда для этого тега НЕ существует
    } else {
      console.log('Правила форматирования для этого тега не прописаны.\nСделайте это в файле startingValue.js');
    }
  }

  //  очистить формат, удалив родительский тег
  clearFormat() {
    let container = null; // блок, с которым работаем
    // если выделен (для IE)
    if (document.selection) {
      // записать выделенный текст
      container = document.selection.createRange().parentElement();
    }
    // если выделен
    else {
      // диапазон текста, который пользователь выделил на странице
      let select = window.getSelection();

      // если количество диапазонов в выделении > 0
      if (select.rangeCount > 0)
        // записать выделенный текст
        container = select.getRangeAt(0).startContainer.parentNode;
    }

    // если этот элемент не div и не li
    // *** пояснение:
    // * [div] -> чтобы нельзя было удалить сам блок .content при выделении всего содержимого
    // * [li] -> чтобы нельзя было убирать формат списков (слишком много багов из-за этого) 
    if (container.nodeName !== 'DIV' && container.nodeName !== 'LI') {
      container.outerHTML = container.innerHTML; // удалить родительский тег
    }
  }

  render() {
    // преобразовать объект в массив ключей, чтобы можно было использовать .map    
    let tagsArray = Object.keys(this.state.formatСommand);

    let tagList = tagsArray.map((elem, index) => {
      return (
        <Button
          key={index}
          param={this.state}
          clickEvent={this.setTag}
          text={elem}
          name={elem}
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