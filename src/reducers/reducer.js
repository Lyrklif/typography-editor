
// Редюсер (reducer) — это чистая функция, которая принимает предыдущее 
// состояние и экшен (state и action) и возвращает следующее состояние (новую версию предыдущего).

import { startingValue } from '../startingValue';

import {
  UPD_MAIN_STORE,
  STATES
} from '../actions/actionTypes';

export default (state = startingValue, action) => {
  switch (action.type) {
    case UPD_MAIN_STORE:
      return Object.assign({}, state, {
        [action.value.group]: {
          ...state[action.value.group],
          [action.value.name]: action.value.value ? action.value.value : !state.states[action.value.name]
        }
      })
    default:
      return state
  }
}