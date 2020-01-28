import React from "react";

import IconButton from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import * as IconsLib from "@material-ui/icons";
import { makeStyles, withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';


import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import FormatColorFillIcon from '@material-ui/icons/FormatColorFill';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';



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

    // this.state = props.param;

    this.showDialogLink = this.props.showDialogLink;
    this.setTag = this.setTag.bind(this);
    this.clearFormat = this.clearFormat.bind(this);
  }

  // установить тег (форматирование текста)
  setTag(group, tag) {

    // ничего не делать, если это не первая вкладка
    if (!this.props.editAllowed) return false;

    let commands = this.props.param.tagParameters[group][tag].command; // команды, прописанные для этого тега

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
    let tagParameters = this.props.param.tagParameters;
    let groupsTagArray = Object.keys(tagParameters);

    let groupsTagList = groupsTagArray.map((group, index0) => {

      let groupTags = tagParameters[group];
      let groupTagKeys = Object.keys(groupTags);

      let tagList = groupTagKeys.map((tag, index) => {
        let cuttentTag = tagParameters[group][tag];

        if (cuttentTag.materialize) {
          let iconName = cuttentTag.materialize.iconName;
          let Icon = IconsLib[iconName];

          return (
            <li key={index}>
              <IconButton
                color="primary"
                size="small"
                aria-label={cuttentTag.materialize.title}
                title={cuttentTag.materialize.title}
                name={tag}
                onClick={() => this.setTag(group, tag)}
              >
                <Icon />
              </IconButton>
            </li>
          );

        };

      });
      return (
        <Box
          key={index0}
          component="li"
          aria-label="li item"
          className={"tag-list clear-list"}
        >
          <Box
            component="ul"
            aria-label="ul items"
            className={"tag-list clear-list"}>
            {tagList}
          </Box>
          {/* После последнего элемента не добавлять черту */}
          {(groupsTagArray.length - 1 !== index0) &&
            <Divider orientation="vertical" />
          }
        </Box>
      );
    });


    return (
      <Box
        component="ul"
        aria-label="outlined primary button li group"
        className={"tag-list tag-list-wp clear-list"}
      >
        {groupsTagList}
      </Box>
    )
  }
}
