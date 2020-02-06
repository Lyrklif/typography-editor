// sanitize

import sanitizeHtml from "sanitize-html";
import pretty from 'pretty';

import mainStore from '../store/mainStore';
import reducer from '../reducers/reducer';
import { createStore } from "redux";
import { connect, Provider } from "react-redux";

import { updStore, updStates, updSizes, updStyles, updText } from '../actions/actionCreators';

// записать новый текст, удалив неразрешённые теги
const sanitize = () => {
  let editableBlock = document.querySelector(".content"); // блок, текст в котором можно редактировать
  let text = editableBlock.innerHTML; // текст вместе с тегами

  // если текст изменился
  if (text !== mainStore.getState().html) {
    let prettyText = pretty(text); // beautifying HTML

    // записать новую версию текста, применив настройки (удалить пустые теги, заменить символы и пр.)
    updText(sanitizeHtml(prettyText, mainStore.getState().sanitizeParam));
  }
}

export default sanitize;