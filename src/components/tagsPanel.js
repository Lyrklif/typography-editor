import React from "react";

import Button from "./button";

import IconButton from "@material-ui/core/Button";
import * as IconsLib from "@material-ui/icons";

import {
  formatCommand_clear,
  formatCommand_bgcolor,
  formatCommand_color,
  formatCommand_link
} from "../vars";

// настройка тегов
export default class TagsPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.param;

    this.showDialogLink = props.showDialogLink;
    this.setTag = this.setTag.bind(this);
    this.clearFormat = this.clearFormat.bind(this);
  }

  // установить тег (форматирование текста)
  setTag(e) {
    e.preventDefault();

    // ничего не делать, если это не первая вкладка
    if (!this.props.editAllowed) return false;

    let tag = e.target.name; // тег, который надо установить
    let commands = this.state.tagParameters[tag].command; // команды, прописанные для этого тега

    // если команды для этого тега существуют
    if (commands) {
      // применить все заданные команды из массива
      for (let i = 0; i < commands.length; i++) {
        // *** document.execCommand('Название команды', false, значение (если требуется));

        // если нужно вводить адрес ссылки
        if (tag === formatCommand_link) {
          // this.showDialogLink();

          let href = prompt("Введите путь для ссылки:");
          if (href) {
            document.execCommand(commands[i][0], commands[i][1], href);
          }

          // если нужно выбрать цвет фона
        } else if (tag === formatCommand_bgcolor) {
          document.execCommand(
            commands[i][0],
            commands[i][1],
            this.props.param.styles.bgcolor
          );

          // если нужно выбрать цвет текста
        } else if (i === 1 && tag === formatCommand_color) {
          document.execCommand(
            commands[i][0],
            commands[i][1],
            this.props.param.styles.color
          );

          // [default] просто стилизовать текст
        } else {
          document.execCommand(
            commands[i][0],
            commands[i][1],
            commands[i][2].toUpperCase()
          );
        }
      }

      // если нужно очистить формат
      if (tag === formatCommand_clear) {
        this.clearFormat();
      }

      // если команды для этого тега НЕ существуют
    } else {
      console.log(
        "Правила форматирования для этого тега не прописаны.\nСделайте это в файле startingValue.js"
      );
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
    if (container.nodeName !== "DIV" && container.nodeName !== "LI") {
      container.outerHTML = container.innerHTML; // удалить родительский тег
    }
  }

  render() {
    // преобразовать объект в массив ключей, чтобы можно было использовать .map
    let tagsArray = Object.keys(this.state.tagParameters);

    let tagList = tagsArray.map((elem, index) => {
      if (this.state.tagParameters[elem].materialize) {
        let iconName = this.state.tagParameters[elem].materialize.iconName;
        let Icon = IconsLib[iconName];

        return (
          <li>
            <IconButton
              key={index}
              color="primary"
              aria-label={this.state.tagParameters[elem].materialize.title}
              title={this.state.tagParameters[elem].materialize.title}
              name={elem}
              onClick={this.setTag}
            >
              <Icon fontSize="medium" />
            </IconButton>
          </li>
        );
      }
    });

    return <ul className={"tag-list clear-list"}>{tagList}</ul>;
  }
}
