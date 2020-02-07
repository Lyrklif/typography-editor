
// Редюсер (reducer) — это чистая функция, которая принимает предыдущее 
// состояние и экшен (state и action) и возвращает следующее состояние (новую версию предыдущего).

// import { startingValue } from '../startingValue';

import {
  UPD_MAIN_STORE,
  UPD_TEXT,
  UPD_SELECTED_TEXT,
  UPD_TAG_PARAMETERS,
} from '../actions/actionTypes';

export default (state, action) => {
  switch (action.type) {
    // изменить какой-то из параметров
    case UPD_MAIN_STORE:
      // console.log('UPD_MAIN_STORE', action.value.value);
      return Object.assign({}, state, {
        [action.value.group]: {
          ...state[action.value.group],
          [action.value.name]: action.value.value ? action.value.value : !state.states[action.value.name]
        }
      })
    // изменить текст
    case UPD_TEXT:
      return Object.assign({}, state, {
        'html': action.value
      })
    // изменить выделенный текст
    case UPD_SELECTED_TEXT:
      return Object.assign({}, state, {
        'selectedText': action.value
      })
    // изменить выделенный текст
    case UPD_TAG_PARAMETERS:
      return Object.assign({}, state, {
        'tagParameters': action.value
      })
    default:
      return state
  }
}