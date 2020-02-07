// actionCreators Генераторы экшенов
import mainStore from '../store/mainStore';

import {
  UPD_MAIN_STORE,
  UPD_TEXT,
  UPD_SELECTED_TEXT,
  UPD_TAG_PARAMETERS,
} from './actionTypes';

/*
 * генераторы экшенов
 */

// обновить статусы
export function updStates(name, value) {
  updStore({
    group: 'states',
    name: name,
    value: value
  });
}

// обновить стили
export function updStyles(name, value) {
  updStore({
    group: 'styles',
    name: name,
    value: value
  });
}

// обновить размеры
export function updSizes(name, value) {
  updStore({
    group: 'sizes',
    name: name,
    value: value
  });
}


// обновить данные
export function updStore(value) {
  mainStore.dispatch({ type: UPD_MAIN_STORE, value });
}

// обновить данные
export function updText(value) {
  mainStore.dispatch({ type: UPD_TEXT, value });
}

// обновить выделенный текст
export function updSelectedText(value) {
  mainStore.dispatch({ type: UPD_SELECTED_TEXT, value });
}

// обновить параметры тегов
export function updTagParameters(value) {
  mainStore.dispatch({ type: UPD_TAG_PARAMETERS, value });
}