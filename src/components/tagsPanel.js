import React from "react";

import IconButton from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import * as IconsLib from "@material-ui/icons";
import Divider from '@material-ui/core/Divider';
import Tabs from '@material-ui/core/Tabs';

import { getSelectionRange } from '../functions/getSelectionRange';
import { setAttributeForSelectedText } from '../functions/setAttributeForSelectedText';

import { updStates, updSelectedText } from '../actions/actionCreators';
import { connect } from 'react-redux';


import {
  formatCommand_clear,
  formatCommand_bgcolor,
  formatCommand_color,
  formatCommand_link,
  formatCommand_uppercase,
  formatCommand_lowercase,
} from "../vars";


const mapStateToProps = (state) => {
  return {
    tabActive: +state.states.tabActive,
    tagParameters: state.tagParameters,
    bgcolor: state.styles.bgcolor,
    color: state.styles.color,
    selectedText: state.selectedText,

  }
}

// настройка тегов
class TagsPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  showDialogLink = (selectedText) => {
    updStates('dialogLink');
    updSelectedText(selectedText);
  }

  // установить тег (форматирование текста)
  setTag = (group, tag) => {

    // ничего не делать, если это не первая вкладка
    if (this.props.tabActive !== 0) return false;

    let command = this.props.tagParameters[group][tag].command; // команды, прописанные для этого тега

    // если команды для этого тега существуют
    if (command) {
      // *** document.execCommand('Название команды', false, значение (если требуется));
      document.execCommand(command[0], command[1], command[2].toUpperCase());
    }

    // если команды для этого тега НЕ существуют
    else {
      // цвет фона
      if (tag === formatCommand_bgcolor) {
        document.execCommand('hiliteColor', false, this.props.bgcolor);

        // цвет текста
      } else if (tag === formatCommand_color) {
        document.execCommand('styleWithCSS', false, 'true');
        document.execCommand('foreColor', false, this.props.color);
        document.execCommand('styleWithCSS', false, 'false');
      }

      // ссылка
      else if (tag === formatCommand_link) {
        let selectionRange = getSelectionRange(); // записать выделенный текст

        // если есть выделенный текст
        if (selectionRange.toString().length > 0) this.showDialogLink(selectionRange); // вызвать модальное окно ввода url
      }

      // очистка формата
      else if (tag === formatCommand_clear) {
        document.execCommand('removeFormat', false, '');
        document.execCommand('unlink', false, '');

        this.clearFormat();
      }

      // uppercase
      else if (tag === formatCommand_uppercase) {
        setAttributeForSelectedText(6, 'text-transform', 'uppercase');
      }

      // lowercase
      else if (tag === formatCommand_lowercase) {
        setAttributeForSelectedText(6, 'text-transform', 'lowercase');
      }
    }
  }

  //  очистить формат, удалив родительский тег
  clearFormat = () => {
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
      if (select.rangeCount > 0) {
        // записать выделенный текст
        container = select.getRangeAt(0).startContainer.parentNode;
      }
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
    let tagParameters = this.props.tagParameters;
    let groupsTagArray = Object.keys(tagParameters);

    let groupsTagList = groupsTagArray.map((group, groupIndex) => {

      let groupTags = tagParameters[group];
      let groupTagKeys = Object.keys(groupTags);

      let countItems = 0; // к-во элементов в списке

      let tagList = groupTagKeys.map((tag, index) => {
        let cuttentTag = tagParameters[group][tag];

        if (cuttentTag.materialize) {
          let iconName = cuttentTag.materialize.iconName;
          let Icon = IconsLib[iconName];

          if (cuttentTag.selected) {
            countItems++;

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
          }
        };
      });

      // если в списке есть элементы
      if (countItems) {
        return (
          <React.Fragment key={groupIndex}>
            <Box
              component="ul"
              aria-label="ul items"
              className={"tag-list clear-list tag-list"}>
              {tagList}
            </Box>
            {/* После последнего элемента не добавлять черту */}
            {(groupsTagArray.length - 1 !== groupIndex) &&
              <Box><Divider orientation="vertical" /></Box>
            }
          </React.Fragment >
        );
      }

      countItems = 0; // обнулить счётчик элементов списка
    });


    return (
      <Tabs
        aria-label="outlined primary button li group"
        className={"tag-list tag-list-wp clear-list scrollbar--center"}
        orientation="horizontal"
        variant="scrollable"
        value={0}
      >
        {groupsTagList}
      </Tabs>

    )
  }
}



export default connect(mapStateToProps)(TagsPanel);