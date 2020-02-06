// actionCreators Генераторы экшенов

import {
  UPD_MAIN_STORE,
} from './actionTypes';

/*
 * генераторы экшенов
 */

 // обновить статусы
export function updStates(data) {
  return {
    type: UPD_MAIN_STORE,
    value: {
      group: 'states',
      name: data.name,
      value: data.value
    }
  }
}

// обновить стили
export function updStyles(data) {
  return {
    type: UPD_MAIN_STORE,
    value: {
      group: 'styles',
      name: data.name,
      value: data.value
    }
  }
}

// обновить размеры
export function updSizes(data) {
  return {
    type: UPD_MAIN_STORE,
    value: {
      group: 'sizes',
      name: data.name,
      value: data.value
    }
  }
}


// обновить данные
export function updStore(value) {
  return { type: UPD_MAIN_STORE, value }
}